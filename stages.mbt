///|
pub struct Stage {
  index : Int
  line : Int
  base : String
  stage_name : String?
  dependencies : Array[Int]
} derive(Debug, Eq, ToJson)

///|
/// Resolve stage dependencies without fetching images. Unknown COPY names may be external images.
pub fn analyze_stages(
  instructions : Array[Instruction],
) -> Array[Stage] raise ParseError {
  let stages : Array[Stage] = []
  let aliases : Map[String, Int] = Map([])
  for instruction in instructions {
    if instruction.name != "FROM" {
      continue
    }
    if stages.length() == 256 {
      raise Invalid("stage count limit")
    }
    let args = instruction.split_arguments().values
    if args.length() != 1 && !(args.length() == 3 && args[1].to_upper() == "AS") {
      raise Invalid("malformed FROM")
    }
    let stage_name = if args.length() == 3 {
      Some(args[2].to_lower())
    } else {
      None
    }
    if stage_name is Some(name) {
      if aliases.contains(name) {
        raise Invalid("duplicate stage stage_name")
      }
      aliases[name] = stages.length()
    }
    stages.push({
      index: stages.length(),
      line: instruction.line,
      base: args[0],
      stage_name,
      dependencies: [],
    })
  }
  let (edges, _) = build_edges(instructions, stages)
  for edge in edges {
    if !stages[edge.consumer].dependencies.contains(edge.dependency) {
      stages[edge.consumer].dependencies.push(edge.dependency)
    }
  }
  validate_stage_graph(stages)
  stages
}

///|
pub fn Diagnostic::severity(self : Diagnostic) -> String {
  if self.code.has_prefix("ML") ||
    [
      "DL3000", "DL3004", "DL3011", "DL3012", "DL3020", "DL3021", "DL3023", "DL3024",
      "DL3026", "DL3043", "DL3044", "DL4000", "DL4004",
    ].contains(self.code) {
    "error"
  } else if [
      "DL3001", "DL3009", "DL3015", "DL3019", "DL3047", "DL3049", "DL3050", "DL3059",
      "DL3060", "DL3066", "SC2035",
    ].contains(self.code) {
    "info"
  } else if ["DL3048", "SC2005", "SC2006"].contains(self.code) {
    "style"
  } else {
    "warning"
  }
}
