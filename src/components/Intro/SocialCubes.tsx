import { useFrame, useLoader } from "@react-three/fiber"
import { useRef, useState } from "react"
import { TextureLoader } from "three"
import { useBlock } from '../Blocks'
import { Html } from "@react-three/drei"

export const LinkedinCube: React.FC<any> = ({ children, color, ...props }) => {
  //Variables
  const [colorCubeL, setColorCubeL] = useState<string | null>("#94f3d2")
  const [colorCubeG, setColorCubeG] = useState<string | null>("#e8f7ff")
  const linkedinTexture = useLoader(TextureLoader, './linkedin.svg')
  const gitHubTexture = useLoader(TextureLoader, './github.svg')
  const refLinkedin = useRef<any>()
  const refGithub = useRef<any>()
  const { contentMaxWidth, margin, canvasWidth, mobile } = useBlock()
  //Positions
  const mobilePosLinkedin: Array<any> = [- (canvasWidth - contentMaxWidth + margin) / 1.75, -(contentMaxWidth) / 1.75, 15]
  const mobilePosGithub: Array<any> = [(canvasWidth - contentMaxWidth + margin) / 1.75, -(contentMaxWidth) / 1.75, 15]
  const posLinkedin: Array<any> = [- (canvasWidth - contentMaxWidth - margin), -(canvasWidth - contentMaxWidth - margin) / 1.30, 15]
  const posGithub: Array<any> = [(canvasWidth - contentMaxWidth - margin), -(canvasWidth - contentMaxWidth - margin) / 1.30, 15]
  const mobileScale: Array<number> = [0.5, 0.5, 0.5]
  //Animation
  useFrame(() => {
    refLinkedin.current.rotation.y += 0.01
    refLinkedin.current.rotation.x += 0.01
    refGithub.current.rotation.y += 0.01
    refGithub.current.rotation.x += 0.01
  })
  //Handlers
  const handleHoverOn = () => setColorCubeL("#BABEF9")
  const handleHoverOnG = () => setColorCubeG("#BABEF9")
  const handleHoverOff = () => {
    setColorCubeL("#94f3d2")
    setColorCubeG("#e8f7ff")
  }


  return (
    <>
      <ambientLight intensity={1} />
      <group scale={mobile ? mobileScale : [1, 1, 1]} position={mobile ? mobilePosLinkedin : posLinkedin}>
        <mesh ref={refLinkedin} {...props}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial map={linkedinTexture} color={colorCubeL} />
        </mesh>
        <Html>
          <div
            style={{ height: (mobile ? '4rem' : '8rem'), width: (mobile ? '4rem' : '8rem'), transform: (mobile ? 'translate(-2rem,-2rem)' : 'translate(-3.5rem,-4rem)'), cursor: 'pointer' }}
            onClick={() => window.open("https://www.linkedin.com/in/matthew-oro-majic/")}
            onMouseEnter={handleHoverOn}
            onMouseOut={handleHoverOff}
          />

        </Html>
      </group>
      <group scale={mobile ? mobileScale : [1, 1, 1]} position={mobile ? mobilePosGithub : posGithub}>
        <mesh ref={refGithub}   {...props}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial map={gitHubTexture} color={colorCubeG} />
        </mesh>
        <Html>
          <div
            style={{ height: (mobile ? '4rem' : '8rem'), width: (mobile ? '4rem' : '8rem'), transform: (mobile ? 'translate(-2.5rem,-2.5rem)' : 'translate(-3.5rem,-4rem)'), cursor: 'pointer' }}
            onClick={() => window.open("https://github.com/MjxOro")}
            onMouseEnter={handleHoverOnG}
            onMouseOut={handleHoverOff}
          />
        </Html>
      </group>
    </>
  )
}