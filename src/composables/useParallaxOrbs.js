/**
 * useParallaxOrbs - 渐变球视差效果
 * 滚动时对 .gradient-orb 应用 translateY
 */
export function useParallaxOrbs() {
  const init = () => {
    if (window.innerWidth <= 768) return

    window.addEventListener('scroll', () => {
      const s = window.scrollY
      document.querySelectorAll('.gradient-orb').forEach((orb, i) => {
        orb.style.transform = `translateY(${s * (0.1 + i * 0.05)}px)`
      })
    }, { passive: true })
  }

  return { init }
}
