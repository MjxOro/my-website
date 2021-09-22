

export const Plane: React.FC<any> = ({ color, map, ...props }) => {
  return (
    <>
      <mesh {...props}>
        <planeGeometry />
        <meshStandardMaterial color={color} map={map} />
      </mesh >
    </>
  )
}