import EventEmitters from './EventEmitters'

export default class Time extends EventEmitters {
  constructor() {
    
    super()

    // Setup //
    this.start = Date.now()
    this.current = this.start
    this.elapsed = 0
    this.delta = 16

    this.trigger('tick')

    window.requestAnimationFrame( () => {
      this.tick()
    })


  }

  tick() {
    const currentTime = Date.now()
    this.delta = currentTime - this.current
    this.current = currentTime
    this.elapsed = this.current - this.start

    this.trigger('tick')

    window.requestAnimationFrame(this.tick.bind(this))
  }
}