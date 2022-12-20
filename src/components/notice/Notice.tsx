import * as S from './styled';
import React, { useEffect } from 'react';
import axios from 'axios';
import { useImmer } from 'use-immer';

/*
-[x] 받아온 공지사항 수 만큼 배열 돌면서 랜더링
*/

interface noticesProps {
  notices: any[];
}

const NoticeList: React.FC<noticesProps> = ({ notices }) => {
  const noticeBlock = notices.map((notice) => {
    return (
      <S.Message key={notice.id}>
        <S.MessageTitle>{notice.title}</S.MessageTitle>
        <S.MessageContent>{notice.content}</S.MessageContent>
      </S.Message>
    );
  });
  return <ul>{noticeBlock}</ul>;
};

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
        <NoticeList notices={notices} />
      </S.Container>
    </div>
  );
};
