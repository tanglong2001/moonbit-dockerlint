# MoonBit 多阶段构建输入与修改影响分析

项目仓库：https://github.com/tanglong2001/moonbit-dockerlint。模块 `tanglong2001/dockerlint@0.10.0`；MIT AND BSD-3-Clause，第三方许可见仓库说明。本次以输入和阶段分析回应原规则检查工具的价值异议。

## 具体问题与输出

审阅多阶段 Dockerfile 的一次修改时，需要追问：哪些本地文件进入构建，哪些被 ignore 排除，变化经哪条阶段引用传到最终目标，哪些输入无法静态确定。项目接收目录清单及修改前后的完整 Dockerfile，输出可追溯的输入匹配、阶段依赖与影响报告，供代码审查或 MoonBit 构建工具进一步处理。

## MoonBit 实现与扩展

限定 Dockerfile 语法、ARG/ENV 未知状态、文件清单匹配、阶段图及双图影响传播由 MoonBit 实现；Node 负责受限只读扫描和 CLI。`compare_build_sources` 自动从两份源码选取覆盖所有变化的保守行区间，减少手填坐标漏报。依赖被删除时仍保留旧图路径；阶段无法稳定对齐时扩大报告范围。已知 ignore 子域复用 `@balena/dockerignore@1.0.2`，不支持的模式显式拒绝。

## 与现有工具的关系

[BuildKit](https://github.com/moby/buildkit) 已有构建求解与离线转换，[Hadolint](https://github.com/hadolint/hadolint) 已有规则检查，MoonBit 的 `mizchi/syntree` 已有 Dockerfile 分词。新增交付限于可嵌入 MoonBit 的输入清单、前后图解释与不确定性接口；旧规则列表不计作独立创新。AI 可以生成 Dockerfile，审阅其输入和引用变化仍需要确定、可定位的结果；这说明工具用途，不证明本项目优于已有工具。

## 可运行任务与独立核对

按 README 构建后运行 `node examples/run-context.mjs`；两份文件的比较入口见 [SOURCE-COMPARISON](SOURCE-COMPARISON.md)。固定 docker/getting-started 教材及修改副本与 BuildKit v0.25.1 对照 21 组目标闭包、147 项可达判断和两组双图比较；自动快照 API 与 CLI 另有针对性检查。原始版本、许可和假设均保存在证据目录。

参考只采用空 ONBUILD 的模拟 Linux/amd64 镜像配置，未实际构建镜像。外部镜像、命名 context、链接及部分模式不求解；`affected=false` 不能作为安全跳过构建的凭证。当前没有确认使用方或独特需求，公开教材也不代表生产采用；是否足以构成独立参赛价值仍需复审判断。交付核心 API、CLI、可运行例子、来源与检查回执。

**公开状态（2026-09-29 核对）**：GitHub [公开仓库](https://github.com/tanglong2001/moonbit-dockerlint)、[Mooncakes 0.10.0](https://mooncakes.io/docs/tanglong2001/dockerlint@0.10.0) 已可访问；[CI 成功记录](https://github.com/tanglong2001/moonbit-dockerlint/actions/runs/36435905692) 对应 `765378e4cf77`。本次材料更新尚未推送；该远端 CI 对应所列公开提交。报名表一致性及赛事审核结果尚未核实。
