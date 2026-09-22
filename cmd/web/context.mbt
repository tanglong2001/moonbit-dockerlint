///|
pub fn context_plan(
  source : String,
  manifest : String,
  target : String,
  changes : String,
  build_args : String,
  control_files : String,
) -> String {
  try {
    let files : Array[@lib.ContextEntry] = @json.from_json(
      @json.parse(manifest),
    )
    let changed : Array[@lib.ContextChange] = @json.from_json(
      @json.parse(changes),
    )
    let arguments : Map[String, String] = @json.from_json(
      @json.parse(build_args),
    )
    let controls : Array[String] = @json.from_json(@json.parse(control_files))
    @lib.analyze_context(
      source,
      files,
      target~,
      changes=changed,
      build_args=arguments,
      control_files=controls,
    )
    .to_json()
    .stringify()
  } catch {
    e => "ERROR: " + Repr(e).to_string()
  }
}

///|
pub fn source_matches(pattern : String, path : String) -> String {
  @lib.copy_source_matches(pattern, path).to_json().stringify() catch {
    e => "ERROR: " + Repr(e).to_string()
  }
}
