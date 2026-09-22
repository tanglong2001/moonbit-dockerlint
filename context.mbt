///|
/// A host-supplied inventory AFTER selecting the correct Docker ignore file.
/// Canonical relative slash paths; kinds: file, directory, symlink.
pub(all) struct ContextEntry {
  path : String
  kind : String
  excluded : Bool
} derive(Debug, Eq, ToJson, @json.FromJson)

///|
pub(all) struct ContextChange {
  path : String
  excluded : Bool
} derive(Debug, Eq, ToJson, @json.FromJson)

///|
/// Indices refer to ContextPlan.entries. Unknown means no completeness assertion.
pub struct ContextInput {
  stage : Int
  line : Int
  kind : String
  source : String
  included : Array[Int]
  excluded : Array[Int]
  status : String
  note : String
} derive(Debug, Eq, ToJson)

///|
pub struct ContextFileImpact {
  path : String
  excluded : Bool
  source_lines : Array[Int]
  conservative : Bool
  targets : Array[TargetImpact]
} derive(Debug, Eq, ToJson)

///|
pub struct ContextPlan {
  graph : BuildImpact
  entries : Array[ContextEntry]
  inputs : Array[ContextInput]
  selected_entries : Array[Int]
  missing_lines : Array[Int]
  uncertainties : Array[BuildUncertainty]
  changes : Array[ContextFileImpact]
} derive(Debug, Eq, ToJson)

///|
priv struct ContextPattern {
  source : String
  tokens : Array[CopyToken]
  literal : Bool
}

///|
fn context_covers(pattern : ContextPattern, path : String) -> Bool {
  if pattern.source == "." {
    return true
  }
  if pattern.literal {
    path == pattern.source || path.has_prefix(pattern.source + "/")
  } else {
    copy_match(pattern.tokens, path, true)
  }
}

///|
/// Explain local build inputs and how explicit file changes flow to targets.
/// This is not a Docker build/cache prediction: image metadata, named contexts,
/// shell execution, COPY --exclude and filesystem links may be unknown.
pub fn analyze_context(
  source : String,
  entries : Array[ContextEntry],
  target? : String = "",
  changes? : Array[ContextChange] = [],
  build_args? : Map[String, String] = Map([]),
  control_files? : Array[String] = ["Dockerfile", ".dockerignore"],
) -> ContextPlan raise ParseError {
  if entries.length() > 20000 || changes.length() > 256 {
    raise Invalid("context inventory or change count limit")
  }
  let seen : Map[String, String] = Map([])
  for entry in entries {
    if !context_path_valid(entry.path) ||
      !["file", "directory", "symlink"].contains(entry.kind) ||
      seen.contains(entry.path) {
      raise Invalid("invalid or duplicate context inventory path")
    }
    seen[entry.path] = entry.kind
  }
  // Reject impossible inventories rather than treating children of links/files as
  // genuine context paths. Actual directory enumeration remains the host's job.
  for entry in entries {
    let parts = entry.path.split("/").collect()
    if parts.length() > 64 {
      raise Invalid("context path depth limit")
    }
    for i in 1..<parts.length() {
      let parent = parts[:i].map(x => x.to_owned()).join("/")
      if seen.get(parent) is Some(kind) && kind != "directory" {
        raise Invalid("inventory traverses a file or symbolic link")
      }
    }
  }
  for change in changes {
    if !context_path_valid(change.path) {
      raise Invalid("invalid changed context path")
    }
  }
  if control_files.length() > 16 ||
    !control_files.iter().all(context_path_valid) {
    raise Invalid("invalid context control files")
  }
  let graph = build_impact(source, target~)
  let instructions = parse(source)
  let scopes = analyze_variables(source, build_args~)
  let inputs : Array[ContextInput] = []
  let patterns : Array[ContextPattern?] = []
  let uncertainties = graph.uncertainties.copy()
  let mut stage = -1
  let mut work = 0L
  fn charge(pattern : ContextPattern, path : String) -> Unit raise ParseError {
    work += if pattern.literal || pattern.source == "." {
      1L
    } else {
      (pattern.tokens.length() + 1).to_int64() *
      (path.length() + 1).to_int64() *
      3L *
      (path.split("/").count() + 1).to_int64()
    }
    if work > 50000000L {
      raise Invalid("context pattern work limit")
    }
  }
  fn add(
    line : Int,
    kind : String,
    raw : String,
    values : Map[String, String],
    literal : Bool,
    extra_uncertainty : String,
  ) -> Unit raise ParseError {
    if inputs.length() >= 2048 {
      raise Invalid("context input count limit")
    }
    let mut note = extra_uncertainty
    let expanded = if raw.contains("$") {
      try {
        let expansion = expand_variables(raw, values)
        if !expansion.unresolved.is_empty() {
          note = "unresolved variables: " + expansion.unresolved.join(",")
        }
        expansion.value
      } catch {
        _ => {
          note = "unsupported source expansion"
          raw
        }
      }
    } else {
      raw
    }
    if expanded.is_empty() ||
      expanded.length() > 2048 ||
      expanded.contains("\u0000") {
      note = "empty, oversized or invalid source expression"
    }
    if kind == "ADD" &&
      (
        expanded.has_prefix("https://") ||
        expanded.has_prefix("http://") ||
        expanded.has_prefix("git://") ||
        expanded.has_prefix("git@") ||
        expanded.has_prefix("ssh://")
      ) {
      inputs.push({
        stage,
        line,
        kind,
        source: expanded,
        included: [],
        excluded: [],
        status: "external",
        note: "remote input not fetched",
      })
      patterns.push(None)
      return
    }
    let cleaned = clean_copy_source(expanded)
    let pattern : ContextPattern = {
      source: cleaned,
      tokens: if literal || note != "" {
        []
      } else {
        copy_tokens(cleaned)
      },
      literal: literal ||
      !cleaned.iter().any(c => "*?[\\".contains(c.to_string())),
    }
    let included = []
    let excluded = []
    let mut link = false
    if note == "" {
      for i in 0..<entries.length() {
        let entry = entries[i]
        charge(pattern, entry.path)
        if context_covers(pattern, entry.path) {
          if entry.excluded {
            excluded.push(i)
          } else {
            included.push(i)
            if entry.kind == "symlink" {
              link = true
            }
          }
        }
      }
    }
    if link {
      note = "symbolic link contents are not resolved"
    }
    if note != "" {
      uncertainties.push({ line, reason: note, })
    }
    let status = if note != "" {
      "unknown"
    } else if pattern.source == "." {
      "resolved"
    } else if !included.is_empty() {
      "resolved"
    } else if !excluded.is_empty() {
      "excluded"
    } else {
      "missing"
    }
    inputs.push({
      stage,
      line,
      kind,
      source: expanded,
      included,
      excluded,
      status,
      note,
    })
    patterns.push(if note == "" { Some(pattern) } else { None })
  }
  for i in 0..<instructions.length() {
    let instruction = instructions[i]
    if instruction.name == "FROM" {
      stage += 1
      continue
    }
    if stage < 0 {
      continue
    }
    let values = scopes[i].arguments.copy()
    for (key, value) in scopes[i].environment {
      values[key] = value
    }
    if instruction.name == "COPY" || instruction.name == "ADD" {
      let args = instruction.split_arguments()
      if args.values.length() < 2 {
        raise Invalid("COPY/ADD needs source and destination")
      }
      if args.flags.contains("from") {
        continue
      }
      let note = if args.flags.contains("exclude") {
        "COPY/ADD --exclude filtering is not evaluated"
      } else if !args.json_form && instruction.arguments.contains("\\") {
        "shell-form source escapes are not evaluated"
      } else {
        ""
      }
      for j in 0..<(args.values.length() - 1) {
        let value = args.values[j]
        if !args.json_form &&
          value.has_prefix("<<") &&
          !instruction.heredocs.is_empty() {
          continue
        }
        add(instruction.line, instruction.name, value, values, false, note)
      }
    } else if instruction.name == "RUN" {
      for flag in leading_flags(instruction.arguments) {
        if !flag.has_prefix("--mount=") {
          continue
        }
        let options : Map[String, String] = Map([])
        let mut uncertain = false
        for part in flag[8:].split(",") {
          let pair = part.split("=").collect()
          let key = pair[0].to_owned()
          if options.contains(key) {
            uncertain = true
          }
          options[key] = if pair.length() > 1 {
            pair[1:].map(x => x.to_owned()).join("=")
          } else {
            "true"
          }
        }
        if flag.contains("\"") || flag.contains("'") || flag.contains("\\") {
          uncertain = true
        }
        if uncertain {
          add(
            instruction.line,
            "RUN bind",
            ".",
            values,
            true,
            "quoted, escaped or duplicate mount options",
          )
          continue
        }
        let kind = options.get("type").unwrap_or("bind")
        if ["cache", "secret", "ssh", "tmpfs"].contains(kind) {
          continue
        }
        if kind != "bind" {
          add(
            instruction.line,
            "RUN mount",
            ".",
            values,
            true,
            "unknown mount type",
          )
          continue
        }
        if options.contains("from") {
          continue
        }
        if options.contains("source") && options.contains("src") {
          add(
            instruction.line,
            "RUN bind",
            ".",
            values,
            true,
            "conflicting mount source aliases",
          )
          continue
        }
        let path = options
          .get("source")
          .unwrap_or(options.get("src").unwrap_or("."))
        add(instruction.line, "RUN bind", path, values, true, "")
      }
    }
  }
  let selected_entries = []
  let selected_set : Map[Int, Bool] = Map([])
  let missing_lines = []
  for input in inputs {
    if graph.required.contains(input.stage) {
      if ["missing", "excluded"].contains(input.status) &&
        !missing_lines.contains(input.line) {
        missing_lines.push(input.line)
      }
      for index in input.included {
        if !selected_set.contains(index) {
          selected_set[index] = true
          selected_entries.push(index)
        }
      }
    }
  }
  let impacts = changes.map(change => {
    let seeds = []
    let lines = []
    let control_changed = control_files.contains(change.path)
    let mut conservative = graph.conservative || control_changed
    if !change.excluded || control_changed {
      for i in 0..<inputs.length() {
        let input = inputs[i]
        if input.status == "external" {
          continue
        }
        let matches = match patterns[i] {
          None => {
            conservative = true
            true
          }
          Some(pattern) => {
            charge(pattern, change.path)
            context_covers(pattern, change.path)
          }
        }
        if matches {
          if !seeds.contains(input.stage) {
            seeds.push(input.stage)
          }
          if !lines.contains(input.line) {
            lines.push(input.line)
          }
        }
      }
    }
    {
      path: change.path,
      excluded: change.excluded,
      source_lines: lines,
      conservative: conservative && (!change.excluded || control_changed),
      targets: stage_impacts(
        graph.stages,
        seeds,
        conservative,
        !change.excluded || control_changed,
      ),
    }
  })
  {
    graph,
    entries: entries.copy(),
    inputs,
    selected_entries,
    missing_lines,
    uncertainties,
    changes: impacts,
  }
}
