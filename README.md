# MoonBit 构建输入与阶段影响分析

本项目仓库：**https://github.com/tanglong2001/moonbit-dockerlint**

模块 `tanglong2001/dockerlint`，0.9.0，MIT AND BSD-3-Clause（Go 匹配顺序适配及宿主依赖另见 THIRD-PARTY）。本轮新增本地构建目录分析：解释 COPY/ADD/bind 实际读取哪些输入、哪些被忽略、某个文件变化通过哪些引用影响目标阶段。旧规则检查与行号影响接口继续可用。

## 一次可复现的任务

安装 MoonBit、Node.js 24，在仓库根目录执行：

```sh
npm ci --ignore-scripts
moon build --target js
node -e "require('node:fs').copyFileSync('_build/js/debug/build/cmd/web/web.js','web/engine.mjs')"
node examples/run-context.mjs
```

脚本在新临时目录完成两次分析并断言结果：修改应用文件只传播到 compile/release，文档修改传播到 docs；随后模拟 `.dockerignore` 误排除配置目录，指出第 3 行 bind 输入被排除。保留 JSON 报告和 stderr，打印输出目录。样例是原创，未运行 Docker build。

分析自己的固定目录快照：

```sh
node tools/context-cli.mjs --context ./examples/context --target release --changed-file src/app.txt
```

输出包含源路径、包含/排除的清单索引、指令行号、依赖路径和未知原因。`--changed-file` 可重复，支持已删除但仍被源码表达式引用的路径；`--build-arg KEY=VALUE` 提供参数；`--file` 选择上下文内部 Dockerfile；`--out` 仅写入不存在的文件。详见 [CONTEXT.md](CONTEXT.md)。

## 实现与已有项目

MoonBit 核心负责指令/变量语义、COPY 通配符、目录输入映射、FROM/COPY/RUN mount 图、环检查及文件到阶段的影响路径。`analyze_context` 接收宿主提供的清单，可在 JS 或 WasmGC 后端使用；不依赖 Node 才能调用纯核心。

Node 宿主负责目录清单、文件读取和 CLI，复用固定版本 `@balena/dockerignore` 1.0.2 的匹配器；不是新写一个 ignore 库。该旧库在部分模式上不等同现代 Moby，适配器对未支持范围明确报错。[现有 MoonBit ignore 库与其他实现对照](DUPLICATION.md)、[来源与许可](THIRD-PARTY.md)。Docker/BuildKit 已有更完整的求解器，本项目不主张构建图、通配符或规则首创。

这一轮提交的可评估贡献是无需启动 Docker daemon 的可复用 MoonBit 输入解释接口，以及可直接用于代码审阅的本地分析流程。没有已确认使用方；样例与公开仓库分析不代表用户部署。

## 验证与适用范围

本轮 JS/WasmGC 核心各 30 项；7 组宿主流程验证实际目录、独立 ignore 文件、退出码、链接边界与输出不覆盖。Go1.27.1 `filepath.Match` 的 3,318 组独立对照和 Moby v0.6.0 的 1,069 组受支持 ignore 输入一致；另记录 7 个明确拒绝的规则/路径情况，未把拒绝当作匹配成功。

Docker 官方 `docker/getting-started` 固定提交的未修改源码归档上，目标闭包及两组文件影响集合均通过断言。完整命令、哈希及证据见 [TESTING.md](TESTING.md)，0.8.0历史证据在 `evidence/expansion-20260923/`，0.9.0当前证据在 `evidence/closures-20260927/LOCAL-CHECKS.json`，0.7.0 原始记录保留。

分析采用 Linux 路径、当前 Dockerfile 和当前 ignore 规则；不读取外部镜像元数据、不执行 RUN、不解析命名 context 覆盖/链接内容或 COPY --exclude。未知输入显式返回 unknown。宿主拒绝 ignore 字符类、反斜线转义等未核实语法，以及 `?` 与非 BMP 文件名的组合。上限与所有限制见 CONTEXT。报告不能作为“安全跳过构建”的凭证，也不计算 Docker 缓存命中率或镜像体积。

0.9.0 修复 COPY 引号丢失及 ARG/ENV 未知状态丢失：字面 `$NAME` 不再误作变量，未知来源跨赋值和继承传播，外部镜像 ENV 未读取时不假定为空。新增 8 组回归与 BuildKit v0.25.1 的 98 项展开一致对照；4 项未知变量策略差异单列。详见 [展开边界与复现](EXPANSION.md)。

## 复审交接

针对“规则罗列”意见，0.9.0 的主任务已改为构建目录与阶段的解释分析；旧 linter 不再是申报主贡献。针对链接问题，报名表应完整填写上述仓库 URL。

2026-09-23 只读拉取公开 `main`：`91b348323871bc3ed32f3d5686280774d56a9fdf`，内容与本地 0.6.0 基线一致。本轮 0.9.0 尚未推送；团队同步后再更新报名材料。[申报草稿](PROPOSAL.md)、[逐条答复](REVIEW-RESPONSE.md)。是否达到赛事价值要求由组委会判断。

旧入口和历史验证分别保存在 [0.6.0 说明](README-BEFORE-CONTEXT.md) 与 [更早完整用法](README-BEFORE-VALUE-REWORK.md)，不得作为本轮版本状态引用。

CI固定的编译器与标准库版本见 [TOOLCHAIN.md](TOOLCHAIN.md)；升级时需同时核对生成产物。

## 0.9.0：修改前后双快照影响（2026-09-27）

`compare_build_impact(before, after, changed_before=[...], changed_after=[...])` 以各自快照的1起始行号接收完整变更集合，并合并旧图与新图的影响。删除COPY依赖时仍保留旧路径；阶段插入、删除、改名或重排不能稳定对齐时保守报告所有快照目标。`changed_before`/`changed_after` 必须由调用者正确提供；该接口不解析git diff，也不能检验调用者遗漏了哪些变更。

`node tools/test-buildkit-closures.mjs` 在固定 docker/getting-started Dockerfile及两个明确标注的修改副本上复核21组目标闭包、147项变更阶段可达判断和2组双快照比较。参考不是另写一遍图算法，而是 BuildKit v0.25.1 的 `Dockerfile2LLB` 实际输出；[原始回执](examples/buildkit-closures/oracle.json)和[Go调用器](tools/closure-reference/main.go)可查。调用器用空ONBUILD的假Linux/amd64镜像配置，无daemon、registry取镜像或build，因此只证明Dockerfile显式依赖子集；不能推导真实镜像闭包、缓存失效或安全跳过构建。

来源：[docker/getting-started固定提交](https://github.com/docker/getting-started/tree/94d4031393bf8ebfd38aae640910f9435579d76b)，Apache-2.0；原文件和两个单行修改副本均保留许可与SHA256。该公开教材不是本项目用户。已有 BuildKit 同样能离线转换，不能把“无daemon”说成对它的独占优势；这里的可评估价值是可嵌入MoonBit的有界解释接口、变更路径和目录分析，是否足够作为参赛扩展由组委会判断。

参考观察边界：LLB操作标签不包含只有CMD元数据的dev阶段。对照保留原始标签列表，并显式加入所选target；21组中3组dev因此是“可观察操作阶段 + 所选target”。没有把该探针宣称为任意Dockerfile全部逻辑阶段的通用oracle。
