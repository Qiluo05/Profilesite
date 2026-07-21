<template>
  <section class="hero" id="hero">
    <div class="hero-bg">
      <div class="hero-bg-image"></div>
      <div class="grid-bg"></div>
      <div class="gradient-orb orb-1"></div>
      <div class="gradient-orb orb-2"></div>
      <div class="gradient-orb orb-3"></div>
      <div class="particle-field" id="particleField"></div>
    </div>
    <div class="hero-content">
      <div class="hero-badge animate-in">
        <span class="badge-dot"></span>
        <span>Welcome to getting to know me</span>
      </div>
      <h1 class="hero-title animate-in delay-1">
        <span class="title-line">你好，我是</span>
        <span class="title-name">杨宇洁</span>
      </h1>
      <p class="hero-subtitle animate-in delay-2">
        <span class="typing-text" id="typingText"></span>
        <span class="typing-cursor">|</span>
      </p>
      <div class="hero-stats animate-in delay-3">
        <div class="stat-item">
          <span class="stat-number" id="statStars">--</span>
          <span class="stat-label">GitHub Stars</span>
          <span class="stat-live">Check</span>
        </div>
        <div class="stat-divider"></div>
        <div class="stat-item">
          <span class="stat-number" id="statRepos">--</span>
          <span class="stat-label">开源项目</span>
          <span class="stat-live">Check</span>
        </div>
        <div class="stat-divider"></div>
        <div class="stat-item">
          <span class="stat-number" id="statFollowers">--</span>
          <span class="stat-label">GitHub Followers</span>
          <span class="stat-live">Check</span>
        </div>
      </div>
      <div class="hero-actions animate-in delay-4">
        <a href="#projects" class="btn btn-primary">
          <span>查看项目</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17L17 7M17 7H7M17 7V17"/></svg>
        </a>
        <a href="#contact" class="btn btn-secondary"><span>联系我</span></a>
        <a href="https://github.com/bcefghj" target="_blank" class="btn btn-ghost">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
          <span>GitHub</span>
        </a>
      </div>
    </div>
    <div class="scroll-indicator animate-in delay-5">
      <div class="scroll-mouse"><div class="scroll-wheel"></div></div>
      <span>向下滚动</span>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'
import { useParticleField } from '../composables/useParticleField.js'
import { useTypingEffect } from '../composables/useTypingEffect.js'
import { useParallaxOrbs } from '../composables/useParallaxOrbs.js'

onMounted(() => {
  useParticleField().init()
  useTypingEffect().start()
  useParallaxOrbs().init()
})
</script>
