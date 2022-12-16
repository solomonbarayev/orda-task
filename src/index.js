import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import { LanguageProvider } from './context/LanguageProvider';
import { FormProvider } from './context/FormProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LanguageProvider>
      <FormProvider>
        <App />
      </FormProvider>
    </LanguageProvider>
  </React.StrictMode>
);
