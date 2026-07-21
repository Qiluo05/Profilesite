/**
 * useParticleField - 粒子动画
 * 在 Hero 区域生成飘浮粒子
 */
export function useParticleField() {
  const init = () => {
    const field = document.getElementById('particleField')
    if (!field || window.innerWidth <= 768) return

    // 注入一次全局 @keyframes（通过 CSS 变量实现每个粒子独立偏移）
    if (!document.getElementById('particleDriftStyle')) {
      const style = document.createElement('style')
      style.id = 'particleDriftStyle'
      style.textContent = `@keyframes particleDrift{0%{transform:translate(0,0) scale(1);opacity:0}10%{opacity:1}90%{opacity:1}100%{transform:translate(var(--dx),var(--dy)) scale(0);opacity:0}}`
      document.head.appendChild(style)
    }

    for (let i = 0; i < 40; i++) {
      const p = document.createElement('div')
      const driftX = 50 + Math.random() * 100
      const dir = Math.random() > 0.5 ? '' : '-'
      const dx = `${dir}${driftX}px`
      const dy = `${-100 - Math.random() * 200}px`
      p.style.cssText = `
        position:absolute;
        width:${2 + Math.random() * 3}px;
        height:${2 + Math.random() * 3}px;
        background:rgba(59,130,246,${0.1 + Math.random() * 0.3});
        border-radius:50%;
        left:${Math.random() * 100}%;
        top:${Math.random() * 100}%;
        --dx:${dx};
        --dy:${dy};
        animation:particleDrift ${10 + Math.random() * 20}s linear infinite;
        animation-delay:${-Math.random() * 20}s;
      `
      field.appendChild(p)
    }
  }

  return { init }
}
