# 离线镜像配置与上下文影响 · 0.12.0

`analyze_context` 新增可选 `platform` 与 `image_metadata`。`ImageContextMetadata` 是宿主已验证合同，含 reference、platform、index_digest、manifest_digest、config_digest、onbuild。纯核心不读取文件、访问 registry 或实现 SHA-256；不能将外部用户 JSON 直接当作该合同。旧六参 `context_plan` 保持无配置行为；八参 `context_plan_with_metadata(source, manifest, target, changes, build_args, control_files, platform, image_metadata)` 提供 JSON 桥接，末项是数组 JSON 文本。

Node `inspectBuildContext` 增加 `platform` 和 `imageProfiles`（离线 profiles.json 路径），在 worker 内调用 [校验器](tools/image-profiles.mjs)。CLI 对应 `--platform` 与 `--image-profiles`。报告的 `image_profiles` 含校验状态、拒绝理由和摘要；`plan.image_metadata` 记录每个外部阶段是否使用这些资料及原因。没有配置时保持原有保守行为。

## 原始资料合同

profiles.json 的 format 为 `dockerlint-image-profile/1`，images 数组的每项提供 reference、platform、indexFile、platformManifestFile、configFile。三个文件名只允许同目录的普通 JSON 文件；不可跨目录或链接到别处。随仓库提供的 [完整五镜像清单](evidence/tempo-docker-update-20260716/profiles/profiles.json) 是可重放格式示例，附加的 onbuild/env 摘要字段不参与决策。

每条记录的 reference 必须是完整字面 `name@sha256:...`（可含 tag，但 digest 才是固定身份）。仅支持 OCI index 或 Docker schema2 manifest list，到单平台 manifest，再到 runtime config 的链。校验器核对 index 原始字节与引用的 SHA-256；按平台唯一选择 descriptor；核对 manifest 与 config 的原始长度、摘要和 mediaType；确认 config 的 os/architecture/variant，并读取其真正的 OnBuild。大小写歧义、重复 reference/platform、未知类型或坏格式均拒绝。没有拉取 layers，也未验证签名、镜像安全或 registry 归属。

不支持仅 tag 引用、直接单平台 manifest 引用、嵌套 index、模糊平台匹配或非 Linux 容器。Node 单次调用只验证请求平台的记录，混合平台构建中其他平台仍保守；直接核心调用方可提供多平台的各自已验证记录。os/architecture/variant 必须逐项精确匹配，未提供 variant 不自动等同 v8。原始 JSON 的所有对象都拒绝重复解码后键名，防止与 Go 结构体解码的合并规则发生分歧。文件每份不超过 1 MiB、整组累计读取不超过 32 MiB、最多 128 条记录、JSON 嵌套最多 128 层；worker 的时间/内存限制仍生效。

## 核心决策

仅匹配字面 FROM、明确目标平台、合法摘要绑定且空 OnBuild 的记录能撤销该阶段“外部 ONBUILD 未知”的种子。字面 `FROM --platform=...` 使用其显式平台；动态 FROM/平台和自定义 ONBUILD 不精化。非空触发器可能引用下游阶段或 named context，本版不尝试局部解释。缺失、重复、拒绝或不匹配资料继续传播保守影响。

这不消除基础镜像 ENV 的未知性。已声明且调用方明确提供的 build arg 和后续 Dockerfile ENV 继续遵循原覆盖合同；默认 ARG 仍可能未知。输入表达式、图结构或控制文件变化中的其他不确定性也不会因空 OnBuild 而消失。

## 复现与证据

按 README 构建 JS 引擎，然后执行：

```sh
node --test tools/test-image-profiles.mjs
node tools/run-profile-context.mjs --out evidence/profile-context-20260930/REPLAY.json
```

输出路径必须未存在。[本地固定回执](evidence/profile-context-20260930/LOCAL-REPLAY-0.12.0.json) 分开记录无配置、有配置、缺 Alpine 配置和错误平台。在 Tempo 前后两份真实 Dockerfile 上，目标向量预期分别为 `[true,true,true]`、`[false,false,true]`、`[true,false,true]`、`[true,true,true]`。二进制路径仅为清单模型，不是实际构建产物。比较复用此前保存的 BuildKit v0.25.1 输出，本脚本不重新运行 BuildKit。

规范参考：[OCI descriptors](https://github.com/opencontainers/image-spec/blob/main/descriptor.md)、[OCI index](https://github.com/opencontainers/image-spec/blob/main/image-index.md)、[Docker ONBUILD](https://docs.docker.com/reference/dockerfile/#onbuild)。摘要核验只证明当前 bytes 对应给定 digest；最终报告是静态解释，不是缓存或安全跳过构建的凭证。
