///|
pub fn run(input : String) -> String {
  try {
    let ins = @lib.parse(input)
    let diagnostics = @lib.check(input)
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

///|
pub fn diagnostics(
  input : String,
  filename : String,
  honor_inline : Bool,
) -> String {
  @lib.report_json(input, filename~, honor_inline~) catch {
    e => "ERROR: " + Repr(e).to_string()
  }
}

///|
pub fn stage_graph(input : String) -> String {
  @lib.analyze_stages(@lib.parse(input)).to_json().stringify() catch {
    e => "ERROR: " + Repr(e).to_string()
  }
}
