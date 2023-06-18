import Page from "../../classes/Page";

export default class Mentions extends Page {
  constructor() {
    super({
      id : 'mentions',
      element : '.mentions',
      elements : {
        navigation: document.querySelector('.navigation'),
        button : '.preloader__video__close'
      }
    })
  } 

  create() {
    super.create()
    // this.skipVideo = document.querySelector('.preloader')
    // this.elements.button.addEventListener('click', _ => {
    //   this.skipVideo.classList.add('hidden')
    // })
  }
}