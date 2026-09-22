# 阶段依赖与修改影响

`build_impact(source, target="release", changed_lines=[2])` 返回可序列化的 MoonBit 结构；CLI 对应 `--impact --target release --changed-line 2`。`--changed-line` 可以重复，行号从 1 开始，针对当前文件。

- `stages` / `edges`：显式 FROM、COPY --from、所有重复 RUN --mount=from 引用；每条边带消费者、依赖、指令行与种类。外部镜像/命名 context 不伪装成本地阶段。
- `required`：所选目标沿已知边的依赖优先遍历结果。若 `conservative=true`，它不是完整依赖清单。
- `targets`：每个阶段是否可能受所给修改行影响；`path` 是从目标到直接修改阶段的一条见证路径，不代表全部路径。
- `uncertainties`：动态引用、ONBUILD、带引号/转义的 mount 选项、修改全局/阶段声明或不在已解析指令内的行。遇到这些情形，有修改行时保守标记所有目标。

无修改行时只查询已知依赖图，不将目标标记为受修改影响。未知目标、越界行、数字阶段越界或依赖环会报错。

## 适用边界

本分析不执行 shell、不拉镜像、不读取镜像 ONBUILD 元数据、不求解 build-arg、不处理命名 context 覆盖，也不知道构建上下文文件、删除行、旧版本图及缓存状态。输入是当前文件中的指令行，不是 git diff。全局/阶段声明变化保守处理，仍不能替代两个版本之间的完整语义比较。`affected=false` 只表示该限定图中未找到这些行的传播路径，**不能据此在 CI 中自动跳过构建**。

`examples/impact.Dockerfile` 为原创结构样例。修改 assets 的第 2 行会沿 RUN mount 和 COPY 到达 release；compiler 与 docs 在该路径之外。本轮执行的是分析器，没有实际运行此 Docker 构建。

## 参考与验证

依赖语义参考 [Dockerfile reference](https://docs.docker.com/reference/dockerfile/)，阶段闭包参考 [Docker 多阶段构建说明](https://docs.docker.com/build/building/multi-stage/)。BuildKit 已经有构建图求解；这里不主张发明该算法。MoonBit 实现通过访问状态检测环，记忆化保留影响见证，避免菱形图反复指数遍历；阶段上限 256。

核心测试包括官方文档的独立分支拓扑、重复 mount、传递 COPY、动态保守路径、ONBUILD、引用环、续行、外部引用及无变化查询。`node tools/test-impact.mjs` 检查实际 CLI。没有把这些测试称作与 BuildKit 实际执行的差分验证。
