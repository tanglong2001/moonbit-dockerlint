// Generated from checksum-verified Hadolint 2.15.1 black-box results.

///|
test "official Hadolint owned-rule golden cases" {
  let owned = [
    "DL3000", "DL3001", "DL3002", "DL3003", "DL3004", "DL3006", "DL3007", "DL3008",
    "DL3009", "DL3011", "DL3012", "DL3013", "DL3014", "DL3015", "DL3016", "DL3018",
    "DL3019", "DL3020", "DL3021", "DL3023", "DL3024", "DL3025", "DL3026", "DL3027",
    "DL3028", "DL3029", "DL3030", "DL3032", "DL3033", "DL3034", "DL3035", "DL3036",
    "DL3037", "DL3038", "DL3040", "DL3041", "DL3042", "DL3043", "DL3044", "DL3047",
    "DL3062", "DL4000", "DL4003", "DL4004", "DL4005", "DL4006",
  ]
  let cases : Array[(String, Array[String])] = [
    (
      "FROM ubuntu:24.04\nRUN apt-get install curl",
      ["DL3008:2:warning", "DL3014:2:warning", "DL3015:2:info"],
    ),
    (
      "FROM ubuntu:24.04\nRUN apt-get install -y curl=1.2 --no-install-recommends && rm -rf /var/lib/apt/lists/*",
      [],
    ),
    ("FROM ubuntu:24.04\nRUN apt-get update", ["DL3009:2:info"]),
    ("FROM ubuntu:24.04\nRUN apt-get update && rm -rf /var/lib/apt/lists/*", []),
    ("FROM ubuntu:24.04\nRUN apt-get install -qq curl=1", ["DL3015:2:info"]),
    (
      "FROM ubuntu:24.04\nRUN apt-get install --assume-yes --no-install-recommends curl=1",
      [],
    ),
    (
      "FROM ubuntu:24.04\nRUN apt-get install -y -o A=B curl=1",
      ["DL3015:2:info"],
    ),
    ("FROM ubuntu:24.04\nRUN apt install curl", ["DL3027:2:warning"]),
    (
      "FROM ubuntu:24.04\nRUN apk add curl",
      ["DL3018:2:warning", "DL3019:2:info"],
    ),
    ("FROM ubuntu:24.04\nRUN apk add --no-cache curl=1", []),
    ("FROM ubuntu:24.04\nRUN apk --no-cache add curl=1", []),
    (
      "FROM ubuntu:24.04\nRUN apk add --no-cache --virtual .build-deps gcc=1",
      [],
    ),
    ("FROM ubuntu:24.04\nRUN apk add --no-cache curl~1", []),
    (
      "FROM ubuntu:24.04\nRUN pip install requests",
      ["DL3013:2:warning", "DL3042:2:warning"],
    ),
    ("FROM ubuntu:24.04\nRUN pip3 install --no-cache-dir requests==2.0", []),
    (
      "FROM ubuntu:24.04\nRUN python3 -m pip install requests",
      ["DL3013:2:warning", "DL3042:2:warning"],
    ),
    (
      "FROM ubuntu:24.04\nRUN pip install -r requirements.txt --no-cache-dir",
      [],
    ),
    (
      "FROM ubuntu:24.04\nRUN pip install --no-cache-dir --user requests",
      ["DL3013:2:warning"],
    ),
    ("FROM ubuntu:24.04\nRUN pip install --no-cache-dir ./local", []),
    ("FROM ubuntu:24.04\nRUN pip install --no-cache-dir -e .", []),
    (
      "FROM ubuntu:24.04\nRUN pip install --index-url https://example.test/simple requests==2 --no-cache-dir",
      [],
    ),
    (
      "FROM ubuntu:24.04\nRUN pip install --no-cache-dir https://example.test/a.whl",
      [],
    ),
    ("FROM ubuntu:24.04\nRUN pip install --no-cache-dir requests~=2", []),
    ("FROM ubuntu:24.04\nRUN npm install lodash", ["DL3016:2:warning"]),
    ("FROM ubuntu:24.04\nRUN npm install lodash@1", []),
    ("FROM ubuntu:24.04\nRUN npm install @scope/pkg", ["DL3016:2:warning"]),
    ("FROM ubuntu:24.04\nRUN npm install @scope/pkg@1", []),
    ("FROM ubuntu:24.04\nRUN npm ci", []),
    ("FROM ubuntu:24.04\nRUN npm install", []),
    ("FROM ubuntu:24.04\nRUN npm install ./local", []),
    ("FROM ubuntu:24.04\nRUN npm install git+https://example.test/repo#abc", []),
    ("FROM ubuntu:24.04\nRUN gem install rake", ["DL3028:2:warning"]),
    ("FROM ubuntu:24.04\nRUN gem install rake -v 1", []),
    ("FROM ubuntu:24.04\nRUN gem install rake:1", []),
    (
      "FROM ubuntu:24.04\nRUN yum install curl",
      ["DL3030:2:warning", "DL3032:2:warning", "DL3033:2:warning"],
    ),
    ("FROM ubuntu:24.04\nRUN yum install -y curl-1.2 && yum clean all", []),
    (
      "FROM ubuntu:24.04\nRUN yum install -y curl2",
      ["DL3032:2:warning", "DL3033:2:warning"],
    ),
    (
      "FROM ubuntu:24.04\nRUN dnf install curl",
      ["DL3038:2:warning", "DL3040:2:warning", "DL3041:2:warning"],
    ),
    ("FROM ubuntu:24.04\nRUN dnf -y install curl-1.2 && dnf clean all", []),
    (
      "FROM ubuntu:24.04\nRUN zypper install curl",
      ["DL3034:2:warning", "DL3036:2:warning", "DL3037:2:warning"],
    ),
    (
      "FROM ubuntu:24.04\nRUN zypper --non-interactive install curl=1 && zypper clean",
      [],
    ),
    ("FROM ubuntu:24.04\nRUN zypper dist-upgrade", ["DL3035:2:warning"]),
    (
      "FROM ubuntu:24.04\nRUN go install example.test/tool",
      ["DL3062:2:warning"],
    ),
    ("FROM ubuntu:24.04\nRUN go install example.test/tool@v1", []),
    ("FROM ubuntu:24.04\nRUN go install ./cmd/tool", []),
    ("FROM ubuntu:24.04\nRUN wget https://example.test/a", ["DL3047:2:info"]),
    ("FROM ubuntu:24.04\nRUN wget -q https://example.test/a", []),
    (
      "FROM ubuntu:24.04\nRUN wget --progress=dot:giga https://example.test/a",
      [],
    ),
    ("FROM ubuntu:24.04\nRUN cd /app && echo ok", ["DL3003:2:warning"]),
    ("FROM ubuntu:24.04\nRUN echo ok && cd /app", ["DL3003:2:warning"]),
    ("FROM ubuntu:24.04\nRUN sudo apt-get update", ["DL3004:2:error"]),
    ("FROM ubuntu:24.04\nRUN service foo start", ["DL3001:2:info"]),
    ("FROM ubuntu:24.04\nRUN ln -s /bin/bash /bin/sh", ["DL4005:2:warning"]),
    ("FROM ubuntu:24.04\nRUN a | b", ["DL4006:2:warning"]),
    ("FROM ubuntu:24.04\nRUN set -o pipefail && a | b", ["DL4006:2:warning"]),
    ("FROM ubuntu:24.04\nRUN echo pipefail && a | b", ["DL4006:2:warning"]),
    ("FROM ubuntu:24.04\nRUN echo 'apt-get install curl | wget'", []),
    ("FROM ubuntu:24.04\nRUN echo apt-get install curl", []),
    (
      "FROM ubuntu:24.04\nRUN echo $(apt-get install curl)",
      ["DL3008:2:warning", "DL3014:2:warning", "DL3015:2:info"],
    ),
    (
      "FROM ubuntu:24.04\nRUN apt-get install curl > /tmp/log",
      ["DL3008:2:warning", "DL3014:2:warning", "DL3015:2:info"],
    ),
    (
      "FROM ubuntu:24.04\nRUN apt-get install curl 2>/tmp/log",
      ["DL3008:2:warning", "DL3014:2:warning", "DL3015:2:info"],
    ),
    (
      "FROM ubuntu:24.04\nRUN apt-get install 'curl=1'",
      ["DL3014:2:warning", "DL3015:2:info"],
    ),
    (
      "FROM ubuntu:24.04\nRUN apt-get install \"$PACKAGES\"",
      ["DL3008:2:warning", "DL3014:2:warning", "DL3015:2:info"],
    ),
    (
      "FROM ubuntu:24.04\nRUN echo \"$(apt-get install curl)\"",
      ["DL3008:2:warning", "DL3014:2:warning", "DL3015:2:info"],
    ),
    ("FROM ubuntu:24.04\nRUN echo '$(apt-get install curl)'", []),
    (
      "FROM ubuntu:24.04\nRUN echo `pip install requests`",
      ["DL3013:2:warning", "DL3042:2:warning"],
    ),
    (
      "FROM ubuntu:24.04\nRUN apt-get install -y --no-install-recommends curl=1 2>/tmp/log",
      [],
    ),
    (
      "FROM ubuntu:24.04\nRUN echo $(echo $(apk add curl))",
      ["DL3018:2:warning", "DL3019:2:info"],
    ),
    ("FROM ubuntu:24.04\nRUN echo $((1<<2))", []),
    ("FROM ubuntu:24.04\nRUN echo ok # apt-get install curl", []),
    ("FROM ubuntu:24.04\nRUN echo \"a|b\"", []),
    ("FROM ubuntu:24.04\nRUN a || b", []),
    (
      "FROM ubuntu:24.04\nRUN apt-get install curl",
      ["DL3008:2:warning", "DL3014:2:warning", "DL3015:2:info"],
    ),
    (
      "FROM ubuntu:24.04\nRUN command apt-get install curl",
      ["DL3008:2:warning", "DL3014:2:warning", "DL3015:2:info"],
    ),
    (
      "FROM ubuntu:24.04\nRUN exec apt-get install curl",
      ["DL3008:2:warning", "DL3014:2:warning", "DL3015:2:info"],
    ),
    (
      "FROM ubuntu:24.04\nRUN if true; then apt-get install curl; fi",
      ["DL3008:2:warning", "DL3014:2:warning", "DL3015:2:info"],
    ),
    ("FROM ubuntu:24.04\nRUN echo \"apt-get install curl\"", []),
    ("FROM ubuntu:24.04\nRUN echo \"apt-get install curl\" && echo ok", []),
    ("FROM ubuntu:24.04\nRUN echo \"apt-get install curl\" ; echo ok", []),
    ("FROM ubuntu:24.04\nRUN echo \"apt-get install curl\" || true", []),
    (
      "FROM ubuntu:24.04\nRUN apk add curl",
      ["DL3018:2:warning", "DL3019:2:info"],
    ),
    (
      "FROM ubuntu:24.04\nRUN command apk add curl",
      ["DL3018:2:warning", "DL3019:2:info"],
    ),
    (
      "FROM ubuntu:24.04\nRUN exec apk add curl",
      ["DL3018:2:warning", "DL3019:2:info"],
    ),
    (
      "FROM ubuntu:24.04\nRUN if true; then apk add curl; fi",
      ["DL3018:2:warning", "DL3019:2:info"],
    ),
    ("FROM ubuntu:24.04\nRUN echo \"apk add curl\"", []),
    ("FROM ubuntu:24.04\nRUN echo \"apk add curl\" && echo ok", []),
    ("FROM ubuntu:24.04\nRUN echo \"apk add curl\" ; echo ok", []),
    ("FROM ubuntu:24.04\nRUN echo \"apk add curl\" || true", []),
    (
      "FROM ubuntu:24.04\nRUN pip install requests",
      ["DL3013:2:warning", "DL3042:2:warning"],
    ),
    (
      "FROM ubuntu:24.04\nRUN command pip install requests",
      ["DL3013:2:warning", "DL3042:2:warning"],
    ),
    (
      "FROM ubuntu:24.04\nRUN exec pip install requests",
      ["DL3013:2:warning", "DL3042:2:warning"],
    ),
    (
      "FROM ubuntu:24.04\nRUN if true; then pip install requests; fi",
      ["DL3013:2:warning", "DL3042:2:warning"],
    ),
    ("FROM ubuntu:24.04\nRUN echo \"pip install requests\"", []),
    ("FROM ubuntu:24.04\nRUN echo \"pip install requests\" && echo ok", []),
    ("FROM ubuntu:24.04\nRUN echo \"pip install requests\" ; echo ok", []),
    ("FROM ubuntu:24.04\nRUN echo \"pip install requests\" || true", []),
    ("FROM ubuntu:24.04\nRUN npm install lodash", ["DL3016:2:warning"]),
    (
      "FROM ubuntu:24.04\nRUN if true; then npm install lodash; fi",
      ["DL3016:2:warning"],
    ),
    ("FROM ubuntu:24.04\nRUN echo \"npm install lodash\"", []),
    ("FROM ubuntu:24.04\nRUN echo \"npm install lodash\" && echo ok", []),
    ("FROM ubuntu:24.04\nRUN echo \"npm install lodash\" ; echo ok", []),
    ("FROM ubuntu:24.04\nRUN echo \"npm install lodash\" || true", []),
    ("FROM ubuntu:24.04\nRUN gem install rake", ["DL3028:2:warning"]),
    ("FROM ubuntu:24.04\nRUN command gem install rake", ["DL3028:2:warning"]),
    ("FROM ubuntu:24.04\nRUN exec gem install rake", ["DL3028:2:warning"]),
    (
      "FROM ubuntu:24.04\nRUN if true; then gem install rake; fi",
      ["DL3028:2:warning"],
    ),
    ("FROM ubuntu:24.04\nRUN echo \"gem install rake\"", []),
    ("FROM ubuntu:24.04\nRUN echo \"gem install rake\" && echo ok", []),
    ("FROM ubuntu:24.04\nRUN echo \"gem install rake\" ; echo ok", []),
    ("FROM ubuntu:24.04\nRUN echo \"gem install rake\" || true", []),
    (
      "FROM ubuntu:24.04\nRUN yum install curl",
      ["DL3030:2:warning", "DL3032:2:warning", "DL3033:2:warning"],
    ),
    (
      "FROM ubuntu:24.04\nRUN command yum install curl",
      ["DL3030:2:warning", "DL3032:2:warning", "DL3033:2:warning"],
    ),
    (
      "FROM ubuntu:24.04\nRUN exec yum install curl",
      ["DL3030:2:warning", "DL3032:2:warning", "DL3033:2:warning"],
    ),
    (
      "FROM ubuntu:24.04\nRUN if true; then yum install curl; fi",
      ["DL3030:2:warning", "DL3032:2:warning", "DL3033:2:warning"],
    ),
    ("FROM ubuntu:24.04\nRUN echo \"yum install curl\"", []),
    ("FROM ubuntu:24.04\nRUN echo \"yum install curl\" && echo ok", []),
    ("FROM ubuntu:24.04\nRUN echo \"yum install curl\" ; echo ok", []),
    ("FROM ubuntu:24.04\nRUN echo \"yum install curl\" || true", []),
    (
      "FROM ubuntu:24.04\nRUN dnf install curl",
      ["DL3038:2:warning", "DL3040:2:warning", "DL3041:2:warning"],
    ),
    (
      "FROM ubuntu:24.04\nRUN command dnf install curl",
      ["DL3038:2:warning", "DL3040:2:warning", "DL3041:2:warning"],
    ),
    (
      "FROM ubuntu:24.04\nRUN exec dnf install curl",
      ["DL3038:2:warning", "DL3040:2:warning", "DL3041:2:warning"],
    ),
    (
      "FROM ubuntu:24.04\nRUN if true; then dnf install curl; fi",
      ["DL3038:2:warning", "DL3040:2:warning", "DL3041:2:warning"],
    ),
    ("FROM ubuntu:24.04\nRUN echo \"dnf install curl\"", []),
    ("FROM ubuntu:24.04\nRUN echo \"dnf install curl\" && echo ok", []),
    ("FROM ubuntu:24.04\nRUN echo \"dnf install curl\" ; echo ok", []),
    ("FROM ubuntu:24.04\nRUN echo \"dnf install curl\" || true", []),
    (
      "FROM ubuntu:24.04\nRUN zypper install curl",
      ["DL3034:2:warning", "DL3036:2:warning", "DL3037:2:warning"],
    ),
    (
      "FROM ubuntu:24.04\nRUN command zypper install curl",
      ["DL3034:2:warning", "DL3036:2:warning", "DL3037:2:warning"],
    ),
    (
      "FROM ubuntu:24.04\nRUN exec zypper install curl",
      ["DL3034:2:warning", "DL3036:2:warning", "DL3037:2:warning"],
    ),
    (
      "FROM ubuntu:24.04\nRUN if true; then zypper install curl; fi",
      ["DL3034:2:warning", "DL3036:2:warning", "DL3037:2:warning"],
    ),
    ("FROM ubuntu:24.04\nRUN echo \"zypper install curl\"", []),
    ("FROM ubuntu:24.04\nRUN echo \"zypper install curl\" && echo ok", []),
    ("FROM ubuntu:24.04\nRUN echo \"zypper install curl\" ; echo ok", []),
    ("FROM ubuntu:24.04\nRUN echo \"zypper install curl\" || true", []),
    ("FROM alpine", ["DL3006:1:warning"]),
    ("FROM alpine:latest", ["DL3007:1:warning"]),
    ("FROM scratch", []),
    ("FROM ubuntu:24.04 AS base\nFROM base", []),
    ("FROM --platform=linux/amd64 ubuntu:24.04", ["DL3029:1:warning"]),
    ("FROM ubuntu:24.04\nUSER root\nUSER 1000", []),
    ("FROM ubuntu:24.04\nUSER root", ["DL3002:2:warning"]),
    ("FROM ubuntu:24.04\nUSER root:root", ["DL3002:2:warning"]),
    ("FROM ubuntu:24.04\nUSER 0", ["DL3002:2:warning"]),
    ("FROM ubuntu:24.04\nUSER 0:1000", ["DL3002:2:warning"]),
    ("FROM ubuntu:24.04\nUSER 1000\nUSER root", ["DL3002:3:warning"]),
    ("FROM ubuntu:24.04\nUSER root\nUSER root", ["DL3002:3:warning"]),
    (
      "FROM ubuntu:24.04\nUSER root\nFROM scratch\nUSER root",
      ["DL3002:2:warning", "DL3002:4:warning"],
    ),
    ("FROM ubuntu:24.04\nEXPOSE 0 80/tcp 53/udp 65535", []),
    ("FROM ubuntu:24.04\nEXPOSE 65536", ["DL3011:2:error"]),
    ("FROM ubuntu:24.04\nEXPOSE 80-90", []),
    ("FROM ubuntu:24.04\nEXPOSE 90-80", []),
    ("FROM ubuntu:24.04\nEXPOSE $PORT", []),
    ("FROM ubuntu:24.04\nENV A=x B=$A", ["DL3044:2:error"]),
    ("FROM ubuntu:24.04\nENV A=x\nENV B=$A", []),
    ("FROM ubuntu:24.04\nENV A=x B=\"$A\"", ["DL3044:2:error"]),
    ("FROM ubuntu:24.04\nENV A=x\nENV A=y B=$A", []),
    (
      "FROM ubuntu:24.04\nHEALTHCHECK CMD true\nHEALTHCHECK CMD false",
      ["DL3012:3:error", "DL3025:2:warning", "DL3025:3:warning"],
    ),
    (
      "FROM ubuntu:24.04\nHEALTHCHECK NONE\nHEALTHCHECK CMD true",
      ["DL3012:3:error", "DL3025:3:warning"],
    ),
    (
      "FROM ubuntu:24.04\nSHELL [\"/bin/bash\",\"-o\",\"pipefail\",\"-c\"]\nRUN a | b",
      [],
    ),
    (
      "FROM ubuntu:24.04\nSHELL [\"/bin/bash\",\"-c\"]\nRUN a | b",
      ["DL4006:3:warning"],
    ),
    (
      "FROM ubuntu:24.04\nRUN <<EOF\napt-get install curl\nEOF",
      ["DL3008:2:warning", "DL3014:2:warning", "DL3015:2:info"],
    ),
    ("FROM ubuntu:24.04\nRUN cat <<EOF\napt-get install curl\nEOF", []),
    (
      "FROM ubuntu:24.04\nRUN <<'EOF'\npip install requests\nEOF",
      ["DL3013:2:warning", "DL3042:2:warning"],
    ),
    (
      "FROM ubuntu:24.04\nRUN --mount=type=cache,target=/var/cache/apt apt-get install curl",
      ["DL3008:2:warning", "DL3014:2:warning", "DL3015:2:info"],
    ),
    (
      "FROM ubuntu:24.04\nRUN [\"apt-get\",\"install\",\"curl\"]",
      ["DL3008:2:warning", "DL3014:2:warning", "DL3015:2:info"],
    ),
    ("FROM ubuntu:24.04\nADD file /out/", ["DL3020:2:error"]),
    ("FROM ubuntu:24.04\nADD archive.tar.gz /out/", []),
    ("FROM ubuntu:24.04\nADD file /out.tar.gz", ["DL3020:2:error"]),
    ("FROM ubuntu:24.04\nCOPY a b /out", ["DL3021:2:error"]),
    ("FROM ubuntu:24.04\nCMD [\"one\"]\nCMD [\"two\"]", ["DL4003:3:warning"]),
    (
      "FROM ubuntu:24.04\nENTRYPOINT [\"one\"]\nENTRYPOINT [\"two\"]",
      ["DL4004:3:error"],
    ),
    ("# hadolint ignore=DL3007\nFROM ubuntu:latest", []),
    (
      "# hadolint global ignore=DL3008,DL3009,DL3014,DL3015\nFROM ubuntu:24.04\nRUN apt-get install curl",
      [],
    ),
  ]
  for fixture in cases {
    let actual = @dockerlint.check(fixture.0)
      .filter(d => owned.contains(d.code))
      .map(d => d.code + ":" + d.line.to_string() + ":" + d.severity())
    actual.sort_by((a, b) => a.lexical_compare(b))
    assert_eq(actual, fixture.1)
  }
}
