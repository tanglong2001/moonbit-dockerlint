///|
pub struct Expansion {
  value : String
  unresolved : Array[String]
} derive(Debug, Eq, ToJson)

///|
fn variable_char(c : Char, first : Bool) -> Bool {
  (c >= 'a' && c <= 'z') ||
  (c >= 'A' && c <= 'Z') ||
  c == '_' ||
  (!first && c >= '0' && c <= '9')
}

///|
/// Docker-style parameter expansion without evaluating shell commands. Unknown
/// variables are preserved and listed; base-image environments are not fetched.
pub fn expand_variables(
  source : String,
  values : Map[String, String],
) -> Expansion raise ParseError {
  if !valid_unicode(source) ||
    values.iter().any(pair => !valid_unicode(pair.0) || !valid_unicode(pair.1)) {
    raise Invalid("invalid variable Unicode")
  }
  fn expand(source : String, depth : Int) -> Expansion raise ParseError {
    if depth > 32 || source.length() > 1000000 {
      raise Invalid("variable expansion limit")
    }
    let chars = source.to_array()
    let out = StringBuilder()
    let mut units = 0
    fn put_string(value : String) -> Unit raise ParseError {
      units += value.length()
      if units > 1000000 {
        raise Invalid("expanded value limit")
      }
      out.write_string(value)
    }
    fn put_char(value : Char) -> Unit raise ParseError {
      units += if value.to_int() > 65535 { 2 } else { 1 }
      if units > 1000000 {
        raise Invalid("expanded value limit")
      }
      out.write_char(value)
    }
    let unresolved : Array[String] = []
    let mut quote : Char? = None
    let mut i = 0
    while i < chars.length() {
      let c = chars[i]
      if c == '\\' && quote != Some('\'') {
        i += 1
        if i == chars.length() {
          raise Invalid("trailing variable escape")
        }
        if quote == Some('"') && !"$`\"\\".contains(chars[i].to_string()) {
          put_char('\\')
        }
        if chars[i] != '\n' {
          put_char(chars[i])
        }
        i += 1
        continue
      }
      if (c == '\'' || c == '"') && (quote == None || quote == Some(c)) {
        quote = if quote == None { Some(c) } else { None }
        i += 1
        continue
      }
      if c != '$' || quote == Some('\'') {
        put_char(c)
        i += 1
        continue
      }
      let start = i
      i += 1
      let braced = i < chars.length() && chars[i] == '{'
      if braced {
        i += 1
      }
      let name_start = i
      while i < chars.length() && variable_char(chars[i], i == name_start) {
        i += 1
      }
      if name_start == i {
        if braced {
          raise Invalid("invalid variable name")
        }
        put_char('$')
        continue
      }
      let name = String::from_array(chars[name_start:i])
      let mut operator = ""
      let mut fallback = ""
      if braced {
        let op_start = i
        if i < chars.length() && chars[i] == ':' {
          i += 1
        }
        if i < chars.length() && (chars[i] == '-' || chars[i] == '+') {
          i += 1
          operator = String::from_array(chars[op_start:i])
          let fallback_start = i
          let mut nesting = 0
          while i < chars.length() {
            if chars[i] == '\\' {
              i += 2
              continue
            }
            if chars[i] == '{' {
              nesting += 1
            }
            if chars[i] == '}' {
              if nesting == 0 {
                break
              }
              nesting -= 1
            }
            i += 1
          }
          if i > chars.length() {
            raise Invalid("invalid variable fallback")
          }
          fallback = String::from_array(chars[fallback_start:i])
        }
        if i >= chars.length() || chars[i] != '}' {
          raise Invalid("unsupported or unclosed parameter expansion")
        }
        i += 1
      }
      let value = values.get(name)
      let set = value != None &&
        (!operator.has_prefix(":") || value != Some(""))
      let use_fallback = (operator.has_suffix("-") && !set) ||
        (operator.has_suffix("+") && set)
      if use_fallback {
        let expanded = expand(fallback, depth + 1)
        put_string(expanded.value)
        for name in expanded.unresolved {
          if !unresolved.contains(name) {
            unresolved.push(name)
          }
        }
      } else if operator.has_suffix("+") {
        ()
      } else if value is Some(v) {
        put_string(v)
      } else {
        put_string(String::from_array(chars[start:i]))
        if !unresolved.contains(name) {
          unresolved.push(name)
        }
      }
    }
    if quote != None {
      raise Invalid("unclosed variable quote")
    }
    { value: out.to_string(), unresolved, }
  }
  expand(source, 0)
}

///|
pub struct VariableScope {
  line : Int
  stage : Int
  instruction : String
  expanded : String
  arguments : Map[String, String]
  environment : Map[String, String]
  unresolved : Array[String]
} derive(Debug, Eq, ToJson)

///|
/// Snapshot after every instruction. Global ARG is only visible in FROM unless
/// redeclared; child stages inherit declared ARG and ENV from their named parent.
pub fn analyze_variables(
  source : String,
  build_args? : Map[String, String] = Map([]),
) -> Array[VariableScope] raise ParseError {
  for key, value in build_args {
    if !valid_unicode(key) || !valid_unicode(value) || value.length() > 1000000 {
      raise Invalid("invalid build argument value")
    }
  }
  let global : Map[String, String] = Map([])
  let parents : Map[String, (Map[String, String], Map[String, String])] = Map([])
  let mut args : Map[String, String] = Map([])
  let mut env : Map[String, String] = Map([])
  let mut stage_name : String? = None
  let mut stage = -1
  let result : Array[VariableScope] = []
  let mut snapshot_units = 0
  for ins in parse(source) {
    if result.length() >= 10000 {
      raise Invalid("variable snapshot count limit")
    }
    for key, value in args {
      snapshot_units += key.length() + value.length()
    }
    for key, value in env {
      snapshot_units += key.length() + value.length()
    }
    for key, value in global {
      snapshot_units += key.length() + value.length()
    }
    if snapshot_units > 8000000 {
      raise Invalid("variable snapshot size limit")
    }
    if ins.name == "FROM" {
      if stage_name is Some(name) {
        parents[name] = (args.copy(), env.copy())
      }
      let expanded = expand_variables(ins.arguments, global)
      let words = split_quoted(expanded.value)
      let offset = if words[0].has_prefix("--platform=") { 1 } else { 0 }
      if words.length() <= offset {
        raise Invalid("malformed FROM")
      }
      let inherited = parents
        .get(words[offset].to_lower())
        .unwrap_or((Map([]), Map([])))
      args = inherited.0.copy()
      env = inherited.1.copy()
      stage += 1
      stage_name = if words.length() == offset + 3 &&
        words[offset + 1].to_upper() == "AS" {
        Some(words[offset + 2].to_lower())
      } else {
        None
      }
      result.push({
        line: ins.line,
        stage,
        instruction: ins.name,
        expanded: expanded.value,
        arguments: args.copy(),
        environment: env.copy(),
        unresolved: expanded.unresolved,
      })
      continue
    }
    let values = if stage < 0 { global.copy() } else { args.copy() }
    for key, value in env {
      values[key] = value
    }
    let unresolved : Array[String] = []
    let expanded = if ins.name == "ARG" {
      let parts = ins.arguments.split("=").collect()
      let name = parts[0].trim().to_owned()
      let name_chars = name.to_array()
      if name.is_empty() ||
        !variable_char(name_chars[0], true) ||
        !name.iter().all(c => variable_char(c, false)) {
        raise Invalid("invalid ARG name")
      }
      let value = if build_args.get(name) is Some(v) {
        Some(v)
      } else if parts.length() > 1 {
        let value = expand_variables(
          parts[1:].map(s => s.to_owned()).join("="),
          values,
        )
        for name in value.unresolved {
          unresolved.push(name)
        }
        Some(value.value)
      } else if stage < 0 {
        global.get(name)
      } else {
        match args.get(name) {
          Some(v) => Some(v)
          None => global.get(name)
        }
      }
      if value is Some(v) {
        if stage < 0 {
          global[name] = v
        } else {
          args[name] = v
        }
      }
      if value is Some(v) {
        name + "=" + v
      } else {
        name
      }
    } else if ins.name == "ENV" {
      let tokens = raw_arguments(ins.arguments)
      if tokens.is_empty() {
        raise Invalid("empty ENV")
      }
      let pairs = if tokens[0].contains("=") {
        tokens
      } else {
        let name = tokens[0]
        let rest = ins.arguments[tokens[0].length():].trim_start().to_owned()
        [name + "=" + rest]
      }
      let outputs = []
      for pair in pairs {
        let parts = pair.split("=").collect()
        if parts.length() < 2 || parts[0].is_empty() {
          raise Invalid("invalid ENV assignment")
        }
        let key = parts[0].to_owned()
        let value = expand_variables(
          parts[1:].map(s => s.to_owned()).join("="),
          values,
        )
        env[key] = value.value
        outputs.push(key + "=" + value.value)
        for name in value.unresolved {
          if !unresolved.contains(name) {
            unresolved.push(name)
          }
        }
      }
      outputs.join(" ")
    } else if [
        "ADD", "COPY", "WORKDIR", "USER", "EXPOSE", "LABEL", "STOPSIGNAL", "VOLUME",
      ].contains(ins.name) {
      let value = expand_variables(ins.arguments, values)
      for name in value.unresolved {
        unresolved.push(name)
      }
      value.value
    } else {
      ins.arguments
    }
    result.push({
      line: ins.line,
      stage,
      instruction: ins.name,
      expanded,
      arguments: if stage < 0 {
        global.copy()
      } else {
        args.copy()
      },
      environment: env.copy(),
      unresolved,
    })
  }
  result
}
