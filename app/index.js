import Preloader from './components/Preloader/Preloader';
import Home from './pages/Home'
import Mentions from './pages/Mentions'
import Experience from './components/Experience/Experience.js'
import { ScrollTrigger } from "gsap/ScrollTrigger";
//import { ScrollSmoother } from "gsap/ScrollSmoother.min.js";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { gsap } from "gsap"

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollSmoother);


class App {
  constructor() {

    ScrollSmoother.create({
      smooth: 1,               // how long (in seconds) it takes to "catch up" to the native scroll position
      effects: true,           // looks for data-speed and data-lag attributes on elements
      smoothTouch: 0.1,        // much shorter smoothing time on touch devices (default is NO smoothing on touch devices)
      smooth: 1.2,
      effects: true
    })

    this.canvas = document.querySelector('canvas.webgl')
    this.createPrelaoder()
    this.onResize()
    this.update()
    //this.createContent()
    //this.createPages()
    //this.createExperience()
  }

  createPrelaoder() {
    this.preloader = new Preloader()
    this.preloader.once('completed', () => {
      this.createContent()
      this.createExperience()
      setTimeout(() => {
        this.createPages()
      }, "1000");
    })
  }

  createContent() {
    this.content = document.querySelector('.content')
    this.template = this.content.getAttribute('data-template')
  }

  createPages() {
    this.pages = {
      home: new Home(),
      mentions: new Mentions()
    }

    this.page = this.pages[this.template]
    this.page.create()
    this.page.createCursor()
    //this.page.createNavigation()
    this.page.createScroll()
    this.page.show()
  }

  createExperience() {
    this.experience = new Experience(this.canvas, this.template)
  }

  onResize() {
    if(this.page && this.page.onResize) {
      this.page.onResize()
    }

    if(this.experience && this.experience.onResize) {
      this.experience.resize()
    }
  }

  update() {
    if(this.experience && this.experience.update) {
      this.experience.update()
    }
    if(this.page && this.page.update) {
      this.page.update()
    }
    this.frame = window.requestAnimationFrame(this.update.bind(this))
  }

}

new App()