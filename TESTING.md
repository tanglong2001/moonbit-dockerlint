# 0.12.0 本地镜像配置接入验证（2026-09-30）

当前回执为 [LOCAL-CHECKS.json](evidence/profile-context-20260930/LOCAL-CHECKS.json)，每一步有原始输出及 SHA-256；以下旧章节保留原日期，不代表本次全部重跑。

固定 `moonc 0.10.14+7d59c7ec9`：格式、严格检查、JS 构建和接口生成通过；JS/WasmGC 核心各 **50/50**。新增六组核心合同用例覆盖精确传播、身份/平台/摘要拒绝、重复与非空触发器、字面与动态平台、自定义 ONBUILD、ENV 未知和可变 FROM。三组 Node 宿主套件合计 **22/22**，其中新 profile 套件 **7/7**；验证原始字节篡改、错误平台/重复身份/路径、伪造空摘要、JSON 大小写和重复 decoded-key、CLI 退出码与保守回退。重复 JSON 对象可能被 Go 合并、被 JS 覆盖的差异已用完整重算摘要链的反例覆盖。

原上下文示例、浏览器核心入口、源码比较的七项 CLI 检查及两个固定用例均通过。新 [Tempo 配置回放](evidence/profile-context-20260930/LOCAL-REPLAY-0.12.0.json) 验证五份原始 OCI 配置，并在前后两份 Dockerfile 得到：无配置 `[true,true,true]`；全部正确配置 `[false,false,true]`；缺 Alpine 配置 `[true,false,true]`；错误目标平台 `[true,true,true]`。只有全部正确资料的本地二进制路径影响为非保守、最终阶段，源码定位第 14 行。

源码变化独立重放仍保留第 5、11 行及 setup/最终两目标，见 [0.12.0 源回执](evidence/source-precision-20260929/LOCAL-REPLAY-0.12.0.json)。新流程复用固定 BuildKit v0.25.1 输出，未重新运行 BuildKit。二进制路径是 post-Make 清单模型，未构建 Tempo，也没有 Docker build、缓存、部署或采用结果。

复现：按 README 更新 JS 引擎后，运行 `node --test tools/test-context.mjs tools/test-context-expansion.mjs tools/test-image-profiles.mjs` 和 `node tools/run-profile-context.mjs --out evidence/profile-context-20260930/REPLAY.json`（新路径）。[CI 配置](.github/workflows/ci.yml) 新增 profile 套件及回放，但尚无本地候选提交的远端运行结果。离线包额外执行相同回放，防止源码目录成功而缺少发布文件。

离线包通过 14 份必需文档/夹具字节检查、解包上下文样例和两份 Tempo profile 回放；[包内执行回执](evidence/profile-context-20260930/PACKAGE-CHECK.json)。工作流通过 actionlint 1.7.12 静态检查。该包回执保留实际受测归档的 SHA-256；最后加入回执和调整文档后的交付归档散列记录在总交付清单中，代码载荷另作逐字节一致性核对。

# 0.8.0 展开与未知状态修复验证

本轮具体命令、退出码、核心与参考引擎 SHA256 在 evidence/expansion-20260923/VALIDATION.json。JS/WasmGC 各 30 项；context 宿主 7 组，展开 8 组；BuildKit 已知展开 98 一致、4 个未知策略差异明确单列，复现说明见 EXPANSION.md。Go/Moby COPY 与 ignore 对照、Docker 官方教程静态分析及原有 CLI/图/报告/引擎回归在当前引擎重新执行。

新 ZIP 的源码与 Git blob 逐文件核对；独立目录 npm ci、构建与受影响宿主回归的记录在交接包 ARTIFACTS.json。没有远端写入或远端 CI 运行。

以下是 0.7.0 的原始范围与更早记录，不将旧文件时间戳冒充本次执行。

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

当前0.9.0：`node tools/test-buildkit-closures.mjs`重放独立LLB输出；重新生成参考时在tools/closure-reference执行`go run . ../../examples/buildkit-closures/original.Dockerfile`，两个修改副本同理。Go模块锁固定版本；需联网下载依赖，无Docker daemon。证据为evidence/closures-20260927。

## 0.10.0 自动快照比较

本次通过 `moon check --target js`、`moon fmt`、`moon info`、`moon build --target js`；`moon test source_comparison_test.mbt --target js` 与 `--target wasm-gc` 各4组。`node tools/test-source-comparison.mjs` 通过固定BuildKit样例2组及文件CLI7项。此前参考引擎和其它核心检查保留原日期，没有重跑整套。回执：[source-comparison-20260927/LOCAL-CHECKS.json](evidence/source-comparison-20260927/LOCAL-CHECKS.json)。

## 0.10.1 local Tempo build-change review

本节仅记本地候选版。公开 `0.10.0` 的 CI 成功记录没有执行这里的核心修改或检查回放。输入是 Grafana Tempo AGPL-3.0 固定提交 `3f54f1c040a5c014a7f3acde22376060807178c6` 的 Dockerfile、`.dockerignore`、Makefile、完整未截断 git tree 和 commit 回执；所取镜像为固定 `linux/amd64` OCI index/manifest/config。Dockerfile 前后 SHA256 分别为 `cdd1928b8fd76be06251d2ee2a00163cd04c99e86ace1090648d6e45e7ffdd9e` 和 `72693daf717c08c0752e9d97d7a7bf60a21fef554110c0560c03b6f97c9e4379`；root `.dockerignore` 为 `5a55c351e9651776d20123c4daa380e5865bb14645beb9aae03aff67dbf4c01e`；完整镜像配置集为 `b4dc34d8f608c4f919e107fc71e1cafbca7fe493a20f6cdd6a0101f6414dd159`。

以下是 0.10.1 当时的作者本机生成记录（Windows 固定 Moon toolchain；WSL 使用已有 BuildKit 源码和 Go module cache，Go proxy 校验/下载关闭），不是当前候选的可执行复现步骤。这组 D: 与 Ubuntu-D 路径只在作者机器可用；当时的 Tempo 命令把 `--out` 放在 `evidence/tempo-docker-update-20260716/`，当前 runner 已限定输出至独立 `source-precision-20260929/` 并采用不覆盖语义，因此不要照搬旧输出路径。

```powershell
$env:MOON_HOME='D:\CodexLocal\ban\work\acceptance-20260928\moon'
$moon='D:\CodexLocal\ban\work\acceptance-20260928\moon\bin\moon.exe'
& $moon fmt --check
& $moon check --deny-warn
& $moon test --target js --deny-warn
& $moon test --target wasm-gc --deny-warn
& $moon build --target js --deny-warn
Copy-Item -LiteralPath '_build\js\debug\build\cmd\web\web.js' -Destination 'web\engine.mjs' -Force
node tools\test-context.mjs
node tools\test-buildkit-closures.mjs
node tools\prepare-buildarg-reference.mjs
wsl.exe -d Ubuntu-D -- bash -lc 'gofmt -w /mnt/d/CodexLocal/ban/outputs/repos/moonbit-dockerlint/tools/closure-reference/main.go && bash /mnt/d/CodexLocal/ban/outputs/repos/moonbit-dockerlint/tools/run-tempo-buildkit-reference.sh'
node tools\run-tempo-impact.mjs --out evidence/tempo-docker-update-20260716/LOCAL-REPLAY.json
& $moon package
```

可移植的最小回放：安装 Node.js 24 或更高版本，先在仓库根目录执行 `npm ci --ignore-scripts`（安装锁定的 `@balena/dockerignore` 1.0.2），再执行下面命令。回放读取随附的源快照、BuildKit v0.25.1 原始转换回执和配置 profile；回放过程不访问网络、不调用 Docker。输出路径须是一个尚不存在的新文件，不能覆盖现存回执。

```sh
node tools/run-tempo-impact.mjs --out evidence/tempo-docker-update-20260716/LOCAL-REPLAY.json
```

本次 `moon fmt --check`、`moon check --deny-warn`、JS 与 WasmGC 测试均通过，两个后端各 39/39；`node tools/test-context.mjs` 为 7/7；固定旧闭包回放断言 21 个目标组合、147 个影响成员关系和 2 个双快照比较。Tempo BuildKit LLB 参考前后各 3 个 target，默认目标各 14 vertex；精确配置核对 5 个镜像 profile，`OnBuild` 均为空。微型独立参考配置以 `TARGETARCH=other` 为 base ENV，显式 ARG `amd64` 后的 COPY 为 `/bin/linux/tempo-amd64`，Dockerfile 再设 ENV `arm64` 后变为 `/bin/linux/tempo-arm64`；LLB protobuf file copy 与原始 customname 均保留在回执。

`node tools/run-tempo-impact.mjs` 对源哈希、ignore、生成路径、目标影响及 BuildKit 结果执行断言，结果在 [LOCAL-CHECKS.json](evidence/tempo-docker-update-20260716/LOCAL-CHECKS.json)。它确认 MoonBit 自动源码比较选择第 5–11 行、只标记 setup 为直接变化而保守影响全部目标；BuildKit 证明 setup 与最终阶段的 digest 均变、ca-certificates 未变。目录分析把 Make 生成的 `bin/linux/tempo-amd64` 作为 post-Make 合成项解析到 COPY 第 14 行，但没有生成该文件或执行 Make。

限制：没有运行 Docker build/daemon/runtime、没有缓存键或性能测量、没有部署或采用证明。BuildKit LLB vertex 数不是构建成本；本例 profile 虽证实 ONBUILD 为空，MoonBit 核心不能接收该 profile，故仍把外部 ONBUILD 保持未知并多报。候选 `0.10.1` 未推送或发布，旧公开 CI 不覆盖本次改动。

## 0.11.0 local source precision review

本节记录新的本地候选；公开 `0.10.0` 及旧 `0.10.1` 回执均不覆盖本次源码精化。固定 MoonBit `moonc 0.10.14+7d59c7ec9` 下运行格式化、严格检查、接口生成、完整双后端测试和 JS 引擎构建：

```powershell
$env:MOON_HOME='D:\CodexLocal\ban\work\acceptance-20260928\moon'
$moon='D:\CodexLocal\ban\work\acceptance-20260928\moon\bin\moon.exe'
& $moon fmt --check
& $moon check --deny-warn
& $moon info
& $moon test --target js --deny-warn
& $moon test --target wasm-gc --deny-warn
& $moon build --target js --deny-warn
```

JS 与 WasmGC 完整套件各 44/44；来源专测各 9/9。`moon info` 只为公共 `SourceComparison` 增加 `diff_exact` 和 `diff_reason`；旧 `compare_build_impact` 调用契约未改。构建产物复制为 `web/engine.mjs` 后，`node tools/test-source-comparison.mjs` 通过两份固定 BuildKit 样例和 7 项文件 CLI 检查。`node tools/run-tempo-impact.mjs --out evidence/source-precision-20260929/REPLAY.json` 可在干净 checkout 重放；重复运行时另取未占用文件名。最终保存的作者本机回执为 [LOCAL-REPLAY-0.11.0.json](evidence/source-precision-20260929/LOCAL-REPLAY-0.11.0.json)，SHA256 为 `ee46eedf6315b5e7db521b77186a1f37e1c0e6d850a9f62e9faa575ed9a709dc`。该回执断言完整 Tempo 输入哈希、两侧第 5/11 行、旧/新直接变化阶段 `[1,2]`、影响目标 `tempo-setup`/`#2`、未变 `ca-certificates` 和固定 BuildKit 对照；`reason` 来自双图 `impact` 结果。

该新报告消费保存的 BuildKit v0.25.1 转换输出和固定 OCI config 资料，本次没有重新运行 BuildKit、Docker build 或下载镜像。相同断言已加入 GitHub Actions，以每次运行独有的新报告路径执行并清理；此次本地提交尚未推送，因此没有新的远端 CI 结果。离线包预检还发现 context 示例仍把未知外部 ONBUILD 当作无不确定性，脚本已改为断言其实际原因、退出码 3 和精确跨目标向量，并保留显式图的独立 stage 断言；`node tools/test-context.mjs` 7/7、`node examples/run-context.mjs` 与包解包重放现通过。`tools/check-package.py` 校验12个文档/固定fixture逐字节一致、隐藏 `.dockerignore` 存在、无 work/build cache 路径；当前离线包预检通过。LCS 重复行歧义及 1,000,000 单元预算分别有回退测试；回退可见且保守。其余 ONBUILD profile、缓存、安全跳过、性能和用户采用均不在该报告证明范围。
