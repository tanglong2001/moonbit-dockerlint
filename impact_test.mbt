///|
test "BuildKit documented independent branches and transitive impact" {
  let source = "FROM ubuntu AS base\nRUN echo base\nFROM base AS stage1\nRUN echo stage1\nFROM base AS stage2\nRUN echo stage2"
  let report = @dockerlint.build_impact(source, target="stage2", changed_lines=[
    4,
  ])
  assert_eq(report.required, [0, 2])
  assert_eq(report.changed_stages, [1])
  assert_eq(report.targets.map(t => t.affected), [false, true, false])
  assert_false(report.conservative)
  let base = @dockerlint.build_impact(source, changed_lines=[2])
  assert_eq(base.targets.map(t => t.affected), [true, true, true])
  assert_eq(base.targets[2].path, [2, 0])
}

///|
test "all repeated RUN mounts count and witness includes COPY" {
  let source = "FROM alpine AS assets\nRUN echo asset\nFROM alpine AS compiler\nRUN echo compiler\nFROM scratch AS build\nRUN --mount=from=assets,target=/assets --mount=type=bind,from=compiler,target=/tool /tool/build\nFROM scratch AS release\nCOPY --from=build /app /app"
  let report = @dockerlint.build_impact(source, changed_lines=[2])
  assert_eq(report.required, [0, 1, 2, 3])
  assert_eq(report.targets[3].path, [3, 2, 0])
  assert_eq(report.edges.map(e => e.line), [6, 6, 8])
  assert_eq(report.edges.map(e => e.kind), ["RUN mount", "RUN mount", "COPY"])
  assert_eq(
    @dockerlint.analyze_stages(@dockerlint.parse(source))[2].dependencies,
    [0, 1],
  )
}

///|
test "global and unknown inputs never certify unaffected targets" {
  let no_changes = @dockerlint.build_impact("ARG BASE\nFROM $BASE")
  assert_true(no_changes.conservative)
  assert_false(no_changes.targets[0].affected)
  for
    source in [
      "ARG BASE=alpine\nFROM $BASE AS build\nRUN echo hi\nFROM scratch", "FROM scratch AS build\nRUN --mount=from='$STAGE',target=/src true\nFROM scratch",
      "FROM scratch AS build\nONBUILD COPY --from=other /app /app\nFROM scratch",
    ] {
    let report = @dockerlint.build_impact(source, changed_lines=[3])
    assert_true(report.conservative)
    assert_true(report.targets.iter().all(t => t.affected))
    assert_false(report.uncertainties.is_empty())
  }
  let source = "ARG BASE=alpine\nFROM alpine AS a\nRUN echo a\nFROM scratch"
  assert_true(@dockerlint.build_impact(source, changed_lines=[1]).conservative)
  assert_true(@dockerlint.build_impact(source, changed_lines=[2]).conservative)
}

///|
test "cycle missing target external reference and continuation" {
  for
    source in [
      "FROM scratch AS a\nRUN --mount=from=a,target=/src true", "FROM scratch AS a\nRUN --mount=from=b,target=/src true\nFROM scratch AS b\nCOPY --from=a /x /x",
      "FROM scratch\nCOPY --from=42 /x /x",
    ] {
    assert_true(
      try {
        ignore(@dockerlint.build_impact(source))
        false
      } catch {
        _ => true
      },
    )
  }
  assert_true(
    try {
      ignore(@dockerlint.build_impact("FROM scratch", target="missing"))
      false
    } catch {
      _ => true
    },
  )
  assert_true(
    try {
      ignore(@dockerlint.build_impact("FROM scratch", changed_lines=[9]))
      false
    } catch {
      _ => true
    },
  )
  let external = @dockerlint.build_impact(
    "FROM alpine\nCOPY --from=registry.example/app:1 /x /x",
  )
  assert_eq(external.edges, [])
  let continued = @dockerlint.build_impact(
    "FROM scratch\nRUN echo \\\n hello",
    changed_lines=[3],
  )
  assert_eq(continued.changed_stages, [0])
}
