<template>
  <section class="section section-dark" id="gallery">
    <div class="container">
      <div class="section-header">
        <span class="section-tag">PROJECT GALLERY</span>
        <h2 class="section-title">项目图鉴</h2>
        <p class="section-desc">哆啦A梦风格漫画图解 · 让复杂技术一目了然</p>
      </div>
      <div class="gallery-grid reveal">
        <div class="gallery-item gallery-wide">
          <img src="https://raw.githubusercontent.com/bcefghj/claude-code-complete-guide/main/docs/_media/comic-architecture-overview.png" alt="Claude Code 架构总览" loading="lazy">
          <div class="gallery-caption">Claude Code 架构总览</div>
        </div>
        <div class="gallery-item">
          <img src="https://raw.githubusercontent.com/bcefghj/ai-agent-interview-guide/main/comics/01-什么是Agent.png" alt="什么是Agent" loading="lazy">
          <div class="gallery-caption">什么是 Agent</div>
        </div>
        <div class="gallery-item">
          <img src="https://raw.githubusercontent.com/bcefghj/ai-agent-interview-guide/main/comics/02-ReAct循环.png" alt="ReAct循环" loading="lazy">
          <div class="gallery-caption">ReAct 循环</div>
        </div>
        <div class="gallery-item">
          <img src="https://raw.githubusercontent.com/bcefghj/ai-agent-interview-guide/main/comics/03-RAG流程.png" alt="RAG流程" loading="lazy">
          <div class="gallery-caption">RAG 流程</div>
        </div>
        <div class="gallery-item gallery-wide">
          <img src="https://raw.githubusercontent.com/bcefghj/claude-code-complete-guide/main/docs/_media/comic-agent-swarm.png" alt="Agent Swarm 多Agent协同" loading="lazy">
          <div class="gallery-caption">Agent Swarm 多Agent协同</div>
        </div>
        <div class="gallery-item">
          <img src="https://raw.githubusercontent.com/bcefghj/learn-minimind/main/assets/comics/06-self-attention.png" alt="Self-Attention 机制" loading="lazy">
          <div class="gallery-caption">Self-Attention 机制</div>
        </div>
        <div class="gallery-item">
          <img src="https://raw.githubusercontent.com/bcefghj/learn-nanobot/main/comics/04-memory-system.png" alt="记忆系统" loading="lazy">
          <div class="gallery-caption">Agent 记忆系统</div>
        </div>
        <div class="gallery-item">
          <img src="https://raw.githubusercontent.com/bcefghj/claude-code-complete-guide/main/docs/_media/comic-performance.png" alt="性能优化" loading="lazy">
          <div class="gallery-caption">性能优化策略</div>
        </div>
        <div class="gallery-item">
          <img src="https://raw.githubusercontent.com/bcefghj/learn-nanobot/main/comics/05-mcp-protocol.png" alt="MCP协议" loading="lazy">
          <div class="gallery-caption">MCP 协议</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'
import { useGalleryLightbox } from '../composables/useGalleryLightbox.js'

onMounted(() => {
  useGalleryLightbox().init()
})
</script>
