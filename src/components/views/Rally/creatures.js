import * as THREE from 'three'

// Procedural starter models. Swap this factory for GLB assets as the rally grows.
export function createCreature(station) {
  const group = new THREE.Group()
  const material = color => new THREE.MeshStandardMaterial({ color, roughness: 0.55, metalness: 0.08 })
  const base = material(station.color), light = material('#fff5de'), dark = material('#24312f')
  function part(geometry, mat, x, y, z, scale = [1, 1, 1]) {
    const mesh = new THREE.Mesh(geometry, mat)
    mesh.position.set(x, y, z); mesh.scale.set(...scale); group.add(mesh)
    return mesh
  }
  const ball = (mat, x, y, z, scale) => part(new THREE.SphereGeometry(1, 24, 16), mat, x, y, z, scale)
  const cone = (mat, x, y, z, scale) => part(new THREE.ConeGeometry(1, 2, 6), mat, x, y, z, scale)
  switch (station.shape) {
    case 'forest':
      ball(base, 0, 0, 0, [0.7, 0.85, 0.5])
      for (const x of [-0.4, 0.4]) {
        cone(base, x, 0.85, 0, [0.23, 0.38, 0.2])
        ball(light, x, -0.75, 0.13, [0.25, 0.18, 0.3])
      }
      break
    case 'fox':
      cone(base, 0, 0, 0, [0.85, 0.75, 0.6]).rotation.z = Math.PI
      for (const x of [-0.48, 0.48]) cone(base, x, 0.7, 0, [0.26, 0.45, 0.25])
      ball(light, 0, -0.3, 0.46, [0.4, 0.26, 0.16])
      break
    case 'cloud':
      for (const [x, y, r] of [[-0.6, 0, 0.5], [0, 0.2, 0.7], [0.65, 0, 0.48]]) ball(base, x, y, 0, [r, r, 0.4])
      for (const x of [-0.45, 0.45]) ball(light, x, -0.7, 0, [0.1, 0.2, 0.1])
      break
    case 'crystal':
      part(new THREE.OctahedronGeometry(0.85), base, 0, 0, 0, [0.85, 1.3, 0.7])
      for (const x of [-0.75, 0.75]) part(new THREE.OctahedronGeometry(0.25), light, x, 0.05, 0)
      break
    case 'mushroom':
      ball(light, 0, -0.2, 0, [0.4, 0.7, 0.4])
      ball(base, 0, 0.5, 0, [1, 0.45, 0.65])
      for (const x of [-0.5, 0, 0.5]) ball(light, x, 0.65, 0.48, [0.11, 0.1, 0.08])
      break
    case 'fish':
      ball(base, 0, 0, 0, [0.85, 0.55, 0.4])
      cone(base, -0.95, 0, 0, [0.45, 0.4, 0.2]).rotation.z = -Math.PI / 2
      cone(light, 0, 0.55, 0, [0.28, 0.25, 0.12])
      break
    case 'sun':
      ball(base, 0, 0, 0, [0.65, 0.65, 0.4])
      for (let i = 0; i < 10; i++) {
        const angle = i * Math.PI / 5
        cone(base, Math.sin(angle) * 0.9, Math.cos(angle) * 0.9, 0, [0.12, 0.2, 0.12]).rotation.z = -angle
      }
      break
    case 'moth':
      for (const side of [-1, 1]) {
        ball(base, side * 0.6, 0.3, -0.1, [0.55, 0.7, 0.15]).rotation.z = -side * 0.5
        ball(base, side * 0.48, -0.4, -0.1, [0.42, 0.45, 0.15])
        ball(light, side * 0.75, 0.3, 0.06, [0.16, 0.2, 0.04])
        cone(dark, side * 0.2, 0.9, 0, [0.045, 0.25, 0.04]).rotation.z = -side * 0.4
      }
      ball(light, 0, 0, 0.12, [0.25, 0.75, 0.25])
      break
  }
  for (const x of [-0.2, 0.2]) {
    ball(light, x, 0.1, 0.57, [0.14, 0.17, 0.08])
    ball(dark, x + 0.02, 0.1, 0.64, [0.065, 0.095, 0.035])
  }
  ball(dark, 0, -0.17, 0.6, [0.09, 0.035, 0.035])
  const size = new THREE.Box3().setFromObject(group).getSize(new THREE.Vector3())
  group.scale.setScalar(2.3 / Math.max(size.x, size.y))
  return group
}

export function disposeCreature(group) {
  const materials = new Set()
  group.traverse(node => {
    node.geometry?.dispose()
    if (node.material) materials.add(node.material)
  })
  materials.forEach(material => material.dispose())
}
