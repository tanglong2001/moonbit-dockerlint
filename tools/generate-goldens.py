import json
from pathlib import Path
root=Path(__file__).resolve().parents[1]
report=json.loads((root/'evidence/hadolint-comparison.json').read_text())
owned=report['owned']
lines=['// Generated from checksum-verified Hadolint 2.15.1 black-box results.','///|','test "official Hadolint owned-rule golden cases" {',f'  let owned = {json.dumps(owned)}','  let cases : Array[(String, Array[String])] = [']
count=0
for row in report['cases']:
    if not row['match'] or row['config']:continue
    expected=sorted([f"{d['code']}:{d['line']}:{d['level']}" for d in row['reference'] if d['code'] in owned])
    lines.append(f"    ({json.dumps(row['source'])}, {json.dumps(expected)}),")
    count+=1
lines.extend(['  ]','  for fixture in cases {','    let actual = @dockerlint.check(fixture.0).filter(d => owned.contains(d.code)).map(d => d.code + ":" + d.line.to_string() + ":" + d.severity())','    actual.sort_by((a, b) => a.lexical_compare(b))','    assert_eq(actual, fixture.1)','  }','}'])
(root/'reference_golden_test.mbt').write_text('\n'.join(lines)+'\n',encoding='utf8')
print(count,'golden cases')
