import * as S from './styled';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useImmer } from 'use-immer';
import { NoticeList } from './NoticeList';
import { Outlet, useNavigate } from 'react-router-dom';
import { PageNumber } from './PageNumber';

type NoticeInfo = {
  totalPage: number;
  currPage: string;
  notice: [];
};

export const Notice = () => {
  const [noticeInfo, setNoticesInfo] = useImmer<NoticeInfo>({
    totalPage: 1,
    currPage: '1',
    notice: [],
  });
  const [page, setPage] = useState<number>(1);
  const navigate = useNavigate();
  const fetchNotice = async () => {
    await axios.get(`/api/notice?page=${page}`).then((res) => {
      setNoticesInfo(res.data);
    });
  };
  useEffect(() => {
    fetchNotice();
  }, [page]);
  const clickHandler = () => {
    navigate(-1);
  };
  console.log(noticeInfo);
  return (
    <div>
      <button onClick={clickHandler}>뒤로가기</button>
      <S.Container>
        <Outlet />
        <NoticeList notices={noticeInfo.notice} />
        <PageNumber totalPage={noticeInfo.totalPage} changePage={setPage} />
      </S.Container>
    </div>
  );
};
