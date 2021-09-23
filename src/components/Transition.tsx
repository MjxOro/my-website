import React from 'react'
import { Plane } from './Plane'
import { useBlock } from './Blocks'

export const Transition: React.FC<any> = ({ color }) => {
  const { sectionHeight, viewportWidth } = useBlock()
  const diagonalScale: Array<number> = [viewportWidth * 10, sectionHeight / 1.25, 1]
  const diagonalRotation: Array<number> = [0, 0, Math.PI / 4]

  return (
    <Plane color={color} scale={diagonalScale} rotation={diagonalRotation} wobble />
  )
}