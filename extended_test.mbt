///|
test "extended heredoc preserves body range quoting and tabs" {
  let ins = @dockerlint.parse(
    "FROM alpine:3\nRUN <<'EOF'\n# comment stays\nFROM is body\nEOF\nCOPY <<-TEXT /file\n\thello\n\tTEXT\nCMD [\"sh\"]",
  )
  assert_eq(ins.length(), 4)
  assert_eq(ins[1].line, 2)
  assert_eq(ins[1].end_line, 5)
  assert_eq(ins[1].heredocs[0].content, "# comment stays\nFROM is body\n")
  assert_false(ins[1].heredocs[0].expand)
  assert_eq(ins[2].heredocs[0].content, "hello\n")
  assert_true(ins[2].heredocs[0].strip_tabs)
  let quoted = @dockerlint.parse(
    "FROM alpine:3\nRUN echo '<<EOF'\nRUN echo $((1<<2))\nRUN echo ok # <<BAD",
  )
  assert_true(quoted.iter().all(i => i.heredocs.is_empty()))
  let multi = @dockerlint.parse("RUN cat <<A && cat <<B\none\nA\ntwo\nB")
  assert_eq(multi[0].heredocs.length(), 2)
  assert_eq(multi[0].end_line, 5)
}

///|
test "extended argument flags JSON and copy destinations" {
  let ins = @dockerlint.parse(
    "FROM alpine:3\nCOPY --chown=1000:1000 --from=build [\"a b\",\"c\",\"/out/\"]",
  )
  let args = ins[1].split_arguments()
  assert_eq(args.values, ["a b", "c", "/out/"])
  assert_true(args.json_form)
  assert_eq(args.flags.get("from"), Some("build"))
  assert_eq(
    @dockerlint.check("FROM alpine:3\nCOPY \"a b\" c /out").map(d => d.code),
    ["DL3021"],
  )
  assert_eq(
    @dockerlint.check(
      "FROM alpine:3\nADD https://example.test/a /a\nADD archive.tar.gz /out/",
    ),
    [],
  )
  for
    source in [
      "COPY --from=x [1]", "COPY --from=x [\"a\",", "RUN <<EOF\nx", "# escape=\\\n# escape=`\nFROM a",
    ] {
    assert_true(
      try {
        ignore(@dockerlint.parse(source))
        false
      } catch {
        _ => true
      },
    )
  }
}

///|
test "extended stages dependencies inheritance and cycles" {
  let source = "FROM alpine:3 AS base\nSHELL [\"/bin/bash\",\"-o\",\"pipefail\",\"-c\"]\nFROM base AS build\nRUN a | b\nFROM scratch\nCOPY --from=build /a /a"
  let stages = @dockerlint.analyze_stages(@dockerlint.parse(source))
  assert_eq(stages[1].dependencies, [0])
  assert_eq(stages[2].dependencies, [1])
  assert_eq(@dockerlint.check(source), [])
  let cycle = "FROM alpine:3 AS a\nCOPY --from=b /x /x\nFROM alpine:3 AS b\nCOPY --from=a /x /x"
  assert_true(
    @dockerlint.check(cycle).iter().any(d => d.code == "ML1010" && d.line == 1),
  )
  assert_true(
    try {
      ignore(@dockerlint.analyze_stages(@dockerlint.parse(cycle)))
      false
    } catch {
      _ => true
    },
  )
}

///|
test "extended suppression scope and shell false positives" {
  let source = "# hadolint global ignore=DL3007\nFROM alpine:latest\n# hadolint ignore=DL3002 # build-time exception\nUSER root\nUSER root\nRUN <<EOF\n# hadolint global ignore=DL3002\nEOF\nUSER root"
  assert_eq(@dockerlint.check(source).map(d => d.line), [5, 9])
  assert_eq(@dockerlint.check(source, honor_inline=false).length(), 4)
  assert_eq(
    @dockerlint.check(
      "FROM alpine:3\nRUN echo '|'\nRUN a || b\nRUN echo hi # | comment",
    ),
    [],
  )
  assert_true(
    @dockerlint.check("FROM alpine:3\nRUN a | b")
    .iter()
    .any(d => d.code == "DL4006"),
  )
  let diagnostics = @dockerlint.check(
    "FROM alpine:3\nSHELL sh -c\nONBUILD FROM base\nCMD [\"a\"]\nCMD [\"b\"]",
  )
  assert_eq(diagnostics.map(d => d.code), ["ML1006", "DL3043", "DL4003"])
  assert_eq(diagnostics[0].severity(), "error")
}
