import React, { useRef, useMemo, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { useBlock } from '../Blocks'


export const Points: React.FC<any> = () => {
  //Hooks and DOM
  const points = useRef<any>()
  window.addEventListener("mousemove", (e) => {
    const cursorX = (e.clientX / window.innerWidth - 0.5)
    const cursorY = (e.clientY / window.innerHeight - 0.5)
    if (points.current) {
      points.current.position.x = cursorX / 2
      points.current.position.y = cursorY / 2
    }
  })
  if (points.current) {
    points.current.rotation.x = Math.PI / 4
    points.current.position.z = -10
  }
  useFrame(() => {
    points.current.rotation.y += 0.005

  })
  //VAIRABLES
  const { contentMaxWidth, mobile, sectionHeight } = useBlock()
  const count = 50000
  const mainColor = new THREE.Color("#BABEF9")
  const secondColor = new THREE.Color("#03C963")
  const [positions, colors] = useMemo(() => {
    let pos: Array<number> = []
    let col: Array<number> = []
    const branches = 3
    const randomnessPower = 3
    for (let i = 0; i < count; i++) {
      const radius = Math.random() * 2
      const spinAngle = radius * branches
      const branchAngle = (i % branches) / branches * Math.PI * 2
      //CHANGE FOR RESPONSIVENESS
      const randomnessX = Math.pow((Math.random()), randomnessPower) * (Math.random() > 0.5 ? 1 : -1) * 0.4 * radius
      const randomnessY = Math.pow((Math.random()), randomnessPower) * (Math.random() > 0.5 ? 1 : -1) * 0.4 * radius
      const randomnessZ = Math.pow((Math.random()), randomnessPower) * (Math.random() > 0.5 ? 1 : -1) * 0.4 * radius

      pos.push(Math.cos(branchAngle + spinAngle) * radius + randomnessX)
      pos.push(randomnessY)
      pos.push(Math.sin(branchAngle + spinAngle) * radius + randomnessZ)

      //Color array
      const mixed = mainColor.clone()
      mixed.lerp(secondColor, radius / 2)
      col.push(mixed.r)
      col.push(mixed.g)
      col.push(mixed.b)
    }

    return [new Float32Array(pos), new Float32Array(col)]
  }, [])

  const mobileScale = [contentMaxWidth / 2, sectionHeight / 2.5, contentMaxWidth / 2]
  const normalScale = [contentMaxWidth / 2, sectionHeight / 3.5, contentMaxWidth / 2]

  return (

    <>
      <points scale={mobile ? mobileScale : normalScale} ref={points}>
        <bufferGeometry attach="geometry">
          <bufferAttribute
            attachObject={['attributes', 'position']}
            array={positions}
            count={count}
            itemSize={3}

          />
          <bufferAttribute
            attachObject={['attributes', 'color']}
            array={colors}
            count={count}
            itemSize={3}

          />
        </bufferGeometry>
        <pointsMaterial
          size={window.innerWidth > 1440 ? 2 : window.innerWidth > 700 ? 1 : 0.5}
          attach="material"
          sizeAttenuation
          blending={THREE.AdditiveBlending}
          vertexColors
          depthWrite={false}
        />
      </points>
    </>


  )
}