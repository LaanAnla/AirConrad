import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default class Scroll {
  constructor() {
    this.pixelTag = document.querySelector('.scroll__index__text')
    this.bodyTag = document.querySelector('body')
    this.pixels = window.pageYOffset
    this.progressTag = document.querySelector('.progress')

    this.scroll()
    this.sectionsIndex()
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

  sectionsIndex() {

    const sections = document.querySelectorAll('section')
    const clientTag = document.querySelector('h2.navigation__section__title')

    sections.forEach(section => {
      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: "bottom top",
        //markers: true,
        onEnter: () => {
          gsap.to(clientTag, {
            innerHTML: section.getAttribute('data-client')
          });
        },
        onEnterBack: () => {
          gsap.to(clientTag, 
            {
            scrollTrigger: {
              trigger: section,
              start: "bottom center-=200",
              end: "top top",
              //markers: true
            },
            innerHTML: section.getAttribute('data-client')
          });
        }
      });
    });


  }
}