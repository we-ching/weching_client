import { FC } from 'react';
import './App.css';
import GlobalStyle from './GlobalStyle';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';

import { MainPage } from './components/MainPage';
import { Reply } from './components/reply/Reply';
import { MyPage } from './components/mypage/index';
import { LandingPage } from './components/landingPage/LandingPage';
import { Post } from './components/post/Post';
import { Alarm } from './components/MainPage/Alarm/alarm';
import { LoginForm } from './components/Login/LoginForm';
import { NotFound } from './components/NotFound';
import { ViewMore } from './components/ViewMore';

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
          <Route path="/viewMore" element={<ViewMore />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
