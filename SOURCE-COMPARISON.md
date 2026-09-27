# 完整 Dockerfile 快照比较 · 0.10.0

任务：给定两份完整Dockerfile，解释可能受影响的构建目标，避免调用者手填变更行遗漏。MoonBit函数 `compare_build_sources(before, after)` 返回 `SourceComparison`，包含两侧行号数组与既有双图影响报告。JS桥接为 `compare_sources`。

算法只移除完全相同的公共行前缀与不重叠公共行后缀，将剩余连续区间全部纳入。比较保留CRLF/LF和最后换行差异；不做语义等价推断，不解析git diff。两次相距很远的修改可能把中间未变阶段也纳入，甚至因中间FROM变成全目标保守报告。这是可解释的多报，不能称最小修改集。`impact.conservative`仍表示图不确定性；它为false也不表示行区间最小。

每侧核心上限1,000,000 UTF-16单位、10,000物理行（末尾空行也计数），超限拒绝；解析、阶段环与既有图限制继续生效。删光全部构建阶段是无效输入，不给部分报告。旧 `compare_build_impact` 仍供已拥有可靠坐标的消费者使用。

```sh
moon build --target js
node -e "require('node:fs').copyFileSync('_build/js/debug/build/cmd/web/web.js','web/engine.mjs')"
node tools/compare-sources-cli.mjs --before examples/buildkit-closures/original.Dockerfile --after examples/buildkit-closures/copy-test-to-app-base.Dockerfile
```

Node也可导入 `compareDockerfileSources({before, after})`。文件入口严格读取UTF-8普通文件，每侧最多1,000,000字节；拒绝坏编码及读取期间长度变化。源文件必须保持稳定，不是并发文件系统快照。宿主仅读取文件、写可选JSON报告；worker限制30秒/256MiB old-generation。两个源文件SHA256随报告返回。`--out`仅创建新文件，不覆盖已有结果。退出0表示分析完成，3表示图有保守不确定性，1表示参数/输入/宿主错误；成功退出不表示无需构建。

已验证4组MoonBit公共API测试（JS/Wasm-GC）：新增/删除与移除依赖、分散修改、换行/指令变化、坏输入/资源上限。文件宿主自动定位两份固定BuildKit样例的第22/40行并核对影响目标；另核对删除、输出不覆盖、保守退出码、坏UTF-8、大小和参数。两份样例复用此前保存的BuildKit独立LLB证据，本次没有再次执行BuildKit或Docker构建。新宿主检查接入CI配置，尚无远端执行结论。

只解释Dockerfile显式图，未求解上下文文件变化、外部镜像、ONBUILD、命名context和缓存。没有确认使用方；本轮修复接入可靠性，不把已有diff或构建图概念宣称原创。实跑回执见 [LOCAL-CHECKS](evidence/source-comparison-20260927/LOCAL-CHECKS.json)。
