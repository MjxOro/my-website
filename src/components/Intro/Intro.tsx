import React, { useRef } from 'react'
import { Html } from '@react-three/drei'
import './Intro.scss'
import { useFrame } from '@react-three/fiber'
import { useSpring, animated } from 'react-spring'

export const Intro: React.FC = () => {

  const styles = useSpring({
    loop: true,
    to: async next => {
      await next({ transform: 'translateY(0rem)' });
      await next({ transform: 'translateY(1rem)' });
      await next({ transform: 'translateY(0rem)' });
    },
    from: { transform: 'translateY(-1)' },
    config: { duration: 500 },


  })

  return (
    <Html center >
      <animated.section className='intro'>
        <h1 className='intro__name'>Hello, World! My name is</h1>
        <h1 className='intro__name'>Matthew Oro</h1>
        <h1 className='intro__name'>I like to build cool things!</h1>
      </animated.section>
    </Html>
  )

}