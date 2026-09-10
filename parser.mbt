///|
pub suberror ParseError {
  Invalid(String)
  StageCycle(Int)
} derive(Debug)

///|
pub struct Instruction {
  line : Int
  end_line : Int
  name : String
  arguments : String
  heredocs : Array[HereDoc]
} derive(Debug, Eq, ToJson)

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
/// RUN/COPY heredoc bodies are captured without interpreting their contents.
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
  let seen_directives : Map[String, Bool] = Map([])
  let lines = source.split("\n").collect()
  let mut position = 0
  while position < lines.length() {
    let raw = lines[position]
    position += 1
    number = position
    let s = raw.trim_end(chars="\r").trim_start().to_owned()
    if s.has_prefix("#") {
      if directive_region {
        let pair = s[1:].trim().to_owned().split("=").collect()
        let key = pair[0].trim().to_owned().to_lower()
        if pair.length() >= 2 && ["syntax", "escape", "check"].contains(key) {
          if seen_directives.contains(key) {
            raise Invalid("duplicate parser directive " + key)
          }
          seen_directives[key] = true
          if key == "escape" {
            let value = pair[1:]
              .map(x => x.to_owned())
              .join("=")
              .trim()
              .to_owned()
            if value != "\\" && value != "`" {
              raise Invalid("invalid escape directive")
            }
            escape = value
          }
        } else {
          directive_region = false
        }
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
    if args == "" {
      raise Invalid("missing arguments at line " + start.to_string())
    }
    let headers = if name == "RUN" || name == "COPY" {
      heredoc_headers(args)
    } else {
      []
    }
    let heredocs = []
    for (delimiter, strip_tabs, expand) in headers {
      let body = StringBuilder()
      let mut closed = false
      while position < lines.length() {
        let line = lines[position].trim_end(chars="\r").to_owned()
        position += 1
        let content = if strip_tabs {
          line.trim_start(chars="\t").to_owned()
        } else {
          line
        }
        if content == delimiter {
          closed = true
          break
        }
        body.write_string(content)
        body.write_char('\n')
      }
      if !closed {
        raise Invalid(
          "unclosed heredoc " + delimiter + " at line " + start.to_string(),
        )
      }
      heredocs.push({
        name: delimiter,
        content: body.to_string(),
        strip_tabs,
        expand,
      })
    }
    number = position
    let instruction : Instruction = {
      line: start,
      end_line: number,
      name,
      arguments: args,
      heredocs,
    }
    if ["COPY", "ADD", "SHELL"].contains(name) || args.has_prefix("[") {
      ignore(instruction.split_arguments())
    }
    out.push(instruction)
    logical = ""
  }
  if continuing {
    raise Invalid("dangling line continuation")
  }
  out
}
