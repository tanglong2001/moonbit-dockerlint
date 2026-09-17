"""Original black-box cases; no upstream implementation or tests are copied."""
import json
from pathlib import Path

cases=[]
def add(name,body,config=None):
    cases.append(dict(name=name,source=body if body.startswith(('FROM','#','ARG')) else 'FROM ubuntu:24.04\n'+body,config=config or {}))

commands=[
 'apt-get install curl','apt-get install -y curl=1.2 --no-install-recommends && rm -rf /var/lib/apt/lists/*',
 'apt-get update','rm -rf /var/lib/apt/lists/* && apt-get update',
 'apt-get update && rm -rf /var/lib/apt/lists/*','apt-get install -qq curl=1',
 'apt-get install --assume-yes --no-install-recommends curl=1','apt-get install -y -o A=B curl=1',
 'apt install curl','apk add curl','apk add --no-cache curl=1','apk --no-cache add curl=1',
 'apk add --no-cache --virtual .build-deps gcc=1','apk add --no-cache curl~1',
 'pip install requests','pip3 install --no-cache-dir requests==2.0','python3 -m pip install requests',
 'pip install -r requirements.txt --no-cache-dir','pip install --no-cache-dir --user requests',
 'pip install --no-cache-dir ./local','pip install --no-cache-dir -e .',
 'pip install --index-url https://example.test/simple requests==2 --no-cache-dir',
 'pip install --no-cache-dir https://example.test/a.whl','pip install --no-cache-dir requests~=2',
 'npm install lodash','npm install lodash@1','npm install @scope/pkg','npm install @scope/pkg@1',
 'npm ci','npm install','npm install ./local','npm install git+https://example.test/repo#abc',
 'gem install rake','gem install rake -v 1','gem install rake:1',
 'yum install curl','yum install -y curl-1.2 && yum clean all','yum install -y curl2',
 'dnf install curl','dnf -y install curl-1.2 && dnf clean all',
 'zypper install curl','zypper --non-interactive install curl=1 && zypper clean','zypper dist-upgrade',
 'go install example.test/tool','go install example.test/tool@v1','go install ./cmd/tool',
 'wget https://example.test/a','wget -q https://example.test/a','wget --progress=dot:giga https://example.test/a',
 'cd /app && echo ok','echo ok && cd /app','sudo apt-get update','service foo start',
 'ln -s /bin/bash /bin/sh','a | b','set -o pipefail && a | b',
 'echo pipefail && a | b',"echo 'apt-get install curl | wget'",'echo apt-get install curl',
 'echo $(apt-get install curl)','env DEBIAN_FRONTEND=noninteractive apt-get install curl',
 '/usr/bin/apt-get install curl','apt-get install curl > /tmp/log',
 'apt-get install curl 2>/tmp/log',"apt-get install 'curl=1'",'apt-get install "$PACKAGES"',
 'echo "$(apt-get install curl)"', "echo '$(apt-get install curl)'", 'echo `pip install requests`',
 'apt-get install -y --no-install-recommends curl=1 2>/tmp/log',
 'echo $(echo $(apk add curl))', 'echo $((1<<2))',
 'echo ok # apt-get install curl', 'echo "a|b"', 'a || b',
]
for i,command in enumerate(commands): add(f'command-{i}', 'RUN '+command)
for manager,verb,pkg in [('apt-get','install','curl'),('apk','add','curl'),('pip','install','requests'),('npm','install','lodash'),('gem','install','rake'),('yum','install','curl'),('dnf','install','curl'),('zypper','install','curl')]:
 for wrapper in ['','command ','exec ','if true; then ','env X=1 ']:
  add(f'wrapper-{manager}-{wrapper}',f'RUN {wrapper}{manager} {verb} {pkg}'+('; fi' if wrapper.startswith('if') else ''))
 for suffix in ['', ' && echo ok', ' ; echo ok', ' || true']:
  add(f'quoted-{manager}-{suffix}',f'RUN echo "{manager} {verb} {pkg}"{suffix}')
for i,body in enumerate([
 'FROM alpine','FROM alpine:latest','FROM scratch','FROM ubuntu:24.04 AS base\nFROM base',
 'FROM --platform=linux/amd64 ubuntu:24.04','FROM ubuntu:24.04\nUSER root\nUSER 1000',
 'USER root','USER root:root','USER 0','USER 0:1000','USER 1000\nUSER root',
 'USER root\nUSER root','USER root\nFROM scratch\nUSER root',
 'EXPOSE 0 80/tcp 53/udp 65535','EXPOSE 65536','EXPOSE 80-90','EXPOSE 90-80','EXPOSE abc','EXPOSE 80/sctp','EXPOSE $PORT',
 'ENV A=x B=$A','ENV A=x\nENV B=$A','ENV A=x B="$A"',"ENV A=x B='$A'",'ENV A=x\nENV A=y B=$A',
 'HEALTHCHECK CMD true\nHEALTHCHECK CMD false','HEALTHCHECK NONE\nHEALTHCHECK CMD true',
 'SHELL ["/bin/bash","-o","pipefail","-c"]\nRUN a | b',
 'SHELL ["/bin/bash","-c"]\nRUN a | b',
 'RUN <<EOF\napt-get install curl\nEOF','RUN cat <<EOF\napt-get install curl\nEOF',
 'RUN <<\'EOF\'\npip install requests\nEOF',
 'RUN --mount=type=cache,target=/var/cache/apt apt-get install curl',
 'RUN ["apt-get","install","curl"]',
 'ADD file /out/','ADD archive.tar.gz /out/','ADD file /out.tar.gz','COPY a b /out',
 'CMD ["one"]\nCMD ["two"]','ENTRYPOINT ["one"]\nENTRYPOINT ["two"]',
 '# hadolint ignore=DL3007\nFROM ubuntu:latest',
 '# hadolint global ignore=DL3008,DL3009,DL3014,DL3015\nFROM ubuntu:24.04\nRUN apt-get install curl',
]): add(f'structure-{i}',body)
add('trusted-reject','FROM ghcr.io/example/tool:1',{'trustedRegistries':['docker.io']})
add('trusted-parent','FROM ubuntu:24.04 AS base\nFROM base',{'trustedRegistries':['docker.io']})
add('trusted-local','FROM localhost:5000/tool:1',{'trustedRegistries':['localhost:5000']})
Path(__file__).resolve().parent.joinpath('reference-cases.json').write_text(json.dumps(cases,indent=2)+'\n',encoding='utf8')
print(len(cases),'original cases')
