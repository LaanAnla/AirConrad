import Page from "../../classes/Page";
import Split from "../../utils/Split";
import Pining from "../../utils/Pining";
import NavigationAnim from "../../utils/NavigationAnim";
import HorizontalScroll from "../../utils/HorizontalScroll";
import Cursor from "../../utils/Cursor";
import { gsap } from "gsap"
import { delay } from "lodash";


export default class Home extends Page {
  constructor() {
    super({
      id : 'home',
      element : '.home',
      elements : {
        navigation: document.querySelector('.navigation'),
        button : '.preloader__video__close'
      }
    })
    this.createNavigation()
    this.createScroll()
    this.createCursor()
  } 

  createCursor() {
    this.cursor = new Cursor()
  }

  createNavigation() {
   this.animation = new NavigationAnim() 
  }

  createScroll() {
    this.scrollHorizontal = new HorizontalScroll()
  }


  create() {
    
    const conrad = document.querySelector('.home__banner__media__image')
    gsap.set(conrad, { autoAlpha: 0})
    gsap.set(document.querySelector('.home__banner__media'), { autoAlpha: 1})
    const tl = gsap.timeline()
    tl
    .to(document.querySelector('body'), {
      overflow: 'visible'
    }, 3.8)
    this.animation = new Split(
      this.text = document.querySelector('.home__banner__title'),
      this.item =  conrad
    )

    

    // this.skipVideo = document.querySelector('.preloader')
    // this.elements.button.addEventListener('click', _ => {
    //   this.skipVideo.classList.add('hidden')
    // })

    this.pining = new Pining(
      this.start = document.querySelector('.home__gallery'),
      this.pinned = document.querySelector('.home__gallery__right')
    )
  }

}