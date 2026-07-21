/**
 * useScrollNav - 导航栏滚动行为
 * 控制浮窗导航的显示/隐藏 + 当前 section 高亮
 */
export function useScrollNav() {
  const init = () => {
    const nav = document.getElementById('floatingNav')
    const sections = document.querySelectorAll('.section, .hero')
    const navLinks = document.querySelectorAll('.nav-links a')

    if (!nav) return

    const updateNav = () => {
      nav.classList.toggle('visible', window.scrollY > 100)
      let current = ''
      sections.forEach(s => {
        if (window.scrollY >= s.offsetTop - 200) current = s.id
      })
      navLinks.forEach(a => a.classList.toggle('active', a.dataset.section === current))
    }

    window.addEventListener('scroll', updateNav, { passive: true })
    updateNav()

    // 平滑滚动
    document.querySelectorAll('a[href^="#"]').forEach(a => {
      a.addEventListener('click', (e) => {
        const target = document.querySelector(a.getAttribute('href'))
        if (target) {
          e.preventDefault()
          target.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      })
    })
  }

  return { init }
}
