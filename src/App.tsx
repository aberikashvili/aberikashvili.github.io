import type { DrawerProps } from 'antd';

import './App.css';
import LeftColumn from './components/LeftColumn/LeftColumn';
import RightColumn from './components/RightColumn/RightColumn';
import Navbar from './components/Navbar/Navbar';
import { useContext, useState } from 'react';
import ConfigurationContext from './store/ConfigurationContext';

const App = () => {
  const [placement, setPlacement] = useState<DrawerProps['placement']>('right');

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
