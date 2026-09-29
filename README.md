# MoonBit 多阶段构建修改审阅

本项目仓库：**https://github.com/tanglong2001/moonbit-dockerlint**

模块 `tanglong2001/dockerlint`，本地候选 `0.12.0`，许可证 `MIT AND BSD-3-Clause`。给定 Dockerfile、目录清单和文件变化，解释哪些输入、源码行和构建目标有关联；给定前后两份 Dockerfile，报告两侧变化及依赖路径。输出包含未知原因，适合 MoonBit 审阅工具或代码生成后的检查流程调用。

## 解决的具体问题

多阶段构建中，一份文件可能只进入最终镜像，也可能经 `COPY --from` 或 bind mount 影响多个目标。只看文本差异或规则警告无法说明这种传播。此库把源码、ignore 后的清单与阶段依赖连起来，并把完整性不足的输入显式标成保守结果，便于审阅人追查依据。

固定的 Grafana Tempo 实例提供两类检查：其真实提交更新了第 5、11 行的两个 Distroless 镜像；源码比较只标记 `tempo-setup` 和最终阶段，不扩大到未改的 `ca-certificates`。对 Makefile 声明生成的 `bin/linux/tempo-amd64` 路径，未提供镜像配置时三个外部阶段均保持保守；0.12.0 接入已验证的空 ONBUILD 配置后，可将路径变化限制到最终阶段。原始配置、源码、许可和固定 BuildKit 对照均随仓库保留。

这是对上游实际 Dockerfile 的分析案例。二进制路径由 post-Make 清单模型补入，没有构建 Tempo 二进制，也没有执行 Docker build。完整结果与边界见 [镜像配置接口](IMAGE-PROFILES.md)、[来源比较](SOURCE-COMPARISON.md) 和 [验证记录](TESTING.md)。

## 安装与运行

使用 [固定 MoonBit 工具链](TOOLCHAIN.md)（moonc 0.10.14）和 Node.js 24；仓库根目录执行：

```sh
moon update
npm ci --ignore-scripts
moon build --target js --deny-warn
node -e "require('node:fs').copyFileSync('_build/js/debug/build/cmd/web/web.js','web/engine.mjs')"
node examples/run-context.mjs
```

样例会核对应用/文档两个目标的传播，以及 ignore 误排除配置目录的情况，保存独立报告。读取自己的固定目录快照：

```sh
node tools/context-cli.mjs --context ./examples/context --target release --changed-file src/app.txt
```

`--changed-file` 和 `--build-arg KEY=VALUE` 可重复。`--file` 选择上下文内的 Dockerfile；`--out` 写入一个新文件。输入来源、清单索引、源码行和影响路径见 JSON 报告；[退出码与限制](CONTEXT.md) 区分缺失、排除和未知。

已保存原始镜像资料时，可增加 `--platform linux/amd64 --image-profiles /path/to/profiles.json`。宿主核对 index→manifest→config 的原始字节摘要、长度和平台；核心只对字面摘要引用、空 ONBUILD、无自定义触发器的阶段缩小未知影响。配置缺失、重复、损坏或平台不符时继续保守，拒绝原因随报告返回。手填 `onbuild: []` 不会覆盖原始 config。

从同一入口离线复核 Tempo 前后快照，输出路径须未存在：

```sh
node tools/run-profile-context.mjs --out evidence/profile-context-20260930/REPLAY.json
```

## MoonBit 接口与已有实现的关系

核心负责变量和指令语义、COPY 路径匹配、输入映射、FROM/COPY/RUN mount 图、变更传播及有界源码比较。`analyze_context` 可在 JS/WasmGC 使用；调用者提供清单及可选的宿主已验证镜像元数据。核心不执行文件读取或摘要链验证，直接调用方必须履行同样的宿主合同。Node 入口已实现这些检查，并复用 `@balena/dockerignore` 1.0.2。API 与边界见 [CONTEXT](CONTEXT.md) 和 [IMAGE-PROFILES](IMAGE-PROFILES.md)。

BuildKit 已提供更完整的构建求解和 LLB；Buildx 有 check/outline/targets，dockerfilegraph 可画阶段图，Depot 已有浏览器 LLB 探索，Cadre/DodeX 研究依赖与定向修复。这里提供可嵌入 MoonBit 的输入/变更解释组件，复用现有参考来约束结果；不声称图算法、规则、浏览器运行或 Dockerfile 解析首创。[逐项对照](DUPLICATION.md) 与 [来源许可](THIRD-PARTY.md)。

对于 AI 生成的 Dockerfile 或修改建议，调用方可以重放同一输入并检查具体行、路径和保守原因；这为审阅提供可复核依据。它不生成修复，不判断业务意图，也不保证构建成功或允许跳过构建。没有已确认使用方，公开上游案例不等于采用。

## 验证、交付与范围

```sh
moon check --deny-warn
moon test --target wasm-gc --deny-warn
moon test --target js --deny-warn
node --test tools/test-image-profiles.mjs
python tools/check-package.py
```

[CI](.github/workflows/ci.yml) 包含检查、两种后端测试、构建、宿主检查、固定参考重放及解包示例。[TESTING](TESTING.md) 区分本轮执行、固定参考与历史检查；[本地配置回执](evidence/profile-context-20260930/LOCAL-REPLAY-0.12.0.json) 记录两个快照与五份配置。

采用 Linux 路径和当前 ignore 规则；不解释非空 ONBUILD、基础镜像 ENV、命名 context 覆盖、链接内容、COPY --exclude、RUN 执行结果或缓存。源码比较遇到重复行歧义、超出 1,000,000 个 LCS 单元或结构不明时明确回退。目录须保持不变；清单摘要不是文件内容摘要。旧规则检查保留兼容入口，非当前申报主贡献。

最后成功核对的公开版为 [Mooncakes 0.10.0](https://mooncakes.io/docs/tanglong2001/dockerlint@0.10.0)，对应 [公开 CI](https://github.com/tanglong2001/moonbit-dockerlint/actions/runs/36435905692)（2026-09-29 17:18 UTC 核对）。0.12.0 仅本地修改，尚未推送、发布或提交赛事材料；交接应同步版本后再核对公开 CI。报名表与审核结果未核实。

[申报书](PROPOSAL.md) · [复审答复](REVIEW-RESPONSE.md) · [可运行任务](USE-CASE.md) · [0.11.0 及更早历史说明](README-BEFORE-PROFILES.md)
