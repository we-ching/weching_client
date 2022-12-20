import * as S from './styled';
import { useEffect } from 'react';
import axios from 'axios';
import { useImmer } from 'use-immer';
import { NoticeList } from './NoticeList';
import { Outlet } from 'react-router-dom';

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
        <Outlet />
        <NoticeList notices={notices} />
      </S.Container>
    </div>
  );
};
