///|
test "variables defaults quoting and expansion bounds" {
  let vars : Map[String, String] = {
    "A": "one",
    "EMPTY": "",
    "UNICODE": "你好",
  }
  assert_eq(
    @dockerlint.expand_variables("$A/${MISSING:-${UNICODE}}/${EMPTY:+no}", vars).value,
    "one/你好/",
  )
  assert_eq(
    @dockerlint.expand_variables(
      "${EMPTY-default}|${EMPTY:-default}|${A+yes}", vars,
    ).value,
    "|default|yes",
  )
  assert_eq(
    @dockerlint.expand_variables("'$A' \"$A\" \\$A", vars).value,
    "$A one $A",
  )
  let unresolved = @dockerlint.expand_variables("$BASE/${OTHER}/$BASE", vars)
  assert_eq(unresolved.unresolved, ["BASE", "OTHER"])
  assert_eq(unresolved.value, "$BASE/${OTHER}/$BASE")
  for text in ["${A", "${A?bad}", "'unclosed", "trailing\\"] {
    assert_true(
      try {
        ignore(@dockerlint.expand_variables(text, vars))
        false
      } catch {
        _ => true
      },
    )
  }
}

///|
test "ARG ENV scopes and simultaneous assignments follow Dockerfile examples" {
  let source = "ARG TAG=3\nARG SHARED=global\nFROM alpine:$TAG AS base\nARG SHARED\nENV A=one B=$SHARED\nENV A=two C=$A\nFROM base AS child\nWORKDIR /$B/$C\nFROM scratch\nWORKDIR /$SHARED"
  let scopes = @dockerlint.analyze_variables(source)
  assert_eq(scopes[2].expanded, "alpine:3 AS base")
  assert_eq(scopes[2].arguments, Map([]))
  assert_eq(scopes[5].environment.get("A"), Some("two"))
  assert_eq(scopes[5].environment.get("C"), Some("one"))
  assert_eq(scopes[7].expanded, "/global/one")
  assert_eq(scopes[9].unresolved, ["SHARED"])
  let overridden = @dockerlint.analyze_variables(source, build_args={
    "TAG": "4",
    "SHARED": "override",
  })
  assert_eq(overridden[2].expanded, "alpine:4 AS base")
  assert_eq(overridden[7].expanded, "/override/one")
  let docs = @dockerlint.analyze_variables(
    "FROM scratch\nENV abc=hello\nENV abc=bye def=$abc\nENV ghi=$abc",
  )
  assert_eq(docs[2].environment.get("def"), Some("hello"))
  assert_eq(docs[3].environment.get("ghi"), Some("bye"))
}

///|
test "RUN lexical boundaries and script heredocs" {
  let tokens = @dockerlint.shell_tokens(
    "echo 'a|b' # comment\nprintf \"$HOME\" 2>/tmp/log",
  )
  assert_eq(tokens.filter(t => t.kind == "operator").map(t => t.value), ["\n"])
  assert_eq(tokens.filter(t => t.kind == "fd").map(t => t.value), ["2"])
  assert_eq(tokens[4].line, 2)
  assert_true(tokens[4].dynamic)
  let quoted = @dockerlint.check(
    "FROM alpine:3\nRUN echo '$(apk add curl)'\nRUN cat <<EOF\napk add curl\nEOF",
  )
  assert_false(quoted.iter().any(d => d.code == "DL3018"))
  let script = @dockerlint.check("FROM alpine:3\nRUN <<EOF\napk add curl\nEOF")
  assert_true(script.iter().any(d => d.code == "DL3018" && d.line == 2))
  assert_true(
    @dockerlint.check("FROM alpine:3\nRUN echo $(apk add curl)")
    .iter()
    .any(d => d.code == "DL3018"),
  )
  assert_true(
    @dockerlint.check("FROM alpine:3\nRUN echo 'unfinished")
    .iter()
    .any(d => d.code == "ML1011"),
  )
}

///|
test "configuration validates overrides and preserves inline policy" {
  let source = "# hadolint ignore=DL3007\nFROM ghcr.io/example/tool:latest"
  let report = @dockerlint.configured_report(
    source, "{\"trustedRegistries\":[\"docker.io\"],\"severity\":{\"DL3026\":\"info\"}}",
  )
  assert_true(report.contains("DL3026"))
  assert_true(report.contains("info"))
  assert_false(report.contains("DL3007"))
  let strict = @dockerlint.configured_report(
    source, "{\"honorInline\":false,\"ignore\":[\"DL3026\"]}",
  )
  assert_true(strict.contains("DL3007"))
  for
    config in [
      "[]", "{\"unknown\":1}", "{\"severity\":{\"DL3007\":\"severe\"}}", "{\"ignore\":[\"typo\"]}",
      "{\"honorInline\":1}",
    ] {
    assert_true(
      try {
        ignore(@dockerlint.configured_report(source, config))
        false
      } catch {
        _ => true
      },
    )
  }
}

///|
test "Docker ENV punctuation is data and config codes are individual" {
  let scopes = @dockerlint.analyze_variables(
    "FROM scratch\nENV URL=https://example.test/?a=1&b=2 OTHER=hello;there HASH=#literal\nWORKDIR /${UNSET:-a b}",
  )
  assert_eq(
    scopes[1].environment.get("URL"),
    Some("https://example.test/?a=1&b=2"),
  )
  assert_eq(scopes[1].environment.get("OTHER"), Some("hello;there"))
  assert_eq(scopes[1].environment.get("HASH"), Some("#literal"))
  assert_eq(scopes[2].expanded, "/a b")
  assert_true(
    try {
      ignore(
        @dockerlint.configured_report(
          "FROM scratch", "{\"ignore\":[\"DL3007,DL3008\"]}",
        ),
      )
      false
    } catch {
      _ => true
    },
  )
}
