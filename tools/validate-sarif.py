"""Optional independent format validation; requires Python jsonschema."""
import sys,json,hashlib,urllib.request
from pathlib import Path
import jsonschema
root=Path(__file__).resolve().parents[1]
url='https://raw.githubusercontent.com/oasis-tcs/sarif-spec/main/sarif-2.1/schema/sarif-schema-2.1.0.json'
data=Path(sys.argv[1]).read_bytes() if len(sys.argv)>1 else urllib.request.urlopen(url,timeout=30).read()
artifact=root/'evidence/sarif-example.json'
jsonschema.Draft7Validator(json.loads(data)).validate(json.loads(artifact.read_text(encoding='utf8')))
record={'source':url,'schemaSHA256':hashlib.sha256(data).hexdigest(),'validator':'python jsonschema Draft7Validator','artifact':'evidence/sarif-example.json','artifactSHA256':hashlib.sha256(artifact.read_bytes()).hexdigest(),'valid':True}
(root/'evidence/sarif-schema-validation.json').write_text(json.dumps(record,indent=2)+'\n',encoding='utf8')
print('SARIF 2.1.0 schema passed')
