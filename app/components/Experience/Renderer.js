import * as THREE from 'three'
import Experience from "./Experience";

export default class Renderer {
  constructor() {

    this.experience = new Experience()
    console.log(this.experience)

    this.canvas = this.experience.canvas
    this.sizes = this.experience.sizes
    this.scene = this.experience.scene
    this.scene2 = this.experience.scene2
    this.camera = this.experience.camera
    this.div = document.querySelector('#webgl')
    this.div2 = document.querySelector('#webglPS5')
    //this.sizesDiv = this.div.getBoundingClientRect()
    //this.sizesDiv2 = this.div.getBoundingClientRect()

    this.setInstance()
    this.setInstance2()
  }

  setInstance() {

    this.instance = new THREE.WebGLRenderer({
      canvas: this.div,
      antialias: true,
      alpha: true,
      autoClear : true
    })

    this.instance.setSize(this.sizes.width, this.sizes.height );
    //this.instance.setSize(this.sizesDiv.width, this.sizesDiv.height)
    this.instance.toneMapping = THREE.CineonToneMapping
    this.instance.toneMappingExposure = 1.75
    this.instance.shadowMap.enabled = true
    this.instance.shadowMap.type = THREE.PCFSoftShadowMap
    this.instance.setPixelRatio(Math.min(this.sizes.pixelRatio, 2))

    //this.setInstance2()
  }

  setInstance2() {
    
    this.instance2 = new THREE.WebGLRenderer({
      canvas: this.div2,
      antialias: true,
      alpha: true,
      autoClear : true
    })
    console.log(this.instance2.domElement)
    
    //this.instance.setSize(this.sizes.width, this.sizes.height );
    this.instance2.setSize(this.sizes.width, this.sizes.height)
    this.instance2.toneMapping = THREE.CineonToneMapping
    this.instance2.toneMappingExposure = 1.75
    this.instance2.shadowMap.enabled = true
    this.instance2.shadowMap.type = THREE.PCFSoftShadowMap
    this.instance2.setPixelRatio(Math.min(this.sizes.pixelRatio, 2))
    this.instance2.outputColorSpace = THREE.LinearSRGBColorSpace
  }

  resize() {
    this.instance.setSize(this.sizes.width, this.sizes.height )
    //this.instance.setSize(this.sizesDiv.width, this.sizesDiv.height)
    this.instance2.setSize(this.sizes.width, this.sizes.height)
    this.instance.setPixelRatio(this.sizes.pixelRatio)
    this.instance2.setPixelRatio(this.sizes.pixelRatio)
  }

  update() {
    this.instance.render(this.scene, this.camera.instance)
    this.instance2.render(this.scene2, this.camera.instance2)
  }
}