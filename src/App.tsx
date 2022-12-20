import { FC } from 'react';
import './App.css';
import GlobalStyle from './GlobalStyle';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';

import { MainPage } from './components/MainPage';
import { Reply } from './components/reply/Reply';
import { MyPage } from './components/mypage/index';
import { MyPost } from './components/mypage/MyPost';
import { LandingPage } from './components/landingPage/LandingPage';
import { Post } from './components/post/Post';
import { Alarm } from './components/MainPage/Alarm/';
import { LoginForm } from './components/Login/LoginForm';
import { NotFound } from './components/NotFound';
import { MyPostDetail } from './components/mypage/MyPost/';

const App: FC = () => {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />z
          <Route path="/home" element={<MainPage />} />
          <Route path="/myPage" element={<MyPage />} />
          <Route path="/myPage/myPost" element={<MyPost />} />
          <Route path="/myPage/myPost/:postId" element={<MyPostDetail />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/post" element={<Post />} />
          <Route path="/reply" element={<Reply />} />
          <Route path="/alarm" element={<Alarm />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
