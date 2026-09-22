# 0.8.0：构建输入展开的确定性边界

旧版先用通用分词器去掉 COPY 单引号，再展开变量，导致 `ARG NAME=actual` 后的 `COPY '$NAME' /out` 错认成 actual。现在保留原始引号，只在展开时处理；包含空格的源使用 `COPY ["space name", "/out"]`。BuildKit 的 shell COPY 按空白拆分，不能把 shell 引号分组当作 JSON 形式。

另一个旧问题：`ARG FIRST=$MISSING` → `ENV SECOND=$FIRST` → `COPY $SECOND /out` 可能把保留下来的 `$MISSING` 当成确定文件名。如果目录恰好有同名文件，旧版报告 resolved；现在不确定性跨赋值和父阶段继承传递，返回 unknown。`ENV LITERAL='$MISSING'` 是明确字面数据，与未知占位符不同。

外部镜像环境未读取。例如 `FROM alpine` 后 `ARG NAME=actual` 不能证明镜像没有同名 ENV；`${INPUT:-fallback}` 也不能证明默认分支真的会用到。现在保守标记 unknown，直到本文件明确设置相应 ENV。命名父阶段继承这些状态；`FROM scratch` 重置未读取镜像环境的状态。没有执行拉镜像或读取凭据。

`analyze_variables` 的快照新增 uncertain_arguments、uncertain_environment、unknown_base_environment；原有字符串保留为近似展示，必须结合这些标记和 unresolved 解读。已知字符串包含美元符号不会被递归展开。遇到未知、带空白的 shell COPY 源及未实现 escape 语义，不据此给出“可跳过构建”的结论。

## 验证范围

`node --test tools/test-context-expansion.mjs` 的 8 组针对上述故障、显式赋值恢复确定性、未知远程 ADD 判别与输入拒绝；Node 宿主第 7 组用实际目录和 CLI 验证退出码 0/3。MoonBit 新增两个核心回归，JS/WasmGC 均执行。最终 8 组在旧版引擎上复现 7 组失败，记录中的基线输出不是当前版本结果。

独立 oracle 位于 tools/expansion-reference，只导入固定 BuildKit v0.25.1 的 shell.ProcessWord；Go js/wasm 保持 Linux 环境变量大小写语义。98 个已知表达式的 COPY/ADD 与 JSON/shell 组合一致，4 个未知变量在本项目保留占位、BuildKit 替为空串的策略差异单独列出。这里没有调用 BuildKit Dockerfile parser、镜像解析器或实际构建器，不能称为完整构建兼容测试。COPY 分词边界另参照固定版本 parser 源码。

在 tools/expansion-reference 中设置 GOOS=js、GOARCH=wasm，执行 `go build -o oracle.wasm .`；从项目根设置 EXPANSION_ORACLE_WASM 和 GO_WASM_EXEC_NODE（Go SDK lib/wasm/wasm_exec_node.js）的绝对路径，再运行 `node tools/test-expansion-reference.mjs`。可用 EXPANSION_REFERENCE_REPORT 保存 JSON。参考二进制不进入源码包；go.mod/go.sum 锁定依赖。本机以 GOPROXY=direct、GOSUMDB=off 从 Git 来源取依赖，未声称在线 sumdb 校验。

## 主来源

- [Dockerfile 环境替换](https://docs.docker.com/reference/dockerfile/#environment-replacement)
- [BuildKit v0.25.1 shell 展开器](https://github.com/moby/buildkit/blob/v0.25.1/frontend/dockerfile/shell/lex.go)
- [BuildKit v0.25.1 COPY/ADD 分词](https://github.com/moby/buildkit/blob/v0.25.1/frontend/dockerfile/parser/line_parsers.go)
- [BuildKit v0.25.1 指令展开调用](https://github.com/moby/buildkit/blob/v0.25.1/frontend/dockerfile/dockerfile2llb/convert.go)

本次独立对照使用参考库，未复制其实现进运行时。没有宣称首创标准语义、现有用户部署或赛事保证。
