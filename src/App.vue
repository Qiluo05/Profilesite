<template>
  <div class="cursor-glow" id="cursorGlow"></div>

  <NavBar />
  <HeroSection />
  <AboutSection />
  <WorkExperienceSection />
  <SkillsSection />
  <ProjectsSection />
  <!-- <GallerySection /> -->
  <!-- <AchievementsSection /> -->
  <ContactSection />
  <FooterSection />
</template>

<script setup>
import { onMounted, nextTick } from 'vue'

import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import WorkExperienceSection from './components/WorkExperienceSection.vue'
import SkillsSection from './components/SkillsSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import GallerySection from './components/GallerySection.vue'
import AchievementsSection from './components/AchievementsSection.vue'
import ContactSection from './components/ContactSection.vue'
import FooterSection from './components/FooterSection.vue'

import { useCursorGlow } from './composables/useCursorGlow.js'
import { useScrollNav } from './composables/useScrollNav.js'
import { useRevealOnScroll } from './composables/useRevealOnScroll.js'
import { useGitHubStats } from './composables/useGitHubStats.js'

onMounted(() => {
  // 全局交互效果
  useCursorGlow().init()
  useScrollNav().init()

  // 等待子组件渲染后初始化 scroll reveal
  nextTick(() => {
    useRevealOnScroll().init()
  })

  // GitHub 统计数据
  useGitHubStats().fetchStats()
})
</script>
