import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default class NavigationAnim {
  constructor() {

    //this.moveNavigation()
  }

  createAnimation(direction) {
    const scrollingDown = direction === 1
    return gsap.to(['.navigation__wrapper', '.home__banner__title'], {
      duration: 0.3,
      autoAlpha: () => scrollingDown ? 0 : 1,
      y: () => scrollingDown ? 20 : 0
    })
  }

  moveNavigation() {
    ScrollTrigger.create({
      start: 50,
      toggleClass: {
        targets: 'body',
        className: 'has-scrolled',
      },
      onEnter: ({direction})=> this.createAnimation(direction),
      onLeaveBack: ({direction})=> this.createAnimation(direction),
      markers: false
    })
  }
}