import React, { useRef, useEffect, Suspense } from 'react';
import './App.scss';
import state from './store'
import { Canvas } from '@react-three/fiber';
import { Intro } from './components/Intro/Intro'
import { Points } from './components/Intro/Points'
import { Block } from './components/Blocks'
import { Html, Stars } from '@react-three/drei';
import { Transition } from './components/Transition'
import { About } from './components/About/About'
import { Cards, Projects, Filler } from './components/Projects/Projects'
import { Contacts } from './components/Contact/Contact'
import { PlaneTransition } from './components/PlaneTransition'
const App: React.FC = () => {
  const scrollArea = useRef<any>()
  const onScroll = (e: any) => (state.top.current = e.target.scrollTop)
  useEffect(() => void onScroll({ target: scrollArea.current }), [])

  return (
    <>
      <Canvas linear orthographic camera={{ zoom: state.zoom, position: [0, 0, 500] }}>
        <Suspense fallback={<Html>loading...</Html>}>
          <Stars radius={50} depth={30} count={50000} factor={5} saturation={3} fade />
          {/* Page 1 - INTRO */}
          <Block factor={3} offset={0}>
            <Intro />
          </Block>
          <Block factor={-3} offset={0}>
            <Points />
          </Block>
          {/* Page 2 - ABOUT */}
          <Block factor={-7.5} offset={1}>
            <Transition color={'#0B0C10'} />
          </Block>
          <Block factor={2} offset={1}>
            <About />
          </Block>
          {/* Page 3 - PROJECTS */}
          <Block factor={-5} offset={2}>
            <PlaneTransition color={'#00222D'} />
          </Block>
          <Block factor={2} offset={2}>
            <Cards />
            <Projects />
          </Block>
          <Block factor={3} offset={3}>
            <PlaneTransition color={'#0B0C10'} />
          </Block>
          <Block factor={-5} offset={3}>
            <Filler />
          </Block>
          <Block factor={-3} offset={4}>
            <Contacts />
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
