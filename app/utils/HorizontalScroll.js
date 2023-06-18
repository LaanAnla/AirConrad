import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default class HorizontalScroll {
  constructor() {

    this.createScroll()
  }

  createScroll() {
    this.container = document.querySelector('.home__shop')
    // this.sections = document.querySelectorAll(".home__shop__media")

    let scrollTween = gsap.to(this.container, {
      //xPercent: -100 * (sections.length - 1),
      x: -(this.container.scrollWidth - this.container.clientWidth),
      ease: "none", // <-- IMPORTANT!
      scrollTrigger: {
        trigger: this.container,
        start: "top top",
        end: `+=${this.container.offsetWidth}`,
        pin: true,
        scrub: true,
        markers: true
      }
    });
  }

}