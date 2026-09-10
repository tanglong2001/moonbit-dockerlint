///|
pub struct HereDoc {
  name : String
  content : String
  strip_tabs : Bool
  expand : Bool
} derive(Debug, Eq, ToJson)

///|
/// Locate unquoted heredoc operators. Delimiters may be quoted or backslash escaped.
fn heredoc_headers(
  source : String,
) -> Array[(String, Bool, Bool)] raise ParseError {
  let cs = source.to_array()
  let out = []
  let mut i = 0
  let mut quote : Char? = None
  let mut arithmetic = 0
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
    if c == '$' && i + 2 < cs.length() && cs[i + 1] == '(' && cs[i + 2] == '(' {
      arithmetic += 2
      i += 3
      continue
    }
    if arithmetic > 0 {
      if c == '(' {
        arithmetic += 1
      } else if c == ')' {
        arithmetic -= 1
      }
      i += 1
      continue
    }
    if c != '<' || i + 1 >= cs.length() || cs[i + 1] != '<' {
      i += 1
      continue
    }
    i += 2
    if i < cs.length() && cs[i] == '<' {
      i += 1
      continue
    }
    let strip_tabs = i < cs.length() && cs[i] == '-'
    if strip_tabs {
      i += 1
    }
    while i < cs.length() && (cs[i] == ' ' || cs[i] == '\t') {
      i += 1
    }
    let name = StringBuilder()
    let mut delimiter_quote : Char? = None
    let mut expand = true
    while i < cs.length() {
      let ch = cs[i]
      if delimiter_quote is Some(q) {
        if ch == q {
          delimiter_quote = None
        } else {
          name.write_char(ch)
        }
      } else if ch == '\'' || ch == '"' {
        delimiter_quote = Some(ch)
        expand = false
      } else if ch == '\\' {
        expand = false
        i += 1
        if i == cs.length() {
          raise Invalid("truncated heredoc delimiter")
        }
        name.write_char(cs[i])
      } else if ch == ' ' ||
        ch == '\t' ||
        ch == ';' ||
        ch == '|' ||
        ch == '&' ||
        ch == '<' ||
        ch == '>' {
        break
      } else {
        name.write_char(ch)
      }
      i += 1
    }
    if delimiter_quote != None || name.is_empty() {
      raise Invalid("invalid heredoc delimiter")
    }
    if out.length() == 16 {
      raise Invalid("heredoc count limit")
    }
    out.push((name.to_string(), strip_tabs, expand))
  }
  out
}
