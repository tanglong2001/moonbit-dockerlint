///|
fn metadata_rules(instructions : Array[Instruction]) -> Array[Diagnostic] {
  let out : Array[Diagnostic] = []
  let mut healthchecks = 0
  let mut defined : Map[String, Bool] = Map([])
  let saved : Map[String, Map[String, Bool]] = Map([])
  let mut stage_name : String? = None
  for ins in instructions {
    fn emit(code : String, message : String) -> Unit {
      if !out.iter().any(d => d.line == ins.line && d.code == code) {
        out.push({ line: ins.line, code, message, })
      }
    }
    if ins.name == "FROM" {
      if stage_name is Some(name) {
        saved[name] = defined.copy()
      }
      let values = ins.split_arguments().values catch { _ => [] }
      defined = if values.is_empty() {
        Map([])
      } else {
        saved.get(values[0].to_lower()).unwrap_or(Map([])).copy()
      }
      stage_name = if values.length() == 3 {
        Some(values[2].to_lower())
      } else {
        None
      }
      healthchecks = 0
      if ins.arguments.has_prefix("--platform=") {
        emit("DL3029", "Avoid fixing the build platform in FROM")
      }
    }
    if ins.name == "HEALTHCHECK" {
      healthchecks += 1
      if healthchecks > 1 {
        emit("DL3012", "Earlier HEALTHCHECK in this stage is overridden")
      }
      let args = words(ins.arguments)
      let mut cmd = -1
      for i, value in args {
        if value.to_upper() == "CMD" {
          cmd = i
          break
        }
      }
      if cmd >= 0 && cmd + 1 < args.length() && !args[cmd + 1].has_prefix("[") {
        emit("DL3025", "Prefer JSON exec form for signal forwarding")
      }
    }
    if ins.name == "EXPOSE" {
      for spec in words(ins.arguments) {
        if spec.contains("$") {
          continue
        }
        let parts = spec.split("/").collect()
        let mut valid = parts.length() <= 2 &&
          (parts.length() == 1 || parts[1] == "tcp" || parts[1] == "udp")
        let mut oversized = false
        let ports = parts[0].split("-").collect()
        let mut previous = -1
        if ports.length() > 2 {
          valid = false
        }
        for port in ports {
          let mut number = 0
          if port.is_empty() {
            valid = false
          }
          for c in port.iter() {
            if c < '0' || c > '9' || number > 65535 {
              valid = false
              break
            }
            number = number * 10 + c.to_int() - 48
          }
          if number > 65535 {
            oversized = true
          }
          if number > 65535 || number < previous {
            valid = false
          }
          previous = number
        }
        if !valid {
          emit(
            if oversized {
              "DL3011"
            } else {
              "ML1012"
            },
            "EXPOSE requires a port or ordered range from 0 to 65535, optionally /tcp or /udp",
          )
        }
      }
    }
    if ins.name == "ENV" {
      let tokens = raw_arguments(ins.arguments) catch { _ => [] }
      let names = tokens
        .filter(t => t.contains("="))
        .map(t => t.split("=").collect()[0].to_owned())
      if names.length() > 1 {
        for token in tokens {
          let parts = token.split("=").collect()
          if parts.length() < 2 {
            continue
          }
          let used = expand_variables(
            parts[1:].map(s => s.to_owned()).join("="),
            Map([]),
          ) catch {
            _ => { value: "", unresolved: [], }
          }
          if used.unresolved
            .iter()
            .any(name => names.contains(name) && !defined.contains(name)) {
            emit(
              "DL3044", "ENV assignments on one instruction read the previous environment",
            )
          }
        }
      }
      for name in names {
        defined[name] = true
      }
    }
  }
  out
}
