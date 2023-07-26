import * as THREE from 'three'
import Experience from '../Experience'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { gsap } from 'gsap'
import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js';


export default class HomeCanvasPS5 {
  constructor() {

    this.experience = new Experience()
    this.renderer = this.experience.renderer.instance2
    this.sizes = this.experience.sizes
    this.scene = this.experience.scene2
    this.camera = this.experience.camera.instance2
    this.time = this.experience.time
    // this.gltfLoader = new GLTFLoader()
    this.body = document.querySelector('body')
      
    this.addObjects()
    this.makeStars()
    this.setControls()
    
  }

  addObjects() {
    this.dracoLoader = new DRACOLoader()
    this.dracoLoader.setDecoderPath('/draco/')
    this.gltfLoader = new GLTFLoader()
    this.gltfLoader.setDRACOLoader(this.dracoLoader)
    this.gltfLoader.load(
      'scene.gltf', (gltf) =>
      {
          const box = new THREE.Box3().setFromObject( gltf.scene );
          const center = box.getCenter( new THREE.Vector3() );
          gltf.scene.children[0].position.x += ( gltf.scene.children[0].position.x - center.x );
          gltf.scene.children[0].position.y += ( gltf.scene.children[0].position.y - center.y );
          gltf.scene.children[0].position.z += ( gltf.scene.children[0].position.z - center.z );
          this.scene.add(gltf.scene.children[0])
          console.log('success')
          console.log(gltf)
      },
      (progress) =>
      {
          console.log('progress')
          console.log(progress)
      },
      (error) =>
      {
          console.log('error')
          console.log(error)
      }
    )
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8)
    this.scene.add(ambientLight)   
  }

  makeStars() {
    THREE.ColorManagement.enabled = false
    const particlesGeometry = new THREE.BufferGeometry()
    const count = 1000
    const position = new Float32Array(count * 3)
    const colors = new Float32Array(count * 3)

    for (let i=0; i < count * 3; i++) {
      position[i] = 3 * (Math.random() - 0.5)
      colors[i] = Math.random()
    }

    particlesGeometry.setAttribute(
      'position',
      new THREE.BufferAttribute(position, 3)
    )
    particlesGeometry.setAttribute(
      'color', 
      new THREE.BufferAttribute(colors, 3))

      const particlesMaterial = new THREE.PointsMaterial({
        size: 0.02,
        sizeAttenuation: true,
        //color: 'red',
        depthWrite: false,
        blending: THREE.AdditiveBlending,
        vertexColors: true
      })

    const particles = new THREE.Points(particlesGeometry, particlesMaterial)
    this.scene.add(particles)

  }

  setControls() {
    this.controls = new OrbitControls( this.camera, this.renderer.domElement );
    this.controls.enableDamping = false
    this.controls.enableZoom = false
    this.controls.autoRotate = true
    this.controls.autoRotateSpeed = 0.7
    this.controls.dampingFactor = 0.05;
    //this.controls.maxPolarAngle = Math.PI / 2
  }

  resize() {
    if(this.body.classList === 'desktop') {
      this.camera.aspect = this.sizes.width / this.sizes.height
      this.renderer.setSize( this.sizes.width, this.sizes.height );
      this.renderer.render( this.scene, this.camera );
      this.camera.updateProjectionMatrix()
    }
  }

  update() {
    this.controls.update()
  }


}