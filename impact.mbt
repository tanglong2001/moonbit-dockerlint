///|
pub struct BuildEdge {
  consumer : Int
  dependency : Int
  line : Int
  kind : String
} derive(Debug, Eq, ToJson)

///|
pub struct BuildUncertainty {
  line : Int
  reason : String
} derive(Debug, Eq, ToJson)

///|
pub struct TargetImpact {
  target : Int
  affected : Bool
  path : Array[Int]
} derive(Debug, Eq, ToJson)

///|
pub struct BuildImpact {
  stages : Array[Stage]
  edges : Array[BuildEdge]
  selected : Int
  required : Array[Int]
  changed_stages : Array[Int]
  targets : Array[TargetImpact]
  conservative : Bool
  uncertainties : Array[BuildUncertainty]
} derive(Debug, Eq, ToJson)

///|
// Read only leading flags; shell syntax after them is outside this analysis.
fn leading_flags(source : String) -> Array[String] raise ParseError {
  let result = []
  let cs = source.to_array()
  let mut i = 0
  while i < cs.length() {
    while i < cs.length() && (cs[i] == ' ' || cs[i] == '\t') {
      i += 1
    }
    if i + 1 >= cs.length() || cs[i] != '-' || cs[i + 1] != '-' {
      break
    }
    let start = i
    let mut quote : Char? = None
    while i < cs.length() {
      let c = cs[i]
      if c == '\\' {
        i += 2
        continue
      }
      if quote is Some(q) {
        if c == q {
          quote = None
        }
      } else if c == '\'' || c == '"' {
        quote = Some(c)
      } else if c == ' ' || c == '\t' {
        break
      }
      i += 1
    }
    if quote != None || i > cs.length() {
      raise Invalid("unterminated instruction flag")
    }
    result.push(String::from_array(cs[start:i]))
  }
  result
}

///|
fn stage_reference(
  reference : String,
  stages : Array[Stage],
) -> Int? raise ParseError {
  let lower = reference.to_lower()
  if !lower.is_empty() && lower.iter().all(c => c >= '0' && c <= '9') {
    let mut index = 0
    for c in lower.iter() {
      if index > 256 {
        raise Invalid("stage index out of range")
      }
      index = index * 10 + c.to_int() - 48
    }
    if index >= stages.length() {
      raise Invalid("stage index out of range")
    }
    return Some(index)
  }
  for stage in stages {
    if stage.stage_name == Some(lower) {
      return Some(stage.index)
    }
  }
  None
}

///|
fn build_edges(
  instructions : Array[Instruction],
  stages : Array[Stage],
) -> (Array[BuildEdge], Array[BuildUncertainty]) raise ParseError {
  let edges = []
  let uncertainties = []
  let mut current = -1
  fn add(
    reference : String,
    line : Int,
    kind : String,
  ) -> Unit raise ParseError {
    if reference.contains("$") {
      uncertainties.push({ line, reason: "dynamic " + kind + " reference", })
      return
    }
    if stage_reference(reference, stages) is Some(dependency) {
      if kind != "FROM" || dependency < current {
        edges.push({ consumer: current, dependency, line, kind, })
      }
    }
  }
  for instruction in instructions {
    if instruction.name == "FROM" {
      current += 1
      // A numeric FROM is an image name, unlike COPY --from=0.
      let base = stages[current].base
      if base.iter().all(c => c >= '0' && c <= '9') {
        continue
      }
      add(base, instruction.line, "FROM")
    } else if current >= 0 && instruction.name == "COPY" {
      if instruction.split_arguments().flags.get("from") is Some(reference) {
        add(reference, instruction.line, "COPY")
      }
    } else if current >= 0 && instruction.name == "RUN" {
      for flag in leading_flags(instruction.arguments) {
        if flag.has_prefix("--mount=") {
          if flag.contains("\"") || flag.contains("'") || flag.contains("\\") {
            uncertainties.push({
              line: instruction.line,
              reason: "quoted/escaped mount options require builder evaluation",
            })
            continue
          }
          let options = flag[8:].split(",").collect()
          for option in options {
            if option.has_prefix("from=") {
              add(option[5:].to_owned(), instruction.line, "RUN mount")
            }
          }
        }
      }
    } else if instruction.name == "ONBUILD" {
      uncertainties.push({
        line: instruction.line,
        reason: "ONBUILD trigger is not evaluated",
      })
    }
  }
  (edges, uncertainties)
}

///|
fn validate_stage_graph(stages : Array[Stage]) -> Unit raise ParseError {
  let colors = Array::make(stages.length(), 0)
  fn visit(index : Int) -> Unit raise ParseError {
    if colors[index] == 1 {
      raise StageCycle(stages[index].line)
    }
    if colors[index] == 2 {
      return
    }
    colors[index] = 1
    for next in stages[index].dependencies {
      visit(next)
    }
    colors[index] = 2
  }
  for i in 0..<stages.length() {
    visit(i)
  }
}

///|
/// Local, literal Dockerfile graph only: excludes image metadata, named-context
/// overrides, build-context file changes and cache state. Never a skip-build proof.
/// Changed lines are 1-based in this file. Global/FROM/unmapped lines and unknown
/// dependencies conservatively mark every target; paths explain concrete edges.
pub fn build_impact(
  source : String,
  target? : String = "",
  changed_lines? : Array[Int] = [],
) -> BuildImpact raise ParseError {
  let instructions = parse(source)
  let stages = analyze_stages(instructions)
  if stages.is_empty() {
    raise Invalid("no build stages")
  }
  if changed_lines.length() > 10000 {
    raise Invalid("changed line count limit")
  }
  let (edges, uncertainties) = build_edges(instructions, stages)
  let selected = if target.is_empty() {
    stages.length() - 1
  } else {
    match stage_reference(target, stages) {
      Some(index) => index
      None => raise Invalid("unknown target: " + target)
    }
  }
  let changed_stages = []
  let mut conservative = !uncertainties.is_empty()
  let line_count = source.split("\n").count()
  for line in changed_lines {
    if line <= 0 || line > line_count {
      raise Invalid("changed line out of range")
    }
    let mut current = -1
    let mut found = false
    for instruction in instructions {
      if instruction.name == "FROM" {
        current += 1
      }
      if line >= instruction.line && line <= instruction.end_line {
        found = true
        if current < 0 || instruction.name == "FROM" {
          conservative = true
          uncertainties.push({
            line,
            reason: "global or stage declaration changed",
          })
        } else if !changed_stages.contains(current) {
          changed_stages.push(current)
        }
      }
    }
    if !found {
      conservative = true
      uncertainties.push({
        line,
        reason: "line outside a parsed instruction; directive/deletion impact unknown",
      })
    }
  }
  let required = []
  fn collect(index : Int) -> Unit {
    if required.contains(index) {
      return
    }
    for dependency in stages[index].dependencies {
      collect(dependency)
    }
    required.push(index)
  }
  collect(selected)
  // Cache one witness per node; a diamond graph must not cause exponential walks.
  let witnesses : Map[Int, Array[Int]] = Map([])
  fn witness(index : Int) -> Array[Int] {
    if witnesses.get(index) is Some(path) {
      return path
    }
    if changed_stages.contains(index) {
      witnesses[index] = [index]
      return [index]
    }
    for dependency in stages[index].dependencies {
      let tail = witness(dependency)
      if !tail.is_empty() {
        let path = [index]
        for item in tail {
          path.push(item)
        }
        witnesses[index] = path
        return path
      }
    }
    witnesses[index] = []
    []
  }
  let targets = stages.map(stage => {
    let path = witness(stage.index)
    {
      target: stage.index,
      affected: !changed_lines.is_empty() && (conservative || !path.is_empty()),
      path,
    }
  })
  {
    stages,
    edges,
    selected,
    required,
    changed_stages,
    targets,
    conservative,
    uncertainties,
  }
}
