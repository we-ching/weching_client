import { FC } from 'react';
import './App.css';
import GlobalStyle from './GlobalStyle';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';

import { MainPage } from './components/MainPage';
import { Reply } from './components/reply';
import { MyPage } from './components/mypage';
import { LandingPage } from './components/landingPage';
import { Post } from './components/post';
import { Alarm } from './components/MainPage/Alarm';
import { LoginForm } from './components/Login';
import { NotFound } from './components/NotFound';
import { Notice } from './components/notice';
import { NoticeDetail } from './components/notice/NoticeDetail';
import axios from 'axios';

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
          <Route path="/myPage" element={<MyPage />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/post" element={<Post />} />
          <Route path="/reply" element={<Reply />} />
          <Route path="/alarm" element={<Alarm />} />
          <Route path="/notice/*" element={<Notice />}>
            <Route path=":id" element={<NoticeDetail />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
