# Dockerfile 阶段依赖与修改影响分析

**本项目仓库：[https://github.com/tanglong2001/moonbit-dockerlint](https://github.com/tanglong2001/moonbit-dockerlint)**

模块 `tanglong2001/dockerlint`，本地版本 **0.6.0**，MIT。当前评审状态：**暂缓复申**。本文件是当前入口，旧轮次说明与详细用法保存在 [历史/完整使用说明](README-BEFORE-VALUE-REWORK.md)。

## 解决什么任务

在不运行构建的情况下解释目标依赖、修改行可传播到的阶段和对应引用行；依赖不能静态确定时向调用方明确返回不确定。保留已有规则检查作为辅助功能。

现阶段保留图分析原型与可复查接口；不以多加规则、改名或当前克隆成功证明选题异议已经解除。

## 直接复现

安装 MoonBit 和 Node.js 24，在本仓库根目录运行：

```sh
moon build --target js
node -e "require('node:fs').copyFileSync('_build/js/debug/build/cmd/web/web.js','web/engine.mjs')"
node examples/run-use-case.mjs
```

流程：**解释多阶段构建的修改影响**。运行器创建新的系统临时目录，保留每一步的 stdout/stderr、产物及 `report.json`，打印实际目录；重复运行不会覆盖之前产物。它只执行仓库内的本地样例，不连接公网或发送消息。`report.json` 的 `expected` 是应观察的结果，实际结果在各步输出中；成功退出不替代内容核对。

输入性质：原创可构建结构样例；本轮仅做静态分析，未实际拉取镜像/构建。

应观察：required=[0,1,2,3]，受影响阶段为 0/2/3，docs 阶段不受此静态路径影响，release 证据路径为 [3,2,0]。

具体命令和输入路径见 [使用任务](USE-CASE.md) 与 [机器可读流程](examples/use-case.json)。只把这个脚本当复现入口，不把通用运行器计作核心技术贡献。

## 实现与已有项目的关系

MoonBit 解析指令并构造 FROM/COPY/RUN mount 图，执行环检测、可达性及带路径的影响分析；Node 读取输入并输出 JSON。

Docker/BuildKit 自身已有构建依赖求解，mizchi/syntree.mbt 已有 Dockerfile 分词。新增的是限定范围的 MoonBit 图查询 API 和解释输出，不是新算法，也不声称替代 BuildKit。

同类项目和检索边界见 [DUPLICATION](DUPLICATION.md)。查重用于避免错误的首创表述；关键词零结果不能证明生态空白，Node 宿主能力也不计为 MoonBit 原生 I/O。

库使用从 [公共 API](pkg.generated.mbti) 和根包源码开始；可在本 checkout 的消费包中导入 `"tanglong2001/dockerlint"`。源码中的网络/文件宿主入口及完整参数仍见 [完整使用说明](README-BEFORE-VALUE-REWORK.md)。是否已发布到 Mooncakes 需另核实，本文不把 `moon add` 的下载成功作为已完成事项。

## 验证与边界

本轮新增图分析通过 JS/WasmGC 核心测试及 CLI 检查，原报告 CLI 回归通过；样例未实际调用 Docker 构建。

[上一轮工程验证](evidence/innovation-review-20260922/results.json) 与 [本轮最小任务回执](evidence/value-rework-20260922/use-case.json) 分开。历史参考版本、golden 重放、本机 peer、真实第三方服务端和本次样例是不同证据，不能合并成“全部生产验证”。

常规核心检查可运行 `moon check --target js`、`moon test --target js`、`moon test --target wasm-gc`。专项命令：

```sh
node tools/test-impact.mjs
node tools/test-report.mjs
```

专项所需的参考环境和历史版本见原使用说明及 TESTING 文档；本轮回执只记录实际执行项，不声称上面所有参考服务在任意环境即装即跑。

用户已确认暂无明确使用方或独特需求。图分析只针对当前文件的显式依赖，忽略外部镜像元数据、命名 context 覆盖、上下文文件和缓存状态；不得用它直接证明某次构建可以跳过。动态引用、ONBUILD 等保守报告。

## 复审材料状态

初审已质疑价值，且暂无明确使用方或独特需求。新分析能力仍需实际构建仓库需求支撑。

2026-09-22 匿名新克隆成功；默认分支 `main`，核验公开提交 `acc8f36e81d39693d2c6d3511fd2b00547e6da63`。本轮源码修订仅在本地，尚未推送；此记录不证明当时报名表中的地址正确，也不证明新修订已上线。

[申报草稿](PROPOSAL.md) 已压缩为 30 行以内，并单独标明本项目仓库；[复核说明](REVIEW-RESPONSE.md) 区分材料错误、功能变化及尚未解决的问题。没有编造用户、设备接入、生产部署或评审认可。
