"""Run on the host containing the checksum-verified official Hadolint binary."""
import sys,json,subprocess,hashlib,os
from pathlib import Path
binary=Path(sys.argv[1]);root=Path(__file__).resolve().parents[1]
digest=hashlib.sha256(binary.read_bytes()).hexdigest()
if digest!='c7187db94eeeeca956519a6af171adc31453941a1e777961f6e680f697c8c507':
    raise ValueError('Expected checksum-verified official Hadolint 2.15.1 Linux x86_64 binary')
rows=json.loads((root/'tools/reference-cases.json').read_text())
version=subprocess.check_output([str(binary),'--version'],text=True).strip()
for row in rows:
    args=[str(binary),'--format','json','--no-color','--config',os.devnull]
    for registry in row['config'].get('trustedRegistries',[]):args.extend(['--trusted-registry',registry])
    r=subprocess.run(args+['-'],input=row['source'],text=True,capture_output=True,timeout=10)
    if r.returncode not in (0,1):raise RuntimeError((row['name'],r.stderr))
    row['reference']=json.loads(r.stdout)
    row['referenceExit']=r.returncode
out={'version':version,'binarySHA256':digest,'cases':rows}
(root/'evidence/hadolint-reference.json').write_text(json.dumps(out,indent=2)+'\n',encoding='utf8')
print(version,len(rows),'cases recorded')
