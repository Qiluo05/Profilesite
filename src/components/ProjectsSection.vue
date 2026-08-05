<template>
  <section class="section" id="projects">
    <div class="container">
      <div class="section-header">
        <span class="section-tag">FEATURED PROJECTS</span>
        <h2 class="section-title">项目经验</h2>
        <p class="section-desc">覆盖Java/PHP/Go三端全栈与Web/小程序/App跨端复用，从0到1构建多业态业务闭环</p>
      </div>

      <!-- 操作提示：滚动查看更多 / 点击查看详情 -->
      <!-- <div class="carousel-hints reveal">
        <div class="carousel-hint">
          <div class="hint-box">
            <div class="hint-scroll-wheel"></div>
          </div>
          <span>鼠标放置卡片区域滚动/拖拽查看更多</span>
        </div>
        <div class="carousel-hint">
          <svg class="hint-click-icon" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"/></svg>
          <span>点击查看详情</span>
        </div>
      </div> -->
    </div>

    <!-- 水平滚轮轮播：上下滚轮 → 左右移动，停止自动吸附居中，当前居中卡片放大 -->
    <div class="project-carousel reveal">
        <div
          ref="wrapperRef"
          class="carousel-wrapper"
          @wheel="onWheel"
          @mousedown="onMouseDown"
          @touchstart.passive="onTouchStart"
          @touchmove.passive="onTouchMove"
          @touchend="onTouchEnd"
        >
          <div ref="trackRef" class="carousel-track">
            <div class="carousel-spacer" ref="leadSpacerRef"></div>
            <div
              v-for="(item, index) in items"
              :key="index"
              class="carousel-card"
              :class="{ active: index === currentIndex }"
            >
              <img :src="item.image" :alt="item.label" draggable="false" />
              <span class="card-index">{{ String(index + 1).padStart(2, '0') }}</span>
            </div>
            <div class="carousel-spacer" ref="tailSpacerRef"></div>
          </div>
        </div>

        <div class="carousel-footer">
          <div class="carousel-dots">
            <span
              v-for="(item, index) in items"
              :key="index"
              class="dot"
              :class="{ active: index === currentIndex }"
              @click="snapToIndex(index, true)"
            ></span>
          </div>
          <span class="carousel-count"><span class="count-current">{{ currentIndex + 1 }}</span> / {{ items.length }}</span>
        </div>
      </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// 加载 homelun 目录中的全部项目截图（按文件名排序，保证顺序稳定）
const imageEntries = import.meta.glob('../data/homelun/*', { eager: true, query: '?url', import: 'default' })
const items = Object.keys(imageEntries).sort().map((key, i) => ({
  image: imageEntries[key],
  label: `项目 ${i + 1}`,
}))
const TOTAL = items.length

const wrapperRef = ref(null)
const trackRef = ref(null)
const leadSpacerRef = ref(null)
const tailSpacerRef = ref(null)
const currentIndex = ref(0)

let scrollTimeout = null
let isDragging = false
let startX = 0
let startScrollLeft = 0
let isTouching = false
let touchStartX = 0
let touchStartScrollLeft = 0

/* ---------- 几何计算（每张卡片尺寸自适应，宽度各不相同） ---------- */
function getCards() {
  return trackRef.value ? trackRef.value.querySelectorAll('.carousel-card') : []
}

function getGap() {
  return trackRef.value ? (parseFloat(window.getComputedStyle(trackRef.value).gap) || 0) : 0
}

// 每张卡片在轨道中的左边缘偏移量（前导 spacer + 累加实际宽度 + 间距）
function getCardOffsets() {
  const cards = getCards()
  const gap = getGap()
  const lead = leadSpacerRef.value ? (parseFloat(leadSpacerRef.value.style.width) || 0) : 0
  const offsets = []
  let acc = lead + gap
  for (const card of cards) {
    offsets.push(acc)
    acc += card.offsetWidth + gap
  }
  return offsets
}

/* ---------- 吸附到指定索引（居中） ---------- */
function snapToIndex(index, smooth = true) {
  const wrapper = wrapperRef.value
  const cards = getCards()
  if (!wrapper || !cards.length) return
  index = Math.max(0, Math.min(TOTAL - 1, index))
  const offsets = getCardOffsets()
  const wrapperRect = wrapper.getBoundingClientRect()
  const cardWidth = cards[index].offsetWidth
  // 目标位置 = 卡片左偏移 - 让该卡片居中的偏移量（钳制在可滚动范围内）
  const maxScroll = wrapper.scrollWidth - wrapper.clientWidth
  const target = Math.max(0, Math.min(maxScroll, offsets[index] - (wrapperRect.width - cardWidth) / 2))
  wrapper.scrollTo({ left: target, behavior: smooth ? 'smooth' : 'auto' })
  currentIndex.value = index
}

function getNearestIndex() {
  const wrapper = wrapperRef.value
  const cards = getCards()
  if (!wrapper || !cards.length) return 0
  const offsets = getCardOffsets()
  const wrapperRect = wrapper.getBoundingClientRect()
  let minDist = Infinity
  let nearest = 0
  for (let i = 0; i < cards.length; i++) {
    const target = offsets[i] - (wrapperRect.width - cards[i].offsetWidth) / 2
    const dist = Math.abs(wrapper.scrollLeft - target)
    if (dist < minDist) { minDist = dist; nearest = i }
  }
  return nearest
}

// 用首尾两个 spacer 元素撑出"居中所需的空位"：
// spacer 宽度 = (轮播宽度 - 首/尾卡片宽度) / 2 - gap
// 不用 padding 是因为部分浏览器滚动容器不把末尾 padding 计入可滚动范围，
// 导致最后一张卡的居中位置够不到、吸附回倒数第二张。
function syncSpacers() {
  const wrapper = wrapperRef.value
  const cards = getCards()
  if (!wrapper || !cards.length) return
  const wrapperWidth = wrapper.clientWidth
  const gap = getGap()
  const lead = Math.max(16, (wrapperWidth - cards[0].offsetWidth) / 2 - gap)
  const tail = Math.max(16, (wrapperWidth - cards[cards.length - 1].offsetWidth) / 2 - gap)
  if (leadSpacerRef.value) leadSpacerRef.value.style.width = `${lead}px`
  if (tailSpacerRef.value) tailSpacerRef.value.style.width = `${tail}px`
}

// 图片加载后尺寸可能变化，重新对齐当前位置
function reposition() {
  syncSpacers()
  snapToIndex(getNearestIndex(), false)
}

/* ---------- 滚轮 → 水平滚动（指针悬停在轮播上时生效；到头后放行页面滚动） ---------- */
function onWheel(e) {
  const wrapper = wrapperRef.value
  if (!wrapper) return
  const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY
  if (!delta) return

  // 该方向是否还能移动卡片；到头了就放行，让页面正常滚动（例如到末尾继续往下 → 到达联系我）
  const atStart = wrapper.scrollLeft <= 1
  const atEnd = wrapper.scrollLeft >= wrapper.scrollWidth - wrapper.clientWidth - 1
  const canMove = delta > 0 ? !atEnd : !atStart
  if (!canMove) return

  e.preventDefault()
  // 滚轮要即时移动，必须禁用 smooth（否则 scrollLeft+= 变成动画、互相打断累计不动）
  wrapper.style.scrollBehavior = 'auto'
  wrapper.scrollLeft += delta * 0.8
  currentIndex.value = getNearestIndex()
  clearTimeout(scrollTimeout)
  scrollTimeout = setTimeout(() => {
    snapToIndex(getNearestIndex(), true)
  }, 80)
}

/* ---------- 鼠标拖拽 ---------- */
function onMouseDown(e) {
  const wrapper = wrapperRef.value
  if (!wrapper) return
  isDragging = true
  startX = e.clientX
  startScrollLeft = wrapper.scrollLeft
  wrapper.style.cursor = 'grabbing'
  wrapper.style.scrollBehavior = 'auto'
}

function onMouseMove(e) {
  if (!isDragging) return
  const wrapper = wrapperRef.value
  e.preventDefault()
  wrapper.scrollLeft = startScrollLeft - (e.clientX - startX)
  currentIndex.value = getNearestIndex()
  clearTimeout(scrollTimeout)
}

function onMouseUp() {
  if (!isDragging) return
  isDragging = false
  const wrapper = wrapperRef.value
  wrapper.style.cursor = 'grab'
  wrapper.style.scrollBehavior = 'smooth'
  snapToIndex(getNearestIndex(), true)
}

/* ---------- 触摸滑动（移动端） ---------- */
function onTouchStart(e) {
  const wrapper = wrapperRef.value
  if (!wrapper) return
  isTouching = true
  touchStartX = e.touches[0].clientX
  touchStartScrollLeft = wrapper.scrollLeft
  wrapper.style.scrollBehavior = 'auto'
  clearTimeout(scrollTimeout)
}

function onTouchMove(e) {
  if (!isTouching) return
  const wrapper = wrapperRef.value
  wrapper.scrollLeft = touchStartScrollLeft - (e.touches[0].clientX - touchStartX)
  currentIndex.value = getNearestIndex()
}

function onTouchEnd() {
  if (!isTouching) return
  isTouching = false
  const wrapper = wrapperRef.value
  wrapper.style.scrollBehavior = 'smooth'
  snapToIndex(getNearestIndex(), true)
}

/* ---------- 窗口尺寸变化 ---------- */
function onResize() {
  syncSpacers()
  snapToIndex(getNearestIndex(), false)
}

onMounted(() => {
  window.addEventListener('mousemove', onMouseMove)
  window.addEventListener('mouseup', onMouseUp)
  window.addEventListener('resize', onResize)
  window.addEventListener('load', reposition)
  // 每张图片加载完成后重算偏移，保证卡片尺寸就绪后再对齐
  getCards().forEach((card) => {
    const img = card.querySelector('img')
    if (img && !img.complete) img.addEventListener('load', reposition)
  })
  syncSpacers()
  snapToIndex(0, false)
})

onUnmounted(() => {
  window.removeEventListener('mousemove', onMouseMove)
  window.removeEventListener('mouseup', onMouseUp)
  window.removeEventListener('resize', onResize)
  window.removeEventListener('load', reposition)
  if (scrollTimeout) clearTimeout(scrollTimeout)
})
</script>
