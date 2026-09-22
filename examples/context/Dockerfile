FROM alpine:3.20 AS compile
COPY src /src
RUN --mount=type=bind,source=config,target=/cfg test -f /cfg/options.json
FROM scratch AS docs
COPY docs /docs
FROM scratch AS release
COPY --from=compile /src/app.txt /app.txt
