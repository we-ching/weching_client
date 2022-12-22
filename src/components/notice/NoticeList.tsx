import * as S from './styled';
import React from 'react';
import { Link } from 'react-router-dom';

interface noticesProps {
  notices: any[];
}

export const NoticeList: React.FC<noticesProps> = ({ notices }) => {
  const noticeBlock = notices.map((notice) => {
    return (
      <S.Message key={notice.id}>
        <Link to={`/notice/${notice.id}`}>
          <S.MessageTitle>{notice.title}</S.MessageTitle>
          <S.MessageContent>{notice.content}</S.MessageContent>
        </Link>
      </S.Message>
    );
  });
  return <ul>{noticeBlock}</ul>;
};
