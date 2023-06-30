import Component from "../../classes/Component";
import { gsap } from 'gsap'

export default class Preloader extends Component {
  constructor() {
    super({
      element: '.preloader',
      elements: {
        number: '.preloader__number__text',
        welcome: '.prelaoder__brands',
        video: document.querySelector('.video__preloader'),
        button: document.querySelector('.preloader__video__close'),
        cover: document.querySelector('.preloader__brands')
      }
    })
    this.createLoader()
    //this.onLoaded()
    this.timeWatch()
    this.skipPreloader()
  }

  createLoader() {
    gsap.to(document.querySelector('body'), {
      overflow: 'hidden'
    })

    var req = new XMLHttpRequest();
    req.open('GET', 'video-intro-flashback.mp4', true);
    req.responseType = 'blob';
    req.onprogress = (oEvent)=> {
      if (oEvent.lengthComputable) {
          var percentComplete = (oEvent.loaded/oEvent.total)*100;
          this.elements.number.innerHTML = `${Math.round(percentComplete)}%`
      }
  }
  req.onload = () => {
    if (req.status === 200) {
      var videoBlob = req.response;
      var vid = URL.createObjectURL(videoBlob); // IE10+
      this.elements.video.src = vid;
    }
    this.elements.video.onloadedmetadata = () => {
      this.elements.video.ontimeupdate = () => {
        var timeWatched = this.elements.video.currentTime
        var duration = this.elements.video.duration

        if (timeWatched >= duration) {
          gsap.to(this.elements.cover, {
            autoAlpha: 0,
            duration: 0.6,
            ease: "Power4.out",
            onComplete: () => {
              this.hide()
            }
          })
        }
      };
    };
  }
  req.onloadend = ()=> {
    setTimeout(() => {
      this.onLoaded()
    }, 2500)
  }
    
    req.send();
  }

  timeWatch() {
    this.elements.video.onloadedmetadata = () => {
      this.elements.video.ontimeupdate = () => {
        var timeWatched = this.elements.video.currentTime
        var duration = this.elements.video.duration

        if (timeWatched >= duration) {
          gsap.to(this.elements.cover, {
            autoAlpha: 0,
            duration: 0.6,
            ease: "Power4.out",
            onComplete: () => {
              this.hide()
            }
          })
        }
      };
    };
  }

  onLoaded() {
    // this.emit('completed')
    gsap.to(this.elements.cover, {
      autoAlpha: 0,
      duration: 0.6,
      ease: "Power4.out",
      delay: 2.5,
      onComplete: () => {
        this.elements.video.play()
      }
    })
  }

  skipPreloader() {
    this.elements.button.addEventListener('click', ()=> {
      this.hide()
      this.elements.video.pause()
    })
  }

  hide() {
    const tl = new gsap.timeline({
      onComplete: ()=> {
        this.destroy()      }
    })
    
    tl.to(this.elements.video, {
        autoAlpha: 0,
        duration: 0.5
      })
      tl.to(this.elements.button, {
        autoAlpha: 0,
        duration: 0.5
      },0)
  }

  destroy() {
    this.element.parentNode.removeChild(this.element)
    this.emit('completed')
  }
}