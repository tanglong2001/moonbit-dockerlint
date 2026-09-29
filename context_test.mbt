///|
fn context_test_digest(c : Char) -> String {
  let digest = StringBuilder()
  digest.write_string("sha256:")
  for _ in 0..<64 {
    digest.write_char(c)
  }
  digest.to_string()
}

///|
fn context_test_image_metadata(
  reference : String,
  platform : String,
  index_digest : String,
  manifest_digest : String,
  config_digest : String,
  onbuild : Array[String],
) -> @dockerlint.ImageContextMetadata {
  {
    reference,
    platform,
    index_digest,
    manifest_digest,
    config_digest,
    onbuild,
  }
}

///|
test "verified empty ONBUILD metadata refines only the matched external stage" {
  let index = context_test_digest('a')
  let reference = "example.invalid/base@" + index
  let profile = context_test_image_metadata(
    reference,
    "linux/amd64",
    index,
    context_test_digest('b'),
    context_test_digest('c'),
    [],
  )
  let source = "FROM " +
    reference +
    " AS build\nCOPY app /app\nFROM build AS release\nFROM scratch AS unrelated"
  let entries : Array[@dockerlint.ContextEntry] = [
    { path: "app", kind: "file", excluded: false, },
  ]
  let plan = @dockerlint.analyze_context(
    source,
    entries,
    platform="linux/amd64",
    image_metadata=[profile],
    changes=[
      { path: "app", excluded: false, },
      { path: "other", excluded: false, },
    ],
  )
  assert_eq(plan.changes[0].targets.map(t => t.affected), [true, true, false])
  assert_eq(plan.changes[0].targets[1].path, [1, 0])
  assert_eq(plan.changes[1].targets.map(t => t.affected), [false, false, false])
  assert_false(plan.changes[0].conservative)
  assert_eq(plan.uncertainties, [])
  assert_eq(plan.image_metadata[0].status, "used-empty-onbuild")
  assert_eq(plan.image_metadata[0].config_digest, context_test_digest('c'))
}

///|
test "image identity platform and malformed digest cannot remove unknown ONBUILD" {
  let index = context_test_digest('a')
  let reference = "example.invalid/base@" + index
  let manifest = context_test_digest('b')
  let config = context_test_digest('c')
  for
    profile in [
      context_test_image_metadata(
        "other@" + index,
        "linux/amd64",
        index,
        manifest,
        config,
        [],
      ),
      context_test_image_metadata(
        reference,
        "linux/arm64",
        index,
        manifest,
        config,
        [],
      ),
      context_test_image_metadata(
        reference,
        "linux/amd64",
        context_test_digest('d'),
        manifest,
        config,
        [],
      ),
      context_test_image_metadata(
        reference,
        "linux/amd64",
        index,
        "sha256:bad",
        config,
        [],
      ),
      context_test_image_metadata(
        reference,
        "linux/amd64",
        index,
        manifest,
        "sha256:bad",
        [],
      ),
      context_test_image_metadata(
        reference,
        "linux/amd64",
        index,
        index,
        config,
        [],
      ),
    ] {
    let plan = @dockerlint.analyze_context(
      "FROM " + reference,
      [],
      platform="linux/amd64",
      image_metadata=[profile],
      changes=[{ path: "other", excluded: false, }],
    )
    assert_true(plan.changes[0].conservative)
    assert_true(plan.changes[0].targets[0].affected)
    assert_true(plan.image_metadata[0].status != "used-empty-onbuild")
  }
}

///|
test "duplicate profiles and nonempty triggers stay conservative" {
  let index = context_test_digest('a')
  let reference = "example.invalid/base@" + index
  let empty = context_test_image_metadata(
    reference,
    "linux/amd64",
    index,
    context_test_digest('b'),
    context_test_digest('c'),
    [],
  )
  for
    profiles in [
      [empty, empty],
      [
        context_test_image_metadata(
          reference,
          "linux/amd64",
          index,
          context_test_digest('b'),
          context_test_digest('c'),
          ["COPY --from=downstream /data /app"],
        ),
      ],
      [
        context_test_image_metadata(
          reference,
          "linux/amd64",
          index,
          context_test_digest('b'),
          context_test_digest('c'),
          ["RUN --mount=from=named,target=/src true"],
        ),
      ],
    ] {
    let plan = @dockerlint.analyze_context(
      "FROM " + reference,
      [],
      platform="linux/amd64",
      image_metadata=profiles,
      changes=[{ path: "other", excluded: false, }],
    )
    assert_true(plan.changes[0].conservative)
    assert_true(plan.changes[0].targets[0].affected)
  }
}

///|
test "literal FROM platform overrides target but dynamic or non-Linux platforms do not refine" {
  let index = context_test_digest('a')
  let reference = "example.invalid/base@" + index
  let profile = context_test_image_metadata(
    reference,
    "linux/amd64",
    index,
    context_test_digest('b'),
    context_test_digest('c'),
    [],
  )
  let good = @dockerlint.analyze_context(
    "FROM --platform=linux/amd64 " + reference,
    [],
    platform="linux/arm64",
    image_metadata=[profile],
    changes=[{ path: "other", excluded: false, }],
  )
  assert_false(good.changes[0].conservative)
  assert_false(good.changes[0].targets[0].affected)
  for
    option in [
      "--platform=$TARGETPLATFORM ", "--platform=windows/amd64 ", "--platform=linux/amd64 --platform=linux/amd64 ",
    ] {
    let bad = @dockerlint.analyze_context(
      "FROM " + option + reference,
      [],
      platform="linux/amd64",
      image_metadata=[profile],
      changes=[{ path: "other", excluded: false, }],
    )
    assert_true(bad.changes[0].conservative)
    assert_true(bad.changes[0].targets[0].affected)
  }
}

///|
test "Dockerfile ONBUILD and base ENV remain uncertain despite empty profile" {
  let index = context_test_digest('a')
  let reference = "example.invalid/base@" + index
  let profile = context_test_image_metadata(
    reference,
    "linux/amd64",
    index,
    context_test_digest('b'),
    context_test_digest('c'),
    [],
  )
  let onbuild = @dockerlint.analyze_context(
    "FROM " +
    reference +
    " AS base\nONBUILD COPY hidden /out\nFROM base AS child",
    [],
    platform="linux/amd64",
    image_metadata=[profile],
    changes=[{ path: "other", excluded: false, }],
  )
  assert_true(onbuild.changes[0].conservative)
  assert_true(onbuild.changes[0].targets.iter().all(t => t.affected))
  let env = @dockerlint.analyze_context(
    "FROM " + reference + "\nARG NAME=app\nCOPY $NAME /app",
    [{ path: "app", kind: "file", excluded: false, }],
    platform="linux/amd64",
    image_metadata=[profile],
  )
  assert_eq(env.inputs[0].status, "unknown")
  let explicit = @dockerlint.analyze_context(
    "FROM " +
    reference +
    "\nARG NAME\nCOPY $NAME /app\nENV NAME=other\nCOPY $NAME /other",
    [
      { path: "app", kind: "file", excluded: false, },
      { path: "other", kind: "file", excluded: false, },
    ],
    build_args=Map([("NAME", "app")]),
    platform="linux/amd64",
    image_metadata=[profile],
  )
  assert_eq(explicit.inputs.map(i => i.source), ["app", "other"])
  assert_eq(explicit.inputs.map(i => i.status), ["resolved", "resolved"])
}

///|
test "mutable and dynamic FROM references cannot consume empty metadata" {
  for reference in ["example.invalid/base:latest", "$BASE"] {
    let profile = context_test_image_metadata(
      reference,
      "linux/amd64",
      context_test_digest('a'),
      context_test_digest('b'),
      context_test_digest('c'),
      [],
    )
    let plan = @dockerlint.analyze_context(
      "ARG BASE=example.invalid/base\nFROM " + reference,
      [],
      platform="linux/amd64",
      image_metadata=[profile],
      changes=[{ path: "other", excluded: false, }],
    )
    assert_true(plan.changes[0].conservative)
    assert_true(plan.changes[0].targets[0].affected)
  }
}

///|
test "context preserves quote syntax and uncertainty through inherited assignments" {
  let plan = @dockerlint.analyze_context(
    "FROM scratch AS base\nARG NAME=actual\nARG UNKNOWN=$MISSING\nENV INDIRECT=$UNKNOWN\nFROM base\nCOPY '$NAME' /out\nCOPY $NAME /out\nCOPY $INDIRECT /out",
    [
      { path: "$NAME", kind: "file", excluded: false, },
      { path: "actual", kind: "file", excluded: false, },
      { path: "$MISSING", kind: "file", excluded: false, },
    ],
    changes=[{ path: "unrelated", excluded: false, }],
  )
  assert_eq(plan.inputs.map(i => i.source), ["$NAME", "actual", "$MISSING"])
  assert_eq(plan.inputs.map(i => i.status), ["resolved", "resolved", "unknown"])
  assert_true(plan.changes[0].targets.iter().all(t => t.affected))
}

///|
test "context cannot assume an external image ENV is empty" {
  let plan = @dockerlint.analyze_context(
    "FROM alpine\nARG NAME=actual\nCOPY $NAME /out\nCOPY ${OTHER:-actual} /out\nENV NAME=actual\nCOPY $NAME /out",
    [{ path: "actual", kind: "file", excluded: false, }],
  )
  assert_eq(plan.inputs.map(i => i.status), ["unknown", "unknown", "resolved"])
}

///|
test "external image ONBUILD metadata cannot certify unrelated context files unaffected" {
  let plan = @dockerlint.analyze_context(
    "FROM alpine AS base\nFROM base AS app\nFROM scratch AS independent",
    [{ path: "changed.txt", kind: "file", excluded: false, }],
    changes=[{ path: "changed.txt", excluded: false, }],
  )
  assert_true(
    plan.uncertainties
    .iter()
    .any(u => u.reason == "external base image ONBUILD metadata is unavailable"),
  )
  assert_true(plan.changes[0].conservative)
  assert_eq(plan.changes[0].targets.map(t => t.affected), [true, true, false])
  assert_eq(plan.changes[0].targets[1].path, [1, 0])
}

///|
test "external image ONBUILD uncertainty respects excluded paths and known scratch" {
  let plan = @dockerlint.analyze_context(
    "FROM scratch AS empty\nFROM alpine AS image",
    [{ path: "ignored.txt", kind: "file", excluded: true, }],
    changes=[{ path: "ignored.txt", excluded: true, }],
  )
  assert_true(!plan.changes[0].conservative)
  assert_eq(plan.changes[0].targets.map(t => t.affected), [false, false])
}

///|
test "an explicit declared build arg resolves a context COPY over unknown base env" {
  let plan = @dockerlint.analyze_context(
    "FROM alpine AS build\nARG TARGETARCH\nCOPY bin/linux/tempo-${TARGETARCH} /tempo",
    [
      { path: "bin", kind: "directory", excluded: false, },
      { path: "bin/linux", kind: "directory", excluded: false, },
      { path: "bin/linux/tempo-amd64", kind: "file", excluded: false, },
    ],
    changes=[{ path: "bin/linux/tempo-amd64", excluded: false, }],
    build_args=Map([("TARGETARCH", "amd64")]),
  )
  assert_eq(plan.inputs[0].source, "bin/linux/tempo-amd64")
  assert_eq(plan.inputs[0].status, "resolved")
  assert_eq(plan.inputs[0].included, [2])
  assert_eq(plan.changes[0].source_lines, [3])
  assert_true(plan.changes[0].conservative)

  let env_override = @dockerlint.analyze_context(
    "FROM alpine AS build\nARG TARGETARCH\nENV TARGETARCH=arm64\nCOPY bin/linux/tempo-${TARGETARCH} /tempo",
    [
      { path: "bin", kind: "directory", excluded: false, },
      { path: "bin/linux", kind: "directory", excluded: false, },
      { path: "bin/linux/tempo-amd64", kind: "file", excluded: false, },
      { path: "bin/linux/tempo-arm64", kind: "file", excluded: false, },
    ],
    build_args=Map([("TARGETARCH", "amd64")]),
  )
  assert_eq(env_override.inputs[0].source, "bin/linux/tempo-arm64")
  assert_eq(env_override.inputs[0].status, "resolved")
  assert_eq(env_override.inputs[0].included, [3])
}

///|
test "context files flow through COPY and repeated bind mounts into selected targets" {
  let source = "FROM scratch AS docs\nCOPY docs /docs\nFROM scratch AS compile\nARG DIR=src\nCOPY [\"$DIR/*.mbt\", \"/src/\"]\nRUN --mount=type=bind,source=config,target=/cfg --mount=source=assets,target=/assets build\nFROM scratch AS release\nCOPY --from=compile /app /app"
  let entries : Array[@dockerlint.ContextEntry] = [
    { path: "docs/manual.md", kind: "file", excluded: false, },
    { path: "src/main.mbt", kind: "file", excluded: false, },
    { path: "src/cache.mbt", kind: "file", excluded: true, },
    { path: "src/nested/extra.mbt", kind: "file", excluded: false, },
    { path: "config/options", kind: "file", excluded: false, },
    { path: "assets/icon", kind: "file", excluded: false, },
  ]
  let plan = @dockerlint.analyze_context(source, entries, target="release", changes=[
    { path: "src/deleted.mbt", excluded: false, },
    { path: "docs/manual.md", excluded: false, },
    { path: "src/cache.mbt", excluded: true, },
  ])
  assert_eq(plan.selected_entries, [1, 4, 5])
  assert_eq(plan.inputs[1].excluded, [2])
  assert_eq(plan.missing_lines, [])
  assert_eq(plan.uncertainties, [])
  assert_eq(plan.changes[0].targets.map(t => t.affected), [false, true, true])
  assert_eq(plan.changes[0].targets[2].path, [2, 1])
  assert_eq(plan.changes[1].targets.map(t => t.affected), [true, false, false])
  assert_true(plan.changes[2].targets.iter().all(t => !t.affected))
}

///|
test "context missing ignored and unselected sources remain distinguishable" {
  let plan = @dockerlint.analyze_context(
    "FROM scratch AS other\nCOPY absent /\nFROM scratch AS release\nCOPY ignored /\nCOPY [\"space name\", \"/out\"]",
    [
      { path: "ignored", kind: "file", excluded: true, },
      { path: "space name", kind: "file", excluded: false, },
    ],
  )
  assert_eq(plan.inputs.map(i => i.status), ["missing", "excluded", "resolved"])
  assert_eq(plan.missing_lines, [4])
  assert_eq(plan.selected_entries, [1])
}

///|
test "context directory wildcards parent cleanup and argument override" {
  let plan = @dockerlint.analyze_context(
    "FROM scratch\nARG DIR=wrong\nCOPY $DIR/ /out\nCOPY ../a? /second",
    [
      { path: "actual", kind: "directory", excluded: false, },
      { path: "actual/deep/file", kind: "file", excluded: false, },
      { path: "ab/child", kind: "file", excluded: false, },
    ],
    build_args=Map([("DIR", "actual")]),
  )
  assert_eq(plan.inputs[0].included, [0, 1])
  assert_eq(plan.inputs[1].included, [2])
}

///|
test "context uncertain sources cannot certify unaffected target and control changes propagate" {
  for
    instruction in [
      "COPY $UNKNOWN /app", "COPY --exclude=*.log . /app", "RUN --mount=source='some path',target=/app true",
      "COPY link /app",
    ] {
    let plan = @dockerlint.analyze_context(
      "FROM scratch AS a\n" + instruction + "\nFROM scratch AS b",
      [{ path: "link", kind: "symlink", excluded: false, }],
      changes=[{ path: "other", excluded: false, }],
    )
    assert_false(plan.uncertainties.is_empty())
    assert_true(plan.changes[0].conservative)
    assert_true(plan.changes[0].targets.iter().all(t => t.affected))
  }
  let control = @dockerlint.analyze_context(
    "FROM scratch AS a\nCOPY src /app\nFROM scratch AS b",
    [],
    changes=[{ path: ".dockerignore", excluded: true, }],
  )
  assert_true(control.changes[0].conservative)
  assert_true(control.changes[0].targets.iter().all(t => t.affected))
}

///|
test "context external sources and noncontext mounts never become local missing files" {
  // The context root exists even when filtering leaves no visible entries.
  assert_eq(
    @dockerlint.analyze_context("FROM scratch\nCOPY . /out", []).missing_lines,
    [],
  )
  let plan = @dockerlint.analyze_context(
    "FROM scratch\nADD https://example.invalid/archive /a\nCOPY --from=alpine /bin/busybox /bin/\nRUN --mount=type=cache,target=/cache --mount=type=secret,id=token true\nCOPY <<EOF /inline\nhello\nEOF",
    [],
  )
  assert_eq(plan.inputs.length(), 1)
  assert_eq(plan.inputs[0].status, "external")
  assert_eq(plan.missing_lines, [])
}

///|
test "context rejects impossible inventories and invalid change paths" {
  let cases : Array[Array[@dockerlint.ContextEntry]] = [
    [
      { path: "a", kind: "symlink", excluded: false, },
      { path: "a/child", kind: "file", excluded: false, },
    ],
    [
      { path: "a", kind: "file", excluded: false, },
      { path: "a", kind: "file", excluded: false, },
    ],
    [{ path: "../outside", kind: "file", excluded: false, }],
  ]
  for entries in cases {
    assert_true(
      try {
        ignore(@dockerlint.analyze_context("FROM scratch", entries))
        false
      } catch {
        _ => true
      },
    )
  }
  assert_true(
    try {
      ignore(
        @dockerlint.analyze_context("FROM scratch", [], changes=[
          { path: "a/../b", excluded: false, },
        ]),
      )
      false
    } catch {
      _ => true
    },
  )
}

///|
test "COPY glob grammar differs from recursive Docker ignore" {
  assert_true(@dockerlint.copy_source_matches("src/?.[a-c]", "src/文.b"))
  assert_true(@dockerlint.copy_source_matches("a[^0-9]", "ax"))
  assert_true(@dockerlint.copy_source_matches("a\\*", "a*"))
  assert_false(@dockerlint.copy_source_matches("src/**", "src/nested/file"))
  assert_false(@dockerlint.copy_source_matches("a[^0-9]", "a2"))
  assert_false(@dockerlint.copy_source_matches("*[^x]*", "a/b"))
  assert_true(@dockerlint.copy_source_matches("*??", "😀"))
  for pattern in ["[", "[]", "[a-]", "abc\\"] {
    assert_true(
      try {
        ignore(@dockerlint.copy_source_matches(pattern, "x"))
        false
      } catch {
        _ => true
      },
    )
  }
}
