import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Mousetrail from './components/Mousetrail/Mousetrail';
import Maincontent from './components/MainContent/Maincontent';
import CvPage from './pages/CvPage/index.jsx';
import './App.css';
import AboutPage from './pages/AboutPage/index.jsx';
import Blog from './pages/Blog/index.jsx';
// import Projects from './pages/Projects/index.jsx';
import Contacts from './pages/Contact/index.jsx';
import MySkills from './pages/MySkill/index.jsx';
import Gallery from './pages/Gallery/index.jsx';


function App() {
  const [trail, setTrail] = useState([]);
  const [mouseIdle, setMouseIdle] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMouseIdle(false);
      setTrail(prevTrail => {
        const newTrail = [...prevTrail, { x: e.clientX, y: e.clientY }];
        if (newTrail.length > 5) newTrail.shift(); // Keep only the latest 10 positions
        return newTrail;
      });
    };

    const handleMouseIdle = () => {
      setMouseIdle(true);
    };

    window.addEventListener('mousemove', handleMouseMove);
    const idleTimeout = setTimeout(handleMouseIdle, 5);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(idleTimeout);
    };
  }, []);

  useEffect(() => {
    if (mouseIdle) {
      const timeout = setTimeout(() => setTrail([]), 200);
      return () => clearTimeout(timeout);
    }
  }, [mouseIdle]);

  return (
    <Router>
      <div className='App'>
        <Sidebar />
        {trail.map((pos, index) => (
          <Mousetrail key={index} x={pos.x} y={pos.y} />
        ))}
        <Routes>
          <Route path='/' element={<Maincontent />} />
          <Route path='/resume' element={<CvPage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='*' element={<h1>Not Found</h1>} />
          <Route path='/blog' element={<Blog/>} />
          {/* <Route path='/projects' element={<Projects/>} /> */}
          <Route path='/contact' element={<Contacts/>} />
          <Route path='/skills' element={<MySkills/>} />
          <Route path='/gallery' element={<Gallery/>} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
