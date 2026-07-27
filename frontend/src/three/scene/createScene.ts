import * as THREE from 'three'

export function createScene(canvas: HTMLCanvasElement): () => void {
  const scene = new THREE.Scene()
  scene.background = new THREE.Color(0x9ed7e8)

  const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100)
  camera.position.set(4, 3, 6)
  camera.lookAt(0, 0.5, 0)

  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true })
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  renderer.shadowMap.enabled = true

  const cube = new THREE.Mesh(
    new THREE.BoxGeometry(1.5, 1.5, 1.5),
    new THREE.MeshStandardMaterial({ color: 0xf4b942 }),
  )
  cube.position.y = 0.75
  cube.castShadow = true
  scene.add(cube)

  const ground = new THREE.Mesh(
    new THREE.PlaneGeometry(20, 20),
    new THREE.MeshStandardMaterial({ color: 0x4f8b62 }),
  )
  ground.rotation.x = -Math.PI / 2
  ground.receiveShadow = true
  scene.add(ground)

  scene.add(new THREE.HemisphereLight(0xffffff, 0x36563d, 2))

  const sunlight = new THREE.DirectionalLight(0xffffff, 2.5)
  sunlight.position.set(4, 8, 3)
  sunlight.castShadow = true
  scene.add(sunlight)

  let animationFrame = 0

  const render = () => {
    const width = canvas.clientWidth
    const height = canvas.clientHeight
    const pixelRatio = renderer.getPixelRatio()

    if (
      canvas.width !== Math.floor(width * pixelRatio) ||
      canvas.height !== Math.floor(height * pixelRatio)
    ) {
      renderer.setSize(width, height, false)
      camera.aspect = width / height
      camera.updateProjectionMatrix()
    }

    cube.rotation.y += 0.01
    renderer.render(scene, camera)
    animationFrame = requestAnimationFrame(render)
  }

  render()

  return () => {
    cancelAnimationFrame(animationFrame)
    cube.geometry.dispose()
    ;(cube.material as THREE.Material).dispose()
    ground.geometry.dispose()
    ;(ground.material as THREE.Material).dispose()
    renderer.dispose()
  }
}
