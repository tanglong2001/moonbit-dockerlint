# Dockerfile 语义诊断与 CI 报告工具

本地申报候选材料，2026-09-22；模块 `tanglong2001/dockerlint`，版本 `0.5.0`。团队的公开仓库可能还是先前提交，本次没有推送；最终表单必须指向团队实际上传版本。

## 要解决的任务

在镜像构建之前发现多阶段引用、变量上下文、包安装与常见 shell 写法问题，并以 SARIF/Checkstyle 和失败阈值接入 CI。

以下是目标任务和可复现工程证据，不虚构客户、存量部署或采用人数。

## 现有工作与新增贡献

[mizchi/syntree/dockerfile](https://github.com/mizchi/syntree.mbt)。mizchi/syntree/dockerfile 已有分词和高亮。这里申报的是语义诊断、阶段/变量报告与 CI 门禁，不是首个解析器；不把 Hadolint 的规则发明归于本项目。

MoonBit 执行 Dockerfile 分析、有限 shell 词法、变量和阶段图及规则；Node 读取文件并输出报告，不执行 Dockerfile。

- [mizchi/syntree.mbt 固定提交](https://github.com/mizchi/syntree.mbt/tree/0492c077be93ff5aa3b51a53e0f0ebc17f025844)：依据该版本的公开说明对照，不冒充本轮运行了对方全部实现。

## 可复现路径

仓库附编译引擎；修改源码后先构建。参考工具的额外依赖与环境变量见 TESTING.md；测试创建的网络服务仅在本机。

```sh
node tools/cli.mjs --file examples/variables.Dockerfile --stages
node tools/test-report.mjs
```

本轮 JSON 诊断、阶段图及 5 类 CLI 阈值/错误检查通过；规则边界见 SHELL-CHECKS.md。 本轮 JS/WasmGC 核心测试及 JS 构建通过，原始日志见 [本轮验证](evidence/innovation-review-20260922/results.json)。测试数量证明所列范围，不能代替创新性论证或推断正式审核通过。

## 边界与来源

六类 shell 检查只是限定子集，不是完整 ShellCheck、BuildKit 或容器安全审计。

许可证与来源沿用仓库现有 LICENSE/第三方说明，不将标准、算法、词库或参考软件写成本项目发明。查重不是对全生态不存在的证明，日期、相邻项与未覆盖范围见 [DUPLICATION.md](DUPLICATION.md)。
