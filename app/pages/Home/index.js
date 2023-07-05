import Page from "../../classes/Page";
import Split from "../../utils/Split";
import Pining from "../../utils/Pining";
import Back from "../../utils/Back";
// import NavigationAnim from "../../utils/NavigationAnim";
import Cursor from "../../utils/Cursor";
import { gsap } from "gsap"
import VanillaTilt from 'vanilla-tilt';
import Scroll from "../../utils/Scroll";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


export default class Home extends Page {
  constructor() {
    super({
      id : 'home',
      element : '.home',
      elements : {
        navigation: document.querySelector('.navigation'),
        button : '.preloader__video__close',
        images : document.querySelectorAll('.home__gallery__desktop__photos')
      }
    })
  } 

  create() {
    
    gsap.set(document.querySelector('.home__banner__media'), { autoAlpha: 1})
    const tl = gsap.timeline()
    tl
    .to(document.querySelector('body'), {
      overflow: 'visible'
    }, 3.8)
    this.animation = new Split(
      this.text = document.querySelector('.home__banner__title'),
      this.item =  null
    )

    this.pining = new Pining(
      this.start = document.querySelector('.home__gallery'),
      this.pinned = document.querySelector('.home__gallery__right')
    )

    const element = document.querySelectorAll(".js-tilt");
    element.forEach(el =>{
      VanillaTilt.init(el);
      el.addEventListener("tiltChange", {
        perspective: 2000,
      });
    })

    const flashback2 = document.querySelector('.home__shop__title__introduction__wrapper')
    gsap.set(flashback2, { y: 100 })
    ScrollTrigger.create({
      trigger: flashback2,
      start: 'top center+=20%',
      end: "top 70%",
      duration: 0.8,
      onEnter: ()=> {
        gsap.to(flashback2, {
          autoAlpha: 1,
          y:0
        })
      },
      onLeaveBack: ()=> {
        gsap.to(flashback2, {
          autoAlpha: 0
        })
      }
    })
  }

  createBackToTop() {
    this.back = new Back()
  }

  createCursor() {
    this.cursor = new Cursor()
  }

  // createNavigation() {
  //  this.animation = new NavigationAnim() 
  // }

  createScroll() {
    this.scroll = new Scroll()
  }



}