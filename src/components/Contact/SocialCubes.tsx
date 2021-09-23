import { useFrame, useLoader } from "@react-three/fiber"
import { useRef, useState } from "react"
import { TextureLoader } from "three"
import { useBlock } from '../Blocks'
import { Html, MeshWobbleMaterial } from "@react-three/drei"

export const SocialsCube: React.FC<any> = ({ children, color, ...props }) => {
  //Variables
  const [colorCubeL, setColorCubeL] = useState<string | null>("#94f3d2")
  const [colorCubeG, setColorCubeG] = useState<string | null>("#94f3d2")
  const [colorCubeE, setColorCubeE] = useState<string | null>("#94f3d2")
  const [linkedinTexture, githubTexture, emailTexture] = useLoader(TextureLoader, ['./linkedin.svg', './github.svg', './email.svg'])
  const refLinkedin = useRef<any>()
  const refGithub = useRef<any>()
  const refEmail = useRef<any>()
  const { contentMaxWidth, margin, mobile } = useBlock()
  //Animation
  useFrame(() => {
    refLinkedin.current.rotation.y += 0.01
    refLinkedin.current.rotation.x += 0.01
    refGithub.current.rotation.y += 0.01
    refGithub.current.rotation.x += 0.01
    refEmail.current.rotation.y += 0.01
    refEmail.current.rotation.x += 0.01
  })
  //Handlers
  const handleHoverOn = (e: any) => {
    switch (e.target.id) {
      case "linkedin":
        setColorCubeL("#BABEF9")
        break
      case "github":
        setColorCubeG("#BABEF9")
        break
      case "email":
        setColorCubeE("#BABEF9")
        break
      default:
        break


    }

  }
  const handleHoverOff = () => {
    setColorCubeL("#94f3d2")
    setColorCubeG("#e8f7ff")
    setColorCubeE("#e8f7ff")
  }


  return (
    <>
      <ambientLight intensity={1} />
      <group
        scale={mobile ? [0.5, 0.5, 0.5] : window.innerWidth < 1280 ? [1, 1, 1] : [1.5, 1.5, 1.5]}
        position={[contentMaxWidth / 1.75 - margin, 0, 0]}>

        <mesh ref={refLinkedin} {...props}>
          <boxGeometry args={[1, 1, 1]} />
          <MeshWobbleMaterial attach="material" factor={0.8} speed={2} map={linkedinTexture} color={colorCubeL} />
        </mesh>
        <Html>
          <div
            id="linkedin"
            style={{ height: (mobile ? '4rem' : '8rem'), width: (mobile ? '4rem' : '8rem'), transform: (mobile ? 'translate(-2rem,-2rem)' : 'translate(-3.5rem,-4rem)'), cursor: 'pointer' }}
            onClick={() => window.open("https://www.linkedin.com/in/matthew-oro-majic/")}
            onMouseEnter={handleHoverOn}
            onMouseOut={handleHoverOff}
          />

        </Html>
      </group>
      <group
        scale={mobile ? [0.5, 0.5, 0.5] : window.innerWidth < 1280 ? [1, 1, 1] : [1.5, 1.5, 1.5]}
        position={[0, 0, 0]}
      >
        <mesh ref={refGithub}   {...props}>
          <boxGeometry args={[1, 1, 1]} />
          <MeshWobbleMaterial attach="material" factor={0.75} speed={2} map={githubTexture} color={colorCubeG} />
        </mesh>
        <Html>
          <div
            id="github"
            style={{ height: (mobile ? '4rem' : '8rem'), width: (mobile ? '4rem' : '8rem'), transform: (mobile ? 'translate(-2.5rem,-2.5rem)' : 'translate(-3.5rem,-4rem)'), cursor: 'pointer' }}
            onClick={() => window.open("https://github.com/MjxOro")}
            onMouseEnter={handleHoverOn}
            onMouseOut={handleHoverOff}
          />
        </Html>
      </group>
      <group
        scale={mobile ? [0.5, 0.5, 0.5] : window.innerWidth < 1280 ? [1, 1, 1] : [1.5, 1.5, 1.5]}
        position={[-(contentMaxWidth / 1.75 - margin), 0, 0]}
      >
        <mesh ref={refEmail} {...props}>
          <boxGeometry args={[1, 1, 1]} />
          <MeshWobbleMaterial attach="material" factor={0.8} speed={2} map={emailTexture} color={colorCubeE} />
        </mesh>
        <Html>
          <div
            id="email"
            style={{ height: (mobile ? '4rem' : '8rem'), width: (mobile ? '4rem' : '8rem'), transform: (mobile ? 'translate(-2rem,-2rem)' : 'translate(-3.5rem,-4rem)'), cursor: 'pointer' }}
            onClick={() => window.location.href = "mailto:mattheweoro@gmail.com"}
            onMouseEnter={handleHoverOn}
            onMouseOut={handleHoverOff}
          />
        </Html>
      </group>
    </>
  )
}