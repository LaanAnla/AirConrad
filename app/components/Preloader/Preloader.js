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
    this.body = document.querySelector('body')

    this.setPreloader()
  
  }

  setPreloader() {
    this.element.addEventListener('wheel', preventScroll, {passive: false});

    function preventScroll(e){
        e.preventDefault();
        e.stopPropagation();

        return false;
    }
      this.incrementValue() 
      setTimeout(() => {
        this.onLoaded()
        //this.hide()
      }, "2000");
  }


  createVideo() {
    gsap.to(document.querySelector('body'), {
      overflow: 'hidden'
    })
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
      } else if(this.value === 100) {
        this.elements.number.innerHTML = 'RISE TO THE CHALLENGE'
      } else {
        clearInterval(interval)
      }
  }, 15);
  }

  onLoaded() {

    const tl = gsap.timeline()
    tl
    .to(document.querySelector('.preloader__brands__image'), {
      autoAlpha: 0,
      duration: 0.3,
      //delay: 0.5
    })

    .to(document.querySelector('.preloader__number__text'), {
      autoAlpha: 0,
      duration: 0.3,
      onComplete: () => {
        setTimeout(() => {
          this.hide()
        }, 1000); // délai de 1 seconde
      }
    }, 0)

    // .to(this.elements.cover, {
    //   //scale:0,
    //   y: '-100%',
    //   duration: 0.5,
    //   ease: "Power4.out",
    //   //delay: 3,
    //   onComplete: ()=>{
    //     this.hide()
    //   }
    // }, 0)
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
    // const tl = new gsap.timeline({
    //   onComplete: ()=> {
    //     this.destroy()      }
    // })
    // tl.to(this.elements.video, {
    //     autoAlpha: 0,
    //     duration: 0.2
    //   })
    //   tl.to(this.elements.button, {
    //     autoAlpha: 0,
    //     duration: 0.2
    //   },0)
    this.destroy()
  }

  destroy() {
    this.element.parentNode.removeChild(this.element)
    this.emit('completed')
    gsap.to('body', { overflow: 'hidden'})
  }
}