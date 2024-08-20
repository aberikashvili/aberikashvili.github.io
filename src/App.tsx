import { useState } from 'react';

import './App.css';
import LeftColumn from './components/LeftColumn/LeftColumn';
import RightColumn from './components/RightColumn/RightColumn';
import Navbar from './components/Navbar/Navbar';

const App = () => {
  return (
    <>
      <Navbar />
      <div
        id="top-divider"
        style={{
          height: '10px',
          backgroundColor: '#333'
        }}></div>
      <div className="App">
        <LeftColumn />
        <RightColumn />
      </div>
    </>
  );
};

export default App;
