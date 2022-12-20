import * as S from './styled';
import { useEffect } from 'react';
import axios from 'axios';
import { useImmer } from 'use-immer';
import { NoticeList } from './NoticeList';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { NoticeDetail } from './NoticeDetail';

/*
-[x] 받아온 공지사항 수 만큼 배열 돌면서 랜더링
*/

export const Notice = () => {
  const [notices, setNotices] = useImmer([]);
  const fetchNotice = async () => {
    await axios.get('/api/notice').then((res) => {
      console.log(res.data);
      setNotices(res.data);
    });
  };
  useEffect(() => {
    fetchNotice();
  }, []);
  return (
    <div>
      <S.Container>
        <Routes>
          <Route path=":id" element={<NoticeDetail />} />
        </Routes>
        <NoticeList notices={notices} />
      </S.Container>
    </div>
  );
};
