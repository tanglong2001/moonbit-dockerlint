# 完整 Dockerfile 快照比较 · 本地 0.11.0 候选

`compare_build_sources(before, after)` 自动选取完整源码差异，再以两份快照的依赖图合并影响。`SourceComparison` 给出旧/新快照各自的 1 起始物理行号、`diff_exact`、`diff_reason` 与 `impact`；文件 CLI/Node 入口为 `compare_sources`。公开接口 `compare_build_impact` 保持调用方提供行号的原契约。

源码先按完整行驻留为整数身份，再运行最多 1,000,000 单元的 LCS；唯一对齐时保留分离的编辑段和各自坐标。普通替换保持精确；重复保留行存在另一种最优匹配时，或 DP 超过单元预算时，回退到公共前后缀间的完整差异跨度，并设 `diff_exact=false`、在 `diff_reason` 中说明歧义或超预算。源大小为每侧 1,000,000 UTF-16 单位、物理行最多 10,000；宿主文件入口另限每侧 1,000,000 字节。原始换行及尾空行差异保留。

仅当单个 FROM 编辑段在旧/新快照都是同一对齐 stage 的外部字面镜像 token 替换、`--` 参数及其值不含动态变量、`AS` 别名完全相同，且 stage 顺序/命名可稳定对齐时，才直接播种该 stage 并合并前后图依赖。匿名阶段还必须在屏蔽该镜像 token 后保持唯一且不变。不同的 FROM 改动、内部/数字/动态引用、动态平台参数、阶段插删/改名/重排、其他结构变化及无法确认的对齐继续走保守路径；旧图仍参与影响合并，因此移除依赖不会抹掉旧受影响目标。未知外部 `ONBUILD` 上下文影响仍保守，本接口不加载镜像 profile。

Tempo 固定样例的两处分散 digest 改动现在各报第 5、11 行，前后图直接改动阶段为 `[1,2]`，影响目标只为 `tempo-setup` 和最终 `#2`；`ca-certificates` 未改，也不再因中间未改的 FROM 被扩大。结果 `diff_exact=true`、`impact.conservative=false`，与所附 BuildKit v0.25.1 LLB 中发生变化的 setup/最终阶段相符。该回执重放的是固定 BuildKit 输出，不代表本次重新运行 BuildKit。未知镜像 `ONBUILD`、缓存、镜像配置或安全跳过构建均不由此结果证明。

复现来源比较回归（构建过的 `web/engine.mjs` 应与核心一致）：

```sh
moon test source_comparison_test.mbt --target js --deny-warn
moon test source_comparison_test.mbt --target wasm-gc --deny-warn
node tools/test-source-comparison.mjs
node tools/run-tempo-impact.mjs --out evidence/source-precision-20260929/REPLAY.json
```

最小可移植重放需 Node.js 24 或更高版本，并在仓库根目录先运行 `npm ci --ignore-scripts`（加载锁定的 `@balena/dockerignore` 1.0.2）。命令本身不访问网络或 Docker；依赖安装按锁文件获取包。`--out` 必须指定不存在的新路径，不会覆盖旧回执；重复重放需另取新文件名。精确回执、SHA256 和范围见 [TESTING.md](TESTING.md#0110-local-source-precision-review)。

文件 CLI 严格读取 UTF-8 普通文件、检测读取时大小变化，worker 限时 30 秒/256 MiB old-generation。宿主只读源文件，可选 JSON 报告使用创建新文件语义。退出 0 表示分析完成，3 表示影响图存在保守不确定性，1 表示参数、输入或宿主错误；成功退出不代表构建可跳过。
