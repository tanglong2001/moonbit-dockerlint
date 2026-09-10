# 功能与兼容性边界

0.3 新增 RUN/COPY heredoc 与正文行号、带选项的 JSON 参数、多阶段依赖图/循环检查、
SHELL 上下文继承、定点/全局忽略、JSON 诊断与 CLI 失败阈值；补结构规则并减少管道/ADD 误报。
详细 API、规则和限制见 README。

旧功能与相关新增测试通过，结构化接口及 CLI 场景通过；未执行独立 Docker/hadolint 对照。
仍缺完整 shell 分析、包管理器与标签/端口规则、变量作用域、Windows 语义、更多输出格式。
没有完整 Dockerfile/BuildKit/hadolint 兼容或全面追平结论。

保持独立 Git 仓库、构建目录、浏览器、CLI、文档、测试与 CI 配置，全部未上传。
历史 evidence 与 ZIP/bundle 不代表本次源版本，本轮未重复打包。
