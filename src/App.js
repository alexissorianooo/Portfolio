import React from 'react'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Projects from './components/Projects'

function App() {
  return (
      <div className='relative flex flex-col h-full w-full bg-dark'>
        <Navbar />
          <Home />
          <Projects />
        <Footer />
      </div>
  );
}

export default App;
