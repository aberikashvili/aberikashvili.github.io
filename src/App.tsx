import { Drawer } from 'antd';
import type { DrawerProps, RadioChangeEvent } from 'antd';

import './App.css';
import LeftColumn from './components/LeftColumn/LeftColumn';
import RightColumn from './components/RightColumn/RightColumn';
import Navbar from './components/Navbar/Navbar';
import { useState } from 'react';

const App = () => {
  // const [open, setOpen] = useState<boolean>(false);
  const [placement, setPlacement] = useState<DrawerProps['placement']>('right');

  // const showDrawer = () => {
  //   setOpen(true);
  // };

  // const onClose = () => {
  //   setOpen(false);
  // };

  // const onChange = (e: RadioChangeEvent) => {
  //   setPlacement(e.target.value);
  // };

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
        {/* <Drawer
          title="Basic Drawer"
          placement="right"
          closable={false}
          onClose={onClose}
          open={open}
          getContainer={false}
          drawerStyle={{
            position: 'relative'
          }}>
          <p>Some contents...</p>
        </Drawer> */}
      </div>
    </>
  );
};

export default App;
