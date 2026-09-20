# 常见 shell 检查 · 0.5.0

新增六个常见编号的有限词法检查：SC2005（echo 包裹整个命令替换）、SC2006（反引号）、SC2035（rm/cp/mv 的裸通配符选项歧义）、SC2046（未引用命令替换）、SC2064（trap 字符串提前进行命令替换）、SC2088（引号内的 ~/）。跟随原有配置支持忽略、行内抑制、级别覆盖和多种报告格式。

支持单/双引号、转义、拼接、嵌套命令替换、重定向与常见安全上下文。exec JSON 不作 shell 解释；显式非 POSIX SHELL 不运行新增检查；命名阶段继承 SHELL，新的基础镜像重置。诊断合并到 RUN 起始行，与对照中的 Hadolint 行号一致。

验证：官方 Hadolint 2.15.1 二进制（SHA256 c7187db94eeeeca956519a6af171adc31453941a1e777961f6e680f697c8c507）全新 72 个输入，六编号的代码/行号/级别 72/72 一致；其他原生诊断完整保留但不纳入相等判断。包含正例与引号、转义、赋值、数值 seq、heredoc 数据、PowerShell、阶段继承、行内忽略等反例。参考产生脚本 tools/shell-oracle.py，回放 tools/compare-shell.mjs，原始记录 evidence/shell-reference.json。

完整本地回归：JS/Wasm-GC 各 17 组（包含 72 个新增原生金标）；原有 189 个 DL 对照仍为 175 一致、14 项既有已解释差异、无新增不明差异。CLI/报告/9 个运行时组及 307 项健壮性检查通过。最终提交指纹见 evidence/shell-upgrade.json。

边界：不是完整 ShellCheck AST/数据流分析。SC2035 目前限 rm/cp/mv 与 *、? 前缀；SC2064 不推断变量赋值后的值；不承诺六个编号在任意 shell 程序的所有分支都兼容。函数、数组、复杂条件、任意命令输出类型、嵌套解释器和 Windows shell 仍未覆盖。本轮没有新增 SC2059/SC2162：实际参考工具并未报告试验中的 printf/read 情形，不能凭记忆伪造 Hadolint 一致性。
