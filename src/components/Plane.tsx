export const Plane: React.FC<any> = ({ color = "white", ...props }) => {
  return (
    <>
      <mesh {...props}>
        <planeGeometry />
        <meshBasicMaterial color={color} />
      </mesh >
    </>
  )
}