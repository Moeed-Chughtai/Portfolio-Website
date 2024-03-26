import React from 'react';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import About from './components/About';
import Projects from './components/Projects';
import Hackathons from './components/Hackathons';

export default function App() {
  return (
    <div className="bg-primary">
      <Navbar />
      <Landing />
      <About />
      <Projects />
      <Hackathons />
    </div>
  )
}
