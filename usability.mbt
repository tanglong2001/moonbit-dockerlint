///|
fn ignore_list(text : String) -> Array[String] raise ParseError {
  let text = text.split("#").collect()[0].trim().to_owned()
  let codes = text.split(",").map(c => c.trim().to_owned()).collect()
  for code in codes {
    if code.length() != 6 ||
      !["DL", "ML", "SC"].contains(code[:2].to_owned()) ||
      !code[2:].iter().all(c => c >= '0' && c <= '9') {
      raise Invalid("invalid suppression code: " + code)
    }
  }
  codes
}

///|
/// Caller suppression plus hadolint-compatible instruction/global comments.
pub fn check(
  source : String,
  ignore_codes? : Array[String] = [],
  honor_inline? : Bool = true,
) -> Array[Diagnostic] raise ParseError {
  let instructions = parse(source)
  let global_codes = ignore_codes.copy()
  let local_codes : Map[Int, Array[String]] = Map([])
  if honor_inline {
    let mut cursor = 0
    for i, raw in source.split("\n").collect() {
      let line = i + 1
      while cursor < instructions.length() &&
            instructions[cursor].end_line < line {
        cursor += 1
      }
      // Never interpret heredoc content or continuation comments as linter directives.
      if cursor < instructions.length() && instructions[cursor].line <= line {
        continue
      }
      let comment = raw.trim().to_owned()
      let global_prefix = "# hadolint global ignore="
      let local_prefix = "# hadolint ignore="
      if comment.has_prefix(global_prefix) {
        for code in ignore_list(comment[global_prefix.length():].to_owned()) {
          global_codes.push(code)
        }
      } else if comment.has_prefix(local_prefix) &&
        cursor < instructions.length() {
        let target = instructions[cursor].line
        let codes = local_codes.get(target).unwrap_or([])
        for code in ignore_list(comment[local_prefix.length():].to_owned()) {
          codes.push(code)
        }
        local_codes[target] = codes
      }
    }
  }
  lint(instructions).filter(d => {
    !global_codes.contains(d.code) &&
    !local_codes.get(d.line).unwrap_or([]).contains(d.code)
  })
}

///|
/// JSON diagnostics with explicit severity and a source filename supplied by the caller.
pub fn report_json(
  source : String,
  filename? : String = "Dockerfile",
  honor_inline? : Bool = true,
) -> String raise ParseError {
  let entries = check(source, honor_inline~).map(d => {
    "file": filename.to_json(),
    "line": d.line.to_json(),
    "code": d.code.to_json(),
    "message": d.message.to_json(),
    "level": d.severity().to_json(),
  })
  entries.to_json().stringify()
}
