import React from 'react';
import './App.css';
import Post from './components/post';
import { Reply } from './components/reply/Reply';
import GlobalStyle from './GlobalStyle';
import MyPage from './components/mypage';
import { LoginForm } from './components/Login';

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <LoginForm />
      </div>
    </>
  );
}

export default App;
