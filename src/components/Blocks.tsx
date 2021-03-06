import React, { useRef, createContext, useContext } from 'react'
import { useThree, useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import state from '../store'


const offsetContext: React.Context<number> = createContext(0)
export const Block: React.FC<any> = ({ children, offset, factor, ...props }) => {
  const ref = useRef<any>()
  // Fetch parent offset and the height of a single section
  const { offset: parentOffset, sectionHeight } = useBlock()
  offset = offset !== undefined ? offset : parentOffset
  // Runs every frame and lerps the inner block into its place
  useFrame(() => {
    const curY = ref.current.position.y
    const curTop = state.top.current
    ref.current.position.y = THREE.MathUtils.lerp(curY, (curTop / state.zoom) * factor, 0.1)
  })
  return (
    <offsetContext.Provider value={offset}>
      <group {...props} position={[0, -sectionHeight * offset * factor, 0]}>
        <group ref={ref}>{children}</group>
      </group>
    </offsetContext.Provider>
  )
}
export const useBlock: any = () => {
  const { sections, pages } = state
  const { size, viewport } = useThree()
  const offset = useContext(offsetContext)
  const viewportWidth = viewport.width
  const viewportHeight = viewport.height
  const canvasWidth = viewportWidth
  const canvasHeight = viewportHeight
  const mobile = size.width < 768
  const margin = canvasWidth * (mobile ? 0.2 : 0.1)
  const contentMaxWidth = canvasWidth * (mobile ? 0.8 : 0.6)
  const sectionHeight = canvasHeight * ((pages - 1) / (sections - 1))
  return {
    viewport,
    offset,
    viewportWidth,
    viewportHeight,
    canvasWidth,
    canvasHeight,
    mobile,
    margin,
    contentMaxWidth,
    sectionHeight
  }
}
