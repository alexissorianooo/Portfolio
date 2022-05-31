import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import Home from './Home'
import Projects from './Projects'


import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'


function App() {
  return (
    <Router>
      <div className='relative flex flex-col'>
        <Navbar />
          <div className=' h-auto bg-white'>
            <Routes>
              <Route path="/portfolio/" element={<Home />}></Route>
              <Route path="/portfolio/projects/" element={<Projects />}></Route>
            </Routes>
          </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
