import React from 'react'
import gsap from 'gsap'
import Navbar from './components/Navbar'
import Welcome from '#components/Welcome'
import Dock from '#components/Dock'
import { Draggable } from 'gsap/Draggable'
import Terminal from '#windows/Terminal'
import Safari from '#windows/Safari'
import ResumeWindow from '#windows/Resume'


gsap.registerPlugin(Draggable);

const App = () => {
  return (
      <main>
        <Navbar />
        <Welcome />
        <Dock />

        <Terminal />
        <Safari />
        <ResumeWindow />
      </main>
  )
}

export default App