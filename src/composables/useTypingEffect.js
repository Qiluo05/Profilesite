/**
 * useTypingEffect - Hero 区域打字效果
 * 循环显示不同头衔
 */
export function useTypingEffect() {
  const phrases = [
    '全栈开发工程师',
    '国家级竞赛获奖者', // 多项国家级一等奖、二等奖的荣誉
    '开源协作专家', // 结合您的GitHub协同开发和项目管理经验
    '高效开发流程实践者', // 运用AI工具形成的“需求->AI生成->审查->部署”工作流
    '技术博客作者', // 运营个人博客近三年，具有技术写作和分享能力
    '国家奖学金获得者', // 顶尖学业水平的证明
    '技术创业预备者' // 项目经验显示出强烈的产品化和商业化思维
  ]

  const start = () => {
    const typingEl = document.getElementById('typingText')
    if (!typingEl) return

    let phraseIdx = 0, charIdx = 0, deleting = false

    const type = () => {
      const current = phrases[phraseIdx]
      if (!deleting) {
        typingEl.textContent = current.substring(0, charIdx + 1)
        charIdx++
        if (charIdx === current.length) {
          setTimeout(() => { deleting = true; type() }, 2000)
          return
        }
        setTimeout(type, 80)
      } else {
        typingEl.textContent = current.substring(0, charIdx - 1)
        charIdx--
        if (charIdx === 0) {
          deleting = false
          phraseIdx = (phraseIdx + 1) % phrases.length
          setTimeout(type, 500)
          return
        }
        setTimeout(type, 40)
      }
    }

    setTimeout(type, 1000)
  }

  return { start }
}
