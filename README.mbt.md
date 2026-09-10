# 可执行 API 示例

增加一站式解析检查与规则忽略 API，修复非法 UTF-16 崩溃。这些例子调用公开 API，并随 `moon test` 执行。

```mbt check
///|
test "explicit code suppression preserves parse errors" {
  let src = "FROM ubuntu\nRUN apt-get install curl\n"
  let ds = @dockerlint.check(src)
  assert_true(!ds.is_empty())
  let ignored = ds.map(d => d.code)
  assert_eq(@dockerlint.check(src, ignore_codes=ignored), [])
  assert_true(
    try {
      ignore(@dockerlint.check("RUN [", ignore_codes=ignored))
      false
    } catch {
      _ => true
    },
  )
}
```

限制：规则数量和 shell 分析远少于 hadolint，未提供完整 Dockerfile 语义。
