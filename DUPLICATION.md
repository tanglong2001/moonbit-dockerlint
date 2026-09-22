# dockerlint 查重与定位 · 2026-09-22

[mizchi/syntree/dockerfile](https://github.com/mizchi/syntree.mbt)。mizchi/syntree/dockerfile 已有分词和高亮。这里申报的是语义诊断、阶段/变量报告与 CI 门禁，不是首个解析器；不把 Hadolint 的规则发明归于本项目。

- [mizchi/syntree.mbt 固定提交](https://github.com/mizchi/syntree.mbt/tree/0492c077be93ff5aa3b51a53e0f0ebc17f025844)：依据该版本的公开说明对照，不冒充本轮运行了对方全部实现。

本轮材料采用定位：**Dockerfile 语义诊断与 CI 报告工具**。

MoonBit 与宿主分工：MoonBit 执行 Dockerfile 分析、有限 shell 词法、变量和阶段图及规则；Node 读取文件并输出报告，不执行 Dockerfile。

本轮证据：本轮 JSON 诊断、阶段图及 5 类 CLI 阈值/错误检查通过；规则边界见 SHELL-CHECKS.md。 具体输入、脚本、已执行与历史对照分开记录在 [PROPOSAL.md](PROPOSAL.md) 和 evidence/innovation-review-20260922/。

边界：六类 shell 检查只是限定子集，不是完整 ShellCheck、BuildKit 或容器安全审计。

检索覆盖 Mooncakes 官方关键词/别名、GitHub 仓库查询、GitLink 公开索引、直接来源文档；没有完整赛事报名表、私有仓库、未公开分支或 GitHub 全代码索引。GitLink 索引也不完整。未找到同范围项目不等于生态空白；已有相关项目不自动等于无独立贡献。完整查询和固定提交快照在总交付目录 innovation-review-20260922/。

初次复核风险为“中”。本次补足差异和可复现工作流，没有自行将重叠归零，也不替评委作创新性认定。最终公开代码与表单附件须使用一致版本。
