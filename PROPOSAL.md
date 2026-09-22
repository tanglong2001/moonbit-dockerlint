# MoonBit 构建输入与阶段影响分析 · 修订申报草稿
本项目仓库：https://github.com/tanglong2001/moonbit-dockerlint
模块：tanglong2001/dockerlint；本地版本：0.8.0；许可证：MIT AND BSD-3-Clause，适配来源另见 THIRD-PARTY。
状态：本轮仅本地交付，团队同步到上述仓库后提交复审。

## 解决的任务
审阅多阶段构建时，解释 COPY/ADD/bind 的实际本地输入、被排除的源，以及文件修改传播到目标的引用路径。
支持应用、文档等独立构建目标，帮助定位上下文路径与 ignore 配置错误；输出结构化 JSON 供工具接入。

## 本轮实质实现
MoonBit：保留 COPY 引号、跨 ARG/ENV/阶段传播未知状态、Go COPY 匹配、清单映射和带见证的阶段影响。
Node：受限只读目录扫描、Dockerfile 专属 ignore 选择、worker 超时、CLI 和不覆盖的报告输出。
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
