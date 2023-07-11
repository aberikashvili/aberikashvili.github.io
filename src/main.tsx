import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { ResumeContextProvider } from './store/ResumeContext';
import { ConfigurationContextProvider } from './store/ConfigurationContext';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ConfigurationContextProvider>
      <ResumeContextProvider>
        <App />
      </ResumeContextProvider>
    </ConfigurationContextProvider>
  </React.StrictMode>
);
