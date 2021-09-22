import React from 'react'
import { useBlock } from '../Blocks'
import { Html } from '@react-three/drei'
import { Plane } from '../Plane'


export const About: React.FC<any> = () => {
  const { mobile, contentMaxWidth, margin } = useBlock()

  return (
    <group>
      <Plane scale={[(contentMaxWidth - margin) / 2, (contentMaxWidth - margin) / 2, 1]} position={[0, 3, 1]} />
      <Html center>
        <p style={{ width: (mobile ? '75vw' : '30vw') }} className="about__description">
          Hello, world! My name is Matthew Oro and I enjoy building cool things
          on the internet. Although I'm still new to this game, I am learning
          and building new things to make my life easier and explore my creativity through building
          websites.</p>
      </Html>
    </group>
  )
}
