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

    const details = gsap.utils.toArray('.home__genesis__desktop__content__section:not(:first-child)')
    //const photos = gsap.utils.toArray('.home__genesis__desktop__photo:not(:first-child)')
    const photos = gsap.utils.toArray('.home__genesis__desktop__photo:not(:first-child) img')
    console.log(photos)
    gsap.set(photos,{ yPercent: 100})

    let mm = gsap.matchMedia();

    // add a media query. When it matches, the associated function will run
    mm.add("(min-width: 890px)", () => {

      ScrollTrigger.create({
            trigger: this.start,
            start: "top top+=150",
            end: "bottom bottom",
            pin: this.pinned,
            scrub: true,
            //markers: true,
          })

          details.forEach( (detail, index) => {
            let headline = detail.querySelector('h1')
            let paragraphe = detail.querySelector('p')
            gsap.set(paragraphe, { autoAlpha: 0, y: 100})
            //gsap.set(photos[index], {scale: 2})
            ScrollTrigger.create({
              trigger:headline,
              start:"top 60%",
              end:"top 50%",
              //duration: 5,
              animation: gsap.to(photos[index], {yPercent:0, scale: 1, ease: "slow(0.7, 0.1, false)"}),
              scrub:true,
              //markers: false,
              onEnter: ()=>{
                gsap.to(paragraphe, {
                  autoAlpha: 1,
                  y: 0,
                  duration: 0.8,
                })
              },
              onLeaveBack: ()=> {
                gsap.to(paragraphe, {
                  autoAlpha: 0,
                  y: 100,
                  duration: 0.8
                })
              }
            })
          });
    });
  }
}