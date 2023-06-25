

export default class Scroll {
  constructor() {
    this.pixelTag = document.querySelector('.scroll__index__text')
    this.bodyTag = document.querySelector('body')
    this.pixels = window.pageYOffset
    this.progressTag = document.querySelector('.progress')

    this.scroll()
  }

  scroll() {
    document.addEventListener('scroll', ()=> {
      this.pixels = window.pageYOffset

      if(this.pixels <= 1) {
        this.pixelTag.innerHTML = this.pixels + ' PIXEL'
      } else {
        this.pixelTag.innerHTML = this.pixels + ' PIXELS'
      }
    })

    document.addEventListener('scroll', ()=> {
      const pageHeight = this.bodyTag.getBoundingClientRect().height
      const totalScrollableHeight = pageHeight - window.innerHeight
      const percentage = this.pixels / totalScrollableHeight

      this.progressTag.style.width = `${100 * percentage}%`
    })
  }
}