# MoonBit 构建输入与阶段影响分析 · 修订申报草稿
本项目仓库：https://github.com/tanglong2001/moonbit-dockerlint
模块：tanglong2001/dockerlint；本地版本：0.10.0；许可证：MIT AND BSD-3-Clause，适配来源另见 THIRD-PARTY。
状态：本轮仅本地交付，团队同步到上述仓库后提交复审。

## 解决的任务
审阅多阶段构建时，解释 COPY/ADD/bind 的实际本地输入、被排除的源，以及文件修改传播到目标的引用路径。
支持应用、文档等独立构建目标，帮助定位上下文路径与 ignore 配置错误；输出结构化 JSON 供工具接入。

## 本轮实质实现
MoonBit：保留 COPY 引号、跨 ARG/ENV/阶段传播未知状态、Go COPY 匹配、清单映射和带见证的阶段影响。
Node：受限只读目录扫描、Dockerfile 专属 ignore 选择、worker 超时、CLI 和不覆盖的报告输出。
0.10.0新增完整快照比较：MoonBit自动选择覆盖所有差异的保守行区间，Node读取前后文件，不再依赖手工填写变更坐标。
复用 @balena/dockerignore 1.0.2；该旧库的未核实模式明确拒绝，未将复用能力记为新算法。
同一纯核心可用于 JS/WasmGC；不把 Node 文件系统操作描述为 MoonBit 原生 I/O。

## 与已有实现的关系
Docker/BuildKit 已有完整构建求解，Hadolint 已有规则工具，mizchi/syntree 已有 Dockerfile 分词，MoonBit 也有 Git ignore 库。
贡献是限定范围的 MoonBit 构建输入解释接口与可运行目录分析流程；不主张首个、生态空白或替代 BuildKit。

## 复现与验证
README 的 examples/run-context.mjs 完成输入追踪、独立目标及 ignore 误排除定位，并断言报告。
JS/WasmGC 核心各 30 项；7 组宿主流程、8 组展开回归；BuildKit 98 项展开一致，4 项未知策略差异单列。
Docker 官方教程固定源码上完成目标闭包和两组文件影响集合断言；没有执行实际镜像构建。

## 边界
基于当前源码和当前 ignore 的静态解释，外部镜像元数据、命名 context、链接、部分模式未求解；未知项显式返回。
不能直接据此跳过构建；目前无确认使用方，不编造客户或部署证据。
完整范围、来源、验证与本轮驳回答复分别见 CONTEXT、DUPLICATION、TESTING、REVIEW-RESPONSE。

## 0.9.0：修改前后双快照影响（2026-09-27）

`compare_build_impact(before, after, changed_before=[...], changed_after=[...])` 以各自快照的1起始行号接收完整变更集合，并合并旧图与新图的影响。删除COPY依赖时仍保留旧路径；阶段插入、删除、改名或重排不能稳定对齐时保守报告所有快照目标。`changed_before`/`changed_after` 必须由调用者正确提供；该接口不解析git diff，也不能检验调用者遗漏了哪些变更。

`node tools/test-buildkit-closures.mjs` 在固定 docker/getting-started Dockerfile及两个明确标注的修改副本上复核21组目标闭包、147项变更阶段可达判断和2组双快照比较。参考不是另写一遍图算法，而是 BuildKit v0.25.1 的 `Dockerfile2LLB` 实际输出；[原始回执](examples/buildkit-closures/oracle.json)和[Go调用器](tools/closure-reference/main.go)可查。调用器用空ONBUILD的假Linux/amd64镜像配置，无daemon、registry取镜像或build，因此只证明Dockerfile显式依赖子集；不能推导真实镜像闭包、缓存失效或安全跳过构建。

来源：[docker/getting-started固定提交](https://github.com/docker/getting-started/tree/94d4031393bf8ebfd38aae640910f9435579d76b)，Apache-2.0；原文件和两个单行修改副本均保留许可与SHA256。该公开教材不是本项目用户。已有 BuildKit 同样能离线转换，不能把“无daemon”说成对它的独占优势；这里的可评估价值是可嵌入MoonBit的有界解释接口、变更路径和目录分析，是否足够作为参赛扩展由组委会判断。

参考观察边界：LLB操作标签不包含只有CMD元数据的dev阶段。对照保留原始标签列表，并显式加入所选target；21组中3组dev因此是“可观察操作阶段 + 所选target”。没有把该探针宣称为任意Dockerfile全部逻辑阶段的通用oracle。

## 本轮新增证据

自动快照比较新增4组JS/Wasm-GC公共API检查，以及2份已固定BuildKit样例/7项文件CLI检查。详见SOURCE-COMPARISON。以上0.9.0行号接口仍保留，但新消费者优先调用0.10.0自动入口。多处修改可保守多报；没有扩张为完整Docker语义或构建跳过证明。
