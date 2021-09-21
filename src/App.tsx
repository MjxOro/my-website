import React, { useRef, useEffect, Suspense } from 'react';
import './App.scss';
import state from './store'
import { Canvas } from '@react-three/fiber';
import { Intro } from './components/Intro/Intro'
import { Points } from './components/Intro/Points'
import { Block, useBlock } from './components/Blocks'
import { LinkedinCube } from './components/Intro/SocialCubes'
import { Html } from '@react-three/drei';

const App: React.FC = () => {
  const scrollArea = useRef<any>()
  const onScroll = (e: any) => (state.top.current = e.target.scrollTop)
  useEffect(() => void onScroll({ target: scrollArea.current }), [])
  // const { sectionHeight, contentMaxWidth, margin } = useBlock()
  // const pos = sectionHeight - margin

  return (
    <>
      <Canvas linear orthographic camera={{ zoom: state.zoom, position: [0, 0, 500] }}>
        <Suspense fallback={<Html>loading...</Html>}>
          <Block factor={1.5} offset={0}>
            <Intro />
          </Block>
          <Block factor={2} offset={0}>
            <LinkedinCube>
              <Block factor={0.5}>
                <Html>
                  <div>POGGERS</div>
                </Html>
              </Block>
            </LinkedinCube >
          </Block>
          <Block factor={2.5} offset={0}>
            <Points />
          </Block>
        </Suspense>
      </Canvas>
      <div className='app__scroll-area' ref={scrollArea} onScroll={onScroll}>
        <div style={{ height: `${state.pages * 100}vh` }} />
      </div>

    </>
  )
}

export default App;
