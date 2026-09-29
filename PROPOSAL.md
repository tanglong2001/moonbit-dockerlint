# MoonBit 多阶段 Docker 构建修改审阅

仓库：[https://github.com/tanglong2001/moonbit-dockerlint](https://github.com/tanglong2001/moonbit-dockerlint)；模块 `tanglong2001/dockerlint`；许可 `MIT AND BSD-3-Clause`。

公开版为 `0.10.0`。本地 `0.11.0` 候选修复了真实 Dockerfile 双镜像更新中的差异范围多报；未推送或发布。`0.10.1` 已交付回执作为历史证据保留。

Grafana Tempo 固定 AGPL-3.0 提交 `3f54f1c040a5c014a7f3acde22376060807178c6` 的构建目标确实使用 `cmd/tempo/Dockerfile`，其中 setup 与 runtime 两个外部镜像 digest 在第 5、11 行更新。此前比较把中间未改 stage 一并选中并扩大到所有目标；新比较分离保留两行，只影响 `tempo-setup` 与最终 `#2`，排除未变 `ca-certificates`，与固定 BuildKit v0.25.1 LLB 观察相符。

调用方提交完整前后 Dockerfile，得到两侧行坐标、可见的差异精度状态与旧/新依赖影响。唯一 LCS 会保留分离编辑；重复行歧义或超过 1,000,000 DP 单元时显式退回完整差异跨度并标记保守。只有阶段拓扑、命名、外部字面 FROM 镜像 token、参数与别名可对齐时才精化 stage 影响；结构变更、内部/动态引用及未知输入仍保守。公开的单快照变更影响接口不变。

BuildKit 本身可以提供更完整的构建求解，本候选是可组合的 MoonBit 源码比较接口；不声称原创图算法、首个可视化工具或能取代 LLB。它不证明缓存收益、安全跳过构建、性能或生产采用。上下文分析仍不读取镜像 profile，未知外部 `ONBUILD` 影响保持保守；没有真实使用方或 Docker 实际构建证据。复现和精确边界见 [来源比较说明](SOURCE-COMPARISON.md)、[检查记录](TESTING.md#0110-local-source-precision-review) 与 [0.11.0 新回执](evidence/source-precision-20260929/LOCAL-REPLAY-0.11.0.json)。公开 `0.10.0` CI 未运行本地候选。
