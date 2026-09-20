///|
pub struct Diagnostic {
  line : Int
  code : String
  message : String
} derive(Debug, Eq, ToJson)

///|
pub fn lint(instructions : Array[Instruction]) -> Array[Diagnostic] {
  let out = []
  fn report(line : Int, code : String, message : String) -> Unit {
    out.push({ line, code, message, })
  }
  let stages : Map[String, Int] = Map([])
  let mut stage = -1
  let mut pipefail = false
  let stage_shells : Map[String, Bool] = Map([])
  let stage_posix : Map[String, Bool] = Map([])
  let mut posix_shell = true
  let mut stage_alias : String? = None
  let mut last_user : Instruction? = None
  fn report_user() -> Unit {
    if last_user is Some(ins) {
      let name = ins.arguments.split(":").collect()[0].trim().to_owned()
      if name == "root" || name == "0" {
        report(ins.line, "DL3002", "Use a non-root runtime user")
      }
    }
  }
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
      report_user()
      last_user = None
      if stage_alias is Some(stage_name) {
        stage_shells[stage_name] = pipefail
        stage_posix[stage_name] = posix_shell
      }
      stage_alias = None
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
      pipefail = stage_shells.get(base.to_lower()).unwrap_or(false)
      posix_shell = stage_posix.get(base.to_lower()).unwrap_or(true)
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
        stage_alias = Some(name)
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
    if ["COPY", "ADD"].contains(ins.name) {
      let parsed = Some(ins.split_arguments()) catch { _ => None }
      if parsed is Some(a) {
        if a.values.length() < 2 {
          report(ins.line, "ML1007", "COPY/ADD require source and destination")
        } else if a.values.length() > 2 &&
          !a.values[a.values.length() - 1].has_suffix("/") {
          report(
            ins.line,
            "DL3021",
            "Multiple sources require a destination ending in /",
          )
        }
      }
    }
    match ins.name {
      "USER" => last_user = Some(ins)
      "ADD" => {
        let inputs = ins.split_arguments().values catch { _ => [] }
        let sources = if inputs.is_empty() {
          []
        } else {
          inputs[:inputs.length() - 1].to_owned()
        }
        let special = sources
          .iter()
          .any(s => {
            s.has_prefix("http://") ||
            s.has_prefix("https://") ||
            s.has_prefix("git://") ||
            [".tar", ".tar.gz", ".tgz", ".tar.bz2", ".tar.xz", ".txz", ".tbz2"]
            .iter()
            .any(ext => s.has_suffix(ext))
          })
        if !special {
          report(
            ins.line,
            "DL3020",
            "Prefer COPY when ADD extraction or URL semantics are not needed",
          )
        }
      }
      "MAINTAINER" =>
        report(ins.line, "DL4000", "MAINTAINER is deprecated; use LABEL")
      "WORKDIR" =>
        if !ins.arguments.has_prefix("/") && !ins.arguments.has_prefix("$") {
          report(ins.line, "DL3000", "Use an absolute WORKDIR")
        }
      "SHELL" => {
        let form = Some(ins.split_arguments()) catch { _ => None }
        match form {
          Some(a) => {
            if !a.json_form {
              report(ins.line, "ML1006", "SHELL requires JSON exec form")
            }
            pipefail = a.values.contains("pipefail")
            posix_shell = !a.values.is_empty() &&
              ["sh", "bash", "dash", "ash", "ksh", "zsh"].contains(
                executable_name(a.values[0]),
              )
          }
          None => report(ins.line, "ML1006", "SHELL requires JSON exec form")
        }
      }
      "ONBUILD" =>
        if args.length() > 0 &&
          ["ONBUILD", "FROM", "MAINTAINER"].contains(args[0].to_upper()) {
          report(
            ins.line,
            "DL3043",
            "Instruction cannot be used as an ONBUILD trigger",
          )
        }
      "RUN" => {
        if posix_shell {
          for diagnostic in shell_diagnostics(ins) {
            out.push(diagnostic)
          }
        }
        for diagnostic in run_rules(ins) {
          out.push(diagnostic)
        }
        let script = run_script(ins)
        if shell_pipeline(script) && !pipefail && !ins.arguments.has_prefix("[") {
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
            if ins.name == "CMD" {
              "DL4003"
            } else {
              "DL4004"
            },
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
  report_user()
  ignore(analyze_stages(instructions)) catch {
    StageCycle(line) =>
      report(line, "ML1010", "Build stages have a circular dependency")
    _ => ()
  }
  if stage < 0 {
    report(1, "ML1005", "Dockerfile has no FROM stage")
  }
  for diagnostic in metadata_rules(instructions) {
    out.push(diagnostic)
  }
  out.sort_by((a, b) => a.line.compare(b.line))
  out
}
