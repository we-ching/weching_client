import React from 'react';
import './App.css';
import { MainPage } from './components/MainPage';
import Post from './components/post';
import { Reply } from './components/reply/Reply';
import GlobalStyle from './GlobalStyle';

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <MainPage />
      </div>
    </>
  );
}

export default App;
