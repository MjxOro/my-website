import { useFrame, useLoader } from "@react-three/fiber"
import { useRef } from "react"
import { TextureLoader } from "three"
import { useBlock } from '../Blocks'

export const LinkedinCube: React.FC<any> = ({ color, ...props }) => {
  const linkedinTexture = useLoader(TextureLoader, './linkedin.svg')
  const gitHubTexture = useLoader(TextureLoader, './github.svg')
  const refLinkedin = useRef<any>()
  const refGithub = useRef<any>()
  const { contentMaxWidth, margin, canvasWidth, mobile } = useBlock()
  const mobilePosLinkedin: Array<any> = [- (canvasWidth - contentMaxWidth + margin), -(contentMaxWidth), 0]
  const mobilePosGithub: Array<any> = [(canvasWidth - contentMaxWidth + margin), -(contentMaxWidth), 0]
  const posLinkedin: Array<any> = [- (canvasWidth - contentMaxWidth - margin), -(canvasWidth - contentMaxWidth - margin), 0]
  const posGithub: Array<any> = [(canvasWidth - contentMaxWidth - margin), -(canvasWidth - contentMaxWidth - margin), 0]
  const mobileScale: Array<number> = [0.5, 0.5, 0.5]
  console.log(mobile)
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()
    refLinkedin.current.rotation.y += 0.01
    refLinkedin.current.rotation.x += 0.01
    refLinkedin.current.position.y = (Math.sin(t) / 3) + (mobile ? mobilePosLinkedin[1] : posLinkedin[1])
    refGithub.current.rotation.y += 0.01
    refGithub.current.rotation.x += 0.01
    refGithub.current.position.y = (Math.sin(t) / 3) + (mobile ? mobilePosGithub[1] : posGithub[1])
  })
  return (
    <>
      <ambientLight intensity={1} />
      <group scale={mobile ? mobileScale : [1, 1, 1]}>
        <mesh ref={refLinkedin} position={mobile ? mobilePosLinkedin : posLinkedin}  {...props}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial map={linkedinTexture} />
        </mesh>
        <mesh ref={refGithub} position={mobile ? mobilePosGithub : posGithub}  {...props}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial map={gitHubTexture} />
        </mesh>
      </group>
    </>
  )
}