///|
pub struct Arguments {
  flags : Map[String, String]
  values : Array[String]
  json_form : Bool
} derive(Debug, Eq, ToJson)

///|
/// Split a Docker argument list without evaluating variables or shell commands.
fn split_quoted(source : String) -> Array[String] raise ParseError {
  let out = []
  let mut text = StringBuilder()
  let mut quote : Char? = None
  let mut escape = false
  let mut started = false
  for c in source.iter() {
    if escape {
      text.write_char(c)
      escape = false
      continue
    }
    if c == '\\' && quote != Some('\'') {
      escape = true
      started = true
      continue
    }
    if quote is Some(q) {
      if c == q {
        quote = None
      } else {
        text.write_char(c)
      }
      continue
    }
    if c == '"' || c == '\'' {
      quote = Some(c)
      started = true
    } else if c == ' ' || c == '\t' {
      if started {
        out.push(text.to_string())
        text = StringBuilder()
        started = false
      }
    } else {
      text.write_char(c)
      started = true
    }
  }
  if quote != None || escape {
    raise Invalid("unterminated quoted argument")
  }
  if started {
    out.push(text.to_string())
  }
  out
}

///|
/// Leading --key=value flags, then JSON strings or quoted shell-form arguments.
pub fn Instruction::split_arguments(
  self : Instruction,
) -> Arguments raise ParseError {
  let flags : Map[String, String] = Map([])
  let mut rest = self.arguments.trim_start().to_owned()
  while rest.has_prefix("--") {
    let cs = rest.to_array()
    let mut end = 0
    let mut quote : Char? = None
    while end < cs.length() {
      let c = cs[end]
      if quote is Some(q) {
        if c == q {
          quote = None
        }
      } else if c == '\'' || c == '"' {
        quote = Some(c)
      } else if c == ' ' || c == '\t' {
        break
      }
      end += 1
    }
    let raw = String::from_array(cs[:end])
    let decoded = split_quoted(raw)
    if decoded.length() != 1 {
      raise Invalid("invalid instruction flag")
    }
    let flag = decoded[0][2:].to_owned()
    let parts = flag.split("=").collect()
    let key = parts[0].to_owned()
    if key.is_empty() {
      raise Invalid("empty instruction flag")
    }
    // Repeated flags such as COPY --exclude and RUN --mount are retained in the source;
    // this convenience map exposes their last value.
    flags[key] = if parts.length() == 1 {
      "true"
    } else {
      parts[1:].map(x => x.to_owned()).join("=")
    }
    rest = String::from_array(cs[end:]).trim_start().to_owned()
  }
  let json_form = rest.has_prefix("[")
  let values = if json_form {
    let json = @json.parse(rest) catch {
      _ => raise Invalid("malformed JSON instruction")
    }
    match json {
      Array(items) =>
        items.map(item => {
          match item {
            String(s) => s
            _ => raise Invalid("JSON instruction requires strings")
          }
        })
      _ => raise Invalid("JSON instruction requires array")
    }
  } else {
    split_quoted(rest)
  }
  if values.is_empty() {
    raise Invalid("empty instruction arguments")
  }
  { flags, values, json_form, }
}

///|
// ENV/LABEL words preserve shell punctuation as literal data.
fn raw_arguments(source : String) -> Array[String] raise ParseError {
  let cs = source.to_array()
  let result : Array[String] = []
  let mut start = 0
  let mut quote : Char? = None
  let mut nesting = 0
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
    } else if c == '\'' || c == '"' {
      quote = Some(c)
    } else if c == '$' && i + 1 < cs.length() && cs[i + 1] == '{' {
      nesting += 1
      i += 1
    } else if c == '}' && nesting > 0 {
      nesting -= 1
    } else if (c == ' ' || c == '\t') && nesting == 0 {
      if start < i {
        result.push(String::from_array(cs[start:i]))
      }
      start = i + 1
    }
    i += 1
  }
  if quote != None || nesting != 0 || i > cs.length() {
    raise Invalid("invalid Docker argument quoting")
  }
  if start < cs.length() {
    result.push(String::from_array(cs[start:]))
  }
  result
}
