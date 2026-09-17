ARG TAG=3.20
FROM alpine:$TAG AS base
ARG APP=example
ENV APP_NAME=$APP
FROM base AS runtime
WORKDIR /srv/$APP_NAME
USER 1000
CMD ["/bin/true"]
