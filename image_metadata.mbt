///|
/// Host-verified OCI image configuration metadata for one pinned FROM image.
/// The host must verify the index -> platform manifest -> config byte digests.
/// The core intentionally consumes only identity, platform and ONBUILD data;
/// base-image ENV remains unknown.
pub(all) struct ImageContextMetadata {
  reference : String
  platform : String
  index_digest : String
  manifest_digest : String
  config_digest : String
  onbuild : Array[String]
} derive(Debug, Eq, ToJson, @json.FromJson)

///|
pub extend ImageContextMetadata with @moonbitlang/core/debug.Debug::{to_repr}

///|
pub extend ImageContextMetadata with Eq::{not_equal, equal}

///|
pub extend ImageContextMetadata with ToJson::{to_json}

///|
pub extend ImageContextMetadata with @json.FromJson::{from_json}

///|
/// Explains whether a matching image profile suppressed ONBUILD uncertainty.
pub(all) struct ImageContextMetadataEvidence {
  stage : Int
  line : Int
  reference : String
  platform : String
  status : String
  reason : String
  index_digest : String
  manifest_digest : String
  config_digest : String
} derive(Debug, Eq, ToJson)

///|
pub extend ImageContextMetadataEvidence with @moonbitlang/core/debug.Debug::{
  to_repr,
}

///|
pub extend ImageContextMetadataEvidence with Eq::{not_equal, equal}

///|
pub extend ImageContextMetadataEvidence with ToJson::{to_json}

///|
priv struct ImageContextMetadataDecision {
  safe_empty_onbuild : Bool
  evidence : ImageContextMetadataEvidence
}

///|
fn image_context_digest_is_sha256(value : String) -> Bool {
  let chars = value.to_array()
  if chars.length() != 71 || String::from_array(chars[:7]) != "sha256:" {
    return false
  }
  for c in chars[7:] {
    if !"0123456789abcdef".contains(c.to_string()) {
      return false
    }
  }
  true
}

///|
fn image_context_reference_digest(reference : String) -> String? {
  let parts = reference.split("@").collect()
  if parts.length() != 2 || parts[0].is_empty() {
    return None
  }
  Some(parts[1].to_owned())
}

///|
fn image_context_literal(value : String) -> Bool {
  if value.is_empty() {
    return false
  }
  for c in value.iter() {
    if "$*?\\\"' \t\n".contains(c.to_string()) {
      return false
    }
  }
  true
}

///|
fn image_context_linux_platform(value : String) -> Bool {
  let parts = value.split("/").collect()
  if parts.length() < 2 || parts.length() > 3 || parts[0] != "linux" {
    return false
  }
  for part in parts[1:] {
    if part.is_empty() ||
      !part
      .to_owned()
      .iter()
      .all(c => "abcdefghijklmnopqrstuvwxyz0123456789".contains(c.to_string())) {
      return false
    }
  }
  true
}

///|
fn image_context_evidence(
  stage : Stage,
  reference : String,
  platform : String,
  status : String,
  reason : String,
  index_digest : String,
  manifest_digest : String,
  config_digest : String,
) -> ImageContextMetadataEvidence {
  {
    stage: stage.index,
    line: stage.line,
    reference,
    platform,
    status,
    reason,
    index_digest,
    manifest_digest,
    config_digest,
  }
}

///|
fn image_context_from_platform(
  instruction : Instruction,
  requested_platform : String,
) -> (String, String) raise ParseError {
  let args = instruction.split_arguments()
  let mut platform_flag = ""
  let mut platform_flag_count = 0
  for flag in leading_flags(instruction.arguments) {
    let parts = flag.split("=").collect()
    if parts[0] == "--platform" {
      platform_flag_count += 1
      platform_flag = flag
    }
  }
  if platform_flag_count > 1 {
    return ("", "duplicate FROM --platform flags are not supported")
  }
  if platform_flag_count == 1 {
    if !platform_flag.has_prefix("--platform=") {
      return ("", "FROM --platform must use a literal value")
    }
    match args.flags.get("platform") {
      None => ("", "FROM --platform value is unavailable")
      Some(value) =>
        if !image_context_literal(value) || !image_context_linux_platform(value) {
          ("", "dynamic FROM --platform is not supported")
        } else {
          (value, "")
        }
    }
  } else if !image_context_literal(requested_platform) ||
    !image_context_linux_platform(requested_platform) {
    ("", "an explicit literal target platform is required")
  } else {
    (requested_platform, "")
  }
}

///|
fn image_context_metadata_decision(
  stage : Stage,
  from_instruction : Instruction?,
  requested_platform : String,
  metadata : Array[ImageContextMetadata],
  source_onbuild : Bool,
) -> ImageContextMetadataDecision raise ParseError {
  let mut effective_platform = ""
  let mut platform_reason = ""
  match from_instruction {
    None => platform_reason = "FROM instruction could not be matched to stage"
    Some(instruction) => {
      let (platform, reason) = image_context_from_platform(
        instruction, requested_platform,
      )
      effective_platform = platform
      platform_reason = reason
    }
  }
  let matching : Array[ImageContextMetadata] = []
  let mut same_reference = false
  for item in metadata {
    if item.reference == stage.base {
      same_reference = true
      if effective_platform != "" && item.platform == effective_platform {
        matching.push(item)
      }
    }
  }
  let item = if matching.length() == 1 { Some(matching[0]) } else { None }
  let mut status = if metadata.is_empty() { "missing" } else { "refused" }
  let mut reason = if metadata.is_empty() {
    "external base image ONBUILD metadata is unavailable"
  } else {
    platform_reason
  }
  let mut index_digest = ""
  let mut manifest_digest = ""
  let mut config_digest = ""
  let mut profile_platform = effective_platform
  if reason == "" && matching.length() > 1 {
    reason = "duplicate metadata for the same image reference and platform"
  } else if reason == "" && item is None {
    status = "missing"
    reason = if metadata.is_empty() {
      "external base image ONBUILD metadata is unavailable"
    } else if same_reference {
      "image metadata platform does not match the effective FROM platform"
    } else {
      "no host-verified image metadata matches the pinned FROM reference"
    }
  }
  if item is Some(profile) && reason == "" {
    profile_platform = profile.platform
    index_digest = profile.index_digest
    manifest_digest = profile.manifest_digest
    config_digest = profile.config_digest
    let reference_digest = image_context_reference_digest(stage.base)
    if !image_context_literal(stage.base) || reference_digest is None {
      reason = "FROM image must be a literal reference pinned by @sha256"
    } else if !image_context_digest_is_sha256(profile.index_digest) ||
      !image_context_digest_is_sha256(profile.manifest_digest) ||
      !image_context_digest_is_sha256(profile.config_digest) {
      reason = "image metadata contains a malformed SHA-256 digest"
    } else if reference_digest != Some(profile.index_digest) {
      reason = "image metadata index digest does not match the pinned FROM reference"
    } else if profile.index_digest == profile.manifest_digest {
      reason = "a distinct platform manifest digest is required for an index-pinned FROM"
    } else if profile.platform != effective_platform {
      reason = "image metadata platform does not match the effective FROM platform"
    } else if source_onbuild {
      reason = "Dockerfile-defined ONBUILD instructions are not modeled"
    } else if !profile.onbuild.is_empty() {
      reason = "nonempty image ONBUILD triggers are not interpreted"
    } else {
      status = "used-empty-onbuild"
      reason = "host-verified OCI config matches the pinned FROM and platform; ONBUILD is empty"
    }
  }
  let accepted = status == "used-empty-onbuild"
  {
    safe_empty_onbuild: accepted,
    evidence: image_context_evidence(
      stage,
      stage.base,
      profile_platform,
      status,
      reason,
      index_digest,
      manifest_digest,
      config_digest,
    ),
  }
}
