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
import { LoginForm, GuestLoginForm } from './components/Login/';
import { NotFound } from './components/NotFound';
import { NavBar } from './components/NavBar';
import { ViewMore } from './components/ViewMore';
import { Recruit } from './components/ViewMore/StaticPageRecruit';
import { About } from './components/ViewMore/StaticPageAbout';
import { MyPostDetail } from './components/mypage/MyPost/';
import { Notice } from './components/notice/Notice';
import { Bookmark } from './components/bookmark/';
import { RankingDetail } from './components/MainPage/Ranking/RankingDetail/RankingDetail';
import { Admin } from './components/admin/admin';
import { AdminNotice } from './components/admin/adminNotice/adminNotice';
import { NewNotice } from './components/admin/adminNotice/newNotice/newNotice';
import { RenewNotice } from './components/admin/adminNotice/renewNotice/renewNotice';
import { AdminReport } from './components/admin/adminReport/adminReport';

const baseURL = 'http://kdt-sw3-team09.elicecoding.com';
axios.defaults.baseURL = baseURL;

const App: FC = () => {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <Routes>
          <Route element={<NavBar />}>
            <Route path="/home" element={<MainPage />} />
            <Route path="/home/ranking" element={<RankingDetail />} />
            <Route path="/mypage" element={<MyPage />} />
            <Route path="/mypage/mypost" element={<MyPost />} />
            <Route path="/mypage/mypost/:postId" element={<MyPostDetail />} />
            <Route path="/post" element={<Post />} />
            <Route path="/reply/:id" element={<Reply />} />
            <Route path="/notice" element={<Notice />} />
            <Route path="/alarm" element={<Alarm />} />
            <Route path="/viewmore" element={<ViewMore />} />
            <Route path="/viewmore/recruit" element={<Recruit />} />
            <Route path="/viewmore/about" element={<About />} />
            <Route path="/bookmark" element={<Bookmark />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/admin/notice" element={<AdminNotice />} />
            <Route path="/admin/notice/new" element={<NewNotice />} />
            <Route path="/admin/notice/renew" element={<RenewNotice />} />
            <Route path="/admin/report" element={<AdminReport />} />
          </Route>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/login/guest" element={<GuestLoginForm />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
