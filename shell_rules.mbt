///|
fn run_script(ins : Instruction) -> String {
  if ins.arguments.has_prefix("[") {
    return ""
  }
  // A bare heredoc is a script. A heredoc redirected into cat is data.
  if ins.arguments.has_prefix("<<") && ins.heredocs.length() == 1 {
    return ins.heredocs[0].content
  }
  let mut source = ins.arguments
  while source.has_prefix("--") {
    let parts = source.split(" ").collect()
    if parts.length() < 2 {
      return ""
    }
    source = source[parts[0].length():].trim().to_owned()
  }
  source
}

///|
fn run_rules(ins : Instruction) -> Array[Diagnostic] {
  let source = run_script(ins)
  if source.is_empty() && !ins.arguments.has_prefix("[") {
    return []
  }
  let commands : Array[Array[ShellToken]] = try {
    if ins.arguments.has_prefix("[") {
      [
        ins.split_arguments().values.map(value => {
          kind: "word",
          value,
          raw: value,
          line: 1,
          quoted: true,
          dynamic: false,
        }),
      ]
    } else {
      shell_commands(source)
    }
  } catch {
    _ =>
      return [
        {
          line: ins.line,
          code: "ML1011",
          message: "Invalid shell quoting or substitution",
        },
      ]
  }
  let out : Array[Diagnostic] = []
  fn emit(code : String, message : String) -> Unit {
    if !out.iter().any(d => d.code == code) {
      out.push({ line: ins.line, code, message, })
    }
  }
  for index, tokens in commands {
    if tokens.is_empty() {
      continue
    }
    if tokens[0].dynamic {
      continue
    }
    let name = executable_name(tokens[0].value)
    let args = tokens[1:].map(t => t.value)
    let remaining = commands[index + 1:]
    fn cleaned(manager : String, path : String) -> Bool {
      remaining
      .iter()
      .any(cmd => {
        let values = cmd.map(t => t.value)
        if manager == "apt" {
          executable_name(values[0]) == "rm" &&
          values.iter().any(s => s.has_prefix(path))
        } else {
          executable_name(values[0]) == manager &&
          values.contains("clean") &&
          (path == "" || values.contains(path))
        }
      })
    }
    if name == "sudo" {
      emit("DL3004", "Avoid sudo; use USER for privilege changes")
    }
    if name == "cd" {
      emit("DL3003", "Use WORKDIR instead of RUN cd")
    }
    if ["ssh", "service", "shutdown", "reboot", "mount", "su"].contains(name) {
      emit(
        "DL3001", "This command is usually inappropriate in a container build",
      )
    }
    if name == "apt" {
      emit("DL3027", "Use apt-get or apt-cache instead of interactive apt")
    }
    if name == "apt-get" &&
      (args.contains("install") || args.contains("update")) {
      if args.contains("install") {
        let packages = package_operands(args, "install")
        if packages
          .iter()
          .any(p => {
            !p.contains("=") && !p.has_prefix("/") && !p.has_prefix("./")
          }) {
          emit("DL3008", "Pin apt-get package versions with package=version")
        }
        if !flag_present(args, ["-y", "--yes", "--assume-yes"]) &&
          !args.contains("-qq") {
          emit("DL3014", "Use a non-interactive apt-get install")
        }
        if !args.contains("--no-install-recommends") {
          emit("DL3015", "Avoid installing recommended packages")
        }
      }
      if args.contains("update") && !cleaned("apt", "/var/lib/apt/lists/") {
        emit("DL3009", "Remove apt lists in the same RUN after apt-get update")
      }
    }
    if name == "apk" && args.contains("add") {
      if package_operands(args, "add")
        .iter()
        .any(p => {
          !p.contains("=") &&
          !p.contains("~") &&
          !p.has_prefix("/") &&
          !p.has_prefix("./")
        }) {
        emit("DL3018", "Pin apk package versions")
      }
      if !args.contains("--no-cache") {
        emit("DL3019", "Use apk add --no-cache")
      }
    }
    if ["yum", "dnf", "zypper"].contains(name) &&
      (args.contains("install") || (name == "zypper" && args.contains("in"))) {
      let verb = if args.contains("install") { "install" } else { "in" }
      let zypper = name == "zypper"
      if !flag_present(
          args,
          if zypper {
            ["-n", "--non-interactive"]
          } else {
            ["-y", "--assumeyes"]
          },
        ) {
        emit(
          if name == "yum" {
            "DL3030"
          } else if name == "dnf" {
            "DL3038"
          } else {
            "DL3034"
          },
          "Use non-interactive package installation",
        )
      }
      if !cleaned(name, if zypper { "" } else { "all" }) {
        emit(
          if name == "yum" {
            "DL3032"
          } else if name == "dnf" {
            "DL3040"
          } else {
            "DL3036"
          },
          "Clean the package cache in the same RUN after installation",
        )
      }
      if package_operands(args, verb)
        .iter()
        .any(p => {
          !p.contains("=") &&
          !p.split("-").collect()[1:]
          .iter()
          .any(part => {
            !part.is_empty() &&
            part.to_owned().to_array()[0] >= '0' &&
            part.to_owned().to_array()[0] <= '9'
          }) &&
          !p.has_suffix(".rpm") &&
          !p.contains("$")
        }) {
        emit(
          if name == "yum" {
            "DL3033"
          } else if name == "dnf" {
            "DL3041"
          } else {
            "DL3037"
          },
          "Pin package versions",
        )
      }
    }
    if name == "zypper" &&
      (args.contains("dup") || args.contains("dist-upgrade")) {
      emit("DL3035", "Avoid zypper dist-upgrade")
    }
    let is_pip = name == "pip" ||
      name == "pip3" ||
      (
        (name == "python" || name == "python3") &&
        args.length() >= 2 &&
        args[0] == "-m" &&
        args[1] == "pip"
      )
    if is_pip && args.contains("install") {
      if package_operands(args, "install")
        .iter()
        .any(p => {
          !p.contains("==") &&
          !p.contains("~=") &&
          !p.has_prefix("/") &&
          !p.has_prefix(".") &&
          !p.contains("://") &&
          !p.has_suffix(".whl")
        }) {
        emit("DL3013", "Pin pip package versions or use a requirements file")
      }
      if !args.contains("--no-cache-dir") {
        emit("DL3042", "Disable pip's download cache")
      }
    }
    if name == "npm" && (args.contains("install") || args.contains("i")) {
      let packages = package_operands(
        args,
        if args.contains("install") {
          "install"
        } else {
          "i"
        },
      )
      if packages
        .iter()
        .any(p => {
          let p = if p.has_prefix("@") { p[1:].to_owned() } else { p }
          !p.contains("@") &&
          !p.contains("#") &&
          !p.contains("://") &&
          !p.has_prefix(".") &&
          !p.has_prefix("/")
        }) {
        emit("DL3016", "Pin npm package versions")
      }
    }
    if name == "gem" &&
      args.contains("install") &&
      !flag_present(args, ["-v", "--version"]) &&
      package_operands(args, "install").iter().any(p => !p.contains(":")) {
      emit("DL3028", "Pin gem package versions")
    }
    if name == "go" &&
      args.contains("install") &&
      package_operands(args, "install")
      .iter()
      .any(p => !p.contains("@") && !p.has_prefix(".") && !p.has_prefix("/")) {
      emit("DL3062", "Pin go install package versions")
    }
    if name == "wget" &&
      !flag_present(args, ["-q", "--quiet", "--progress", "-nv", "--no-verbose"]) {
      emit("DL3047", "Use wget progress settings suitable for build logs")
    }
    if name == "ln" && args.contains("/bin/sh") {
      emit("DL4005", "Use SHELL instead of replacing /bin/sh")
    }
  }
  out
}
