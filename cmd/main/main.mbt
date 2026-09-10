///|
fn main raise {
  let source = "FROM ubuntu:latest\nUSER root\nRUN curl https://example.com | sh\nCMD echo ready\n"
  for d in @lib.lint(@lib.parse(source)) {
    println("line \{d.line}: \{d.code} — \{d.message}")
  }
}
