import * as S from './styled';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useImmer } from 'use-immer';
import { NoticeList } from './NoticeList';
import { Outlet } from 'react-router-dom';

/*
TODO:  
  -[] 해당 버튼 누를 시 axios에 해당 페이지 요청

  동적 페이지 버튼생성
  - 공지사항 총 개수를 모른다면 api를 쏘고 빈배열을 응답으로 받는다면
  버튼은 해당 페이지까지만 만들고 1페이지를 다시 요청해서 보여주기
  - 공지사항 총 개수를 안다면 해당 페이지 까지 버튼을 만들고 보여주기
*/

// const PageButton = (noticeCount) => {};

export const Notice = () => {
  const [page, setPage] = useState(1);
  const [notices, setNotices] = useImmer([]);
  const fetchNotice = async () => {
    await axios.get(`/api/notice?page=${page}`).then((res) => {
      console.log(res.data);
      setNotices(res.data);
    });
  };
  useEffect(() => {
    fetchNotice();
  }, [page]);
  return (
    <div>
      <S.Container>
        <Outlet />
        <NoticeList notices={notices} />
      </S.Container>
      <button>1</button>
    </div>
  );
};
