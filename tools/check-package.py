"""Check the actual MoonBit package, including its hidden context fixture.

Runs only local packaging and an isolated npm install; never publishes a package.
Requires Python 3.10+, MoonBit, Node.js and npm on PATH.
"""
from pathlib import Path
import argparse
import hashlib
import json
import os
import re
import shutil
import subprocess
import tempfile
import zipfile


def run(command, cwd):
    result = subprocess.run(command, cwd=cwd, stdout=subprocess.PIPE,
                            stderr=subprocess.STDOUT, timeout=180)
    output = result.stdout.decode('utf-8', errors='replace')
    if result.returncode:
        raise RuntimeError(f'{Path(command[0]).name} failed ({result.returncode}):\n{output}')
    return output


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--archive', type=Path, help='Check an existing moon package ZIP')
    parser.add_argument('--receipt', type=Path, help='Write a local JSON receipt after success')
    args = parser.parse_args()
    root = Path(__file__).resolve().parents[1]
    node, npm = shutil.which('node'), shutil.which('npm')
    if not node or not npm:
        raise RuntimeError('Node.js and npm must be on PATH')
    archive = args.archive
    if archive is None:
        moon = shutil.which('moon')
        if not moon:
            raise RuntimeError('MoonBit must be on PATH')
        output = run([moon, 'package', '--frozen'], root)
        matches = re.findall(r'Package to ([^\r\n]+\.zip)', output)
        if len(matches) != 1:
            raise RuntimeError('Could not locate the ZIP reported by moon package')
        archive = Path(matches[0])
        if not archive.is_absolute():
            archive = root / archive
    archive = archive.resolve(strict=True)
    required = ['.moonbit-version', '.moonignore', 'examples/context/.dockerignore']
    with tempfile.TemporaryDirectory(prefix='dockerlint-package-check-') as temporary:
        extracted = Path(temporary).resolve()
        with zipfile.ZipFile(archive) as package:
            for member in package.infolist():
                path = (extracted / member.filename).resolve()
                if not path.is_relative_to(extracted):
                    raise RuntimeError('Package member escapes extraction directory')
                if (member.external_attr >> 16) & 0o170000 == 0o120000:
                    raise RuntimeError('Symlinks are not accepted in this package check')
            for name in required:
                if name not in package.namelist():
                    raise RuntimeError(f'Required package file missing: {name}')
                if package.read(name) != (root / name).read_bytes():
                    raise RuntimeError(f'Package file differs from checkout: {name}')
            package.extractall(extracted)
        run([npm, 'ci', '--ignore-scripts', '--registry=https://registry.npmjs.org'], extracted)
        output = run([node, 'examples/run-context.mjs'], extracted)
        report_path = Path(output.strip().splitlines()[-1]).resolve()
        # The example owns its own temp output; read its semantic check receipt.
        report = json.loads((report_path / 'report.json').read_text(encoding='utf-8'))
        if report.get('status') != 'pass':
            raise RuntimeError('Packaged context example did not pass')
    receipt = {
        'status': 'pass',
        'archiveSha256': hashlib.sha256(archive.read_bytes()).hexdigest(),
        'requiredFiles': required,
        'contextExample': report,
        'node': run([node, '--version'], root).strip(),
        'scope': 'Local MoonBit package extraction and context example; no Docker build or registry publication',
    }
    if args.receipt:
        args.receipt.parent.mkdir(parents=True, exist_ok=True)
        args.receipt.write_text(json.dumps(receipt, ensure_ascii=False, indent=2)+'\n', encoding='utf-8')
    print(json.dumps(receipt, ensure_ascii=False, indent=2))


if __name__ == '__main__':
    main()
