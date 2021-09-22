

export const Plane: React.FC<any> = ({ color, wireframe, ...props }) => {
  return (
    <>
      <mesh {...props}>
        <planeGeometry />
        <meshStandardMaterial color={color} wireframe={wireframe} />
      </mesh >
    </>
  )
}