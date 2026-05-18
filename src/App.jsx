import React from 'react'
import { Toaster } from 'react-hot-toast'
import Loader from './components/Features/Loader'
import MusicPlayer from './components/Features/MusicPlayer'
import Header from './components/Layout/Header'
import Footer from './components/Layout/Footer'
import About from './components/Sections/About'
import Resume from './components/Sections/Resume'
import Skills from './components/Sections/Skills'
import Projects from './components/Sections/Projects'
import Contact from './components/Sections/Contact'

import SpotifyPlayer from './components/Features/SpotifyPlayer'
import NotFound from './components/Sections/NotFound'

import GoToTop from './components/Features/GoToTop'

function App() {
  const isBrowser = typeof window !== 'undefined';
  const path = isBrowser ? window.location.pathname : '/';

  if (path !== '/') {
    return <NotFound />;
  }

  return (
    <>
      <Toaster position="bottom-center" toastOptions={{ style: { background: '#333', color: '#fff' } }} />
      <Loader />
      <MusicPlayer />
      <GoToTop />

      <div id="page">
        <Header />
        <About />
        <Resume />
        <Skills />
        <Projects />
        <SpotifyPlayer />
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default App
