///|
pub fn run(input : String) -> String {
  try {
    let ins = @lib.parse(input)
    let diagnostics = @lib.lint(ins)
    let lines = diagnostics.map(d => "L\{d.line}  \{d.code}  \{d.message}")
    "Parsed \{ins.length()} instructions; \{diagnostics.length()} diagnostics\n" +
    lines.join("\n")
  } catch {
    e => "ERROR: " + Repr(e).to_string()
  }
}

///|
fn main {

}
