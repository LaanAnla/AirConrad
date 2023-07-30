import * as THREE from 'three'
import Sizes from "./Utils/Sizes"
import Time from "./Utils/Time"
import Camera from './Camera'
import HomeCanvas from './Home/HomeCanvas'
import Renderer from './Renderer'
import HomeCanvasPS5 from './Home/HomeCanvasPS5'

let instance = null

export default class Experience {
    constructor(canvas, template) {

    if(instance) {
      return instance
    }

    instance = this

    this.canvas = canvas
    this.template = template

    this.sizes = new Sizes()
    this.time = new Time()
    this.scene = new THREE.Scene()
    this.scene2 = new THREE.Scene()
    this.camera = new Camera()
    this.renderer = new Renderer()

    this.sizes.on('resize', ()=> {
      this.resize()
    }) 
    this.time.on('tick', () => {
      this.update()
    })
    
    this.createCanvas()
  }

  createCanvas() {
    this.homeCanvas = new HomeCanvas()
    this.homeCanvasPS5 = new HomeCanvasPS5()
  }

  resize() {
    this.homeCanvas.resize()
    this.homeCanvasPS5.resize()
    this.camera.resize()
    this.renderer.resize()
  }

  update() {
    this.camera.update()
    this.renderer.update()
    this.homeCanvas.update()
    this.homeCanvasPS5.update()
  }
}