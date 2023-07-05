export default class Back {

  constructor() {

    this.button = document.querySelector('.back__to__top')
    this.backToTop()
  }

  backToTop() {
    this.button.addEventListener('click', ()=>{
      console.log('click clac')
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    })
  
  }

  
}
