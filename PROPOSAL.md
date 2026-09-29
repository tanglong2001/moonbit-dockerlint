# MoonBit 多阶段构建输入与修改审阅组件

仓库：[https://github.com/tanglong2001/moonbit-dockerlint](https://github.com/tanglong2001/moonbit-dockerlint)；模块 `tanglong2001/dockerlint`；许可 `MIT AND BSD-3-Clause`。

本地候选为 `0.12.0`。最后成功核对的公开版为 `0.10.0`（2026-09-29），新版本尚未推送、发布或提交表单。

项目面向 MoonBit 审阅工具：输入前后 Dockerfile、过滤后的目录清单和变化路径，返回涉及的源码行、阶段、目标与依赖见证。任务从旧版规则检查转为解释构建修改的作用范围；同一接口可重放 AI 生成的修改，帮助调用者检查其输入依据与不确定性。

核心由 MoonBit 实现，包含变量未知状态传播、COPY 匹配、FROM/COPY/RUN mount 依赖图、双快照比较和有界行差异。宿主复用 Balena Docker ignore；新增离线 OCI 配置校验器验证 index→manifest→config 的摘要、长度及平台，核心据此消除已确认空 ONBUILD 的未知种子。基础环境变量、非空触发器和不匹配资料保持保守，不把不完整信息解释成“无影响”。

真实案例固定 Grafana Tempo 的 AGPL-3.0 提交：两个镜像 digest 的第 5、11 行修改只影响 setup 与最终阶段，未改的 ca-certificates 被排除；对其 Makefile 声明的二进制路径，配置接入使变化范围从三个外部阶段收敛到最终阶段，与固定 BuildKit v0.25.1 LLB 的 COPY 观察相符。该路径为 post-Make 清单模型，未构建二进制或运行 Docker build；不是上游采用证明。

独立价值在于可组合的 MoonBit 输入解释 API、两侧变化路径与可审计的未知状态。BuildKit、Buildx、dockerfilegraph、Depot 和 Cadre 已有求解、图展示或演化修复能力，均明确列入 [既有实现对照](DUPLICATION.md)；此项目不主张规则、图算法、解析器或免守护进程运行首创。已有完整 BuildKit 工作流的调用方可直接使用其前端，无须改用本组件。

可运行样例覆盖多目标输入与 ignore 误排除；原始镜像字节、固定上游源码、许可证和独立参考随仓库交付。镜像篡改、平台不符、重复身份、隐藏触发器以及差异预算上限均有拒绝或回退验证。入口与复现见 [README](README.md)、[镜像合同](IMAGE-PROFILES.md) 和 [TESTING](TESTING.md)。

交付不包含构建执行、缓存收益测量、安全跳过构建、自动修复或生产部署承诺。核心支持范围及成熟度以可重放证据为准；编译器固定为 moonc 0.10.14，CI 覆盖检查、构建、测试和离线包验证。新提交的公开 CI、Mooncakes 发布及报名表一致性由后续交接核实。
