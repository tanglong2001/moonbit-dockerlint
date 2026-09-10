///|
pub suberror ParseError {
  Invalid(String)
} derive(Debug)

///|
pub struct Instruction {
  line : Int
  end_line : Int
  name : String
  arguments : String
} derive(Debug, Eq)

///|
fn words(s : String) -> Array[String] {
  let result = []
  let mut word = ""
  for c in s.iter() {
    if c == ' ' || c == '\t' {
      if word != "" {
        result.push(word)
        word = ""
      }
    } else {
      word += c.to_string()
    }
  }
  if word != "" {
    result.push(word)
  }
  result
}

///|
/// Source-preserving instruction arguments, physical line ranges, escape directives.
/// Heredocs are explicitly rejected in this version instead of misparsed.
pub fn parse(source : String) -> Array[Instruction] raise ParseError {
  if !valid_unicode(source) {
    raise Invalid("ill-formed UTF-16 input")
  }
  if source.length() > 1000000 {
    raise Invalid("Dockerfile too large")
  }
  let out = []
  let mut logical = ""
  let mut start = 1
  let mut number = 0
  let mut escape = "\\"
  let mut directive_region = true
  let mut continuing = false
  for raw in source.split("\n") {
    number += 1
    let s = raw.trim_end(chars="\r").trim_start().to_owned()
    if s.has_prefix("#") {
      if directive_region && s.to_lower().has_prefix("# escape=") {
        let value = s[9:].trim().to_owned()
        if value != "\\" && value != "`" {
          raise Invalid("invalid escape directive")
        }
        escape = value
      }
      continue
    }
    if s == "" {
      directive_region = false
      continue
    }
    directive_region = false
    if !continuing {
      start = number
    }
    let mut suffix = 0
    let clean = s.trim_end().to_owned()
    for i = clean.length() - 1; i >= 0; i = i - 1 {
      if clean[i:i + 1] == escape {
        suffix += 1
      } else {
        break
      }
    }
    continuing = suffix % 2 == 1
    logical += if continuing {
      clean[:clean.length() - 1].to_owned()
    } else {
      clean
    }
    if continuing {
      continue
    }
    let parts = words(logical)
    if parts.is_empty() {
      continue
    }
    let name = parts[0].to_upper()
    let args = logical[parts[0].length():].trim_start().to_owned()
    if args.contains("<<") {
      raise Invalid("heredoc not supported at line " + start.to_string())
    }
    if args == "" {
      raise Invalid("missing arguments at line " + start.to_string())
    }
    if args.has_prefix("[") &&
      (
        name == "RUN" ||
        name == "CMD" ||
        name == "ENTRYPOINT" ||
        name == "SHELL" ||
        name == "COPY" ||
        name == "ADD"
      ) {
      let value = @json.parse(args) catch {
        _ => raise Invalid("malformed JSON instruction")
      }
      match value {
        Array(items) => {
          if items.length() == 0 {
            raise Invalid("empty JSON instruction")
          }
          for item in items {
            match item {
              String(_) => ()
              _ => raise Invalid("JSON instruction requires strings")
            }
          }
        }
        _ => raise Invalid("JSON instruction requires array")
      }
    }
    out.push({ line: start, end_line: number, name, arguments: args, })
    logical = ""
  }
  if continuing {
    raise Invalid("dangling line continuation")
  }
  out
}
