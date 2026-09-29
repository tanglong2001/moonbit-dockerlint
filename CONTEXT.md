# 构建目录分析接口 0.12.0

`analyze_context(source, entries, target?, changes?, build_args?, control_files?, platform?, image_metadata?)` 是纯 MoonBit API；结构定义见 pkg.generated.mbti。清单项包含规范相对 `/` 路径、file/directory/symlink 类型及宿主计算的 excluded 标记。核心不会自行读取文件或推断 ignore 规则。

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

只处理本地 context。外部 ADD 保留 external 状态；不拉取远程镜像或 Git；命名 context、非空 ONBUILD、RUN 运行结果、缓存均未求解。可选离线配置只用于确认空 ONBUILD，详见 [IMAGE-PROFILES](IMAGE-PROFILES.md)。COPY/ADD --exclude、未知变量、带引号或重复 mount 选项等返回 unknown。没有计算“旧版本与新版本”两套构建图，不能自动决定跳过构建。

外部基础镜像的 `ONBUILD` 未知时，未排除的文件变化会保守传播到所有外部 base 阶段及其下游；已排除的普通文件不会触发该传播。0.12.0 可以接收宿主已验证的镜像元数据；Node 入口核验原始摘要链，核心只在精确匹配且空 ONBUILD 时移除此项未知，保留其他不确定性。调用方明确提供且 Dockerfile 在该阶段声明的 build arg 可解析对应 COPY 路径，即使 base ENV 未读取；后续 Dockerfile `ENV` 仍优先。未提供值且可能受 base ENV 影响的 ARG 仍返回 unknown。

## 资源限制

Dockerfile 1 MiB、ignore 64 KiB/2048 行/每行 2048 字符；清单 20,000 项、深度 64、相对路径 2048 字符；2048 个本地输入、256 个变化路径/宿主 build args；核心模式匹配估算预算 50M；宿主 worker 30 秒及 256 MiB old-generation 限制。超过限额报错。宿主不执行源码中的命令、不拉取镜像，报告新文件禁止覆盖。

## 0.8.0 变量信息

COPY/ADD 源表达式保留原始引号直到展开。带空格的源必须用 JSON 形式；shell 形式的空白分组返回 unknown，非默认反引号 escape 指令明确拒绝。反斜线 shell 源仍为 unknown。

ARG/ENV 未知值跨赋值、全局参数重声明及命名父阶段传播；字面美元符号数据与未知占位符分开跟踪。未读取外部镜像的 ENV 时，ARG 可能被镜像 ENV 覆盖，默认分支也可能改变，因此相关输入保持 unknown；本 Dockerfile 的明确 ENV 赋值可消除对应键的未知状态。

`VariableScope` 新增 uncertain_arguments、uncertain_environment、unknown_base_environment。arguments/environment/expanded 保留近似展示值；调用方必须联合这些字段及 unresolved 判断，不能将展示字符串当作已经证明的文件来源。纯 `expand_variables` 仍只根据调用方给出的已知值映射工作。详细例子见 EXPANSION.md。

## 0.9.0：修改前后双快照影响（2026-09-27）

`compare_build_impact(before, after, changed_before=[...], changed_after=[...])` 以各自快照的1起始行号接收完整变更集合，并合并旧图与新图的影响。删除COPY依赖时仍保留旧路径；阶段插入、删除、改名或重排不能稳定对齐时保守报告所有快照目标。`changed_before`/`changed_after` 必须由调用者正确提供；该接口不解析git diff，也不能检验调用者遗漏了哪些变更。

`node tools/test-buildkit-closures.mjs` 在固定 docker/getting-started Dockerfile及两个明确标注的修改副本上复核21组目标闭包、147项变更阶段可达判断和2组双快照比较。参考不是另写一遍图算法，而是 BuildKit v0.25.1 的 `Dockerfile2LLB` 实际输出；[原始回执](examples/buildkit-closures/oracle.json)和[Go调用器](tools/closure-reference/main.go)可查。调用器用空ONBUILD的假Linux/amd64镜像配置，无daemon、registry取镜像或build，因此只证明Dockerfile显式依赖子集；不能推导真实镜像闭包、缓存失效或安全跳过构建。

来源：[docker/getting-started固定提交](https://github.com/docker/getting-started/tree/94d4031393bf8ebfd38aae640910f9435579d76b)，Apache-2.0；原文件和两个单行修改副本均保留许可与SHA256。该公开教材不是本项目用户。已有 BuildKit 同样能离线转换，不能把“无daemon”说成对它的独占优势；这里的可评估价值是可嵌入MoonBit的有界解释接口、变更路径和目录分析，是否足够作为参赛扩展由组委会判断。

参考观察边界：LLB操作标签不包含只有CMD元数据的dev阶段。对照保留原始标签列表，并显式加入所选target；21组中3组dev因此是“可观察操作阶段 + 所选target”。没有把该探针宣称为任意Dockerfile全部逻辑阶段的通用oracle。

## 0.10.0：自动选择完整改动范围

面向完整前后Dockerfile，优先使用 `compare_build_sources` 或 `tools/compare-sources-cli.mjs`。0.9.0低层行号接口保留原合同；新接口自动覆盖全部文本差异，不依赖用户手填坐标。见 [SOURCE-COMPARISON](SOURCE-COMPARISON.md)。目录文件变化、镜像元数据和缓存仍不在这个双文本接口内。
