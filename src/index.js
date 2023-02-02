import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { UserProvider } from './components/contexts/UserContexts';
import { ArticleProvider } from './components/contexts/ArticleContexts';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <ArticleProvider>
      <UserProvider>
        <App />
      </UserProvider>
    </ArticleProvider>
  </BrowserRouter>
);
