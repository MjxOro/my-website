import React from 'react'
import './About.scss'
import { useBlock } from '../Blocks'
import { Html } from '@react-three/drei'
import { Plane } from '../Plane'
import { useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three'


export const About: React.FC<any> = () => {
  const { mobile, contentMaxWidth, margin } = useBlock()
  const mobileScale: Array<number> = [(contentMaxWidth - margin) / 1.8, (contentMaxWidth - margin) / 2, 1]
  const normalScale: Array<number> = [4.5, 4, 1]
  const largeScale: Array<number> = [5, 4.5, 1]
  const map = useLoader(TextureLoader, './pfp.jpg')

  return (
    <group>
      <Html
        position={mobile ? [-1.25, 3.25, 1] : window.innerWidth < 1280 ? [1.25, 4, 1] : [4, 3, 1]}
        className='about'
      >
        <figure className='about__wrapper'>
          <img src='./pfp.jpg' alt="img of me" className="about__img" />
        </figure>
      </Html>
      <Html className="about" center={mobile ? true : false} position={mobile ? null : window.innerWidth < 1280 ? [-4.5, 4, 1] : [-7.5, 2.25, 1]} >
        <p className="about__description">
          Hello, world! My name is Matthew Oro and I enjoy building cool things
          on the internet. Although I'm still new to this game, I am learning
          and building new things to make my life easier and explore my creativity through developing
          websites.</p>
      </Html>
      <Html className="about" position={mobile ? [-1.5, -1, 1] : window.innerWidth < 1280 ? [-4.5, -1, 1] : [-7.5, -1.25, 1]} >
        <p className="about__text">Tech I use to develop:</p>
        <div className="about__skill-wrapper">
          <ul className="about__skill-list">
            <li className="about__skill">
              JavaScript/TypeScript
            </li>
            <li className="about__skill">
              CSS/SASS
            </li>
            <li className="about__skill">
              Webpack
            </li>
          </ul>
          <ul className="about__skill-list">
            <li className="about__skill">
              React
            </li>
            <li className="about__skill">
              Node.js
            </li>
            <li className="about__skill">
              SQL/NoSQL
            </li>
          </ul>
        </div>
      </Html>
    </group >
  )
}
