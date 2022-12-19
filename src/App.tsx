import React from 'react';
import './App.css';
import Post from './components/post';
import { Reply } from './components/reply/Reply';
import MyPage from './components/mypage';
import GlobalStyle from './GlobalStyle';
import { MyPost } from './components/mypage/MyPost';

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <MyPost />
      </div>
    </>
  );
}

export default App;
