///|
test "removed copy dependency remains visible through old graph" {
  let before = "FROM scratch AS a\nCOPY a /a\nFROM scratch AS b\nCOPY --from=a /a /a\nFROM b AS release"
  let after = "FROM scratch AS a\nCOPY a /a\nFROM scratch AS b\nCOPY b /b\nFROM b AS release"
  let result = @dockerlint.compare_build_impact(
    before,
    after,
    changed_before=[4],
    changed_after=[4],
  )
  assert_eq(result.before.required, [0, 1, 2])
  assert_eq(result.after.required, [1, 2])
  assert_eq(result.affected_targets, ["b", "release"])
  assert_false(result.conservative)
  let deleted = @dockerlint.compare_build_impact(
    before,
    "FROM scratch AS a\nCOPY a /a",
    changed_before=[3, 4, 5],
  )
  assert_true(deleted.conservative)
  assert_eq(deleted.affected_targets, ["a", "b", "release"])
}

///|
test "different snapshots require coordinates and deletions use old line numbers" {
  let before = "FROM scratch AS a\nCOPY a /a\nFROM a AS b"
  let after = "FROM scratch AS a\nFROM a AS b"
  let result = @dockerlint.compare_build_impact(before, after, changed_before=[
    2,
  ])
  assert_eq(result.affected_targets, ["a", "b"])
  assert_true(
    try {
      ignore(@dockerlint.compare_build_impact(before, after))
      false
    } catch {
      _ => true
    },
  )
  assert_eq(@dockerlint.compare_build_impact(before, before).affected_targets, [])
}
