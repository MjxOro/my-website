import { Html } from '@react-three/drei'
import './Intro.scss'
import { Block, useBlock } from '../Blocks'
import { Shadow } from '@react-three/drei'

export const Intro: React.FC = () => {
  const { contentMaxWidth, margin } = useBlock()
  return (
    <group position={[0, 0, 0]}>
      <Shadow scale={[contentMaxWidth, contentMaxWidth / 2.25, 1]} />
      <Block factor={-1.5}>
        <Html center={true}>
          <section className='intro'>
            <h1 className='intro__name'>Hello there!</h1>
            <h1 className='intro__name'>I'm a full-stack web developer,</h1>
            <h1 className='intro__name'>I like to build cool things.</h1>
          </section>
        </Html>
      </Block>
    </group>
  )

}