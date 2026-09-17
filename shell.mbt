///|
fn shell_pipeline(source : String) -> Bool {
  shell_tokens(source)
  .iter()
  .any(t => t.kind == "operator" && (t.value == "|" || t.value == "|&")) catch {
    _ => false
  }
}
