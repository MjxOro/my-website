import React from 'react'
import { Html } from '@react-three/drei'
import './Intro.scss'

export const Intro: React.FC = () => {

  return (
    <Html center>
      <section className='intro'>
        <h1 className='intro__name'>Hello, World! My name is</h1>
        <h1 className='intro__name'>Matthew Oro</h1>
        <h1 className='intro__name'>I like to build cool things!</h1>
      </section>
    </Html>
  )

}