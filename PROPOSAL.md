# MoonBit 多阶段 Docker 构建修改审阅

本地候选版 `0.10.1` 针对一次真实多阶段构建变更，解释 Dockerfile 的上下文输入与阶段影响；公开版仍是 `0.10.0`，本次未推送或发布。

仓库：[https://github.com/tanglong2001/moonbit-dockerlint](https://github.com/tanglong2001/moonbit-dockerlint)。MoonBit 模块 `tanglong2001/dockerlint`，许可 `MIT AND BSD-3-Clause`。

## 审阅任务

Grafana Tempo 的固定 AGPL-3.0 提交 `3f54f1c040a5c014a7f3acde22376060807178c6` 更新了 `cmd/tempo/Dockerfile` 中 setup 与 runtime 两个 Distroless digest。仓库 Makefile 的 `docker-tempo` 目标确实构建该文件。固定 amd64 OCI image config 均验证 `OnBuild` 为空；BuildKit v0.25.1 输出的默认目标闭包包含 setup、ca-certificates 与最终阶段，共 14 个 LLB vertex。

## 交付与复核

调用方给完整前后 Dockerfile 文本，以及目录分析所需的路径/类型/ignore 清单和明确 build args；MoonBit 返回 COPY/ADD/bind 输入、选中目标、修改行段、影响路径和未知原因。无法识别的变量或外部 `ONBUILD` 保守标记；宿主遇到未验证 ignore 语法或无效路径则拒绝分析。当前代码修复显式 `ARG TARGETARCH` 被未知 base ENV 误判的问题，并对缺少镜像元数据时可能隐藏上下文 COPY 的 `ONBUILD` 保守报告；离线 BuildKit 微型对照还验证后续 Dockerfile `ENV` 会覆盖 ARG。

本次真实源比较保守选择第 5–11 行，只识别 setup 为变动 stage，随后影响报告覆盖所有目标；BuildKit 则确认最终阶段的 base 也已变化、ca-certificates stage 未变。这是当前精度损失的实证。Tempo 二进制由 Make 生成，分析用的 post-Make 路径为合成清单项，未编译该二进制或运行 Docker build。报告不是缓存预测或安全跳过凭证。

BuildKit 已能直接转换 Dockerfile 并得到更精细的 LLB；本工具的候选增量是 MoonBit 可嵌入的目录/变更解释接口，而非更完整的求解器。目前没有已确认的外部使用方，也没有性能、采用或赛事接受证据；实际用例显示它需要降低保守多报，并由潜在调用方验证接口是否解决真实审阅工作。

命令、输入哈希、原始回执、许可和限制见 [本地检查记录](TESTING.md#0101-local-tempo-build-change-review) 与 `evidence/tempo-docker-update-20260716/LOCAL-CHECKS.json`。

**公开状态（2026-09-29 核对）**：GitHub 与 Mooncakes 可访问的版本为 `0.10.0`；本地 `0.10.1` 未发布，旧远端 CI 不覆盖本次核心修改。报名及赛事审核结果未核实。
