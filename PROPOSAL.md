# MoonBit Dockerfile 静态检查工具 · 项目申报书

## 一、项目名称

MoonBit Dockerfile 静态检查工具

## 二、项目说明

当前公开模块版本为 0.4.0。MoonBit 解析逻辑行、指令、heredoc 与阶段关系，执行有界 shell/包管理器规则及 ARG/ENV 分析；不执行 Dockerfile、不拉取镜像。

## 三、方向与通用性

基础软件与开发者工具。用于提交前检查、CI 规则门禁和构建配置排障；不是 Hadolint、ShellCheck 或 BuildKit 的完整替代。

## 四、应用场景

node tools/cli.mjs --file Dockerfile --diagnostics --fail-on warning 运行门禁；SARIF/Checkstyle/JSON 等报告供扫描系统集成；配置可调整忽略项、严重度和信任镜像源。

## 五、功能与验证边界

支持多文件、变量快照、阶段依赖与环检测。历史 Hadolint 2.15.1 对照的 189 个可比较结果中 175 一致、14 项有意差异，另列 3 个参考解析错误。完整 ShellCheck 语义、未覆盖规则与真实构建结果不在已验证范围；不宣称尚未合入的 0.5 新规则已交付。

## 六、原创性与参考材料

原创代码采用 MIT。Hadolint（GPL-3.0，https://github.com/hadolint/hadolint）作为固定版本独立黑盒参考，不复制其实现；差异见 tools/reference-differences.json，复现见 TESTING.md。第三方参考二进制不随源码分发。

## 七、仓库链接

https://github.com/tanglong2001/moonbit-dockerlint
