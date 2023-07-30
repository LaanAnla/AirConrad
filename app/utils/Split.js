import { gsap } from "gsap"
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(SplitText);
gsap.registerPlugin(ScrollTrigger);

export default class Split {
  constructor(text, item) {
    this.text = text;
    this.item = item;
    this.createSplit()
  }

  createSplit() {

    const split = new SplitText(this.text, {charsClass:'chars', linesClass: 'lines'}) 
    const splitElement = document.querySelector('.home__banner__title__wrapper ')

    const tl = gsap.timeline()
    gsap.set('.home__banner__title__wrapper ', {autoAlpha: 1})
    split.lines.forEach( (line, index)=> {
      tl.from(line.querySelectorAll(".chars"), {
        yPercent: 90, 
        stagger: 0.1,
        duration: 0.8,
        onComplete: ()=> {
          const tl = gsap.timeline({ delay: 0.6})
          tl
          .to(line.querySelectorAll(".chars"), {
            stagger: 0,
            duration: 0.6
          })
          // .to('.home__banner__title', {
          //   duration: 0.8,
          //   autoAlpha: 0,
          // }, 1)
          // .to('.home__banner__title__ps5', {
          //   autoAlpha: 1,
          //   duration: 0.2
          // })
        }
      }, ">-80%")
    })
    tl.to('.home__banner__scroll__down', {
      autoAlpha: 1,
      duration: 1
    })
    tl.to('.cursor', {
      autoAlpha: 1
    },0)

    // ScrollTrigger.create({
    //   trigger: '.home__banner__title',
    //   start: "center center",
    //   onEnterBack: ()=>{
    //     gsap.to('.home__banner__title__ps5', {
    //       autoAlpha: 1,
    //       duration: 1,
    //       //color: 'green'
    //     })
    //   }
    // })

    // splitElement.addEventListener('mouseover', ()=>{
    //   gsap.to(splitElement, {
    //     autoAlpha: 0
    //   })
    // })

    // splitElement.addEventListener('mouseout', ()=>{
    //   gsap.to(splitElement, {
    //     autoAlpha: 1
    //   })
    // })

    
  }
}