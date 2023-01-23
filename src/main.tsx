import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { ResumeContextProvider } from './store/ResumeContext';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ResumeContextProvider>
      <App />
    </ResumeContextProvider>
  </React.StrictMode>
);
