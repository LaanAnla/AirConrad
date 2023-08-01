
export default class Navigation {
  constructor() {
    this.navigationLink = document.querySelector('a.navigation__list__link')

    this.animNavigation()
  }

  animNavigation() {
    this.navigationLink.addEventListener('mouseleave', ()=>{
      this.navigationLink.classList.add('animate-out')
      setTimeout(()=> {
        this.navigationLink.classList.remove('animate-out')
      }, 300)
    })
  }
}