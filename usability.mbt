///|
/// Apply a caller-owned explicit suppression list; parsing errors remain errors.
pub fn check(
  source : String,
  ignore_codes? : Array[String] = [],
) -> Array[Diagnostic] raise ParseError {
  let diagnostics = lint(parse(source))
  diagnostics.filter(d => !ignore_codes.contains(d.code))
}
