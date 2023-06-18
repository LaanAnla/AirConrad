import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default class Pining {
  constructor(start, pinned) {
    this.start = start
    this.pinned = pinned

    this.createPining()
  }

  createPining() {

    const details = gsap.utils.toArray('.home__gallery__desktop__content__section:not(:first-child)')
 
    const photos = gsap.utils.toArray('.home__gallery__desktop__photo:not(:first-child)')
    // const animation = gsap.to(photos, { yPercent: 0, stagger: 0.5})
    gsap.set(photos,{ yPercent: 100})

    ScrollTrigger.create({
      trigger: this.start,
      start: "top top",
      end: "bottom bottom",
      pin: this.pinned,
      scrub: true,
      markers: false,
    })

    details.forEach( (detail, index) => {
      let headline = detail.querySelector('h1')
      ScrollTrigger.create({
        trigger:headline,
        start:"top 80%",
        end:"top 50%",
        animation: gsap.to(photos[index], {yPercent:0}),
        scrub:true,
        markers: false
      })
    });
  }
}