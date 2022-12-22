import * as S from './styled';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useImmer } from 'use-immer';
import { NoticeList } from './NoticeList';
import { Outlet, useNavigate } from 'react-router-dom';

/*
TODO:  
  -[] 해당 버튼 누를 시 axios에 해당 페이지 요청

  동적 페이지 버튼생성
  - 공지사항 총 개수를 안다면 해당 페이지 까지 버튼을 만들고 보여주기
*/

// const PageButton = (noticeCount) => {};

export const Notice = () => {
  const [page, setPage] = useState(2);
  const [notices, setNotices] = useImmer([]);
  const navigate = useNavigate();
  const fetchNotice = async () => {
    await axios.get(`/api/notice?page=${page}`).then((res) => {
      console.log(res.data);
      setNotices(res.data);
    });
  };
  useEffect(() => {
    fetchNotice();
  }, [page]);
  const clickHandler = () => {
    navigate(-1);
  };
  return (
    <div>
      <button onClick={clickHandler}>뒤로가기</button>
      <S.Container>
        <Outlet />
        <NoticeList notices={notices} />
      </S.Container>
      <button>1</button>
    </div>
  );
};
