import * as THREE from 'three'
import Experience from '../Experience'

export default class HomeCanvasPS5 {
  constructor() {

    this.experience = new Experience()
    this.renderer = this.experience.renderer.instance2
    this.sizes = this.experience.sizes
    this.scene = this.experience.scene2
    this.camera = this.experience.camera.instance2
    this.time = this.experience.time
    
    // this.camera = new THREE.PerspectiveCamera( 70, this.sizes.width / this.sizes.height, 0.01, 10 );
    // this.camera.position.z = 1


    this.addObjects()
    
  }

  addObjects() {
    console.log('hello from PS5')
    this.geometry = new THREE.BoxGeometry( 0.2, 0.2, 0.2 );
    this.material = new THREE.MeshNormalMaterial();

    this.mesh = new THREE.Mesh( this.geometry, this.material );
    this.scene.add( this.mesh );    
  }

  resize() {
    //this.renderer = new THREE.WebGLRenderer( { antialias: true } );
    this.renderer.setSize( this.sizes.width, this.sizes.height );
    this.renderer.render( this.scene, this.camera );
  }

  update() {
    this.mesh.rotation.x = this.time.elapsed / 2000
    this.mesh.rotation.y = this.time.elapsed / 2000  
  }


}