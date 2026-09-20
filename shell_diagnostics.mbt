///|
// Lexical, deliberately bounded subset of ShellCheck diagnostics. Never executes a shell.
fn substitution_flags(raw : String) -> (Bool, Bool, Bool, Bool) {
  let cs = raw.to_array()
  let mut quote : Char? = None
  let mut backticks = false
  let mut unquoted = false
  let mut double_quoted = false
  let mut single_command = false
  let mut i = 0
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
    if c == '`' ||
      (
        c == '$' &&
        i + 1 < cs.length() &&
        (cs[i + 1] == '(' || cs[i + 1] == '{')
      ) {
      let opening = if c == '`' { '`' } else { cs[i + 1] }
      let closing = if opening == '(' {
        ')'
      } else if opening == '{' {
        '}'
      } else {
        '`'
      }
      let command = c == '`' ||
        (opening == '(' && !(i + 2 < cs.length() && cs[i + 2] == '('))
      let start = i
      if command {
        backticks = backticks || c == '`'
      }
      i += if c == '`' { 1 } else { 2 }
      let mut depth = 1
      let mut inner : Char? = None
      while i < cs.length() && depth > 0 {
        let n = cs[i]
        if n == '\\' && inner != Some('\'') {
          i += 2
          continue
        }
        if inner is Some(q) {
          if n == q {
            inner = None
          }
        } else if n == '\'' || n == '"' {
          inner = Some(n)
        } else if n == closing {
          depth -= 1
        } else if n == opening && opening != '`' {
          depth += 1
        }
        i += 1
      }
      if command && c != '`' {
        let body = String::from_array(cs[start + 2:i - 1]).trim().to_owned()
        let parts = body.split(" ").filter(s => !s.is_empty()).collect()
        let numeric_seq = parts.length() >= 2 &&
          parts[0] == "seq" &&
          parts[1:]
          .iter()
          .all(s => {
            s.iter().all(n => (n >= '0' && n <= '9') || n == '.' || n == '-')
          })
        unquoted = unquoted || (quote == None && !numeric_seq)
        double_quoted = double_quoted || quote == Some('"')
        single_command = single_command ||
          (start == 0 && i == cs.length()) ||
          (
            start == 1 &&
            quote == Some('"') &&
            i + 1 == cs.length() &&
            cs[i] == '"'
          )
      }
      continue
    }
    i += 1
  }
  (backticks, unquoted, double_quoted, single_command)
}

///|
fn shell_diagnostics(ins : Instruction) -> Array[Diagnostic] {
  let source = run_script(ins)
  if source.is_empty() {
    return []
  }
  let tokens = shell_tokens(source) catch { _ => return [] }
  let commands = shell_commands(source) catch { _ => return [] }
  let out : Array[Diagnostic] = []
  fn emit(code : String, message : String) -> Unit {
    if !out.iter().any(d => d.code == code) {
      out.push({ line: ins.line, code, message, })
    }
  }
  for i, token in tokens {
    if token.kind != "word" {
      continue
    }
    if substitution_flags(token.raw).0 {
      emit("SC2006", "Use $(...) instead of legacy backticks")
    }
    let raw = if token.raw.contains("=") {
      token.raw.split("=").collect().last().unwrap().to_owned()
    } else {
      token.raw
    }
    if raw.has_prefix("\"~/") || raw.has_prefix("'~/") {
      emit("SC2088", "Tilde does not expand inside quotes; use $HOME")
    }
    if i > 0 &&
      tokens[i - 1].kind == "redirect" &&
      substitution_flags(token.raw).1 {
      emit("SC2046", "Quote command substitution to prevent word splitting")
    }
  }
  for command in commands {
    let name = executable_name(command[0].value)
    if command[0].dynamic {
      continue
    }
    let pure_echo = name == "echo" &&
      command.length() == 2 &&
      substitution_flags(command[1].raw).3
    if pure_echo {
      emit(
        "SC2005", "Execute the command directly instead of echoing its output",
      )
    }
    let mut end_options = false
    for i in 1..<command.length() {
      let token = command[i]
      let flags = substitution_flags(token.raw)
      if flags.0 {
        emit("SC2006", "Use $(...) instead of legacy backticks")
      }
      if !pure_echo &&
        !["case", "for", "[[", "local", "declare", "typeset"].contains(name) &&
        flags.1 {
        emit("SC2046", "Quote command substitution to prevent word splitting")
      }
      if name == "trap" && i == 1 && flags.2 {
        emit(
          "SC2064", "Use single quotes to defer expansion until the trap runs",
        )
      }
      if token.value == "--" {
        end_options = true
      }
      if ["rm", "cp", "mv"].contains(name) &&
        !end_options &&
        !token.quoted &&
        (token.raw.has_prefix("*") || token.raw.has_prefix("?")) {
        emit(
          "SC2035", "Use ./* or -- to prevent glob matches from becoming options",
        )
      }
    }
  }
  out
}
