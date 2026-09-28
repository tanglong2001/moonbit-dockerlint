# MoonBit 构建输入与阶段影响分析
本项目仓库：https://github.com/tanglong2001/moonbit-dockerlint
模块：tanglong2001/dockerlint；本地0.10.0；MIT AND BSD-3-Clause，第三方来源另附许可。
状态：初审驳回后的本地修订；未推送、发布或提交复审。

## 任务与实现
审阅多阶段Dockerfile时，定位COPY/ADD/bind使用的本地文件、ignore排除原因，以及修改传到目标的引用路径。
MoonBit实现限定语法、ARG/ENV未知状态传播、清单匹配、阶段图和修改前后双图分析；Node提供受限只读扫描和CLI。
0.10.0公开compare_build_sources接收两份完整源码，自动选取覆盖全部差异的保守行区间，避免漏填变更坐标。
删除依赖时保留旧图路径；无法稳定对齐阶段时保守报告所有目标。多处修改可能多报，不返回安全跳过构建的证明。
复用@balena/dockerignore1.0.2，未核实模式明确拒绝；同一MoonBit核心供JS/Wasm-GC消费，宿主文件操作不称为原生I/O。

## 现有工作与独立贡献
Docker/BuildKit已有完整求解，Hadolint已有规则检查，mizchi/syntree已有Dockerfile分词，MoonBit亦有Git ignore库。
旧linter规则不再是申报主贡献；保留价值是可嵌入MoonBit的目录输入、变更路径及显式不确定性接口。
BuildKit同样可离线转换，不能把无daemon、协议算法或简单规则列表称为独有能力；未声称生态空白。

## 可运行证据
按README安装固定工具链，运行node examples/run-context.mjs；完整快照文件入口见SOURCE-COMPARISON.md。
BuildKit v0.25.1的Dockerfile2LLB参考覆盖固定教材及修改副本的21组目标闭包、147项可达判断、2组双图比较。
参考采用空ONBUILD的假Linux/amd64镜像配置，dev阶段需补入已选target；不证明真实镜像闭包或缓存失效。
0.10.0自动快照入口新增JS/Wasm-GC各4组API检查和7项CLI检查；旧参考与新接口结果分别保存，没有混成新全量实测。
docker/getting-started固定提交、Apache-2.0及原始散列见examples/buildkit-closures；公开教材不是本项目客户。

## 边界与交付
外部镜像元数据、命名context、链接及部分模式未求解；未知项显式返回，affected=false不能直接用于跳过构建。
没有实际镜像构建、生产用户或性能优越性证据。交付核心API、CLI、例子、来源和分层回执，详见CONTEXT、TESTING及REVIEW-RESPONSE。
后续由团队同步同版本公开源码、完整仓库URL和申报表；当前本地成果不代表远端CI或复审通过。

**验收复现与交付状态（2026-09-28 本地）**：以 moonc 0.10.14+7d59c7ec9 通过 `--deny-warn` 检查、JS/Wasm-GC 测试和构建、最小样例和离线 `moon package`；同一代码在 Ubuntu-D 26.04 WSL2 全新解包后通过格式、接口生成、严格双后端检查及 Node 24.21.0 最小宿主入口；公开 Git HEAD 当日可匿名读取，Mooncakes 在线版 `0.4.0` 落后于本地 `0.10.0`；新版推送、远端 CI 和发布待核对。命令与能力边界见 [README](README.md)，自动检查见 [CI](.github/workflows/ci.yml)；本地通过不代表赛事审核通过。
