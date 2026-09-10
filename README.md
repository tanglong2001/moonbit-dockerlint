# Dockerfile 解析与检查

本地 MoonBit 0.3.0。解析指令、行号、RUN/COPY heredoc，提供多阶段依赖分析与一组 Dockerfile 检查规则。
所有代码、浏览器引擎、命令行、测试和审查材料保存在本独立仓库，没有执行镜像构建。

## 本地审查

```powershell
node tools/cli.mjs --file review.Dockerfile
node tools/cli.mjs --file review.Dockerfile --stages
node tools/cli.mjs --file review.Dockerfile --diagnostics --fail-on error
node tools/cli.mjs --file review.Dockerfile --diagnostics --no-inline
```

`--diagnostics` 输出带 file/line/code/level/message 的 JSON 数组；`--stages` 输出阶段和依赖。
可用 --input 或 UTF-8 标准输入；--json 为通用 CLI 信封。--no-inline 禁用源文件内规则忽略。
--fail-on 可选 error、warning、none（默认）；退出码：0 完成、1 宿主/参数错误、2 解析/阶段错误、3 达到诊断阈值。
网页 `./start-review.ps1` 沿用文本诊断入口，已支持本轮新语法与忽略注释。

## API 与实现范围

- parse(source) 返回 Instruction，保留物理 line/end_line、arguments 和 heredocs。
  HereDoc 保留分隔符、正文、是否去除制表符及是否允许展开的标记；本库不执行展开。
- Instruction.split_arguments() 分离前导 --key=value 选项，读取 JSON 字符串数组和普通引号参数。
  flags 映射返回重复选项的最后一个值，完整源参数仍保留全部选项。
- analyze_stages(instructions) 输出阶段序号、来源镜像、名字和依赖边，检查循环与无效索引。
  COPY 支持引用命名阶段、数字索引；未命中阶段名的值可以是外部镜像，不会发出网络请求。
- lint(instructions) 返回未忽略的诊断；check(source, ignore_codes?, honor_inline?) 应用忽略规则。
- Diagnostic.severity()、report_json(source, filename?, honor_inline?) 提供结构化审查结果。

RUN/COPY 支持普通、引号、反斜线转义与 <<- 制表符 heredoc 分隔符，一条指令最多 16 个。
正文中的注释、FROM 和空行不会变成 Dockerfile 指令；行号覆盖至结束分隔符。
普通引号内的 <<、算术位移以及 shell 注释里的 << 不会被识别为 heredoc。
parser directive 支持不区分大小写的键和空白，普通注释/空行后结束 directive 区域，重复指令报错。

## 本轮检查增强

新增/完善多个源文件目标目录约束 DL3021、非法 ONBUILD DL3043、重复 CMD/ENTRYPOINT DL4003/DL4004、
SHELL JSON 要求 ML1006、COPY/ADD 参数数量 ML1007，以及阶段循环 ML1010。
继承前一命名阶段的 pipefail 设置；管道扫描忽略 ||、引号、转义和注释。
ADD 的 URL 和常见压缩包后缀不再无条件触发 DL3020；这是文件名判断，没有读取文件内容。
已有镜像标签、root 用户、WORKDIR、COPY 自引用、MAINTAINER 等规则保留。
ML 规则为本地结构检查；DL 规则编号对应 hadolint，但覆盖范围并不完全一致。

支持以下注释，规则名用逗号分隔，允许用第二个 # 写原因：

```dockerfile
# hadolint global ignore=DL3007 # local policy
FROM alpine:latest
# hadolint ignore=DL3002 # applies to the next instruction
USER root
```

heredoc 正文和续行内部的注释不能修改忽略策略；全局与逐指令忽略可由 honor_inline=false 统一关闭。
解析错误不会被规则忽略选项吞掉。重复 CMD/ENTRYPOINT 诊断由旧 ML1004 改为对应 DL 规则号。

## 验证与剩余差距

本轮旧功能 6 项 JS 测试通过；新增 4 组专项测试通过，最终忽略/严重程度修补又验证 1 组；
JSON/阶段图和 5 种 CLI 阈值/错误场景通过。记录见 evidence/extended-focused-validation.json。
运行 ./verify.ps1 可完整验证本项目；本轮没有重跑其他 19 个项目、没有启动 Docker 构建或独立 hadolint 对照。

仍缺 ShellCheck 级别的 shell AST 和大量包管理器规则、完整 heredoc shell 语法/正文检查、
变量展开与 ARG/ENV 作用域、完整 Windows 转义、HEALTHCHECK/端口/标签规则与更多输出格式。
当前管道检查仍是词法扫描；ADD 后缀判断不等于归档检测，不能宣称完整 Dockerfile 或 hadolint 兼容。
源长度限 1,000,000 UTF-16 单元；阶段分析限 256 个阶段。

参照 [Dockerfile 官方文档](https://docs.docker.com/reference/dockerfile/)和
[hadolint 规则与忽略说明](https://github.com/hadolint/hadolint)自行实现，未复制源码或测试集。
原创代码 MIT；查重证据见 DUPLICATION.md。CI 配置不代表远端 CI 已运行。
全部仅本地，未上传、未发布；localreview 为本地命名空间。旧 ZIP/bundle 保持历史快照，本轮未重打包。
