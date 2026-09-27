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
  let before = build_impact(before_source, changed_lines=changed_before)
  let after = build_impact(after_source, changed_lines=changed_after)
  let before_names = before.stages.map(s => {
    s.stage_name.unwrap_or("#\{s.index}")
  })
  let after_names = after.stages.map(s => s.stage_name.unwrap_or("#\{s.index}"))
  let alignment_changed = before_names != after_names
  let conservative = before.conservative ||
    after.conservative ||
    alignment_changed
  let changed = !changed_before.is_empty() || !changed_after.is_empty()
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
    reason: if alignment_changed {
      "stage insertion/deletion/rename/reorder prevents stable alignment; all snapshot targets retained"
    } else if conservative {
      "uncertain input or changed declaration; all snapshot targets retained"
    } else {
      "union of before/after literal dependency paths for the supplied line sets"
    },
  }
}

///|
/// Automatically selected physical lines and the two-graph impact report.
/// Line arrays cover the entire differing span, including any unchanged lines
/// between separate edits. They are not a minimal diff or a build-skip proof.
pub struct SourceComparison {
  before_lines : Array[Int]
  after_lines : Array[Int]
  impact : BuildComparison
} derive(Debug, Eq, ToJson)

///|
/// Compare complete snapshots without requiring caller-provided diff coordinates.
/// Retain only an identical line prefix and non-overlapping identical suffix;
/// conservatively include all remaining lines in each snapshot's own coordinates.
/// Exact line comparison preserves CRLF/LF and final-newline changes. Each source
/// is limited to 1,000,000 UTF-16 units and 10,000 physical lines (including an
/// empty final line). Invalid Dockerfiles and over-limit inputs raise ParseError.
pub fn compare_build_sources(
  before_source : String,
  after_source : String,
) -> SourceComparison raise ParseError {
  if before_source.length() > 1000000 || after_source.length() > 1000000 {
    raise Invalid("snapshot source size limit")
  }
  if before_source.split("\n").count() > 10000 ||
    after_source.split("\n").count() > 10000 {
    raise Invalid("snapshot physical line limit")
  }
  let before = before_source.split("\n").collect()
  let after = after_source.split("\n").collect()
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
  let impact = compare_build_impact(
    before_source,
    after_source,
    changed_before=before_lines,
    changed_after=after_lines,
  )
  { before_lines, after_lines, impact, }
}
