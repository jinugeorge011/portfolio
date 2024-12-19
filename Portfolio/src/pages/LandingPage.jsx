import React from 'react';
import Hero from './Hero';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import 'tailwindcss/tailwind.css';
import Nav from './Nav';
import './LandingPage.css'

function LandingPage() {
  return (
    <div className='section w-full flex flex-col items-center'>
      <Hero />
      <Nav/>
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default LandingPage;
