import { gsap } from 'gsap'
import { SplitText } from 'gsap/all'

gsap.registerPlugin(SplitText)

export default class SplitTitle {
  constructor() {

    this.createSplit()
  }

  createSplit() {

    this.copyContainer = document.querySelector('.home__collection__title__introduction__wrapper')
    
    this.copyWidth = this.copyContainer.querySelector('p')

  }
}