import * as THREE from 'three'
import Experience from "./Experience"

export default class Camera {
  constructor() {
    
    this.experience = new Experience()
    this.sizes = this.experience.sizes
    this.scene = this.experience.scene
    this.scene2 = this.experience.scene2
    this.canvas = this.experience.canvas
    this.renderer = this.experience.renderer

    this.setInstance()
    this.setInstance2()
  }

  setInstance() {
    let frustumSize = 1;
    this.instance = new THREE.OrthographicCamera(frustumSize / -2, frustumSize / 2, frustumSize / 2, frustumSize / -2, -1000, 1000);
    this.instance.position.set(0, 0, 2);

    this.scene.add(this.instance)
  }

  setInstance2() {
    this.instance2 = new THREE.PerspectiveCamera( 35, window.innerWidth / window.innerHeight, 0.01, 10 );
    this.instance2.position.z = 1

    this.scene2.add(this.instance2)
  }

  resize() {
    this.instance.aspect = this.sizes.width / this.sizes.height
    this.instance2.aspect = this.sizes.width / this.sizes.height
    this.instance.updateProjectionMatrix()
    this.instance2.updateProjectionMatrix()
  }
}