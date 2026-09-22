FROM alpine:3.20 AS assets
RUN echo asset > /asset
FROM alpine:3.20 AS compiler
RUN echo compiler > /compiler
FROM alpine:3.20 AS build
RUN --mount=from=assets,target=/assets --mount=from=compiler,target=/tool cat /assets/asset /tool/compiler > /app
FROM scratch AS release
COPY --from=build /app /app
FROM alpine:3.20 AS docs
RUN echo documentation
