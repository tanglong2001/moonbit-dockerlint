# 构建目录分析接口 0.7.0

`analyze_context(source, entries, target?, changes?, build_args?, control_files?)` 是纯 MoonBit API；结构定义见 pkg.generated.mbti。清单项包含规范相对 `/` 路径、file/directory/symlink 类型及宿主计算的 excluded 标记。核心不会自行读取文件或推断 ignore 规则。

`context_plan` 是 JS JSON 桥接；Node `inspectBuildContext(options)` 在独立 worker 中枚举固定目录，并返回 `moonbit-build-context/1` 报告。CLI 参数见 `node tools/context-cli.mjs --help`。

## 读报告

- `entries` 是清单；输入和所选目标的列表通过整数索引引用它，避免重复大份路径数组。
- `inputs` 包含 stage、原始行号、展开后 source、included/excluded 索引、status 与 note。status 分为 resolved/excluded/missing/unknown/external。context 根存在，即使全部文件被忽略也可解析为一个空根输入。
- `graph.required` 是所选目标的显式依赖闭包；`selected_entries` 是闭包内已知输入的并集。`missing_lines` 只包含该闭包的 missing/excluded 输入行。
- `changes[].targets` 列出当前每个阶段的影响状态；path 从目标向直接引用改变文件的阶段给出一条见证。独立阶段可以返回 affected=false，但仅表示当前静态图中未找到路径。
- 未知源表达式或图引用使未排除文件变化保守传播；Dockerfile/有效 ignore 控制文件变化也保守传播。当前被排除的普通文件无有效输入，已删除路径仍按当前表达式匹配。
- `summary` 字节数是当前文件长度总和和已知输入总和，不是传输包/镜像大小；inventory_sha256 仅散列路径、类型、excluded 和长度，不是内容摘要。报告不包含文件正文。

CLI 退出码：0 所选已知输入存在；2 所选输入缺失/排除；3 存在分析不确定性且无已确认缺失；1 输入/语法/宿主失败。非零时结合具体 JSON 或 stderr 解读。

## 明确边界

采用 Linux COPY 的 Go filepath.Match 语法；** 与 * 一样不会跨分隔符，区别于 `.dockerignore` 的递归 **。COPY 字符类和 Unicode 边界经过独立 Go 对照；非法模式统一拒绝，而 Go 可能在未到达的模式后缀上提前返回不匹配。

宿主复用 Balena ignore，支持大小写敏感的普通路径、*、**、?、首列注释和 ! 否定顺序。Dockerfile 专属 `.dockerignore` 优先于根文件，排除目录仍遍历以允许子项重新包含。字符类、转义和 `[ ] \ ( ) { } + | ^ $` 类语法明确拒绝；存在 ? 时含非 BMP 字符的路径也拒绝。需要完整 Moby 模式时，可由其他宿主提供已过滤清单给 MoonBit 核心。

链接不跟随、不计算目标内容；指定控制文件不得经目录链接逃出上下文。目录在扫描期间应保持不变，这不是原子文件系统快照。Windows 宿主仍解释 Linux 路径，不能代表 Windows 容器语义。

只处理本地 context。外部 ADD 保留 external 状态；远程镜像、远程 Git、命名 context、外部 ONBUILD 元数据、RUN 运行结果、缓存均未求解。COPY/ADD --exclude、未知变量、带引号或重复 mount 选项等返回 unknown。没有计算“旧版本与新版本”两套构建图，不能自动决定跳过构建。

## 资源限制

Dockerfile 1 MiB、ignore 64 KiB/2048 行/每行 2048 字符；清单 20,000 项、深度 64、相对路径 2048 字符；2048 个本地输入、256 个变化路径/宿主 build args；核心模式匹配估算预算 50M；宿主 worker 30 秒及 256 MiB old-generation 限制。超过限额报错。宿主不执行源码中的命令、不拉取镜像，报告新文件禁止覆盖。
