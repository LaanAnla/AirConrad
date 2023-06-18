import Preloader from './components/Preloader';
import Home from './pages/Home'
import Mentions from './pages/Mentions'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother.min.js";
import { gsap } from "gsap"

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);


class App {
  constructor() {

    ScrollSmoother.create({
      smooth: 1,               // how long (in seconds) it takes to "catch up" to the native scroll position
      effects: true,           // looks for data-speed and data-lag attributes on elements
      smoothTouch: 0.1,        // much shorter smoothing time on touch devices (default is NO smoothing on touch devices)
      // smooth: 2,
      effects: true
    });
    this.createPrelaoder()
    // this.createContent()
    // this.createPages()
  }

  createPrelaoder() {
    this.preloader = new Preloader()
    this.preloader.once('completed', () => {
      this.createContent()
      this.createPages()
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
    this.page.show()
    console.log(this.template)
  }

  // onPreloaded() {
  //   // this.createContent()
  //   // this.createPages()
  // }
}

new App()