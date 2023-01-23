import { useState } from 'react';

import './App.css';
import LeftColumn from './components/LeftColumn/LeftColumn';
import RightColumn from './components/RightColumn/RightColumn';

const App = () => {
  return (
    <div className="App">
      <LeftColumn />
      <RightColumn />
    </div>
  );
};

export default App;
