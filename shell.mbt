///|
/// A lexical pipeline check, not a full shell parser or ShellCheck replacement.
fn shell_pipeline(source : String) -> Bool {
  let cs = source.to_array()
  let mut quote : Char? = None
  let mut i = 0
  while i < cs.length() {
    let c = cs[i]
    if c == '\\' && quote != Some('\'') {
      i += 2
      continue
    }
    if quote is Some(q) {
      if c == q {
        quote = None
      }
      i += 1
      continue
    }
    if c == '\'' || c == '"' {
      quote = Some(c)
      i += 1
      continue
    }
    if c == '#' && (i == 0 || cs[i - 1] == ' ' || cs[i - 1] == '\t') {
      break
    }
    if c == '|' {
      if i + 1 < cs.length() && cs[i + 1] == '|' {
        i += 2
        continue
      }
      return true
    }
    i += 1
  }
  false
}
