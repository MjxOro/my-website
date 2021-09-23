import React from "react";
import './Contact.scss'
import { useBlock } from '../Blocks'
import { Plane } from '../Plane'
import { Html } from "@react-three/drei";
import { SocialsCube } from './SocialCubes'


export const Contacts: React.FC<any> = () => {
  return (
    <>
      <group>
        <Html>
        </Html>

      </group>
      <SocialsCube />
    </>
  )
}