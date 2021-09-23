import { MeshWobbleMaterial } from "@react-three/drei"

export const Plane: React.FC<any> = ({ wobble, color, map, ...props }) => {
  console.log(wobble)
  return (
    <>
      {wobble ?
        <mesh {...props}>
          <planeGeometry />
          <MeshWobbleMaterial color={color} attach="material" factor={0.75} speed={2} />
        </mesh >
        :
        <mesh {...props}>
          <planeGeometry />
          <meshStandardMaterial color={color} map={map} />
        </mesh >
      }
    </>
  )
}