import React from 'react';

import Navbar from './components/Navbar';
import AboutPage from './components/AboutPage';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

import './stylesheets/main.css'
function App() {

  return (
    <div>
      <Navbar/>
      <AboutPage/>
      <Portfolio/>
      <Contact/>
    </div>
  )
}

export default App;
