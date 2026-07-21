import { ref, nextTick } from 'vue'

/**
 * useGitHubStats - 静态 GitHub 统计数据
 */
export function useGitHubStats() {
  const stats = ref({
    stars: 0,
    repos: 0,
    followers: 0,
    repoMap: {},
  })

  const loaded = ref(false)

  function animateNumber(el, target, suffix) {
    if (!el) return
    const duration = 2000
    const start = performance.now()
    const easeOut = t => 1 - Math.pow(1 - t, 4)

    function update(now) {
      const progress = Math.min((now - start) / duration, 1)
      const value = Math.floor(easeOut(progress) * target)
      el.textContent = value.toLocaleString() + (suffix || '')
      if (progress < 1) requestAnimationFrame(update)
    }
    requestAnimationFrame(update)
  }

  async function fetchStats() {
    // 静态数据 — 自行修改这里
    const totalStars = 86
    const totalRepos = 32
    const followers = 18
    const repos = [
      { name: 'bcefghj.github.io', stargazers_count: 12 },
      { name: 'AI-Agent-Intern-Guide', stargazers_count: 8 },
      { name: 'awesome-ai-agents', stargazers_count: 6 },
      { name: 'deep-learning-papers', stargazers_count: 5 },
      { name: 'vue3-ts-template', stargazers_count: 4 },
      { name: 'react-component-lib', stargazers_count: 3 },
    ]

    stats.value = {
      stars: totalStars,
      repos: totalRepos,
      followers,
      repoMap: repos.reduce((map, r) => { map[r.name] = r.stargazers_count; return map }, {}),
    }
    loaded.value = true

    await nextTick()
    updateDOM(totalStars, totalRepos, followers, repos)
  }

  function updateDOM(totalStars, totalRepos, followers, repos) {
    animateNumber(document.getElementById('statStars'), totalStars)
    animateNumber(document.getElementById('statRepos'), totalRepos, '+')
    animateNumber(document.getElementById('statFollowers'), followers)

    const aboutStars = document.getElementById('aboutStars')
    if (aboutStars) aboutStars.textContent = totalStars + '+'
    const aboutRepos = document.getElementById('aboutRepos')
    if (aboutRepos) aboutRepos.textContent = totalRepos + '+'
    const achieveGh = document.getElementById('achieveGithub')
    if (achieveGh) achieveGh.textContent = `${totalStars} Stars · ${followers} Followers · ${totalRepos}+ Repos`
    const totalBtn = document.getElementById('totalReposBtn')
    if (totalBtn) totalBtn.textContent = totalRepos + '+'

    // 更新单个仓库 Star 数
    const repoMap = repos.reduce((map, r) => { map[r.name] = r.stargazers_count; return map }, {})
    document.querySelectorAll('[data-repo]').forEach(el => {
      const name = el.dataset.repo
      if (repoMap[name] !== undefined) {
        const starEl = el.querySelector('.live-stars') || el.querySelector('.showcase-stars')
        if (starEl) {
          if (starEl.classList.contains('showcase-stars')) {
            starEl.textContent = '⭐ ' + repoMap[name]
          } else {
            starEl.textContent = repoMap[name]
          }
        }
      }
    })
    document.querySelectorAll('.showcase-stars[data-repo]').forEach(el => {
      const name = el.dataset.repo
      if (repoMap[name] !== undefined) {
        el.textContent = '⭐ ' + repoMap[name]
      }
    })
  }

  return { stats, loaded, fetchStats }
}
