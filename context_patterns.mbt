///|
// Matching order adapted from Go path/filepath/match.go.
// Copyright 2010 The Go Authors. All rights reserved.
// BSD-style license: licenses/Go-BSD.txt.
// COPY sources use Go filepath.Match syntax (Linux separators), not gitignore
// rules or .dockerignore's recursive **. A small instruction-specific adapter:
// literals, ?, *, escaped literals and Go character ranges. No ignore engine.
priv enum CopyToken {
  Literal(Char)
  One
  Many
  Range(Bool, Array[(Char, Char)])
}

///|
fn copy_tokens(pattern : String) -> Array[CopyToken] raise ParseError {
  let chars = pattern.to_array()
  let tokens = []
  let mut i = 0
  fn escaped() -> Char raise ParseError {
    if i >= chars.length() || chars[i] == '-' || chars[i] == ']' {
      raise Invalid("invalid COPY source character class")
    }
    if chars[i] == '\\' {
      i += 1
      if i >= chars.length() {
        raise Invalid("invalid COPY source escape")
      }
    }
    let c = chars[i]
    i += 1
    c
  }
  while i < chars.length() {
    let c = chars[i]
    i += 1
    match c {
      '*' => {
        while i < chars.length() && chars[i] == '*' {
          i += 1
        }
        tokens.push(Many)
      }
      '?' => tokens.push(One)
      '\\' => {
        if i == chars.length() {
          raise Invalid("invalid COPY source escape")
        }
        tokens.push(Literal(chars[i]))
        i += 1
      }
      '[' => {
        let negated = i < chars.length() && chars[i] == '^'
        if negated {
          i += 1
        }
        let ranges = []
        while true {
          let lo = escaped()
          let hi = if i < chars.length() && chars[i] == '-' {
            i += 1
            escaped()
          } else {
            lo
          }
          ranges.push((lo, hi))
          if i >= chars.length() {
            raise Invalid("unclosed COPY source class")
          }
          if chars[i] == ']' {
            i += 1
            break
          }
        }
        tokens.push(Range(negated, ranges))
      }
      _ => tokens.push(Literal(c))
    }
  }
  tokens
}

///|
fn copy_match(
  tokens : Array[CopyToken],
  value : String,
  descendants : Bool,
) -> Bool {
  // Match Go's non-backtracking chunk order, including byte-wise star search.
  // See THIRD-PARTY.md and Go's BSD license. Continuation-byte starting points
  // decode as RuneError/1 in Go; retain them even though input is valid Unicode.
  let cells : Array[(Char, Int)] = []
  for c in value {
    let n = if c.to_int() < 128 {
      1
    } else if c.to_int() < 2048 {
      2
    } else if c.to_int() < 65536 {
      3
    } else {
      4
    }
    cells.push((c, n))
    for _ in 1..<n {
      cells.push(('�', 1))
    }
  }
  fn chunk(start : Int, end : Int, at : Int, limit : Int) -> Int? {
    let mut pos = at
    for i in start..<end {
      if pos >= limit {
        return None
      }
      let (c, n) = cells[pos]
      let matched = match tokens[i] {
        Literal(want) => c == want && !(c == '�' && n == 1)
        One => c != '/'
        Range(negated, ranges) =>
          ranges.iter().any(r => r.0 <= c && c <= r.1) != negated
        Many => false
      }
      if !matched {
        return None
      }
      pos += n
    }
    Some(pos)
  }
  fn exact(limit : Int) -> Bool {
    let mut i = 0
    let mut pos = 0
    while i < tokens.length() {
      let star = tokens[i] is Many
      if star {
        i += 1
      }
      if i == tokens.length() {
        for j in pos..<limit {
          if cells[j].0 == '/' {
            return false
          }
        }
        return true
      }
      let start = i
      while i < tokens.length() && !(tokens[i] is Many) {
        i += 1
      }
      let mut found = false
      let mut at = pos
      while true {
        if chunk(start, i, at, limit) is Some(next) &&
          (next == limit || i < tokens.length()) {
          pos = next
          found = true
          break
        }
        if !star || at >= limit || cells[at].0 == '/' {
          break
        }
        at += 1
      }
      if !found {
        return false
      }
    }
    pos == limit
  }
  if exact(cells.length()) {
    return true
  }
  if descendants {
    for i in 0..<cells.length() {
      if cells[i].0 == '/' && exact(i) {
        return true
      }
    }
  }
  false
}

///|
/// Linux COPY wildcard semantics on a single context-relative name. ** has the
/// same meaning as *, not recursive glob. Malformed patterns always raise.
pub fn copy_source_matches(
  pattern : String,
  path : String,
) -> Bool raise ParseError {
  if pattern.length() > 2048 ||
    path.length() > 2048 ||
    !valid_unicode(pattern) ||
    !valid_unicode(path) {
    raise Invalid("COPY pattern/path limit or Unicode")
  }
  copy_match(copy_tokens(pattern), path, false)
}

///|
fn context_path_valid(path : String) -> Bool {
  !path.is_empty() &&
  path.length() <= 2048 &&
  valid_unicode(path) &&
  !path.has_prefix("/") &&
  !path.has_suffix("/") &&
  !path.contains("\\") &&
  path.iter().all(c => c.to_int() >= 32 && c.to_int() != 127) &&
  path.split("/").all(part => part != "" && part != "." && part != "..")
}

///|
fn clean_copy_source(path : String) -> String {
  let parts = []
  for part in path.split("/") {
    if part == ".." {
      ignore(parts.pop())
    } else if part != "" && part != "." {
      parts.push(part.to_owned())
    }
  }
  if parts.is_empty() {
    "."
  } else {
    parts.join("/")
  }
}
