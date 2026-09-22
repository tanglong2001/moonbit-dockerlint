///|
test "context files flow through COPY and repeated bind mounts into selected targets" {
  let source = "FROM scratch AS docs\nCOPY docs /docs\nFROM scratch AS compile\nARG DIR=src\nCOPY [\"$DIR/*.mbt\", \"/src/\"]\nRUN --mount=type=bind,source=config,target=/cfg --mount=source=assets,target=/assets build\nFROM scratch AS release\nCOPY --from=compile /app /app"
  let entries : Array[@dockerlint.ContextEntry] = [
    { path: "docs/manual.md", kind: "file", excluded: false, },
    { path: "src/main.mbt", kind: "file", excluded: false, },
    { path: "src/cache.mbt", kind: "file", excluded: true, },
    { path: "src/nested/extra.mbt", kind: "file", excluded: false, },
    { path: "config/options", kind: "file", excluded: false, },
    { path: "assets/icon", kind: "file", excluded: false, },
  ]
  let plan = @dockerlint.analyze_context(source, entries, target="release", changes=[
    { path: "src/deleted.mbt", excluded: false, },
    { path: "docs/manual.md", excluded: false, },
    { path: "src/cache.mbt", excluded: true, },
  ])
  assert_eq(plan.selected_entries, [1, 4, 5])
  assert_eq(plan.inputs[1].excluded, [2])
  assert_eq(plan.missing_lines, [])
  assert_eq(plan.uncertainties, [])
  assert_eq(plan.changes[0].targets.map(t => t.affected), [false, true, true])
  assert_eq(plan.changes[0].targets[2].path, [2, 1])
  assert_eq(plan.changes[1].targets.map(t => t.affected), [true, false, false])
  assert_true(plan.changes[2].targets.iter().all(t => !t.affected))
}

///|
test "context missing ignored and unselected sources remain distinguishable" {
  let plan = @dockerlint.analyze_context(
    "FROM scratch AS other\nCOPY absent /\nFROM scratch AS release\nCOPY ignored /\nCOPY [\"space name\", \"/out\"]",
    [
      { path: "ignored", kind: "file", excluded: true, },
      { path: "space name", kind: "file", excluded: false, },
    ],
  )
  assert_eq(plan.inputs.map(i => i.status), ["missing", "excluded", "resolved"])
  assert_eq(plan.missing_lines, [4])
  assert_eq(plan.selected_entries, [1])
}

///|
test "context directory wildcards parent cleanup and argument override" {
  let plan = @dockerlint.analyze_context(
    "FROM scratch\nARG DIR=wrong\nCOPY $DIR/ /out\nCOPY ../a? /second",
    [
      { path: "actual", kind: "directory", excluded: false, },
      { path: "actual/deep/file", kind: "file", excluded: false, },
      { path: "ab/child", kind: "file", excluded: false, },
    ],
    build_args=Map([("DIR", "actual")]),
  )
  assert_eq(plan.inputs[0].included, [0, 1])
  assert_eq(plan.inputs[1].included, [2])
}

///|
test "context uncertain sources cannot certify unaffected target and control changes propagate" {
  for
    instruction in [
      "COPY $UNKNOWN /app", "COPY --exclude=*.log . /app", "RUN --mount=source='some path',target=/app true",
      "COPY link /app",
    ] {
    let plan = @dockerlint.analyze_context(
      "FROM scratch AS a\n" + instruction + "\nFROM scratch AS b",
      [{ path: "link", kind: "symlink", excluded: false, }],
      changes=[{ path: "other", excluded: false, }],
    )
    assert_false(plan.uncertainties.is_empty())
    assert_true(plan.changes[0].conservative)
    assert_true(plan.changes[0].targets.iter().all(t => t.affected))
  }
  let control = @dockerlint.analyze_context(
    "FROM scratch AS a\nCOPY src /app\nFROM scratch AS b",
    [],
    changes=[{ path: ".dockerignore", excluded: true, }],
  )
  assert_true(control.changes[0].conservative)
  assert_true(control.changes[0].targets.iter().all(t => t.affected))
}

///|
test "context external sources and noncontext mounts never become local missing files" {
  // The context root exists even when filtering leaves no visible entries.
  assert_eq(
    @dockerlint.analyze_context("FROM scratch\nCOPY . /out", []).missing_lines,
    [],
  )
  let plan = @dockerlint.analyze_context(
    "FROM scratch\nADD https://example.invalid/archive /a\nCOPY --from=alpine /bin/busybox /bin/\nRUN --mount=type=cache,target=/cache --mount=type=secret,id=token true\nCOPY <<EOF /inline\nhello\nEOF",
    [],
  )
  assert_eq(plan.inputs.length(), 1)
  assert_eq(plan.inputs[0].status, "external")
  assert_eq(plan.missing_lines, [])
}

///|
test "context rejects impossible inventories and invalid change paths" {
  let cases : Array[Array[@dockerlint.ContextEntry]] = [
    [
      { path: "a", kind: "symlink", excluded: false, },
      { path: "a/child", kind: "file", excluded: false, },
    ],
    [
      { path: "a", kind: "file", excluded: false, },
      { path: "a", kind: "file", excluded: false, },
    ],
    [{ path: "../outside", kind: "file", excluded: false, }],
  ]
  for entries in cases {
    assert_true(
      try {
        ignore(@dockerlint.analyze_context("FROM scratch", entries))
        false
      } catch {
        _ => true
      },
    )
  }
  assert_true(
    try {
      ignore(
        @dockerlint.analyze_context("FROM scratch", [], changes=[
          { path: "a/../b", excluded: false, },
        ]),
      )
      false
    } catch {
      _ => true
    },
  )
}

///|
test "COPY glob grammar differs from recursive Docker ignore" {
  assert_true(@dockerlint.copy_source_matches("src/?.[a-c]", "src/文.b"))
  assert_true(@dockerlint.copy_source_matches("a[^0-9]", "ax"))
  assert_true(@dockerlint.copy_source_matches("a\\*", "a*"))
  assert_false(@dockerlint.copy_source_matches("src/**", "src/nested/file"))
  assert_false(@dockerlint.copy_source_matches("a[^0-9]", "a2"))
  assert_false(@dockerlint.copy_source_matches("*[^x]*", "a/b"))
  assert_true(@dockerlint.copy_source_matches("*??", "😀"))
  for pattern in ["[", "[]", "[a-]", "abc\\"] {
    assert_true(
      try {
        ignore(@dockerlint.copy_source_matches(pattern, "x"))
        false
      } catch {
        _ => true
      },
    )
  }
}
