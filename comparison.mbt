///|
pub struct BuildComparison {
  before : BuildImpact
  after : BuildImpact
  affected_targets : Array[String]
  conservative : Bool
  reason : String
} derive(Debug, Eq, ToJson)

///|
/// Compare two literal graphs using caller-supplied complete diff line sets.
/// Changes must be expressed in each snapshot's own 1-based coordinates.
/// A removed dependency may still affect a target via the old graph. This is
/// not a diff parser or proof that a build/cache entry may safely be skipped.
pub fn compare_build_impact(
  before_source : String,
  after_source : String,
  changed_before? : Array[Int] = [],
  changed_after? : Array[Int] = [],
) -> BuildComparison raise ParseError {
  if before_source != after_source &&
    changed_before.is_empty() &&
    changed_after.is_empty() {
    raise Invalid("different snapshots require changed line coordinates")
  }
  compare_build_impact_internal(
    before_source,
    after_source,
    changed_before,
    changed_after,
    [],
    [],
    false,
    "",
  )
}

///|
/// Automatically selected physical lines and the two-graph impact report.
/// Exact bounded LCS selection keeps separate edits in their own coordinates.
/// Ambiguous or over-budget selection falls back to the full differing span;
/// `diff_exact` and `diff_reason` make that loss of precision explicit.
pub struct SourceComparison {
  before_lines : Array[Int]
  after_lines : Array[Int]
  diff_exact : Bool
  diff_reason : String
  impact : BuildComparison
} derive(Debug, Eq, ToJson)

///|
priv struct SourceEditHunk {
  before_lines : Array[Int]
  after_lines : Array[Int]
}

///|
priv struct SourceLineDiff {
  before_lines : Array[Int]
  after_lines : Array[Int]
  hunks : Array[SourceEditHunk]
  exact : Bool
  reason : String
}

///|
priv struct FromImageEdit {
  stage : Int
  before_line : Int
  after_line : Int
}

///|
priv struct InstructionFingerprint {
  name : String
  arguments : String
  heredocs : Array[HereDoc]
  masked_from_image : Bool
}

///|
fn same_fingerprints(
  left : Array[InstructionFingerprint],
  right : Array[InstructionFingerprint],
) -> Bool {
  if left.length() != right.length() {
    return false
  }
  for i in 0..<left.length() {
    if left[i].name != right[i].name ||
      left[i].arguments != right[i].arguments ||
      left[i].heredocs != right[i].heredocs ||
      left[i].masked_from_image != right[i].masked_from_image {
      return false
    }
  }
  true
}

///|
fn full_span_diff(
  before : Array[String],
  after : Array[String],
  reason : String,
) -> SourceLineDiff {
  let mut prefix = 0
  while prefix < before.length() &&
        prefix < after.length() &&
        before[prefix] == after[prefix] {
    prefix += 1
  }
  let mut before_end = before.length()
  let mut after_end = after.length()
  while before_end > prefix &&
        after_end > prefix &&
        before[before_end - 1] == after[after_end - 1] {
    before_end -= 1
    after_end -= 1
  }
  let before_lines = []
  let after_lines = []
  for i in prefix..<before_end {
    before_lines.push(i + 1)
  }
  for i in prefix..<after_end {
    after_lines.push(i + 1)
  }
  let hunks = if before_lines.is_empty() && after_lines.is_empty() {
    []
  } else {
    [{ before_lines, after_lines, }]
  }
  { before_lines, after_lines, hunks, exact: false, reason, }
}

///|
fn bounded_line_diff(
  before : Array[String],
  after : Array[String],
) -> SourceLineDiff {
  let before_count = before.length()
  let after_count = after.length()
  // The input-size limit bounds line hashing; the cell budget bounds both DP
  // memory and comparisons. Interning lines keeps per-cell work constant-time.
  let cell_budget = 1000000
  if before_count + 1 > cell_budget / (after_count + 1) {
    return full_span_diff(
      before, after, "line diff cell budget exceeded; retained the full differing span",
    )
  }
  let line_ids : Map[String, Int] = Map([])
  let mut next_line_id = 1
  fn intern(line : String) -> Int {
    match line_ids.get(line) {
      Some(id) => id
      None => {
        let id = next_line_id
        next_line_id += 1
        line_ids[line] = id
        id
      }
    }
  }
  let before_ids = before.map(intern)
  let after_ids = after.map(intern)
  let before_counts : Map[Int, Int] = Map([])
  let after_counts : Map[Int, Int] = Map([])
  for id in before_ids {
    before_counts[id] = before_counts.get(id).unwrap_or(0) + 1
  }
  for id in after_ids {
    after_counts[id] = after_counts.get(id).unwrap_or(0) + 1
  }
  let cols = after_count + 1
  let lengths = Array::make((before_count + 1) * cols, 0)
  let mut i = before_count - 1
  while i >= 0 {
    let mut j = after_count - 1
    while j >= 0 {
      let index = i * cols + j
      if before_ids[i] == after_ids[j] {
        lengths[index] = lengths[(i + 1) * cols + j + 1] + 1
      } else {
        let skip_before = lengths[(i + 1) * cols + j]
        let skip_after = lengths[i * cols + j + 1]
        lengths[index] = if skip_before > skip_after {
          skip_before
        } else {
          skip_after
        }
      }
      j -= 1
    }
    i -= 1
  }
  let hunks : Array[SourceEditHunk] = []
  let mut hunk_before : Array[Int] = []
  let mut hunk_after : Array[Int] = []
  let mut ambiguous = false
  fn finish_hunk() -> Unit {
    if !hunk_before.is_empty() || !hunk_after.is_empty() {
      hunks.push({ before_lines: hunk_before, after_lines: hunk_after, })
      hunk_before = []
      hunk_after = []
    }
  }
  let mut old_index = 0
  let mut new_index = 0
  while old_index < before_count || new_index < after_count {
    if old_index < before_count &&
      new_index < after_count &&
      before_ids[old_index] == after_ids[new_index] {
      let score = lengths[old_index * cols + new_index]
      // An equal line is ambiguous only if skipping this correspondence keeps
      // the optimal LCS length, which means a repeated line can align elsewhere.
      if lengths[(old_index + 1) * cols + new_index] == score ||
        lengths[old_index * cols + new_index + 1] == score {
        ambiguous = true
      }
      finish_hunk()
      old_index += 1
      new_index += 1
    } else {
      let skip_before = if old_index < before_count {
        lengths[(old_index + 1) * cols + new_index]
      } else {
        -1
      }
      let skip_after = if new_index < after_count {
        lengths[old_index * cols + new_index + 1]
      } else {
        -1
      }
      if old_index < before_count &&
        new_index < after_count &&
        skip_before == skip_after &&
        (
          after_counts.contains(before_ids[old_index]) ||
          before_counts.contains(after_ids[new_index])
        ) {
        // Equal-length delete/insert choices for a pure replacement are not
        // ambiguous unless one of those lines can also be matched elsewhere.
        ambiguous = true
      }
      if old_index < before_count &&
        (new_index == after_count || skip_before >= skip_after) {
        hunk_before.push(old_index + 1)
        old_index += 1
      } else {
        hunk_after.push(new_index + 1)
        new_index += 1
      }
    }
  }
  finish_hunk()
  if ambiguous {
    return full_span_diff(
      before, after, "repeated-line alignment is ambiguous; retained the full differing span",
    )
  }
  let before_lines = []
  let after_lines = []
  for hunk in hunks {
    for line in hunk.before_lines {
      before_lines.push(line)
    }
    for line in hunk.after_lines {
      after_lines.push(line)
    }
  }
  {
    before_lines,
    after_lines,
    hunks,
    exact: true,
    reason: "bounded line diff retained separate edit hunks",
  }
}

///|
fn stage_names(stages : Array[Stage]) -> Array[String] {
  stages.map(stage => stage.stage_name.unwrap_or("#\{stage.index}"))
}

///|
fn stage_fingerprints(
  instructions : Array[Instruction],
  stage_count : Int,
  masked_from_stages : Array[Int],
) -> Array[Array[InstructionFingerprint]] {
  let signatures : Array[Array[InstructionFingerprint]] = []
  for _ in 0..<stage_count {
    signatures.push([])
  }
  let mut current = -1
  for instruction in instructions {
    if instruction.name == "FROM" {
      current += 1
    }
    if current < 0 || current >= stage_count {
      continue
    }
    let mask = instruction.name == "FROM" &&
      masked_from_stages.contains(current)
    signatures[current].push({
      name: instruction.name,
      arguments: if mask {
        "<FROM-IMAGE>"
      } else {
        instruction.arguments
      },
      heredocs: instruction.heredocs,
      masked_from_image: mask,
    })
  }
  signatures
}

///|
fn stage_for_line(
  instructions : Array[Instruction],
  line : Int,
) -> (Int, Instruction?) {
  let mut current = -1
  for instruction in instructions {
    if instruction.name == "FROM" {
      current += 1
    }
    if instruction.line == line && instruction.end_line == line {
      return (current, Some(instruction))
    }
  }
  (-1, None)
}

///|
fn external_from_image(
  reference : String,
  stages : Array[Stage],
) -> Bool raise ParseError {
  !reference.is_empty() &&
  !reference.contains("$") &&
  !reference.iter().all(c => c >= '0' && c <= '9') &&
  stage_reference(reference, stages) is None
}

///|
fn from_hunk_candidate(
  hunk : SourceEditHunk,
  before_instructions : Array[Instruction],
  after_instructions : Array[Instruction],
  before_stages : Array[Stage],
  after_stages : Array[Stage],
) -> FromImageEdit? raise ParseError {
  if hunk.before_lines.length() != 1 || hunk.after_lines.length() != 1 {
    return None
  }
  let before_line = hunk.before_lines[0]
  let after_line = hunk.after_lines[0]
  let (before_stage, before_instruction) = stage_for_line(
    before_instructions, before_line,
  )
  let (after_stage, after_instruction) = stage_for_line(
    after_instructions, after_line,
  )
  match (before_instruction, after_instruction) {
    (Some(old_instruction), Some(new_instruction)) => {
      if old_instruction.name != "FROM" ||
        new_instruction.name != "FROM" ||
        before_stage < 0 ||
        before_stage != after_stage ||
        before_stage >= before_stages.length() ||
        after_stage >= after_stages.length() {
        return None
      }
      let old_args = old_instruction.split_arguments()
      let new_args = new_instruction.split_arguments()
      let mut dynamic_flag = false
      for _, value in old_args.flags {
        if value.contains("$") {
          dynamic_flag = true
        }
      }
      if old_args.values.is_empty() ||
        old_args.values.length() != new_args.values.length() ||
        old_args.flags != new_args.flags ||
        dynamic_flag ||
        old_args.values[1:] != new_args.values[1:] ||
        old_args.values[0] == new_args.values[0] ||
        !external_from_image(old_args.values[0], before_stages) ||
        !external_from_image(new_args.values[0], after_stages) ||
        before_stages[before_stage].stage_name !=
        after_stages[after_stage].stage_name {
        return None
      }
      Some({ stage: before_stage, before_line, after_line, })
    }
    _ => None
  }
}

///|
fn precise_from_edits(
  diff : SourceLineDiff,
  before_instructions : Array[Instruction],
  after_instructions : Array[Instruction],
  before_stages : Array[Stage],
  after_stages : Array[Stage],
) -> Array[FromImageEdit] raise ParseError {
  if !diff.exact || stage_names(before_stages) != stage_names(after_stages) {
    return []
  }
  let candidates : Array[FromImageEdit] = []
  for hunk in diff.hunks {
    if from_hunk_candidate(
        hunk, before_instructions, after_instructions, before_stages, after_stages,
      )
      is Some(edit) {
      candidates.push(edit)
    }
  }
  if candidates.is_empty() {
    return []
  }
  let masked = candidates.map(edit => edit.stage)
  let before_signatures = stage_fingerprints(
    before_instructions,
    before_stages.length(),
    masked,
  )
  let after_signatures = stage_fingerprints(
    after_instructions,
    after_stages.length(),
    masked,
  )
  // Named aliases identify stage positions. Unnamed stages require an unchanged
  // body (apart from a candidate image token) and unique fingerprints, otherwise
  // a reorder or repeated-stage alignment cannot be ruled out.
  for i in 0..<before_stages.length() {
    if before_stages[i].stage_name is None {
      if !same_fingerprints(before_signatures[i], after_signatures[i]) {
        return []
      }
      for j in 0..<before_stages.length() {
        if i != j &&
          after_stages[j].stage_name is None &&
          same_fingerprints(before_signatures[i], before_signatures[j]) {
          return []
        }
      }
    }
  }
  candidates
}

///|
fn merge_stage_indices(
  original : Array[Int],
  extra : Array[Int],
  count : Int,
) -> Array[Int] {
  let out = []
  for index in 0..<count {
    if original.contains(index) || extra.contains(index) {
      out.push(index)
    }
  }
  out
}

///|
fn compare_build_impact_internal(
  before_source : String,
  after_source : String,
  changed_before : Array[Int],
  changed_after : Array[Int],
  seed_before : Array[Int],
  seed_after : Array[Int],
  force_conservative : Bool,
  conservative_reason : String,
) -> BuildComparison raise ParseError {
  let before_base = build_impact(before_source, changed_lines=changed_before)
  let after_base = build_impact(after_source, changed_lines=changed_after)
  let before_names = stage_names(before_base.stages)
  let after_names = stage_names(after_base.stages)
  let alignment_changed = before_names != after_names
  let changed = !changed_before.is_empty() ||
    !changed_after.is_empty() ||
    !seed_before.is_empty() ||
    !seed_after.is_empty()
  let before_changed = merge_stage_indices(
    before_base.changed_stages,
    seed_before,
    before_base.stages.length(),
  )
  let after_changed = merge_stage_indices(
    after_base.changed_stages,
    seed_after,
    after_base.stages.length(),
  )
  let before_conservative = before_base.conservative || force_conservative
  let after_conservative = after_base.conservative || force_conservative
  let before = {
    stages: before_base.stages,
    edges: before_base.edges,
    selected: before_base.selected,
    required: before_base.required,
    changed_stages: before_changed,
    targets: stage_impacts(
      before_base.stages,
      before_changed,
      before_conservative,
      changed,
    ),
    conservative: before_conservative,
    uncertainties: before_base.uncertainties,
  }
  let after = {
    stages: after_base.stages,
    edges: after_base.edges,
    selected: after_base.selected,
    required: after_base.required,
    changed_stages: after_changed,
    targets: stage_impacts(
      after_base.stages,
      after_changed,
      after_conservative,
      changed,
    ),
    conservative: after_conservative,
    uncertainties: after_base.uncertainties,
  }
  let conservative = before_conservative ||
    after_conservative ||
    alignment_changed
  let affected_targets = []
  fn collect(report : BuildImpact, names : Array[String]) -> Unit {
    for impact in report.targets {
      let name = names[impact.target]
      if changed &&
        (conservative || impact.affected) &&
        !affected_targets.contains(name) {
        affected_targets.push(name)
      }
    }
  }
  collect(before, before_names)
  collect(after, after_names)
  {
    before,
    after,
    affected_targets,
    conservative,
    reason: if conservative_reason != "" {
      conservative_reason
    } else if alignment_changed {
      "stage insertion/deletion/rename/reorder prevents stable alignment; all snapshot targets retained"
    } else if conservative {
      "uncertain input or changed declaration; all snapshot targets retained"
    } else {
      "union of before/after literal dependency paths for the supplied line sets"
    },
  }
}

///|
/// Compare complete snapshots without requiring caller-provided diff coordinates.
/// The bounded diff is exact only when its LCS alignment is unique; over-budget or
/// ambiguous cases retain the old full-span conservative behavior. Aligned
/// external-image-only FROM edits seed that stage in both graphs, while stage
/// topology changes and unknown references remain conservative.
pub fn compare_build_sources(
  before_source : String,
  after_source : String,
) -> SourceComparison raise ParseError {
  if before_source.length() > 1000000 || after_source.length() > 1000000 {
    raise Invalid("snapshot source size limit")
  }
  let before_lines = before_source
    .split("\n")
    .map(line => line.to_owned())
    .collect()
  let after_lines = after_source
    .split("\n")
    .map(line => line.to_owned())
    .collect()
  if before_lines.length() > 10000 || after_lines.length() > 10000 {
    raise Invalid("snapshot physical line limit")
  }
  let diff = if before_source == after_source {
    {
      before_lines: [],
      after_lines: [],
      hunks: [],
      exact: true,
      reason: "source snapshots are identical",
    }
  } else {
    bounded_line_diff(before_lines, after_lines)
  }
  let before_instructions = parse(before_source)
  let after_instructions = parse(after_source)
  let before_stages = analyze_stages(before_instructions)
  let after_stages = analyze_stages(after_instructions)
  if before_stages.is_empty() || after_stages.is_empty() {
    raise Invalid("no build stages")
  }
  let from_edits = precise_from_edits(
    diff, before_instructions, after_instructions, before_stages, after_stages,
  )
  let seed_stages = from_edits.map(edit => edit.stage)
  let changed_before = diff.before_lines.filter(line => {
    !from_edits.any(edit => edit.before_line == line)
  })
  let changed_after = diff.after_lines.filter(line => {
    !from_edits.any(edit => edit.after_line == line)
  })
  let names_aligned = stage_names(before_stages) == stage_names(after_stages)
  let signatures_before = stage_fingerprints(
    before_instructions,
    before_stages.length(),
    seed_stages,
  )
  let signatures_after = stage_fingerprints(
    after_instructions,
    after_stages.length(),
    seed_stages,
  )
  let mut anonymous_alignment_changed = !names_aligned
  if names_aligned {
    for i in 0..<before_stages.length() {
      if before_stages[i].stage_name is None {
        if before_stages[i].base != after_stages[i].base &&
          !seed_stages.contains(i) {
          // An unrecognized anonymous FROM change cannot be mapped safely.
          anonymous_alignment_changed = true
        }
        for j in 0..<before_stages.length() {
          if i != j &&
            before_stages[j].stage_name is None &&
            same_fingerprints(signatures_before[i], signatures_after[j]) &&
            !same_fingerprints(signatures_before[i], signatures_after[i]) {
            // An anonymous stage body now matches a different old position.
            anonymous_alignment_changed = true
          }
        }
      }
    }
  }
  let conservative_reason = if !diff.exact {
    "source line selection used conservative fallback: " + diff.reason
  } else if anonymous_alignment_changed {
    "stage insertion/deletion/rename/reorder or anonymous-stage alignment is uncertain; all snapshot targets retained"
  } else {
    ""
  }
  let impact = compare_build_impact_internal(
    before_source,
    after_source,
    changed_before,
    changed_after,
    seed_stages,
    seed_stages,
    !diff.exact || anonymous_alignment_changed,
    conservative_reason,
  )
  {
    before_lines: diff.before_lines,
    after_lines: diff.after_lines,
    diff_exact: diff.exact,
    diff_reason: diff.reason,
    impact,
  }
}
