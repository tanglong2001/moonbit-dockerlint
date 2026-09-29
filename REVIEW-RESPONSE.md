# Dockerlint 复审答复 · 2026-09-30

本项目完整仓库：https://github.com/tanglong2001/moonbit-dockerlint

“无法克隆”：上述完整地址已有匿名读取记录及公开 CI。驳回信显示的 `tanglong20 01/` 缺少完整仓库路径；报名表原值尚未核实，交接时须修正表单，不能以 README 地址正确代替表单核对。

“只能罗列规则”：接受旧选题定位不足。新主任务是 MoonBit 构建输入与修改解释，核心输入为前后 Dockerfile、过滤清单、变化文件和可选的已验证镜像元数据，输出有源码行和依赖路径的影响报告。旧 lint 作为兼容入口保留，不再计为独立贡献。

“价值与通用性”：提供可复用的 MoonBit 嵌入接口与 Node 目录入口。真实 Tempo 的两个 base digest 变化现在分别选中第 5、11 行，不扩大到未变阶段；0.12.0 接入原始 OCI 配置链，修正已确认空 ONBUILD 却仍多报所有外部阶段的问题。无配置或坏资料时保持保守并显示拒绝原因。任务适用于声明边界内的多阶段构建审阅，公开实例不是现存客户或采用证明。

已有实现：BuildKit/Buildx、Hadolint、dockerfilegraph、Depot、Cadre/DodeX 与 MoonBit 相邻包均列入 DUPLICATION，承认已有求解、图展示、规则和演化研究。贡献限于 MoonBit 可组合的输入/变更解释合同，不宣称生态空白、算法首创、可替代 BuildKit 或完整 Docker 语义。

证据：原始上游源码及许可、五个镜像的 index/manifest/config、固定 BuildKit 输出、篡改/平台/触发器回退与可运行命令均在仓库。二进制路径是 Makefile 产物的清单模型；未执行 Docker build、缓存测量或生产部署。新流程用来核查生成代码的具体依据，不把生成结果或测试数量作为正确性保证。

当前本地候选为 0.12.0；最后成功核对的公开版本为 0.10.0（2026-09-29 17:18 UTC），新代码未推送或发布。交接应同步源码、Mooncakes 与表单，再核对对应提交 CI；是否满足赛事价值要求由组委会评定。[当前申报书](PROPOSAL.md) 与 [验证记录](TESTING.md) 可独立复核。
