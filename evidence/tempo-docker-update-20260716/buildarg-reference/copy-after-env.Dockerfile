FROM registry.invalid/moonbit-dockerlint-buildarg@sha256:aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa AS app
ARG TARGETARCH
ENV TARGETARCH=arm64
COPY bin/linux/tempo-${TARGETARCH} /tempo
