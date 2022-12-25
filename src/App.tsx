import { FC } from 'react';
import './App.css';
import GlobalStyle from './GlobalStyle';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import axios from 'axios';

import { MainPage } from './components/MainPage';
import { Reply } from './components/reply/Reply';
import { MyPage } from './components/mypage';
import { MyPost } from './components/mypage/MyPost';
import { LandingPage } from './components/landingPage/LandingPage';
import { Post } from './components/post/Post';
import { Alarm } from './components/MainPage/Alarm/alarm';
import { LoginForm } from './components/Login/LoginForm';
import { NotFound } from './components/NotFound';
import { NavBar } from './components/NavBar';
import { ViewMore } from './components/ViewMore';
import { Recruit } from './components/ViewMore/StaticPageRecruit';
import { About } from './components/ViewMore/StaticPageAbout';
import { MyPostDetail } from './components/mypage/MyPost/';
import { Notice } from './components/notice/Notice';

const baseURL = 'http://34.64.156.157';
axios.defaults.baseURL = baseURL;
// axios.defaults.withCredentials = true;
axios.defaults.headers['Access-Control-Allow-Origin'] = '*';

const App: FC = () => {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<MainPage />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/mypage/mypost" element={<MyPost />} />
          <Route path="/mypage/mypost/:postId" element={<MyPostDetail />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/post" element={<Post />} />
          <Route path="/reply" element={<Reply />} />
          <Route path="/reply/:itemId" element={<Reply />} />
          <Route path="/alarm" element={<Alarm />} />
          <Route path="/viewmore" element={<ViewMore />} />
          <Route path="/viewmore/recruit" element={<Recruit />} />
          <Route path="/viewmore/about" element={<About />} />
          <Route path="/notice" element={<Notice />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <NavBar />
      </div>
    </>
  );
};

export default App;
