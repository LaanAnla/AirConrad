import * as THREE from 'three'
import Experience from '../Experience'
import conrad from '/shared/conrad-club.webp'
import vertex from '/shaders/vertex.glsl'
import fragment from '/shaders/fragment.glsl'
import { gsap } from 'gsap'

function clamp(number, min, max) {
  return Math.max(min, Math.min(number, max));
}

export default class HomeCanvas {
  constructor() {

    this.experience = new Experience()
    this.renderer = this.experience.renderer
    this.sizes = this.experience.sizes
    this.scene = this.experience.scene
    this.camera = this.experience.camera
    this.time = this.experience.time

    this.mouse = {
      x: 0,
      y: 0,
      prevX: 0,
      prevY: 0,
      vX: 0,
      vY: 0
    }

    this.addObjects()
    this.resize()
    this.mouseEvents()
    
  }

  mouseEvents() {
    window.addEventListener('mousemove', (e)=>{
      this.mouse.x = e.clientX / this.sizes.width;
      this.mouse.y = e.clientY / this.sizes.height;

      this.mouse.vX = this.mouse.x - this.mouse.prevX;
      this.mouse.vY = this.mouse.y - this.mouse.prevY;


      this.mouse.prevX = this.mouse.x
      this.mouse.prevY = this.mouse.y;

    })
  }

  addObjects() {

    // mm.revert()

    this.size = 10

    let mm = gsap.matchMedia()
    mm.add("(min-width: 1100px)", () => {
      this.size = 30
    })

    const width = this.size
    const height = this.size

    const size = width * height
    const data = new Float32Array(4 * size)
    const color = new THREE.Color( 0xffffff)

    const r = Math.floor( color.r * 255)
    const g = Math.floor( color.g * 255)
    const b = Math.floor( color.b * 255)
    const a = 1

    for (let i = 0; i<size; i++) {
      let r = Math.random()*255

      const stride = i * 4;
      data[stride] = r
      data[stride + 1] = r
      data[stride + 2] = r
      data[ stride + 3 ] = 255;
    }

    this.texture = new THREE.DataTexture(data, width, height, THREE.RGBAFormat, THREE.FloatType);
    this.texture.magFilter = this.texture.minFilter = THREE.NearestFilter;
    this.texture.needsUpdate = true

    this.material = new THREE.ShaderMaterial({
      extensions: {
        derivatives: "#extension GL_OES_standard_derivatives : enable"
      },
      side: THREE.DoubleSide,
      uniforms: {
        time: {value: 0},
        resolution: {value: new THREE.Vector4()},
        uTexture: {value: new THREE.TextureLoader().load(conrad)},
        uDataTexture: {value: this.texture}
      },
      vertexShader: vertex,
      fragmentShader: fragment
    });

    this.geometry = new THREE.PlaneGeometry(1, 1, 1, 1);
    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.scene.add(this.mesh);

  }

  updateDataTexture() {
    let data = this.texture.image.data
    for(let i = 0; i < data.length; i+= 4) {
      data[i] *= 0.98
      data[i+1] *= 0.99
    }

    let gridMouseX = this.size*this.mouse.x
    let gridMouseY = this.size*(1 - this.mouse.y)
    let maxDist = 4
    
    for(let i = 0; i<this.size; i++) {
      for(let j = 0; j < this.size; j++) {
        let distance = (gridMouseX - i)**2 + (gridMouseY - j)**2
        
        if(distance < maxDist**2) {
          let index = 4*(i + this.size*j)

          let power = maxDist / Math.sqrt(distance)

          data[index] += 3 * this.mouse.vX * power
          data[index+1] -= 3 * this.mouse.vY * power
        }
      }
    }
    this.mouse.vX *=0.9
    this.mouse.vY *= 0.9

    this.texture.needsUpdate = true
  }
  
  update() {
    this.updateDataTexture()
  }

  resize() {
    this.renderer.instance.setSize(this.sizes.width, this.sizes.height)
    this.camera.instance.aspect = this.sizes.width / this.sizes.height

    this.imageAspect = 1. / 1.77;
    let a1
    let a2

    if(this.sizes.height/this.sizes.width > this.imageAspect) {
      a1 = (this.sizes.width/this.sizes.height) * this.imageAspect
      a2 = 1
    } else {
      a1 = 1
      a2 = (this.sizes.height/this.sizes.width) / this.imageAspect
    }

    this.material.uniforms.resolution.value.x = this.sizes.width
    this.material.uniforms.resolution.value.y = this.sizes.height
    this.material.uniforms.resolution.value.z = a1
    this.material.uniforms.resolution.value.w = a2 
  }


}