///|
pub struct ShellToken {
  kind : String
  value : String
  raw : String
  line : Int
  quoted : Bool
  dynamic : Bool
} derive(Debug, Eq, ToJson)

///|
/// Quote-aware shell lexical structure. Substitutions remain opaque and are never
/// executed; this is not a complete POSIX/Bash grammar or a ShellCheck replacement.
pub fn shell_tokens(source : String) -> Array[ShellToken] raise ParseError {
  if !valid_unicode(source) {
    raise Invalid("invalid shell Unicode")
  }
  if source.length() > 1000000 {
    raise Invalid("shell input limit")
  }
  let cs = source.to_array()
  let out : Array[ShellToken] = []
  let mut i = 0
  let mut line = 1
  while i < cs.length() {
    let c = cs[i]
    if c == ' ' || c == '\t' || c == '\r' {
      i += 1
      continue
    }
    if c == '#' {
      while i < cs.length() && cs[i] != '\n' {
        i += 1
      }
      continue
    }
    if ";&|()<>{}\n".contains(c.to_string()) {
      if out.length() >= 100000 {
        raise Invalid("shell token count limit")
      }
      let start = i
      let token_line = line
      i += 1
      if c == '\n' {
        line += 1
      }
      if i < cs.length() &&
        (
          (cs[i] == c && "&|<>;".contains(c.to_string())) ||
          (c == '|' && cs[i] == '&') ||
          ((c == '<' || c == '>') && cs[i] == '&') ||
          (c == '>' && cs[i] == '|')
        ) {
        i += 1
      }
      if c == '<' && i < cs.length() && (cs[i] == '-' || cs[i] == '<') {
        i += 1
      }
      let raw = String::from_array(cs[start:i])
      out.push({
        kind: if c == '<' || c == '>' {
          "redirect"
        } else {
          "operator"
        },
        value: raw,
        raw,
        line: token_line,
        quoted: false,
        dynamic: false,
      })
      continue
    }
    let start = i
    let token_line = line
    let value = StringBuilder()
    let mut quote : Char? = None
    let mut quoted = false
    let mut dynamic = false
    while i < cs.length() {
      let c = cs[i]
      if c == '\\' && quote != Some('\'') {
        i += 1
        if i == cs.length() {
          raise Invalid("trailing shell escape")
        }
        if cs[i] == '\n' {
          line += 1
        } else if quote == Some('"') && !"$`\"\\".contains(cs[i].to_string()) {
          value.write_char('\\')
          value.write_char(cs[i])
        } else {
          value.write_char(cs[i])
        }
        i += 1
        continue
      }
      if quote != Some('\'') &&
        (
          (
            c == '$' &&
            i + 1 < cs.length() &&
            (cs[i + 1] == '(' || cs[i + 1] == '{')
          ) ||
          c == '`'
        ) {
        dynamic = true
        let nested_start = i
        let opening = if c == '`' { '`' } else { cs[i + 1] }
        let closing = if opening == '(' {
          ')'
        } else if opening == '{' {
          '}'
        } else {
          '`'
        }
        i += if c == '`' { 1 } else { 2 }
        let mut depth = 1
        let mut inner_quote : Char? = None
        while i < cs.length() && depth > 0 {
          let n = cs[i]
          if n == '\n' {
            line += 1
          }
          if n == '\\' && inner_quote != Some('\'') {
            i += 2
            continue
          }
          if inner_quote is Some(q) {
            if n == q {
              inner_quote = None
            }
          } else if n == '\'' || n == '"' {
            inner_quote = Some(n)
          } else if n == closing {
            depth -= 1
          } else if n == opening && opening != '`' {
            depth += 1
            if depth > 128 {
              raise Invalid("shell nesting limit")
            }
          }
          i += 1
        }
        if depth != 0 || i > cs.length() {
          raise Invalid("unclosed shell substitution")
        }
        value.write_string(String::from_array(cs[nested_start:i]))
        continue
      }
      if quote is Some(q) {
        if c == q {
          quote = None
          quoted = true
        } else {
          if c == '$' && q != '\'' {
            dynamic = true
          }
          value.write_char(c)
        }
        if c == '\n' {
          line += 1
        }
        i += 1
        continue
      }
      if c == '\'' || c == '"' {
        quote = Some(c)
        quoted = true
        i += 1
        continue
      }
      if " \t\r\n;&|()<>{}".contains(c.to_string()) {
        break
      }
      if c == '$' {
        dynamic = true
      }
      value.write_char(c)
      i += 1
    }
    if quote != None {
      raise Invalid("unclosed shell quote")
    }
    let value = value.to_string()
    let fd = !quoted &&
      !value.is_empty() &&
      value.iter().all(c => c >= '0' && c <= '9') &&
      i < cs.length() &&
      (cs[i] == '<' || cs[i] == '>')
    out.push({
      kind: if fd {
        "fd"
      } else {
        "word"
      },
      value,
      raw: String::from_array(cs[start:i]),
      line: token_line,
      quoted,
      dynamic,
    })
    if out.length() > 100000 {
      raise Invalid("shell token count limit")
    }
  }
  out
}

///|
fn shell_commands_flat(
  source : String,
) -> Array[Array[ShellToken]] raise ParseError {
  let commands : Array[Array[ShellToken]] = []
  let mut current : Array[ShellToken] = []
  let mut redirect = false
  for token in shell_tokens(source) {
    if token.kind == "fd" {
      continue
    }
    if token.kind == "operator" {
      if !current.is_empty() {
        commands.push(current)
        current = []
      }
      redirect = false
    } else if token.kind == "redirect" {
      redirect = true
    } else if redirect {
      redirect = false
    } else {
      current.push(token)
    }
  }
  if !current.is_empty() {
    commands.push(current)
  }
  commands
  .map(tokens => {
    let mut start = 0
    while start < tokens.length() {
      let token = tokens[start]
      if ["if", "then", "elif", "else", "do", "!", "command", "exec", "env"].contains(
          token.value,
        ) ||
        (token.value.contains("=") && !token.value.has_prefix("-")) {
        start += 1
      } else {
        break
      }
    }
    tokens[start:].to_owned()
  })
  .filter(tokens => !tokens.is_empty())
}

///|
fn shell_commands(source : String) -> Array[Array[ShellToken]] raise ParseError {
  fn collect(
    source : String,
    depth : Int,
  ) -> Array[Array[ShellToken]] raise ParseError {
    if depth > 32 {
      raise Invalid("command substitution nesting limit")
    }
    let commands = shell_commands_flat(source)
    for token in shell_tokens(source) {
      if !token.dynamic {
        continue
      }
      let cs = token.raw.to_array()
      let mut i = 0
      let mut quote : Char? = None
      while i < cs.length() {
        let c = cs[i]
        if c == '\\' && quote != Some('\'') {
          i += 2
          continue
        }
        if quote == Some('\'') {
          if c == '\'' {
            quote = None
          }
          i += 1
          continue
        }
        if c == '\'' && quote == None {
          quote = Some(c)
          i += 1
          continue
        }
        if c == '"' {
          quote = if quote == None { Some(c) } else { None }
          i += 1
          continue
        }
        if c == '`' || (c == '$' && i + 1 < cs.length() && cs[i + 1] == '(') {
          let backtick = c == '`'
          i += if backtick { 1 } else { 2 }
          let start = i
          let arithmetic = !backtick && i < cs.length() && cs[i] == '('
          let mut nesting = 1
          let mut inner : Char? = None
          while i < cs.length() && nesting > 0 {
            let c = cs[i]
            if c == '\\' && inner != Some('\'') {
              i += 2
              continue
            }
            if inner is Some(q) {
              if c == q {
                inner = None
              }
            } else if c == '\'' || c == '"' {
              inner = Some(c)
            } else if (backtick && c == '`') || (!backtick && c == ')') {
              nesting -= 1
            } else if !backtick && c == '(' {
              nesting += 1
            }
            if nesting == 0 {
              break
            }
            i += 1
          }
          if nesting != 0 {
            raise Invalid("unclosed command substitution")
          }
          if !arithmetic {
            for command in collect(String::from_array(cs[start:i]), depth + 1) {
              commands.push(command)
            }
          }
        }
        i += 1
      }
    }
    commands
  }
  collect(source, 0)
}

///|
fn executable_name(path : String) -> String {
  path.split("/").collect().last().unwrap_or(path[:]).to_owned()
}

///|
fn flag_present(args : Array[String], names : Array[String]) -> Bool {
  args
  .iter()
  .any(arg => {
    names.iter().any(name => arg == name || arg.has_prefix(name + "="))
  })
}

///|
fn package_operands(args : Array[String], command : String) -> Array[String] {
  let mut found = false
  let mut skip = false
  let result = []
  let takes_value = [
    "-o", "--option", "--config-file", "-c", "--config", "--root", "--repository",
    "--index-url", "-i", "--extra-index-url", "--trusted-host", "--prefix", "--target",
    "--directory", "--installroot", "--releasever", "--setopt", "--with", "--virtual",
    "-t", "-r", "--requirement", "--constraint", "-e", "--editable",
  ]
  for arg in args {
    if !found {
      if arg == command {
        found = true
      }
      continue
    }
    if skip {
      skip = false
      continue
    }
    if takes_value.contains(arg) {
      skip = true
      continue
    }
    if !arg.has_prefix("-") {
      result.push(arg)
    }
  }
  result
}
