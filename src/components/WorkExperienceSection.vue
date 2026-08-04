<template>
  <section class="section" id="experience">
    <div class="container">
      <div class="section-header">
        <span class="section-tag">WORK EXPERIENCE</span>
        <h2 class="section-title">工作经验</h2>
      </div>
      <div class="timeline">
        <div v-for="(exp, i) in experiences" :key="i" class="timeline-item reveal">
          <div class="timeline-marker"><span class="timeline-dot"></span></div>
          <div class="timeline-card">
            <div class="timeline-head">
              <div class="timeline-role">
                <h3 class="timeline-company">{{ exp.company }}<span class="timeline-sep">|</span><span class="timeline-position">{{ exp.position }}</span></h3>
              </div>
              <span class="timeline-period">{{ exp.period }}</span>
            </div>
            <p v-if="exp.location" class="timeline-location">{{ exp.location }}</p>
            <div v-for="(proj, k) in exp.projects" :key="k" class="timeline-project">
              <h4 class="timeline-project-title">{{ proj.name }}</h4>
              <div v-if="proj.stack && proj.stack.length" class="timeline-stack">
                <span v-for="(s, m) in proj.stack" :key="m" class="timeline-stack-chip">
                  <span class="timeline-stack-label">{{ s.label }}</span>
                  <span class="timeline-stack-value">{{ s.value }}</span>
                </span>
              </div>
              <ul class="timeline-points">
                <li v-for="(p, j) in proj.points" :key="j">{{ p }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// 👇 在这里维护你的工作/实习经历，按时间倒序排列
const experiences = [
  {
    company: '杭州艾未恩信息科技',
    position: '前端开发工程师',
    period: '2025.06 - 2025.12',
    // location: '📍 杭州',
    projects: [
      {
        name: '🌟 艾小未AI舌苔检测健康助手项目商家端',
        stack: [
          { label: '网页端', value: 'Vite + Vue3' },
          { label: '客户端', value: 'Vue3 + Android + Capacitor' },
          { label: '小程序端', value: 'Vue3 + Uniapp' },
        ],
        points: [
          '负责开发面向餐饮商家的智能舌苔检测系统，通过AI图像识别分析顾客体质，智能推荐适配菜品/套餐。',
          '独立完成登录注册、首页数据看板、舌苔检测、充值计费（按条数/时长多套餐）、菜品配置、营销设置等核心模块。助力餐饮商家提供"体质诊断+精准推荐"的差异化服务，有效提升顾客转化率。',
          '对接舌苔图像校验与AI分析模型，包含超时处理、次数扣减等健壮性设计；按检测条数计费 + 多套餐充值体系，灵活支持不同规模商家的商业合作；抽奖机制与奖品核销结合二维码追踪，有效增强用户粘性与复购率；检测记录、余额、充值明细等模块数据实时同步，保证商家体验；实现"AI检测→报告生成→精准推荐→抽奖营销"完整闭环，打通从检测到转化的全流程。',
          '基于Vue 3 + UniApp实现小程序端，通过Capacitor桥接Android原生API，Web/小程序/App三端核心代码复用率超过85%，大幅降低开发与维护成本。',
        ],
      },
      {
        name: '🌟 杭州艾未恩信息科技有限公司官网',
        stack: [
          { label: '技术栈', value: 'Vite + Vue3' },
        ],
        points: [
          '负责公司官网从需求对接、页面设计到前端实现的全流程，优化资源加载策略，提升页面渲染效率，最终交付符合品牌调性的企业级官网。',
          '为杭州艾未恩信息科技有限公司打造的企业品牌形象官网，集品牌展示、产品介绍、解决方案、招商加盟、客户引流于一体，采用 Vue 3 + TypeScript + Vite 构建，实现了响应式布局、表单提交、移动端适配等核心功能。',
        ],
      },
    ],
  },
]
</script>
