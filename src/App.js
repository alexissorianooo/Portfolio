import React from 'react'
import Footer from './Footer'
import './css/App.css' // CSS from App.js

function App() {
  return (
    <div className="App">
      <h1>Hello, I am Alexis</h1>
      <h2>I am Frontend Web Developer</h2>
      <h3>The developer is currently doing side projects.</h3>
      <h2>Side Projects</h2>
      <ul>
        <li>Meme Generator</li>
        <li>25 + 5 Clock</li>
      </ul>
      <Footer />
    </div>
  );
}

export default App;
