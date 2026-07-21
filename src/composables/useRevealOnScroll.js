/**
 * useRevealOnScroll - 滚动 reveal 动画
 * 使用 IntersectionObserver 监听 .reveal 元素
 */
export function useRevealOnScroll() {
  const init = () => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' })

    // 需要在 DOM 渲染后执行
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el))
  }

  return { init }
}
