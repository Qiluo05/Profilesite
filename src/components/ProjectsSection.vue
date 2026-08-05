<template>
  <section class="section" id="projects">
    <div class="container">
      <div class="section-header">
        <span class="section-tag">FEATURED PROJECTS</span>
        <h2 class="section-title">精选项目</h2>
        <p class="section-desc">覆盖Java/PHP/Go三端全栈与Web/小程序/App跨端复用，从0到1构建多业态业务闭环</p>
      </div>

      <!-- Featured Project: Claude Code -->
      <div class="project-featured reveal">
        <div class="project-featured-badge">🏆 王牌项目</div>
        <div class="project-featured-content">
          <div class="project-featured-info">
            <h3>Claude Code 源码深度分析与企业级 Agent 框架</h3>
            <p class="project-date">2026.03 - 至今</p>
            <p class="project-desc">对 Anthropic Claude Code v2.1.88 的 <strong>51 万行 TypeScript 源码</strong>进行系统性逆向分析，提炼出 Agent Loop、分层记忆系统、多 Agent 协同、权限沙箱、Prompt Cache 等 <strong>5 大核心设计模式</strong>。基于分析成果开发企业级 miniClaudeCode 框架。</p>
            <div class="project-highlights">
              <div class="highlight-item"><span class="highlight-number">51万</span><span class="highlight-label">行源码分析</span></div>
              <div class="highlight-item"><span class="highlight-number">5000</span><span class="highlight-label">行框架代码</span></div>
              <div class="highlight-item"><span class="highlight-number" id="guideV1Stars">301</span><span class="highlight-label">Stars (V1)</span></div>
              <div class="highlight-item"><span class="highlight-number">200+</span><span class="highlight-label">节图文教程</span></div>
            </div>
            <div class="project-tech">
              <span>Python</span><span>TypeScript</span><span>Agent Loop</span><span>分层记忆</span><span>MCP</span><span>多模型适配</span>
            </div>
            <div class="project-links">
              <a href="https://github.com/Qiluo05" target="_blank" class="project-link">📖 源码指南 V1</a>
              <a href="https://github.com/Qiluo05" target="_blank" class="project-link">📖 源码指南 V2</a>
              <a href="https://github.com/Qiluo05" target="_blank" class="project-link">⚙️ miniClaudeCode</a>
              <a href="https://github.com/Qiluo05" target="_blank" class="project-link">🎨 漫画图解</a>
            </div>
          </div>
          <div class="project-featured-visual">
            <div class="project-image-stack">
              <img src="https://raw.githubusercontent.com/bcefghj/claude-code-complete-guide/main/docs/_media/comic-architecture-overview.png" alt="Claude Code 架构漫画" class="stack-img stack-1" loading="lazy">
              <img src="https://raw.githubusercontent.com/bcefghj/claude-code-complete-guide/main/docs/_media/comic-agent-swarm.png" alt="Agent Swarm 漫画" class="stack-img stack-2" loading="lazy">
              <img src="https://raw.githubusercontent.com/bcefghj/claude-code-complete-guide/main/docs/_media/comic-permissions.png" alt="权限系统漫画" class="stack-img stack-3" loading="lazy">
            </div>
          </div>
        </div>
      </div>

      <!-- Project Showcase Cards -->
      <div class="projects-showcase">

        <!-- AIOps -->
        <div class="showcase-card reveal">
          <div class="showcase-image showcase-image-code">
            <div class="aiops-visual">
              <div class="pipeline-flow">
                <div class="pipeline-node node-alert">
                  <span class="node-icon">🚨</span>
                  <span class="node-label">告警 Agent</span>
                  <span class="node-sub">时序分析·降噪80%+</span>
                </div>
                <div class="pipeline-arrow">→</div>
                <div class="pipeline-node node-rca">
                  <span class="node-icon">🔍</span>
                  <span class="node-label">根因 Agent</span>
                  <span class="node-sub">知识图谱推理</span>
                </div>
                <div class="pipeline-arrow">→</div>
                <div class="pipeline-node node-heal">
                  <span class="node-icon">🔧</span>
                  <span class="node-label">自愈 Agent</span>
                  <span class="node-sub">自动重启·扩容</span>
                </div>
                <div class="pipeline-arrow">→</div>
                <div class="pipeline-node node-approve">
                  <span class="node-icon">✅</span>
                  <span class="node-label">审批 Agent</span>
                  <span class="node-sub">Human-in-loop</span>
                </div>
              </div>
              <div class="aiops-metrics">
                <div class="metric"><span class="metric-val">80%+</span><span class="metric-key">告警降噪率</span></div>
                <div class="metric"><span class="metric-val">40min→5min</span><span class="metric-key">故障恢复时间</span></div>
                <div class="metric"><span class="metric-val">85%+</span><span class="metric-key">根因定位准确率</span></div>
              </div>
            </div>
            <div class="showcase-overlay">
              <a href="https://github.com/Qiluo05" target="_blank" class="showcase-btn">查看仓库</a>
            </div>
          </div>
          <div class="showcase-info">
            <div class="showcase-meta">
              <span class="showcase-stars" data-repo="multi-agent-aiops">⭐ 13</span>
              <span class="showcase-lang">Python · Java · Go</span>
            </div>
            <h3>多 Agent 智能运维系统（AIOps）</h3>
            <p>4-Agent Pipeline + 并行编排架构：<strong>监控告警 Agent</strong>（Prometheus + 智能降噪）→ <strong>根因分析 Agent</strong>（RAG 检索历史故障库）→ <strong>故障自愈 Agent</strong>（自动重启/扩容/回滚）→ <strong>变更审批 Agent</strong>（Human-in-the-loop）。借鉴 Claude Code 权限沙箱设计实现分层权限链。</p>
            <div class="showcase-kpis">
              <div class="kpi-item"><span class="kpi-num">80%+</span><span class="kpi-label">告警降噪</span></div>
              <div class="kpi-item"><span class="kpi-num">5min</span><span class="kpi-label">故障恢复</span></div>
              <div class="kpi-item"><span class="kpi-num">85%+</span><span class="kpi-label">根因准确率</span></div>
            </div>
            <div class="project-tech"><span>LangGraph</span><span>RAG</span><span>Prometheus</span><span>Docker</span><span>Langfuse</span></div>
            <a href="https://github.com/Qiluo05" target="_blank" class="showcase-repo-link">→ github.com/Qiluo05</a>
          </div>
        </div>

        <!-- NoteKing Pro -->
        <div class="showcase-card showcase-card-reverse reveal">
          <div class="showcase-image">
            <img src="https://raw.githubusercontent.com/bcefghj/noteking-pro/main/demos/openclaw_meeting/preview/page_01.png" alt="NoteKing Pro 会议纪要输出" loading="lazy">
            <div class="showcase-overlay">
              <a href="https://github.com/Qiluo05" target="_blank" class="showcase-btn">查看仓库</a>
            </div>
          </div>
          <div class="showcase-info">
            <div class="showcase-meta">
              <span class="showcase-stars" data-repo="noteking-pro">⭐ 8</span>
              <span class="showcase-lang">Python · LangGraph · Whisper</span>
            </div>
            <h3>NoteKing Pro — 智能会议整理 Agent</h3>
            <p>从视频笔记工具（V1，30+ 平台）演进到<strong>会议整理多 Agent 系统（V3）</strong>，基于 LangGraph Supervisor 模式编排 4 个 Agent：<strong>转录 Agent</strong>（Whisper + 说话人分离）→ <strong>分析 Agent</strong>（决策/行动项提取）→ <strong>整理 Agent</strong>（结构化会议纪要）→ <strong>跟进 Agent</strong>（MCP 对接日历/邮件/Notion）。借鉴 Claude Code 分层记忆设计实现跨会议上下文关联。</p>
            <div class="project-tech"><span>LangGraph</span><span>Whisper</span><span>pyannote</span><span>MCP</span><span>Redis</span></div>
            <div class="showcase-links-row">
              <a href="https://github.com/Qiluo05" target="_blank" class="showcase-repo-link">→ NoteKing Pro（会议版）</a>
              <a href="https://github.com/Qiluo05" target="_blank" class="showcase-repo-link">→ NoteKing（视频版）</a>
            </div>
          </div>
        </div>

        <!-- 商旅 Agent -->
        <div class="showcase-card reveal">
          <div class="showcase-image">
            <img src="https://raw.githubusercontent.com/bcefghj/travel-agent-guide/main/comics/07-商旅场景.png" alt="商旅Agent场景漫画" loading="lazy">
            <div class="showcase-overlay">
              <a href="https://github.com/Qiluo05" target="_blank" class="showcase-btn">查看仓库</a>
            </div>
          </div>
          <div class="showcase-info">
            <div class="showcase-meta">
              <span class="showcase-stars" data-repo="travel-agent-guide">⭐ 29</span>
              <span class="showcase-lang">Python · Java · Go</span>
            </div>
            <h3>商旅 Agent — 企业级智能旅行规划系统</h3>
            <p>企业级 AI Agent 学习 + 实战 + 面试一体化项目。多 Agent 协作完成差旅申请→行程规划→订票→费用报销全流程，Python/Java/Go 三语言实现，配套 200+ 面试题、STAR 面试稿、哆啦A梦漫画图解。</p>
            <div class="project-tech"><span>LangGraph</span><span>Multi-Agent</span><span>MCP</span><span>FastAPI</span></div>
            <a href="https://github.com/Qiluo05" target="_blank" class="showcase-repo-link">→ github.com/Qiluo05</a>
          </div>
        </div>

        <!-- Agent 知识库 -->
        <div class="showcase-card showcase-card-reverse reveal">
          <div class="showcase-image showcase-image-code">
            <div class="knowledge-visual">
              <div class="kb-flow">
                <div class="kb-step">
                  <div class="kb-icon">📄</div>
                  <div class="kb-label">文档解析 Agent</div>
                  <div class="kb-desc">PDF/Word/网页 → 结构化文本</div>
                </div>
                <div class="kb-arrow">↓</div>
                <div class="kb-step">
                  <div class="kb-icon">🧠</div>
                  <div class="kb-label">知识抽取 Agent</div>
                  <div class="kb-desc">实体识别 + 关系抽取 + 知识图谱</div>
                </div>
                <div class="kb-arrow">↓</div>
                <div class="kb-step">
                  <div class="kb-icon">💬</div>
                  <div class="kb-label">智能问答 Agent</div>
                  <div class="kb-desc">RAG 检索 + LLM 生成</div>
                </div>
                <div class="kb-arrow">↓</div>
                <div class="kb-step">
                  <div class="kb-icon">🔄</div>
                  <div class="kb-label">增量更新 Agent</div>
                  <div class="kb-desc">变更检测 + 自动同步</div>
                </div>
              </div>
            </div>
            <div class="showcase-overlay">
              <a href="https://github.com/Qiluo05" target="_blank" class="showcase-btn">查看仓库</a>
            </div>
          </div>
          <div class="showcase-info">
            <div class="showcase-meta">
              <span class="showcase-stars" data-repo="agent-knowledge-hub">⭐ 16</span>
              <span class="showcase-lang">Python · Java · Go</span>
            </div>
            <h3>AgentKnowledgeHub — 企业级多 Agent 知识管理系统</h3>
            <p>4 个 AI Agent 分工协作，完成企业知识的全生命周期管理：<strong>文档解析</strong>（PDF/Word/网页）→ <strong>知识抽取</strong>（实体识别 + 关系图谱）→ <strong>智能问答</strong>（RAG + LLM）→ <strong>增量更新</strong>（变更检测 + 自动同步）。Python/Java/Go 三语言实现，配套完整面试材料。</p>
            <div class="project-tech"><span>LangGraph</span><span>RAG</span><span>Chroma</span><span>FastAPI</span><span>Docker</span></div>
            <a href="https://github.com/Qiluo05" target="_blank" class="showcase-repo-link">→ github.com/Qiluo05</a>
          </div>
        </div>

        <!-- AI Agent 面试全攻略 -->
        <div class="showcase-card reveal">
          <div class="showcase-image">
            <img src="https://raw.githubusercontent.com/bcefghj/ai-agent-interview-guide/main/comics/04-多Agent协作.png" alt="多Agent协作漫画" loading="lazy">
            <div class="showcase-overlay">
              <a href="https://github.com/Qiluo05" target="_blank" class="showcase-btn">查看仓库</a>
            </div>
          </div>
          <div class="showcase-info">
            <div class="showcase-meta">
              <span class="showcase-stars" data-repo="ai-agent-interview-guide">⭐ 285</span>
              <span class="showcase-lang">Python / Java / Go</span>
            </div>
            <h3>AI Agent 面试全攻略</h3>
            <p>从零到 Offer 的完整面试指南，包含 200+ 面试题、企业级项目（Python/Java/Go 三语言）、简历模板、STAR 面试稿、哆啦A梦漫画图解。</p>
            <div class="project-tech"><span>LangGraph</span><span>RAG</span><span>MCP</span><span>VitePress</span></div>
            <a href="https://github.com/Qiluo05" target="_blank" class="showcase-repo-link">→ github.com/Qiluo05</a>
          </div>
        </div>

        <!-- Learn MiniMind -->
        <div class="showcase-card showcase-card-reverse reveal">
          <div class="showcase-image">
            <img src="https://raw.githubusercontent.com/bcefghj/learn-minimind/main/assets/comics/01-llm-overview.png" alt="LLM 概览漫画" loading="lazy">
            <div class="showcase-overlay">
              <a href="https://github.com/Qiluo05" target="_blank" class="showcase-btn">查看仓库</a>
            </div>
          </div>
          <div class="showcase-info">
            <div class="showcase-meta">
              <span class="showcase-stars" data-repo="learn-minimind">⭐ 120</span>
              <span class="showcase-lang">LLM / Transformer</span>
            </div>
            <h3>Learn MiniMind 大模型学习指南</h3>
            <p>22 节课彻底搞懂大语言模型训练全流程：Tokenizer → Embedding → Attention → SFT → LoRA → RLHF。配套哆啦A梦风格漫画图解，GitHub 120 Stars。</p>
            <div class="project-tech"><span>Transformer</span><span>SFT</span><span>LoRA</span><span>RLHF</span></div>
            <a href="https://github.com/Qiluo05" target="_blank" class="showcase-repo-link">→ github.com/Qiluo05</a>
          </div>
        </div>

        <!-- 多Agent智能会议助手 -->
        <div class="showcase-card reveal">
          <div class="showcase-image showcase-image-code">
            <div class="meeting-visual">
              <div class="meeting-title">🎙️ 5-Agent 会议全流程自动化</div>
              <div class="meeting-pipeline">
                <div class="mp-step mp-step-1">
                  <div class="mp-num">①</div>
                  <div class="mp-content">
                    <div class="mp-name">Transcription Agent</div>
                    <div class="mp-desc">语音转文字 + 说话人分离</div>
                  </div>
                </div>
                <div class="mp-step mp-step-2">
                  <div class="mp-num">②</div>
                  <div class="mp-content">
                    <div class="mp-name">Summary Agent</div>
                    <div class="mp-desc">会议摘要 + 关键决策提炼</div>
                  </div>
                </div>
                <div class="mp-step mp-step-3">
                  <div class="mp-num">③</div>
                  <div class="mp-content">
                    <div class="mp-name">Action Agent</div>
                    <div class="mp-desc">待办事项 + 责任人分配</div>
                  </div>
                </div>
                <div class="mp-step mp-step-4">
                  <div class="mp-num">④</div>
                  <div class="mp-content">
                    <div class="mp-name">Insight Agent</div>
                    <div class="mp-desc">风险识别 + 情绪分析</div>
                  </div>
                </div>
                <div class="mp-step mp-step-5">
                  <div class="mp-num">⑤</div>
                  <div class="mp-content">
                    <div class="mp-name">Follow-up Agent</div>
                    <div class="mp-desc">MCP 对接日历/邮件/Notion</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="showcase-overlay">
              <a href="https://github.com/Qiluo05" target="_blank" class="showcase-btn">查看仓库</a>
            </div>
          </div>
          <div class="showcase-info">
            <div class="showcase-meta">
              <span class="showcase-stars" data-repo="multi-agent-meeting-assistant">⭐ 7</span>
              <span class="showcase-lang">Python · Java · Go</span>
            </div>
            <h3>多 Agent 智能会议助手系统</h3>
            <p>企业级 <strong>5-Agent 会议全流程自动化系统</strong>，Pipeline + 并行编排。从录音到会议纪要、待办清单、风险预警、自动跟进，全程无需人工干预。三语言完整实现，配套 50+ 八股文、STAR 话术、简历模板、30+ 面试问答。</p>
            <div class="project-tech"><span>LangGraph</span><span>Whisper</span><span>MCP</span><span>Pipeline</span><span>并行编排</span></div>
            <a href="https://github.com/Qiluo05" target="_blank" class="showcase-repo-link">→ github.com/Qiluo05</a>
          </div>
        </div>

        <!-- 智能客服多Agent -->
        <div class="showcase-card showcase-card-reverse reveal">
          <div class="showcase-image showcase-image-code">
            <div class="cs-visual">
              <div class="cs-title">💬 智能客服 Supervisor 架构</div>
              <div class="cs-arch">
                <div class="cs-supervisor">
                  <span class="cs-sup-icon">🎯</span>
                  <span class="cs-sup-label">Supervisor Agent</span>
                  <span class="cs-sup-sub">意图识别 · 路由分发</span>
                </div>
                <div class="cs-agents-row">
                  <div class="cs-agent cs-a1">
                    <span>🔍</span>
                    <span>FAQ Agent</span>
                    <span class="cs-a-sub">知识库检索</span>
                  </div>
                  <div class="cs-agent cs-a2">
                    <span>📋</span>
                    <span>工单 Agent</span>
                    <span class="cs-a-sub">自动创建跟进</span>
                  </div>
                  <div class="cs-agent cs-a3">
                    <span>💰</span>
                    <span>退款 Agent</span>
                    <span class="cs-a-sub">规则审批流</span>
                  </div>
                  <div class="cs-agent cs-a4">
                    <span>👤</span>
                    <span>转人工 Agent</span>
                    <span class="cs-a-sub">复杂问题升级</span>
                  </div>
                </div>
                <div class="cs-features">
                  <span class="cs-feat">分层记忆</span>
                  <span class="cs-feat">全链路追踪</span>
                  <span class="cs-feat">Langfuse监控</span>
                </div>
              </div>
            </div>
            <div class="showcase-overlay">
              <a href="https://github.com/Qiluo05" target="_blank" class="showcase-btn">查看仓库</a>
            </div>
          </div>
          <div class="showcase-info">
            <div class="showcase-meta">
              <span class="showcase-stars" data-repo="smart-cs-multi-agent">⭐ 25</span>
              <span class="showcase-lang">Python · Java · Go</span>
            </div>
            <h3>智能客服多 Agent 系统</h3>
            <p>企业级面试项目全攻略，面向金融/电商场景。<strong>Supervisor 编排</strong>多个专业 Agent（FAQ检索、工单创建、退款审批、转人工），配合<strong>分层记忆</strong>实现跨会话上下文保持，Langfuse 全链路追踪。Python/Java/Go 三语言完整实现。</p>
            <div class="project-tech"><span>LangGraph</span><span>Supervisor</span><span>MCP</span><span>Redis</span><span>Langfuse</span></div>
            <a href="https://github.com/Qiluo05" target="_blank" class="showcase-repo-link">→ github.com/Qiluo05</a>
          </div>
        </div>

        <!-- 多Agent电商推荐 -->
        <div class="showcase-card reveal">
          <div class="showcase-image showcase-image-code">
            <div class="ecom-visual">
              <div class="ecom-title">🛒 电商推荐 Supervisor 模式</div>
              <div class="ecom-flow">
                <div class="ecom-input">
                  <span class="ecom-user">👤 用户请求</span>
                  <span class="ecom-arrow-down">↓</span>
                </div>
                <div class="ecom-supervisor-box">
                  <span class="ecom-sup">🎯 Supervisor Agent</span>
                  <span class="ecom-sup-sub">统一编排 · 结果聚合</span>
                </div>
                <div class="ecom-parallel">
                  <div class="ecom-agent ecom-rec">
                    <span>🎯</span><span>推荐 Agent</span>
                    <span class="ecom-sub">协同过滤 + 内容推荐</span>
                  </div>
                  <div class="ecom-agent ecom-copy">
                    <span>✍️</span><span>文案 Agent</span>
                    <span class="ecom-sub">个性化营销文案</span>
                  </div>
                  <div class="ecom-agent ecom-inv">
                    <span>📦</span><span>库存 Agent</span>
                    <span class="ecom-sub">实时校验缺货剔除</span>
                  </div>
                </div>
                <div class="ecom-tag-row">
                  <span class="ecom-tag">asyncio 并行</span>
                  <span class="ecom-tag">Redis Feature Store</span>
                  <span class="ecom-tag">A/B Testing</span>
                </div>
              </div>
            </div>
            <div class="showcase-overlay">
              <a href="https://github.com/Qiluo05" target="_blank" class="showcase-btn">查看仓库</a>
            </div>
          </div>
          <div class="showcase-info">
            <div class="showcase-meta">
              <span class="showcase-stars" data-repo="multi-agent-ecommerce-system">⭐ 66</span>
              <span class="showcase-lang">Python · Java · Go</span>
            </div>
            <h3>多 Agent 电商推荐与营销系统</h3>
            <p>Supervisor 统一编排三个并行 Agent：<strong>推荐 Agent</strong>（协同过滤 + 内容推荐）+ <strong>文案 Agent</strong>（根据用户画像生成个性化营销文案）+ <strong>库存 Agent</strong>（实时校验缺货自动剔除）。asyncio 并行执行，Redis Feature Store 缓存用户特征，支持 A/B Testing。Python/Java/Go 三语言实现，GitHub 66 Stars。</p>
            <div class="project-tech"><span>LangGraph</span><span>Supervisor</span><span>Redis</span><span>asyncio</span><span>FastAPI</span></div>
            <a href="https://github.com/Qiluo05" target="_blank" class="showcase-repo-link">→ github.com/Qiluo05</a>
          </div>
        </div>

        <!-- 漫画风格图解生成器 -->
        <div class="showcase-card showcase-card-reverse reveal">
          <div class="showcase-image">
            <img src="https://raw.githubusercontent.com/bcefghj/comic-guide-skill/main/examples/openclaw-guide/styles-preview/chibi-openclaw.png" alt="哆啦A梦风格漫画" loading="lazy">
            <div class="showcase-overlay">
              <a href="https://github.com/Qiluo05" target="_blank" class="showcase-btn">查看仓库</a>
            </div>
          </div>
          <div class="showcase-info">
            <div class="showcase-meta">
              <span class="showcase-stars" data-repo="comic-guide-skill">⭐ 20</span>
              <span class="showcase-lang">AI Skill · Cursor · Claude Code</span>
            </div>
            <h3>漫画风格图解生成器 Skill</h3>
            <p>支持 <strong>10+ 动漫风格</strong>（哆啦A梦 / 火影忍者 / 海贼王 / 龙珠 / 国风 / 吉卜力…），一键把技术文档、代码架构转化为精美漫画图解。兼容 Cursor / Claude Code / OpenClaw，所有项目的漫画图解均由此 Skill 生成。</p>
            <div class="showcase-style-gallery">
              <img src="https://raw.githubusercontent.com/bcefghj/comic-guide-skill/main/examples/openclaw-guide/styles-preview/naruto-openclaw.png" alt="火影风格" loading="lazy">
              <img src="https://raw.githubusercontent.com/bcefghj/comic-guide-skill/main/examples/openclaw-guide/styles-preview/onepiece-openclaw.png" alt="海贼王风格" loading="lazy">
              <img src="https://raw.githubusercontent.com/bcefghj/comic-guide-skill/main/examples/openclaw-guide/styles-preview/dragonball-openclaw.png" alt="龙珠风格" loading="lazy">
              <img src="https://raw.githubusercontent.com/bcefghj/comic-guide-skill/main/examples/openclaw-guide/styles-preview/guofeng-openclaw.png" alt="国风风格" loading="lazy">
            </div>
            <div class="project-tech"><span>Cursor Skill</span><span>Claude Code</span><span>Prompt Engineering</span><span>10+ 风格</span></div>
            <a href="https://github.com/Qiluo05" target="_blank" class="showcase-repo-link">→ github.com/Qiluo05</a>
          </div>
        </div>

        <!-- 多Agent旅游行程规划 -->
        <div class="showcase-card reveal">
          <div class="showcase-image showcase-image-code">
            <div class="travel-visual">
              <div class="travel-title">✈️ 6-Agent 旅游规划系统</div>
              <div class="travel-pipeline">
                <div class="tv-node tv-pref">
                  <span class="tv-icon">🎯</span>
                  <span class="tv-label">Preference Agent</span>
                  <span class="tv-sub">收集偏好·预算·风格</span>
                </div>
                <div class="tv-arrow">↓</div>
                <div class="tv-parallel-label">⚡ 三 Agent 并行搜索（延迟降低 67%）</div>
                <div class="tv-parallel">
                  <div class="tv-node tv-flight">
                    <span class="tv-icon">✈️</span>
                    <span class="tv-label">航班 Agent</span>
                    <span class="tv-sub">比价·最优路线</span>
                  </div>
                  <div class="tv-node tv-hotel">
                    <span class="tv-icon">🏨</span>
                    <span class="tv-label">酒店 Agent</span>
                    <span class="tv-sub">匹配·评分筛选</span>
                  </div>
                  <div class="tv-node tv-act">
                    <span class="tv-icon">🎡</span>
                    <span class="tv-label">活动 Agent</span>
                    <span class="tv-sub">景点·餐厅推荐</span>
                  </div>
                </div>
                <div class="tv-arrow">↓</div>
                <div class="tv-node tv-budget">
                  <span class="tv-icon">💰</span>
                  <span class="tv-label">预算 Agent</span>
                  <span class="tv-sub">超预算→渐进式降级（最多3轮）</span>
                </div>
              </div>
            </div>
            <div class="showcase-overlay">
              <a href="https://github.com/Qiluo05" target="_blank" class="showcase-btn">查看仓库</a>
            </div>
          </div>
          <div class="showcase-info">
            <div class="showcase-meta">
              <span class="showcase-stars" data-repo="multi-agent-travel-planner">⭐ 25</span>
              <span class="showcase-lang">Python · Java · Go</span>
            </div>
            <h3>多 Agent 智能旅游行程规划系统</h3>
            <p><strong>6 个 Agent 协作</strong>完成旅游规划全流程：偏好收集 → 航班/酒店/活动<strong>三 Agent 并行搜索</strong>（延迟降低 67%）→ 预算控制（超预算自动触发<strong>渐进式降级循环</strong>，最多 3 轮调整）→ 行程生成。Python/Java/Go 三语言实现，配套面试全套资料（八股文 + STAR + 34 道面试题）。</p>
            <div class="showcase-kpis">
              <div class="kpi-item"><span class="kpi-num">6</span><span class="kpi-label">个 Agent</span></div>
              <div class="kpi-item"><span class="kpi-num">67%↓</span><span class="kpi-label">搜索延迟</span></div>
              <div class="kpi-item"><span class="kpi-num">34+</span><span class="kpi-label">面试题</span></div>
            </div>
            <div class="project-tech"><span>LangGraph</span><span>Pipeline</span><span>并行编排</span><span>FastAPI</span><span>Streamlit</span></div>
            <a href="https://github.com/Qiluo05" target="_blank" class="showcase-repo-link">→ github.com/Qiluo05</a>
          </div>
        </div>

      </div>

    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'
import { useTiltEffect } from '../composables/useTiltEffect.js'

onMounted(() => {
  useTiltEffect('.project-card, .achievement-card').init()
})
</script>
