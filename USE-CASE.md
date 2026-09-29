# 审阅一次构建输入变化

一个仓库同时生成应用和文档。审阅者需要知道：修改应用源文件会经过哪条 COPY 链到达 release；文档是否是独立目标；修改 ignore 后是否把 RUN bind 的配置输入漏掉。

按 README 构建后执行 `node examples/run-context.mjs`。脚本在新临时目录复制原创 `examples/context`，输出 normal.json、excluded-input.json、stderr 和 report.json，并实际断言：

1. 显式 Dockerfile 图中 release 的 required 为 [0,2]；src/app.txt 的传播为 compile/release，见证为 [2,0]。
2. docs/manual.md 的 COPY 属于独立 docs stage；但 compile 使用未提供镜像 profile 的 alpine 外部镜像，未知 ONBUILD 使这次报告保守扩大到三个目标并退出 3。该示例不宣称可以只重建 docs 或安全跳过其他目标。
3. src/generated/keep.txt 由 ! 规则重新包含，drop.txt 仍排除。
4. 在临时副本给 ignore 加入 config 后，指出第 3 行 bind 输入被排除，CLI 退出 2；来源行与不确定原因仍可在报告中检查。

这是可修改的完整离线使用流程，没有执行 Docker build，也不代表客户部署。`tools/test-context-public.mjs` 另在未改动的官方教程源码上断言两个文件的影响集合；出处和固定提交见 TESTING.md。两类证据分开保存。
