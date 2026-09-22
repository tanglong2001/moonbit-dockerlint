> 历史说明存档：2026-09-22 价值复核之前的 README 原文。旧版本、路径、无 remote 等状态描述不代表当前状态；当前入口为 [README](README.md)。保留其中的完整 API 用法和历史验证细节，不据旧条目宣称本轮重新通过。

> 2026-09-22 当前本地版 0.5.0：申报定位为“Dockerfile 语义诊断与 CI 报告工具”。已更新[现有项目对照](DUPLICATION.md)、[申报草稿](PROPOSAL.md)及[本轮验证](evidence/innovation-review-20260922/results.json)。下面带日期的旧轮次描述保留历史范围；团队已有公开仓库，本次本地修订尚未由本任务推送。

> 0.5.0：新增六种常见 shell 检查，72/72 官方对照通过。当前范围与限制见 [SHELL-CHECKS.md](SHELL-CHECKS.md)；较早轮次的描述保留为历史。

# MoonBit Dockerlint 0.5.0

> 2026-09-21 本地构建修复：命令包 import 已同步到当前 moon.mod 模块名；moon info/check、JS 构建、MoonBit 示例和 Node 引擎示例通过。算法未改，本轮未重跑历史全部行为/性能套件。当前提交指纹见 evidence/module-import-fix.json。

独立的 Dockerfile 静态检查库，提供 MoonBit API、编译后 JS 引擎、浏览器示例与实际文件/stdin CLI。分析器不会执行 Dockerfile、RUN、变量中的命令或拉取镜像。全部成果留在本地。

0.4 补上带引号的 shell 词法、有限命令/重定向/命令替换分析、脚本型 heredoc、包管理器规则、ARG/ENV 作用域快照、配置与多文件报告。修正最后一条 USER、ADD 源路径和默认诊断级别。仍不是完整 Hadolint/ShellCheck 或 BuildKit 实现。

## 使用

```powershell
./verify.ps1 -MoonPath /absolute/path/to/moon.exe
node tools/cli.mjs --file Dockerfile --diagnostics --fail-on warning
node tools/cli.mjs --file Dockerfile --file Dockerfile.test --format sarif
node tools/cli.mjs --file Dockerfile --format checkstyle --config examples/lint-config.json
node tools/cli.mjs --file examples/variables.Dockerfile --variables --build-arg TAG=3.21
node tools/cli.mjs --file Dockerfile --stages
python tools/serve.py
```

无输入选项时读取严格 UTF-8 stdin。`--input TEXT`、单个或多个 `--file` 可选；文本输入不能与文件混用。`--format` 支持 json、sarif、checkstyle、gnu、text；旧 `--json` 仍包装 `{ok,output}`，与 JSON 诊断数组不同。`--no-inline` 禁止文件内的 ignore 指令。`--fail-on error|warning|info|style|none` 包含指定级别及以上，默认 none。退出码 0 为完成，1 为宿主/配置错误，2 为解析错误，3 为触发诊断阈值。格式化报告中的解析错误用 ML1099 表示，仍保持合法 JSON/XML。浏览器展示默认检查结果；变量、配置及格式输出使用 API/CLI。

配置文件为严格 JSON：

```json
{"ignore":["DL3015"],"honorInline":true,"severity":{"DL3007":"error"},"trustedRegistries":["docker.io","ghcr.io"]}
```

未知键、无效类型、规则编号及级别报错。severity 可为 error/warning/info/style/ignore。仓库按明确主机名匹配，支持 `*`；简写镜像解析到 docker.io，已知阶段名和 scratch 不检查仓库。没有自动发现配置文件、环境配置或 YAML。

## API 与规则范围

`parse`、`Instruction.split_arguments`、`analyze_stages`、`lint`、`check`、`report_json` 保留。新增 `shell_tokens`、`expand_variables`、`analyze_variables`、`configured_report`、`variable_report`。完整签名见 pkg.generated.mbti。JS 导出 run / diagnostics / stage_graph / configured / variables。

- 解析逻辑行、escape/syntax/check 指令、JSON 参数、COPY/RUN heredoc 和开始/结束行；阶段依赖及环检测。未知 COPY 名称允许作为外部镜像。
- 基础镜像版本、绝对 WORKDIR、最后 USER、ADD/COPY、CMD/ENTRYPOINT/HEALTHCHECK、ONBUILD、SHELL、EXPOSE；结构问题用 ML 编号。
- RUN 支持引号/转义、管道/布尔连接、重定向描述符、简单 command/exec/env 包装、绝对路径、有限 `$()`/反引号内部命令及裸 heredoc 脚本。cat heredoc 内容作为数据。exec-form 参数保持字面量。
- apt-get、apk、pip/python -m pip、npm、gem、yum、dnf、zypper、go install 的常见版本、交互或缓存检查；另有 apt、sudo、cd、部分容器不适合命令、wget、替换 /bin/sh 与 pipefail 检查。具体已对照编号见 evidence/hadolint-comparison.json 的 owned。
- `# hadolint ignore=DLxxxx,...` 附着后续指令，global ignore 全文件生效；heredoc 正文不解释为指令。调用者忽略列表可额外传入。

变量 API 输出每条指令后的参数/环境快照：全局 ARG 用于 FROM，阶段必须重声明才可引用；命名父阶段继承 ARG/ENV；ENV 覆盖 ARG，同条多赋值读取更新前的值。支持 `$NAME`、`${NAME}`、`:-`、`:+`、`-`、`+` 和有限嵌套，处理引号/反斜杠。外部镜像环境未知，因此未找到的变量保持原表达式并列入 unresolved；这与实际构建时空值/镜像环境不能混为一谈。RUN/CMD 不做 shell 求值；分析结果不自动替换回 lint。

## 已有验证与差异

固定校验过 SHA256 的原版 Hadolint 2.15.1，192 个原创黑盒输入：189 个可比较规则结果中 175 一致、14 个有意差异、0 未解释差异；另外 3 个参考解析错误保留原输出，不计兼容通过。比较已覆盖 DL 编号、指令行、默认级别，未声称消息文本相同。全部参考结果、ShellCheck/其他未覆盖输出都保留。173 个非配置参考黄金案例进入 JS/Wasm-GC 公共 API 测试。

14 个差异逐项固定在 tools/reference-differences.json：12 个包装/绝对路径命令检测更广、1 个要求 apt update 后清理、1 个单引号 ENV 字面量不视作变量引用。参考解析错误为 EXPOSE 非数字、非 TCP/UDP 协议，以及 localhost:port 镜像；前两项本地通过 ML1012 诊断，最后一项本地接受。不能把这些差异算成兼容一致。

复现、宿主检查、证据边界见 [TESTING.md](TESTING.md)，剩余差距见 [FEATURES.md](FEATURES.md)。旧 evidence 和旧 ZIP/Git bundle 为历史快照，本轮未重打包。
