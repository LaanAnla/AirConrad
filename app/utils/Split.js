import { gsap } from "gsap"
import { SplitText } from "gsap/SplitText";


gsap.registerPlugin(SplitText);

export default class Split {
  constructor(text, item) {
    this.text = text;
    this.item = item;
    this.createSplit()
  }

  createSplit() {

    const split = new SplitText(this.text, {charsClass:'chars', linesClass: 'lines'}) 
    const tl = gsap.timeline()
    gsap.set('.home__banner__title__wrapper ', {autoAlpha: 1})
    // tl.from(split.chars, { yPercent:100, stagger: 0.2})
    split.lines.forEach( (line, index)=> {
      tl.from(line.querySelectorAll(".chars"), {
        yPercent: 90, 
        stagger: 0.1,
        duration: 0.6,
        onComplete: ()=> {
          const tl = gsap.timeline({ delay: 0.6})
          tl
          .to(line.querySelectorAll(".chars"), {
            autoAlpha: 0,
            duration: 0.6,
            delay: 0.3
          })
          .to(this.item, {
            autoAlpha: 1,
            duration: 0.6,
            scale: 1})
        }
      }, ">-80%")
    })


  }
}