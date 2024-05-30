import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar'; // Ensure Sidebar is in the correct path
import Mousetrail from './components/Mousetrail/Mousetrail'; // Ensure Mousetrail is in the correct path
import MainContent from './components/MainContent/MainContent';
import './App.css';

function App() {
  const [trail, setTrail] = useState([]);
  const [mouseIdle, setMouseIdle] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMouseIdle(false);
      const newTrail = [...trail, { x: e.clientX, y: e.clientY }];
      if (newTrail.length > 20) newTrail.shift(); // Keep only the latest 10 positions
      setTrail(newTrail);
    };

    const handleMouseIdle = () => {
      setMouseIdle(true);
    };

    window.addEventListener('mousemove', handleMouseMove);
    const idleTimeout = setTimeout(handleMouseIdle, 500);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(idleTimeout);
    };
  }, [trail]);

  useEffect(() => {
    if (mouseIdle) {
      const timeout = setTimeout(() => setTrail([]), 200);
      return () => clearTimeout(timeout);
    }
  }, [mouseIdle]);

  return (
    <div className='App'>
      <Sidebar />
      {trail.map((pos, index) => (
        <Mousetrail key={index} x={pos.x} y={pos.y} />
      ))}
      <MainContent />
    </div>
    
  );
}

export default App;