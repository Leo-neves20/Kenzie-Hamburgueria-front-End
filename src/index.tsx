import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import GlobalStyle from './Style/globalStyle';
import MainPageContext from './context/main_page';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <MainPageContext>
      <GlobalStyle />
      <App />
    </MainPageContext>
  </React.StrictMode>
);

reportWebVitals();
