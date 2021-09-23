import React, { useRef } from "react";
import './Projects.scss'
import { Html, Text, MeshWobbleMaterial } from "@react-three/drei";
import { useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import { useBlock, Block } from "../Blocks"
import { Plane } from "../Plane";
import { FaGithubSquare } from "react-icons/fa";

export const ProjectTransition: React.FC<any> = ({ color }) => {
  const { canvasWidth, sectionHeight } = useBlock()
  return (
    <Plane position={[0, -2, -3]} scale={[canvasWidth, sectionHeight * 2, 1]} color={color ? color : "#00222D"} />
  )

}


export const Cards: React.FC<any> = () => {
  const cardRef = useRef<any>()
  window.addEventListener("mousemove", (e) => {
    const cursorX = (e.clientX / window.innerWidth - 0.5)
    const cursorY = -(e.clientY / window.innerHeight - 0.5)
    if (cardRef.current) {
      cardRef.current.rotation.y = cursorX / 3
      cardRef.current.rotation.x = -cursorY / 3
    }

  })
  const [card1, card2, card3, card4] = useLoader(TextureLoader, ['./rerun1.png', './rerun2.png', './rerun3.png', './rerun4.png'])
  const { mobile, margin, contentMaxWidth } = useBlock()
  return (
    <group
      ref={cardRef}
      scale={mobile ? [0.75, 0.75, 0.75]
        : window.innerWidth < 1280 ? [1.25, 1.25, 0.5]
          : window.innerWidth < 1920 ? [1.3, 1.3, 0.5]
            : window.innerWidth < 2560 ? [1.75, 1.75, 0.5]
              : [2, 2, 0.5]}
    >
      <Block factor={3.5}>
        <mesh
          position={mobile ? [-contentMaxWidth + (margin + 1), 4.5, 0]
            : window.innerWidth < 1280 ? [-contentMaxWidth + (margin + 3), 4.5, 0]
              : window.innerWidth < 1920 ? [-contentMaxWidth + (margin + 5.5), 4.5, 0]
                : [-(contentMaxWidth / 1.5) + (margin + 5), 4.5, 0]}>
          <boxGeometry args={[2, 3, 1]} />
          <meshStandardMaterial attach="material" map={card1} />
        </mesh>
      </Block>
      <Block factor={-5.2}>
        <mesh
          position={mobile ? [contentMaxWidth - (margin + 1), 1, 1]
            : window.innerWidth < 1280 ? [contentMaxWidth - (margin + 3), 1, 1]
              : window.innerWidth < 1920 ? [contentMaxWidth - (margin + 5.5), 1, 1]
                : [(contentMaxWidth / 1.5) - (margin + 5), 1, 1]}>
          <boxGeometry args={[2, 3, 1]} />
          <meshStandardMaterial attach="material" map={card2} />
        </mesh>
      </Block>
      <Block factor={-5.2}>
        <mesh
          position={mobile ? [-contentMaxWidth + (margin + 1), -4.5, 1]
            : window.innerWidth < 1280 ? [-contentMaxWidth + (margin + 3), -4.5, 1]
              : window.innerWidth < 1920 ? [-contentMaxWidth + (margin + 5.5), -4.5, 1]
                : [(-contentMaxWidth / 1.5) + (margin + 5), -4.5, 1]}>
          <boxGeometry args={[2, 3, 1]} />
          <meshStandardMaterial attach="material" map={card3} />
        </mesh>
      </Block>
      <Block factor={3.4}>
        <mesh
          position={mobile ? [contentMaxWidth - (margin + 1), -1, 0]
            : window.innerWidth < 1280 ? [contentMaxWidth - (margin + 3), -1, 0]
              : window.innerWidth < 1920 ? [contentMaxWidth - (margin + 5.5), -1, 0]
                : [(contentMaxWidth / 1.5) - (margin + 5), -1, 0]}>
          <boxGeometry args={[2, 3, 1]} />
          <meshStandardMaterial attach="material" map={card4} />
        </mesh>
      </Block>
    </group>
  )
}

export const Projects: React.FC<any> = () => {
  const { mobile } = useBlock()
  return (
    <group >
      <Html position={mobile ? [-2, 5, 0] : window.innerWidth < 1280 ? [-2.5, 7, 0] : [-2.5, 7, 0]} className='projects'>
        <h1 className="projects__title">Project 01: Re-Run</h1>
      </Html>
      <Html position={mobile ? [-1.5, 4, 1] : window.innerWidth < 1280 ? [-2.5, 6.5, 0] : [-3.25, 6.5, 0]} className='projects'>
        <img className='projects__img' src='./reRun.png' alt='Re-run Logo' />
      </Html>
      <Html position={mobile ? [-1.5, 1.5, 1] : window.innerWidth < 1280 ? [-1.5, 2.5, 0] : [-3, 1, 0]} className='projects'>
        <p className="projects__description">Local classifieds website with a point system</p>
      </Html>
      <Html position={mobile ? [-2.5, 0.5, 1] : window.innerWidth < 1280 ? [-3.25, 0, 0] : [-3.25, -1, 0]} className='projects'>
        <ul className="projects__tech-list">
          <li className='projects__tech'>React</li>
          <li className='projects__tech'>SASS</li>
          <li className='projects__tech'>Express</li>
          <li className='projects__tech'>MongoDB</li>
          <li className='projects__tech'>JWT tokens</li>
        </ul>
      </Html>
      <Html position={mobile ? [-0.25, -0.25, 1] : window.innerWidth < 1280 ? [-0.5, -1.5, 0] : [-0.5, -2.5, 0]} className='projects'>
        <FaGithubSquare className="projects__github" onClick={() => window.open("https://github.com/MjxOro/Re-Run")} />
      </Html>
    </group>
  )
}

export const Filler: React.FC<any> = () => {
  const textRef = useRef<any>()
  const { mobile } = useBlock()
  window.addEventListener("mousemove", (e) => {
    const cursorX = (e.clientX / window.innerWidth - 0.5)
    const cursorY = -(e.clientY / window.innerHeight - 0.5)
    if (textRef.current) {
      textRef.current.rotation.y = cursorX
      textRef.current.rotation.x = -cursorY
    }
  })
  useFrame(({ clock }) => {
    textRef.current.position.z = Math.sin(clock.getElapsedTime() / 5)
  })

  return (
    <Text ref={textRef} fontSize={mobile ? 0.5 : window.innerWidth < 1280 ? 1 : 1.75} color="#C5C6C7" anchorX="center" anchorY="middle">
      <MeshWobbleMaterial attach="material" factor={1} speed={0.75} />
      More Projects Soon!
    </Text>

  )
}