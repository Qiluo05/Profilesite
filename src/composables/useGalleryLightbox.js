/**
 * useGalleryLightbox - 图鉴灯箱效果
 * 点击图片放大展示，按 Escape 关闭
 */
export function useGalleryLightbox() {
  const init = () => {
    const lightbox = document.createElement('div')
    lightbox.className = 'lightbox'
    lightbox.innerHTML = '<button class="lightbox-close">&times;</button><img src="" alt="">'
    document.body.appendChild(lightbox)

    const lbImg = lightbox.querySelector('img')
    const lbClose = lightbox.querySelector('.lightbox-close')

    document.querySelectorAll('.gallery-item').forEach(item => {
      item.addEventListener('click', () => {
        const src = item.querySelector('img').src
        lbImg.src = src
        lightbox.classList.add('active')
      })
    })

    lbClose.addEventListener('click', () => lightbox.classList.remove('active'))
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) lightbox.classList.remove('active')
    })
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') lightbox.classList.remove('active')
    })
  }

  return { init }
}
