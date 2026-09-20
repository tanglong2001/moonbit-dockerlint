// Expected diagnostics come only from official Hadolint reference fields.

///|
test "six shell rules native oracle" {
  let owned = ["SC2005", "SC2006", "SC2035", "SC2046", "SC2064", "SC2088"]
  let cases : Array[(String, Array[String])] = [
    ("FROM alpine:3.22\nRUN echo `date`\n", ["SC2006:2:style"]),
    ("FROM alpine:3.22\nRUN echo \"`date`\"\n", ["SC2006:2:style"]),
    ("FROM alpine:3.22\nRUN echo '`date`'\n", []),
    ("FROM alpine:3.22\nRUN echo $(date)\n", ["SC2005:2:style"]),
    ("FROM alpine:3.22\nRUN echo \"$(date)\"\n", ["SC2005:2:style"]),
    ("FROM alpine:3.22\nRUN x=$(date); echo \"$x\"\n", []),
    ("FROM alpine:3.22\nRUN export x=$(date)\n", ["SC2046:2:warning"]),
    ("FROM alpine:3.22\nRUN echo $((1+2))\n", []),
    ("FROM alpine:3.22\nRUN echo prefix$(date)suffix\n", ["SC2046:2:warning"]),
    ("FROM alpine:3.22\nRUN echo \"$(echo $(date))\"\n", ["SC2005:2:style"]),
    ("FROM alpine:3.22\nRUN printf \"$x\"\n", []),
    ("FROM alpine:3.22\nRUN printf \"%s\" \"$x\"\n", []),
    ("FROM alpine:3.22\nRUN printf \"hello $x\"\n", []),
    ("FROM alpine:3.22\nRUN printf 'hello $x'\n", []),
    ("FROM alpine:3.22\nRUN printf -v out \"$x\"\n", []),
    ("FROM alpine:3.22\nRUN read x\n", []),
    ("FROM alpine:3.22\nRUN read -r x\n", []),
    ("FROM alpine:3.22\nRUN read -rp prompt x\n", []),
    ("FROM alpine:3.22\nRUN IFS= read x\n", []),
    ("FROM alpine:3.22\nRUN echo x | read x\n", []),
    ("FROM alpine:3.22\nRUN trap \"echo $x\" EXIT\n", []),
    ("FROM alpine:3.22\nRUN trap 'echo $x' EXIT\n", []),
    ("FROM alpine:3.22\nRUN trap \"echo $(date)\" EXIT\n", ["SC2064:2:warning"]),
    ("FROM alpine:3.22\nRUN trap \"echo ready\" EXIT\n", []),
    ("FROM alpine:3.22\nRUN trap $handler EXIT\n", []),
    ("FROM alpine:3.22\nRUN trap -l\n", []),
    ("FROM alpine:3.22\nRUN echo \"~/file\"\n", ["SC2088:2:warning"]),
    ("FROM alpine:3.22\nRUN echo '~/file'\n", ["SC2088:2:warning"]),
    ("FROM alpine:3.22\nRUN echo ~/file\n", []),
    ("FROM alpine:3.22\nRUN echo \"path: ~/file\"\n", []),
    ("FROM alpine:3.22\nRUN echo \"~root/file\"\n", []),
    ("FROM alpine:3.22\nRUN x=\"~/file\"; echo \"$x\"\n", ["SC2088:2:warning"]),
    ("FROM alpine:3.22\nRUN rm *\n", ["SC2035:2:info"]),
    ("FROM alpine:3.22\nRUN cp * /tmp/\n", ["SC2035:2:info"]),
    ("FROM alpine:3.22\nRUN mv *.txt /tmp/\n", ["SC2035:2:info"]),
    ("FROM alpine:3.22\nRUN rm -- *\n", []),
    ("FROM alpine:3.22\nRUN rm ./*\n", []),
    ("FROM alpine:3.22\nRUN rm \"*\"\n", []),
    ("FROM alpine:3.22\nRUN echo *\n", []),
    ("FROM alpine:3.22\nRUN rm -f *\n", ["SC2035:2:info"]),
    ("FROM alpine:3.22\nRUN rm ?.txt\n", ["SC2035:2:info"]),
    ("FROM alpine:3.22\nRUN rm [ab].txt\n", []),
    ("FROM alpine:3.22\nRUN find . -name \"*\"\n", []),
    ("FROM alpine:3.22\nRUN for x in $(cat list); do echo \"$x\"; done\n", []),
    ("FROM alpine:3.22\nRUN case $(date) in x) echo yes;; esac\n", []),
    ("FROM alpine:3.22\nRUN test \"$(date)\" = x\n", []),
    ("FROM alpine:3.22\nRUN cat >$(date)\n", ["SC2046:2:warning"]),
    ("FROM alpine:3.22\nRUN echo \\$(date)\n", []),
    ("FROM alpine:3.22\nRUN echo \\`date\\`\n", []),
    ("FROM alpine:3.22\nRUN [\"echo\", \"$(date)\", \"~/file\"]\n", []),
    (
      "FROM windows:1\nSHELL [\"powershell\", \"-Command\"]\nRUN echo $(date)\n",
      [],
    ),
    ("FROM alpine:3.22\nSHELL [\"/bin/bash\", \"-c\"]\nRUN read x\n", []),
    (
      "FROM alpine:3.22\nRUN <<EOF\nread x\necho $(date)\nEOF\n",
      ["SC2005:2:style"],
    ),
    ("FROM alpine:3.22\nRUN cp $(date) /tmp/file\n", ["SC2046:2:warning"]),
    ("FROM alpine:3.22\nRUN cp `date` /tmp/file\n", ["SC2006:2:style"]),
    (
      "FROM alpine:3.22\nRUN cp \"prefix\"$(date) /tmp/file\n",
      ["SC2046:2:warning"],
    ),
    ("FROM alpine:3.22\nRUN echo $(date)$(uname)\n", ["SC2046:2:warning"]),
    ("FROM alpine:3.22\nRUN echo \"$(date)$(uname)\"\n", []),
    (
      "FROM alpine:3.22\nRUN echo $(wc -l < file) suffix\n",
      ["SC2046:2:warning"],
    ),
    ("FROM alpine:3.22\nRUN echo $(seq 1 3) suffix\n", []),
    ("FROM alpine:3.22\nRUN echo \"\\$(date)\"\n", []),
    ("FROM alpine:3.22\nRUN echo '$(date)'\n", []),
    ("FROM alpine:3.22\nRUN trap \"echo `date`\" EXIT\n", ["SC2006:2:style"]),
    ("FROM alpine:3.22\nRUN rm * --\n", ["SC2035:2:info"]),
    ("FROM alpine:3.22\nRUN rm /tmp/*\n", []),
    ("FROM alpine:3.22\nRUN echo ok # `date` \"~/file\"\n", []),
    ("FROM alpine:3.22\nRUN cat <<EOF\n$(date)\nEOF\n", []),
    ("FROM alpine:3.22\nRUN cat <<EOF\nrm *\nEOF\n", []),
    ("FROM alpine:3.22\nRUN x=$(date) y=ok; echo \"$x\"\n", []),
    ("FROM alpine:3.22\n# hadolint ignore=SC2035\nRUN rm *\n", []),
    (
      "FROM windows:1 AS base\nSHELL [\"powershell\", \"-Command\"]\nFROM base\nRUN echo $(date)\n",
      [],
    ),
    (
      "FROM windows:1\nSHELL [\"powershell\", \"-Command\"]\nFROM alpine:3.22\nRUN cp $(date) /tmp/\n",
      ["SC2046:4:warning"],
    ),
  ]
  for fixture in cases {
    let actual = @dockerlint.check(fixture.0)
      .filter(d => owned.contains(d.code))
      .map(d => d.code + ":" + d.line.to_string() + ":" + d.severity())
    actual.sort_by((a, b) => a.lexical_compare(b))
    assert_eq(actual, fixture.1)
  }
}
