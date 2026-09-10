# syntax=docker/dockerfile:1
FROM alpine:3.20 AS build
SHELL ["/bin/sh", "-o", "pipefail", "-c"]
RUN <<'SCRIPT'
echo 'This is a build script, not another Dockerfile instruction'
SCRIPT
FROM scratch AS runtime
COPY --from=build ["/etc/alpine-release", "/release"]
USER 1000
CMD ["/app"]
