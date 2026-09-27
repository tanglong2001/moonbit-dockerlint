///|
test "complete sources handle insert deletion and removed dependency" {
  let base = "FROM scratch AS a\nCOPY a /a\nFROM a AS release"
  let inserted = "FROM scratch AS a\nCOPY a /a\nRUN echo changed\nFROM a AS release"
  let add = @dockerlint.compare_build_sources(base, inserted)
  assert_eq(add.before_lines, [])
  assert_eq(add.after_lines, [3])
  assert_eq(add.impact.affected_targets, ["a", "release"])
  let remove = @dockerlint.compare_build_sources(inserted, base)
  assert_eq(remove.before_lines, [3])
  assert_eq(remove.after_lines, [])
  assert_eq(remove.impact.affected_targets, ["a", "release"])
  let old = "FROM scratch AS a\nCOPY a /a\nFROM scratch AS b\nCOPY --from=a /a /a\nFROM b AS release"
  let new = "FROM scratch AS a\nCOPY a /a\nFROM scratch AS b\nCOPY b /b\nFROM b AS release"
  let result = @dockerlint.compare_build_sources(old, new)
  assert_eq(result.before_lines, [4])
  assert_eq(result.after_lines, [4])
  assert_eq(result.impact.before.required, [0, 1, 2])
  assert_eq(result.impact.after.required, [1, 2])
  assert_eq(result.impact.affected_targets, ["b", "release"])
}

///|
test "separate edits include middle stage instead of missing a changed branch" {
  let before = "FROM scratch AS a\nRUN echo old\nFROM scratch AS middle\nRUN echo fixed\nFROM scratch AS b\nRUN echo old"
  let after = "FROM scratch AS a\nRUN echo new\nFROM scratch AS middle\nRUN echo fixed\nFROM scratch AS b\nRUN echo new"
  let result = @dockerlint.compare_build_sources(before, after)
  assert_eq(result.before_lines, [2, 3, 4, 5, 6])
  assert_eq(result.after_lines, [2, 3, 4, 5, 6])
  assert_eq(result.impact.affected_targets, ["a", "middle", "b"])
  assert_true(result.impact.conservative)
  let same = @dockerlint.compare_build_sources(before, before)
  assert_eq(same.before_lines, [])
  assert_eq(same.after_lines, [])
  assert_eq(same.impact.affected_targets, [])
}

///|
test "snapshot comparison retains physical newline and directive changes" {
  let source = "FROM scratch AS a\nRUN echo ok"
  let newline = @dockerlint.compare_build_sources(source, source + "\n")
  assert_eq(newline.before_lines, [])
  assert_eq(newline.after_lines, [3])
  assert_true(newline.impact.conservative)
  let crlf = @dockerlint.compare_build_sources(
    source, "FROM scratch AS a\r\nRUN echo ok",
  )
  assert_eq(crlf.before_lines, [1])
  assert_eq(crlf.after_lines, [1])
  assert_true(crlf.impact.conservative)
  let directive = @dockerlint.compare_build_sources(
    "# syntax=docker/dockerfile:1\n" + source,
    "# syntax=docker/dockerfile:1.7\n" + source,
  )
  assert_eq(directive.impact.affected_targets, ["a"])
  assert_true(directive.impact.conservative)
}

///|
test "snapshot limits and malformed input fail without partial reports" {
  let valid = "FROM scratch"
  for
    bad in [
      "",
      "RUN echo no-stage",
      valid + "\n".repeat(10000),
      "x".repeat(1000001),
    ] {
    assert_true(
      try {
        ignore(@dockerlint.compare_build_sources(valid, bad))
        false
      } catch {
        _ => true
      },
    )
  }
}
