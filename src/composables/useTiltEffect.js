/**
 * useTiltEffect - 卡片鼠标倾斜效果
 * 对指定选择器的元素应用 3D 旋转
 */
export function useTiltEffect(selector) {
  const init = () => {
    document.querySelectorAll(selector).forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect()
        const x = (e.clientX - rect.left) / rect.width - 0.5
        const y = (e.clientY - rect.top) / rect.height - 0.5
        card.style.transform = `translateY(-6px) perspective(800px) rotateX(${y * -4}deg) rotateY(${x * 4}deg)`
      })
      card.addEventListener('mouseleave', () => {
        card.style.transform = ''
      })
    })
  }

  return { init }
}
