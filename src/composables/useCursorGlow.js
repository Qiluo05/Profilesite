/**
 * useCursorGlow - 鼠标光标辉光效果
 * 跟随鼠标平滑移动的渐变光晕
 */
export function useCursorGlow() {
  const init = () => {
    const glow = document.getElementById('cursorGlow')
    if (!glow || window.innerWidth <= 768) return

    let mx = 0, my = 0, gx = 0, gy = 0

    document.addEventListener('mousemove', (e) => {
      mx = e.clientX
      my = e.clientY
    })

    const animate = () => {
      gx += (mx - gx) * 0.08
      gy += (my - gy) * 0.08
      glow.style.left = gx + 'px'
      glow.style.top = gy + 'px'
      requestAnimationFrame(animate)
    }
    requestAnimationFrame(animate)
  }

  return { init }
}
