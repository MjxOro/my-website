import React from "react";
import './Contact.scss'
import { useBlock } from '../Blocks'
import { Html } from "@react-three/drei";
import { SocialsCube } from './SocialCubes'


export const Contacts: React.FC<any> = () => {
  const { mobile } = useBlock()
  return (
    <>
      <group>
        <Html
          className="contact"
          position={mobile ? [-1, 4, 0] : window.innerWidth < 1280 ? [-1, 7, 0] : window.innerWidth < 1400 ? [-1.35, 7, 0] : [-1.7, 7, 0]}
        >
          <h1 className='contact__title'>Contacts</h1>
        </Html>
        <Html
          className="contact"
          position={mobile ? [-1.65, 2, 0] : window.innerWidth < 1280 ? [-2.25, 4, 0] : [-3, 5, 0]}
        >
          <p className='contact__text'>Let's stay connected</p>
        </Html>

      </group>
      <SocialsCube />
    </>
  )
}