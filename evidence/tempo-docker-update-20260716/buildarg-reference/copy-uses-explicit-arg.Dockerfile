FROM registry.invalid/moonbit-dockerlint-buildarg@sha256:aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa AS app
ARG TARGETARCH
COPY bin/linux/tempo-${TARGETARCH} /tempo
