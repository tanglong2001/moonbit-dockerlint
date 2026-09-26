# 来源与许可

本项目自有代码为 MIT。`context_patterns.mbt` 的 chunk 搜索顺序及 UTF-8 回退语义参考/适配 Go `path/filepath/match.go`（Copyright 2010 The Go Authors）；许可全文在 `licenses/Go-BSD.txt`。不主张通配符算法原创。

Node context 宿主实际依赖 @balena/dockerignore 1.0.2，Apache-2.0/MIT，版权 Balena Ltd. / Zeit, Inc.；通过 npm ci 安装，包内 ignore.js 版权头及 LICENSE.md 保留。`tools/docker-ignore-adapter.mjs` 加载这个已固定的库，用 path.posix 描述 Linux 路径；不执行任何用户 Dockerfile/ignore 文本。语法限制见 CONTEXT。源码交付不包含 node_modules。

tools/context-reference 是本项目自写的独立验证调用器，引用 Go 标准库与 Moby patternmatcher v0.6.0（Apache-2.0）。Go/Moby 源码或二进制均不是运行时依赖，未随项目源码包复制；go.mod/go.sum 固定参考版本。源码 ZIP 内不包含参考 SDK/wasm binary。

公开仓库案例仅记录 docker/getting-started 的 URL、固定提交、静态路径/长度报告及断言结论，不重新分发其应用、图片或依赖。原创样例在 examples/context。更早 Hadolint oracle 的范围和来源仍见 TESTING。

tools/expansion-reference 是独立验证调用器，依赖 BuildKit v0.25.1（Apache-2.0）shell 包及 github.com/pkg/errors v0.9.1（BSD-2-Clause），只用于测试。未向运行时代码复制 BuildKit 实现；源码包只含调用器和依赖锁，不含参考库源码、Go SDK 或编译二进制。

2026-09-27新增 examples/buildkit-closures：仅复制 Apache-2.0 的 Dockerfile、许可及两个有标注修改副本；不含应用源码或依赖。tools/closure-reference 是本项目Go调用器，实际引用Apache-2.0 BuildKit v0.25.1，依赖源码/二进制不随包分发。
