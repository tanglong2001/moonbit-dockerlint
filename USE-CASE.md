# 解释多阶段构建的修改影响

在不运行构建的情况下解释目标依赖、修改行可传播到的阶段和对应引用行；依赖不能静态确定时向调用方明确返回不确定。保留已有规则检查作为辅助功能。

## 输入、操作、输出

原创可构建结构样例；本轮仅做静态分析，未实际拉取镜像/构建。

最简运行：先按 README 构建，然后 `node examples/run-use-case.mjs`。它自动创建输出目录并执行下面命令。下列 `{out}` 是运行器替换的实际目录，不是直接输入 shell 的变量；stdin 文件由运行器传递，以避免 Windows 与 POSIX 重定向差异。

```text
node tools/cli.mjs --file examples/impact.Dockerfile --impact --target release --changed-line 2
```

观察：required=[0,1,2,3]，受影响阶段为 0/2/3，docs 阶段不受此静态路径影响，release 证据路径为 [3,2,0]。

每一步输出见实际目录下 `step-N.stdout.txt` / `step-N.stderr.txt`；本轮已保存回执见 `evidence/value-rework-20260922/use-case.json`。

## 为什么保留这个实现

现阶段保留图分析原型与可复查接口；不以多加规则、改名或当前克隆成功证明选题异议已经解除。

Docker/BuildKit 自身已有构建依赖求解，mizchi/syntree.mbt 已有 Dockerfile 分词。新增的是限定范围的 MoonBit 图查询 API 和解释输出，不是新算法，也不声称替代 BuildKit。

## 不能由样例推出的结论

用户已确认暂无明确使用方或独特需求。图分析只针对当前文件的显式依赖，忽略外部镜像元数据、命名 context 覆盖、上下文文件和缓存状态；不得用它直接证明某次构建可以跳过。动态引用、ONBUILD 等保守报告。

该样例是可修改的使用入口，不能证明存在真实用户、全部兼容或性能领先。继续投入的依据应是明确的输入或接入需求；若对接任务用既有成熟库即可完成，应优先复用而不是为保留参赛数量扩张本项目。
