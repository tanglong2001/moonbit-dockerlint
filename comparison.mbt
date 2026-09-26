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
      "union of before/after literal dependency paths; caller supplies complete diff lines"
    },
  }
}
