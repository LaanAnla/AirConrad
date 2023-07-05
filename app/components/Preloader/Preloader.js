import Component from "../../classes/Component";
import Youtube from "../../utils/Youtube.js";
import { gsap } from 'gsap'

export default class Preloader extends Component {
  constructor() {
    super({
      element: '.preloader',
      elements: {
        number: '.preloader__number__text',
        welcome: '.prelaoder__brands',
        video: document.querySelector('.video__preloader'),
        button: document.querySelector('.preloader__video__close'),
        cover: document.querySelector('.preloader__brands')
      }
    })

    this.createVideo()
    this.skipPreloader()
  }


  createVideo() {
    this.video = new Youtube(this.hidden.bind(this));
    setTimeout(() => {
      this.incrementValue() 
    }, "1000");
    this.onLoaded()
  }

  incrementValue() {
    this.value = 0
    const interval = setInterval(() => {
      if(this.value < 100) {
          this.value++;
          this.elements.number.innerHTML = `${Math.round(this.value)}%`
          //this.elements.number.innerHTML = 'GO!'
      } else if(this.value === 100) {
        this.elements.number.innerHTML = 'GO!'
      } else {
        clearInterval(interval)
      }
  }, 10);
  }

  onLoaded() {
    // this.emit('completed')
    gsap.to(this.elements.cover, {
      autoAlpha: 0,
      duration: 0.6,
      ease: "Power4.out",
      delay: 3,
    })
  }

  skipPreloader() {
    this.elements.button.addEventListener('click', ()=> {
      this.hide()
    })
  }

  hidden() {
    this.hide()
  }

  hide() {
    const tl = new gsap.timeline({
      onComplete: ()=> {
        this.destroy()      }
    })
    
    tl.to(this.elements.video, {
        autoAlpha: 0,
        duration: 0.5
      })
      tl.to(this.elements.button, {
        autoAlpha: 0,
        duration: 0.5
      },0)
  }

  destroy() {
    this.element.parentNode.removeChild(this.element)
    this.emit('completed')
  }
}