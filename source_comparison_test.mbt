///|
test "complete sources handle insert deletion and removed dependency" {
  let base = "FROM scratch AS a\nCOPY a /a\nFROM a AS release"
  let inserted = "FROM scratch AS a\nCOPY a /a\nRUN echo changed\nFROM a AS release"
  let add = @dockerlint.compare_build_sources(base, inserted)
  assert_eq(add.before_lines, [])
  assert_eq(add.after_lines, [3])
  assert_true(add.diff_exact)
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
test "separate edits retain their own coordinates and omit unchanged middle stage" {
  let before = "FROM scratch AS a\nRUN echo old\nFROM scratch AS middle\nRUN echo fixed\nFROM scratch AS b\nRUN echo old"
  let after = "FROM scratch AS a\nRUN echo new\nFROM scratch AS middle\nRUN echo fixed\nFROM scratch AS b\nRUN echo new"
  let result = @dockerlint.compare_build_sources(before, after)
  assert_eq(result.before_lines, [2, 6])
  assert_eq(result.after_lines, [2, 6])
  assert_true(result.diff_exact)
  assert_eq(result.impact.affected_targets, ["a", "b"])
  assert_false(result.impact.conservative)
  let same = @dockerlint.compare_build_sources(before, before)
  assert_eq(same.before_lines, [])
  assert_eq(same.after_lines, [])
  assert_true(same.diff_exact)
  assert_eq(same.impact.affected_targets, [])
}

///|
test "aligned external FROM image edits seed only matching stages in both graphs" {
  let before = "FROM alpine:3.20@sha256:old AS ca-certificates\nRUN apk add ca-certificates\nFROM distroless:debug@sha256:setup-old AS tempo-setup\nRUN setup\nFROM distroless:runtime@sha256:runtime-old\nCOPY --from=ca-certificates /cert /cert\nCOPY --from=tempo-setup /etc/passwd /etc/passwd"
  let after = "FROM alpine:3.20@sha256:old AS ca-certificates\nRUN apk add ca-certificates\nFROM distroless:debug@sha256:setup-new AS tempo-setup\nRUN setup\nFROM distroless:runtime@sha256:runtime-new\nCOPY --from=ca-certificates /cert /cert\nCOPY --from=tempo-setup /etc/passwd /etc/passwd"
  let result = @dockerlint.compare_build_sources(before, after)
  assert_eq(result.before_lines, [3, 5])
  assert_eq(result.after_lines, [3, 5])
  assert_true(result.diff_exact)
  assert_false(result.impact.conservative)
  assert_eq(result.impact.before.changed_stages, [1, 2])
  assert_eq(result.impact.after.changed_stages, [1, 2])
  assert_eq(result.impact.affected_targets, ["tempo-setup", "#2"])
  assert_eq(result.impact.before.targets[0].affected, false)
  assert_eq(result.impact.after.targets[0].affected, false)
}

///|
test "from image precision rejects stage references and structural changes" {
  let from_stage_before = "FROM alpine AS base\nRUN echo base\nFROM base AS app"
  let from_stage_after = "FROM alpine AS base\nRUN echo base\nFROM scratch AS app"
  let from_stage = @dockerlint.compare_build_sources(
    from_stage_before, from_stage_after,
  )
  assert_true(from_stage.impact.conservative)
  assert_eq(from_stage.impact.affected_targets, ["base", "app"])
  let dynamic_platform = @dockerlint.compare_build_sources(
    "FROM --platform=$BUILDPLATFORM alpine:3.20 AS app", "FROM --platform=$BUILDPLATFORM alpine:3.21 AS app",
  )
  assert_true(dynamic_platform.impact.conservative)
  let renamed = @dockerlint.compare_build_sources(
    "FROM alpine AS base\nRUN echo base", "FROM alpine AS renamed\nRUN echo base",
  )
  assert_true(renamed.impact.conservative)
  let inserted = @dockerlint.compare_build_sources(
    "FROM alpine AS base\nRUN echo base\nFROM base AS app", "FROM alpine AS base\nRUN echo base\nFROM alpine AS tools\nRUN echo tools\nFROM base AS app",
  )
  assert_true(inserted.impact.conservative)
  let deleted = @dockerlint.compare_build_sources(
    "FROM alpine AS base\nRUN echo base\nFROM alpine AS tools\nRUN echo tools\nFROM base AS app",
    "FROM alpine AS base\nRUN echo base\nFROM base AS app",
  )
  assert_true(deleted.impact.conservative)
  let reordered = @dockerlint.compare_build_sources(
    "FROM alpine AS a\nRUN echo a\nFROM alpine AS b\nRUN echo b", "FROM alpine AS b\nRUN echo b\nFROM alpine AS a\nRUN echo a",
  )
  assert_true(reordered.impact.conservative)
  let anonymous_reorder = @dockerlint.compare_build_sources(
    "FROM scratch\nRUN echo a\nFROM scratch\nRUN echo b", "FROM scratch\nRUN echo b\nFROM scratch\nRUN echo a",
  )
  assert_true(anonymous_reorder.impact.conservative)
}

///|
test "source comparison unions dependencies from both snapshots" {
  let before = "FROM scratch AS a\nFROM scratch AS b\nCOPY --from=a /a /a\nFROM b AS release"
  let after = "FROM scratch AS a\nFROM scratch AS b\nCOPY b /b\nFROM b AS release"
  let result = @dockerlint.compare_build_sources(before, after)
  assert_eq(result.before_lines, [3])
  assert_eq(result.after_lines, [3])
  assert_eq(result.impact.before.required, [0, 1, 2])
  assert_eq(result.impact.after.required, [1, 2])
  assert_eq(result.impact.affected_targets, ["b", "release"])
  assert_false(result.impact.conservative)

  let unknown = @dockerlint.compare_build_sources(
    "FROM scratch AS app\nCOPY --from=$OLD /x /x\nFROM app AS release", "FROM scratch AS app\nCOPY --from=$NEW /x /x\nFROM app AS release",
  )
  assert_true(unknown.impact.conservative)
  assert_eq(unknown.impact.affected_targets, ["app", "release"])
}

///|
test "duplicate line alignment and cell budget are explicit conservative fallbacks" {
  let repeated_before = "FROM scratch AS app\nRUN echo same\nRUN echo same\nFROM scratch AS release\nCOPY --from=app /x /x"
  let repeated_after = "FROM scratch AS app\nRUN echo same\nFROM scratch AS release\nCOPY --from=app /x /x"
  let repeated = @dockerlint.compare_build_sources(
    repeated_before, repeated_after,
  )
  assert_false(repeated.diff_exact)
  assert_true(repeated.diff_reason.contains("ambiguous"))
  assert_true(repeated.impact.conservative)

  let mut before = "FROM scratch AS app"
  let mut after = "FROM scratch AS app"
  for i in 0..<1200 {
    let line = "\nRUN echo item-" + i.to_string()
    before += line
    after += if i == 600 { "\nRUN echo edited" } else { line }
  }
  let budget = @dockerlint.compare_build_sources(before, after)
  assert_false(budget.diff_exact)
  assert_true(budget.diff_reason.contains("budget"))
  assert_true(budget.impact.conservative)
}

///|
test "ordinary replacement is not mistaken for repeated-line ambiguity" {
  let result = @dockerlint.compare_build_sources(
    "FROM scratch AS app\nRUN echo old\nFROM app AS release", "FROM scratch AS app\nRUN echo new\nFROM app AS release",
  )
  assert_true(result.diff_exact)
  assert_eq(result.before_lines, [2])
  assert_eq(result.after_lines, [2])
  assert_eq(result.impact.affected_targets, ["app", "release"])
  assert_false(result.impact.conservative)
}

///|
test "snapshot comparison retains physical newline and directive changes" {
  let source = "FROM scratch AS a\nRUN echo ok"
  let newline = @dockerlint.compare_build_sources(source, source + "\n")
  assert_true(newline.diff_exact)
  assert_eq(newline.before_lines, [])
  assert_eq(newline.after_lines, [3])
  assert_true(newline.impact.conservative)
  let crlf = @dockerlint.compare_build_sources(
    source, "FROM scratch AS a\r\nRUN echo ok",
  )
  assert_true(crlf.diff_exact)
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
