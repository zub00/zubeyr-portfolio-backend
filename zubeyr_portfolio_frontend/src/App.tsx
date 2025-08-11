import React, { useRef } from 'react';
import './index.css';
import Header from './components/header';
import Projects from './components/projects';
import Hobbies from './components/hobbies';
import ContactMe from './components/contactme';
import ThemeToggle from './components/themetoggle';

const App: React.FC = () => {
  const homeRef = useRef<HTMLDivElement>(null);
  const contactMeRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const hobbiesRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-custom-light-gradient dark:bg-custom-dark-gradient min-h-screen text-gray-900 dark:text-gray-200">
      <nav className="bg-custom-light-gradient dark:bg-custom-dark-gradient min-h text-gray-900 dark:text-gray-200 py-4 shadow-md fixed w-full z-10">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white">Zubeyr Guled</h1>
          <div className="flex items-center">
            <button onClick={() => scrollToSection(homeRef)} className="mx-2 text-white hover:bg-purple-800 py-2 px-4 rounded transition duration-300">Home</button>
            <button onClick={() => scrollToSection(projectsRef)} className="mx-2 text-white hover:bg-purple-800 py-2 px-4 rounded transition duration-300">Projects</button>
            <button onClick={() => scrollToSection(hobbiesRef)} className="mx-2 text-white hover:bg-purple-800 py-2 px-4 rounded transition duration-300">Hobbies</button>
            <button onClick={() => scrollToSection(contactMeRef)} className="mx-2 text-white hover:bg-purple-800 py-2 px-4 rounded transition duration-300">Contact Me</button>
            <ThemeToggle />
          </div>
        </div>
      </nav>

      <div ref={homeRef} className="pt-16">
        <Header scrollToContactMe={() => scrollToSection(contactMeRef)} />
      </div>
  
      <div ref={projectsRef}>
        <Projects />
      </div>
      <div ref={hobbiesRef}>
        <Hobbies />
      </div>
      <div ref={contactMeRef}>
        <ContactMe />
      </div>
    </div>
  );
};



    
export default App;
