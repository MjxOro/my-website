import React, { useRef, useEffect, Suspense } from 'react';
import './App.scss';
import state from './store'
import { Canvas } from '@react-three/fiber';
import { Intro } from './components/Intro/Intro'
import { Points } from './components/Intro/Points'
import { Block } from './components/Blocks'
import { LinkedinCube } from './components/Intro/SocialCubes'
import { Html } from '@react-three/drei';
import { Transition } from './components/Transition'
import { About } from './components/About/About'
import { Cards, Projects, ProjectTransition } from './components/Projects/Projects'
const App: React.FC = () => {
  const scrollArea = useRef<any>()
  const onScroll = (e: any) => (state.top.current = e.target.scrollTop)
  useEffect(() => void onScroll({ target: scrollArea.current }), [])

  return (
    <>
      <Canvas linear orthographic camera={{ zoom: state.zoom, position: [0, 0, 500] }}>
        <Suspense fallback={<Html>loading...</Html>}>
          {/* Page 1 - INTRO */}
          <Block factor={3} offset={0}>
            <Intro />
          </Block>
          <Block factor={2} offset={0}>
            <LinkedinCube />
          </Block>
          <Block factor={-3} offset={0}>
            <Points />
          </Block>
          {/* Page 2 - ABOUT */}
          <Block factor={-7.5} offset={1}>
            <Transition />
          </Block>
          <Block factor={2} offset={1}>
            <About />
          </Block>
          {/* Page 3 - PROJECTS */}
          <Block factor={-5} offset={2}>
            <ProjectTransition />
          </Block>
          <Block factor={2} offset={2}>
            <Cards />
            <Projects />
          </Block>

        </Suspense>
      </Canvas>

      {/* Scroll Effect  */}
      <div className='app__scroll-area' ref={scrollArea} onScroll={onScroll}>
        <div style={{ height: `${state.pages * 100}vh` }} />
      </div>

    </>
  )
}

export default App;
