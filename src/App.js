import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import Home from './Home'
import Projects from './Projects'

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
