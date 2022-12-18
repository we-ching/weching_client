import React from 'react';
import './App.css';
import Post from './components/post';
import { Reply } from './components/reply/Reply';
import GlobalStyle from './GlobalStyle';
import { LoginForm } from './components/Login';
import MainPage from './components/MainPage/MainPage';

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <Reply />
      </div>
    </>
  );
}

export default App;
