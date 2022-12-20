import * as S from './styled';
import React from 'react';

interface noticesProps {
  notices: any[];
}

export const NoticeList: React.FC<noticesProps> = ({ notices }) => {
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
