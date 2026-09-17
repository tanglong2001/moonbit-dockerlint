///|
fn json_strings(value : Json) -> Array[String] raise ParseError {
  match value {
    Array(items) =>
      items.map(item => {
        match item {
          String(s) => s
          _ => raise Invalid("expected string array")
        }
      })
    _ => raise Invalid("expected string array")
  }
}

///|
/// Strict JSON configuration: ignored codes, inline directives, trusted registries,
/// and severity overrides. No file or environment is consulted by this API.
pub fn configured_report(
  source : String,
  config : String,
  filename? : String = "Dockerfile",
) -> String raise ParseError {
  let json = @json.parse(config) catch {
    _ => raise Invalid("invalid JSON configuration")
  }
  let options = match json {
    Object(items) => items
    _ => raise Invalid("configuration must be an object")
  }
  let mut ignored = []
  let mut honor_inline = true
  let mut registries = []
  let overrides : Map[String, String] = Map([])
  for key, value in options {
    match key {
      "ignore" => {
        ignored = json_strings(value)
        for code in ignored {
          if code.length() != 6 || ignore_list(code).length() != 1 {
            raise Invalid("expected one rule code")
          }
        }
      }
      "honorInline" =>
        match value {
          True => honor_inline = true
          False => honor_inline = false
          _ => raise Invalid("honorInline must be boolean")
        }
      "trustedRegistries" => registries = json_strings(value)
      "severity" => {
        let values = match value {
          Object(items) => items
          _ => raise Invalid("severity must be an object")
        }
        for code, level in values {
          if code.length() != 6 || ignore_list(code).length() != 1 {
            raise Invalid("expected one rule code")
          }
          let level = match level {
            String(s) => s
            _ => raise Invalid("severity must be a string")
          }
          if !["error", "warning", "info", "style", "ignore"].contains(level) {
            raise Invalid("invalid severity")
          }
          overrides[code] = level
        }
      }
      _ => raise Invalid("unknown configuration key: " + key)
    }
  }
  let entries = check(
      source,
      ignore_codes=ignored,
      honor_inline~,
      trusted_registries=registries,
    )
    .filter(d => overrides.get(d.code) != Some("ignore"))
    .map(d => {
      "file": filename.to_json(),
      "line": d.line.to_json(),
      "code": d.code.to_json(),
      "message": d.message.to_json(),
      "level": overrides.get(d.code).unwrap_or(d.severity()).to_json(),
    })
  entries.to_json().stringify()
}

///|
pub fn variable_report(
  source : String,
  build_args_json? : String = "{}",
) -> String raise ParseError {
  let json = @json.parse(build_args_json) catch {
    _ => raise Invalid("invalid build arguments JSON")
  }
  let items = match json {
    Object(items) => items
    _ => raise Invalid("build arguments must be an object")
  }
  let build_args : Map[String, String] = Map([])
  for key, value in items {
    let value = match value {
      String(s) => s
      _ => raise Invalid("build argument must be string")
    }
    build_args[key] = value
  }
  analyze_variables(source, build_args~).to_json().stringify()
}
