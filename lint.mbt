///|
pub struct Diagnostic {
  line : Int
  code : String
  message : String
} derive(Debug, Eq)

///|
pub fn lint(instructions : Array[Instruction]) -> Array[Diagnostic] {
  let out = []
  fn report(line : Int, code : String, message : String) -> Unit {
    out.push({ line, code, message, })
  }
  let stages : Map[String, Int] = Map([])
  let mut stage = -1
  let mut pipefail = false
  let counts : Map[String, Int] = Map([])
  let known = [
    "FROM", "RUN", "CMD", "LABEL", "MAINTAINER", "EXPOSE", "ENV", "ADD", "COPY",
    "ENTRYPOINT", "VOLUME", "USER", "WORKDIR", "ARG", "ONBUILD", "STOPSIGNAL", "HEALTHCHECK",
    "SHELL",
  ]
  for ins in instructions {
    let args = words(ins.arguments)
    if !known.contains(ins.name) {
      report(ins.line, "ML1001", "Unknown instruction: " + ins.name)
      continue
    }
    if ins.name == "FROM" {
      stage += 1
      pipefail = false
      counts.clear()
      let offset = if args.length() > 0 && args[0].has_prefix("--platform=") {
        1
      } else {
        0
      }
      if args.length() != offset + 1 &&
        !(args.length() == offset + 3 && args[offset + 1].to_upper() == "AS") {
        report(ins.line, "ML1002", "Malformed FROM instruction")
        continue
      }
      let base = args[offset]
      let base_stage = stages.contains(base.to_lower())
      if !base_stage &&
        base != "scratch" &&
        !base.contains("$") &&
        !base.contains("@") {
        let last = base.split("/").to_array().last().unwrap().to_owned()
        if !last.contains(":") {
          report(ins.line, "DL3006", "Pin the base image version")
        } else if last.has_suffix(":latest") {
          report(ins.line, "DL3007", "Avoid the latest image tag")
        }
      }
      if args.length() == offset + 3 {
        let name = args[offset + 2].to_lower()
        if stages.contains(name) {
          report(ins.line, "DL3024", "Duplicate build stage name")
        }
        stages[name] = stage
      }
      continue
    }
    if stage < 0 && ins.name != "ARG" {
      report(ins.line, "ML1003", "Instruction before first FROM")
    }
    match ins.name {
      "USER" =>
        if args.length() > 0 &&
          (
            args[0] == "root" ||
            args[0] == "0" ||
            args[0].has_prefix("root:") ||
            args[0].has_prefix("0:")
          ) {
          report(ins.line, "DL3002", "Use a non-root runtime user")
        }
      "ADD" =>
        report(
          ins.line,
          "DL3020",
          "Prefer COPY when ADD extraction or URL semantics are not needed",
        )
      "MAINTAINER" =>
        report(ins.line, "DL4000", "MAINTAINER is deprecated; use LABEL")
      "WORKDIR" =>
        if !ins.arguments.has_prefix("/") && !ins.arguments.has_prefix("$") {
          report(ins.line, "DL3000", "Use an absolute WORKDIR")
        }
      "SHELL" => pipefail = ins.arguments.contains("pipefail")
      "RUN" => {
        if ins.arguments.has_prefix("cd ") {
          report(ins.line, "DL3003", "Use WORKDIR instead of RUN cd")
        }
        if ins.arguments.contains("|") &&
          !pipefail &&
          !ins.arguments.contains("pipefail") &&
          !ins.arguments.has_prefix("[") {
          report(
            ins.line,
            "DL4006",
            "Shell pipeline may hide command failures; consider pipefail",
          )
        }
      }
      "CMD" | "ENTRYPOINT" => {
        if !ins.arguments.has_prefix("[") {
          report(
            ins.line,
            "DL3025",
            "Prefer JSON exec form for signal forwarding",
          )
        }
        let count = counts.get(ins.name).unwrap_or(0) + 1
        counts[ins.name] = count
        if count > 1 {
          report(
            ins.line,
            "ML1004",
            "Earlier " + ins.name + " in this stage is overridden",
          )
        }
      }
      "COPY" =>
        for arg in args {
          if arg.has_prefix("--from=") {
            let name = arg[7:].to_owned().to_lower()
            // An unknown name may legally be an external image, so it is not rejected.
            if stages.get(name) is Some(index) {
              if index == stage {
                report(ins.line, "DL3023", "COPY cannot refer to its own stage")
              }
            } else {
              let mut index = 0
              let mut numeric = name != ""
              for c in name.iter() {
                if c < '0' || c > '9' {
                  numeric = false
                } else if index < 100000 {
                  index = index * 10 + c.to_int() - 48
                }
              }
              if numeric && index >= stage {
                report(
                  ins.line,
                  "DL3022",
                  "COPY refers to unavailable stage index",
                )
              }
            }
          }
        }
      _ => ()
    }
  }
  if stage < 0 {
    report(1, "ML1005", "Dockerfile has no FROM stage")
  }
  out
}
