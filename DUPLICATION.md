# 编码前检索与复用决定 · 更新至 2026-09-23

已有实现及本次范围：

- [Docker/BuildKit](https://github.com/moby/buildkit)、[构建上下文规范](https://docs.docker.com/build/concepts/context/) 已有完整构建图与输入求解。此项目是离线解释接口，不是新求解算法或构建器。
- [Hadolint](https://github.com/hadolint/hadolint) 已有成熟规则库。旧 lint 功能继续保留，新申报任务为输入清单到阶段的解释。
- [mizchi/syntree.mbt](https://github.com/mizchi/syntree.mbt/tree/0492c077be93ff5aa3b51a53e0f0ebc17f025844) 的 Dockerfile 分词已存在；不能主张首个解析器。
- Mooncakes 的 sennenki/ignore 0.1.1 和 moonbit-community/ignore 0.0.1 指向 [zvmsbackend/ignore](https://github.com/zvmsbackend/ignore/tree/ddaddec0dd7809747d547bfa25be019019a22932)。已读取固定提交：Git 风格父目录排除和未锚定基名匹配不能直接等同 Docker 规则。本轮没有运行其全部测试，也没有将其移植重写。
- mizchi/bit_ignore 0.48.0 亦是 Git ignore 邻接能力，不能据同名搜索结果声称 Docker context 已完全覆盖或完全空白。
- 实际复用 [@balena/dockerignore](https://github.com/balena-io-modules/dockerignore) 1.0.2，固定 npm lock。注入 POSIX path 和大小写敏感选项，不修改该匹配器；对字符类、转义等已知未核实范围明确拒绝。
- COPY 路径匹配依据 [Go filepath.Match](https://go.dev/src/path/filepath/match.go) 的顺序适配，保留 Go BSD 许可；独立验证使用 Go1.27.1 和 [Moby patternmatcher v0.6.0](https://github.com/moby/patternmatcher/tree/v0.6.0)。

MoonBit 核心的新集成是源码语义 + 过滤清单 + 带路径的目标影响报告；Node 宿主和第三方匹配器各自职责已公开。可对照的完整工作流见 USE-CASE 和 CONTEXT。

检索覆盖公开 Mooncakes、GitHub、规范和既有赛事资料，未覆盖全部未公开报名表/代码。旧检索原始响应保留在总交付 `review-goal-20260922/SEARCH.json` 与 `innovation-review-20260922/`；这些检索不能证明首创，也不替代赛事价值判断。
