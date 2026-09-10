///|
test "continuations line ranges and inline hash" {
  let ins = @dockerlint.parse(
    "# syntax=docker/dockerfile:1\nFROM alpine:3.20\nRUN echo a \\\n  && echo '#not-comment'\n",
  )
  assert_eq(ins.length(), 2)
  assert_eq(ins[1].line, 3)
  assert_eq(ins[1].end_line, 4)
  assert_eq(ins[1].arguments, "echo a && echo '#not-comment'")
}

///|
test "linter reports concrete risk rules" {
  let ins = @dockerlint.parse(
    "FROM alpine:latest\nUSER root\nWORKDIR app\nRUN cd /tmp\nCMD echo hello\nADD a b\n",
  )
  let codes = @dockerlint.lint(ins).map(d => d.code)
  assert_eq(codes, ["DL3007", "DL3002", "DL3000", "DL3003", "DL3025", "DL3020"])
}

///|
test "stage aliases external image and JSON form" {
  let ins = @dockerlint.parse(
    "FROM alpine:3.20 AS build\nRUN echo ok\nFROM scratch\nCOPY --from=build /app /app\nCOPY --from=busybox:1.36 /bin/sh /bin/sh\nUSER 1000\nENTRYPOINT [\"/app\"]\n",
  )
  assert_eq(@dockerlint.lint(ins), [])
  let bad = @dockerlint.lint(
    @dockerlint.parse(
      "FROM alpine:3 AS build\nCOPY --from=build /x /y\nCOPY --from=1 /x /y",
    ),
  )
  assert_eq(bad.map(d => d.code), ["DL3023", "DL3022"])
}

///|
test "malformed JSON and unclosed heredoc rejected" {
  for source in ["FROM", "RUN [1]", "RUN [\"x\"", "RUN <<EOF\nx", "RUN echo \\"] {
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
test "escape directive and stage shell context" {
  let ins = @dockerlint.parse(
    "# escape=`\nFROM alpine:3\nRUN echo `\n hello\nSHELL [\"/bin/bash\",\"-o\",\"pipefail\",\"-c\"]\nRUN a | b\nFROM alpine:3\nRUN a | b",
  )
  assert_eq(ins[1].arguments, "echo hello")
  assert_eq(@dockerlint.lint(ins).map(d => d.code), ["DL4006"])
}
