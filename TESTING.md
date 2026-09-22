# 0.7.0 构建输入分析验证

本轮命令：npm ci --ignore-scripts；moon fmt/info/check；moon test --target js 和 --target wasm-gc；moon build --target js 后刷新 web/engine.mjs；node --test tools/test-context.mjs；node examples/run-context.mjs；旧 tools/test-impact.mjs、test-report.mjs、test-cli.mjs、test-demo.mjs 回归。实际执行及新归档复验见 evidence/review-goal-20260923/VALIDATION.json 和本轮交接包机器清单。

独立语义验证使用 Go1.27.1，运行时仅用于测试。进入 tools/context-reference 执行 `go mod download`，以 `GOOS=js GOARCH=wasm` 构建 `go build -o oracle.wasm .`。GOOS=js 的 filepath 分隔符为 /，避免 Windows Go 混入另一套语义。设置 CONTEXT_ORACLE_WASM 为该绝对路径、GO_WASM_EXEC_NODE 为 Go SDK 中 lib/wasm/wasm_exec_node.js，再从仓库根运行 `node tools/test-context-reference.mjs`。例子与 oracle 输入均为本项目原创；结果存 context-reference.json。3,318 COPY 对照、1,069 受支持 ignore 对照无差异；7 个拒绝项单列，不算一致匹配。

Go SDK 下载地址、发布 SHA256、本机文件 SHA256见 go-provenance.json；Moby模块hash见 tools/context-reference/go.sum。本机 proxy.golang.org 不通，改用 GOPROXY=direct/GOSUMDB=off 获取 Git 源码；哈希是该来源的内容锁定，不声称当次已在线验证公共 sumdb。

公开源码验证：只读克隆 https://github.com/docker/getting-started ，checkout `94d4031393bf8ebfd38aae640910f9435579d76b` 后 git archive 解压到新目录，不带 .git/未跟踪文件。设置 PUBLIC_DOCKER_CONTEXT 指向解压目录，运行 `node tools/test-context-public.mjs`。目标 app-zip-creator 闭包 [1,2,3]；app/src/index.js 影响 [1,2,3,5,6]，requirements.txt 影响 [0,4,5,6]；依据固定 Dockerfile 人工核对集合，脚本实际断言。完整输出在 public-context.json。未执行 Docker build，不是 BuildKit 动态结果对照，也不是用户部署。

宿主当前在 Windows/Node24 实跑，CI 配置追加 npm ci 和新工作流测试；未声称远端 CI 已通过。Linux COPY/ignore 语义通过独立 Go js/wasm 参考核对，不能推导所有操作系统 I/O 已验收。

---

## 历史 linter 验证记录（以下计数/远端状态只属于当时版本）

# Validation contract — 0.4.0

Run `./verify.ps1 -MoonPath /absolute/path/to/moon.exe`. The required local sequence is fmt, info, warning-free check, explicit Wasm-GC and JS public tests, JS build, example, browser-engine smoke test, JSON/stage/CLI checks, stored independent reference comparison, nine runtime/CLI groups, 307 bounded malformed inputs and the local example benchmark. Nothing is uploaded. CI is prepared but has not run remotely.

The public suite has 16 groups, including 173 golden inputs from official Hadolint and focused variable/configuration/shell cases. Golden assertions compare owned rule code, instruction line and default severity, not message wording. Variables additionally cover the simultaneous ENV assignment example and ARG scope described in the [Dockerfile reference](https://docs.docker.com/reference/dockerfile/). No real Docker build was executed and no base-image metadata was fetched.

## Independent reference reproduction

`tools/reference-cases.py` generates 192 original inputs. Obtain [Hadolint v2.15.1](https://github.com/hadolint/hadolint/releases/tag/v2.15.1) and verify it using its official checksums.sha256. The Linux x86_64 binary used here is 55,661,096 bytes with SHA256 `c7187db94eeeeca956519a6af171adc31453941a1e777961f6e680f697c8c507`.

The direct asset download timed out. The successful transport was the hadolint-bin 2.15.1 wheel on PyPI; only its binary was extracted, and that binary exactly matched the checksum independently obtained from the official release. Provenance is in evidence/binary-provenance.json. Production code does not import or execute Hadolint or the wheel. The GPL reference binary is outside this MIT repository; no upstream implementation/test code or binary is redistributed here.

On a host with Python and that executable:

```text
python tools/reference-cases.py
python tools/reference-oracle.py /absolute/path/to/verified/hadolint
node tools/compare-reference.mjs
python tools/generate-goldens.py
moon fmt
```

The oracle invokes the unmodified binary with an empty config, JSON output and controlled stdin. It retains all diagnostics. 192 total inputs yield 189 comparable rule outputs: 175 agree, 14 explicitly frozen behavior differences, zero unexplained differences. Three official DL1000 parser errors are excluded from rule equality and remain visible with the full input/output. The corpus contains seven SC findings, eight DL3066 findings and those three parser errors outside the owned-rule projection. The 46-rule projection is a stated test scope, not complete rule implementation coverage.

Differences are frozen by source SHA256 plus both expected outputs in tools/reference-differences.json. They do not count as matches. Regressions beyond those exact differences fail the comparison. The golden generator uses only comparable matching non-config cases, and regeneration followed by moon fmt must be idempotent. Three trusted-registry cases are checked by the JS/API/CLI path instead.

## Host and output checks

`node tools/test-runtime.mjs` exercises real CLI processes, multiple named files, threshold ordering, overrides, ignores, registry checks, actual build arguments, strict malformed UTF-8 rejection, 2 MiB input bounds, invalid flags/configuration, SARIF rule/location mapping and an independent Python ElementTree parse of escaped Checkstyle XML. It also drains a 507,133-byte variables result for 4,002 snapshots and checks the cumulative snapshot budget. Temporary files are removed.

SARIF output was also validated with Python jsonschema against the [OASIS SARIF 2.1.0 schema](https://github.com/oasis-tcs/sarif-spec/blob/main/sarif-2.1/schema/sarif-schema-2.1.0.json). The schema and example SHA256 values are recorded in evidence/sarif-schema-validation.json. This is a format check, not acceptance by a remote code-scanning product.

The static browser engine smoke test passed. A new real-browser acceptance session was not run for this increment; variable/configuration/reporting features are API/CLI interfaces. The benchmark is 5 warmups and 30 executions of the 78-byte documented example, with runtime/CPU recorded. It is not an upstream or large-corpus performance comparison. Cross-platform, long-running and memory/representative throughput validation remain open.

The final source/evidence fingerprint manifest is evidence/runtime-upgrade.json. Historical evidence and ZIP/Git bundles do not represent this commit unless explicitly regenerated. All commits are local, with no remote.
