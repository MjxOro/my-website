import React from "react";
import { useBlock } from "./Blocks";
import { Plane } from "./Plane";

export const PlaneTransition: React.FC<any> = ({ color }) => {
  const { canvasWidth, sectionHeight } = useBlock()

  return (
    <Plane scale={[canvasWidth, sectionHeight * 1.5, 1]} position={[0, 0, -5]} color={color} />

  )
}