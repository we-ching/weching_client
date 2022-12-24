import * as S from './styled';
import React from 'react';
import { useState } from 'react';

interface NoticesProps {
  id: string;
  title: string;
  content: string;
}

interface NoticeListProps {
  notices: NoticesProps[];
}

interface NoticeProps {
  notice: NoticesProps;
}

const Notice: React.FC<NoticeProps> = ({ notice }) => {
  const [isOpen, setisOpen] = useState(false);
  return (
    <S.Message onClick={() => setisOpen(!isOpen)}>
      <S.MessageTitle>{notice.title}</S.MessageTitle>
      <S.MessageContent>{isOpen && notice.content}</S.MessageContent>
    </S.Message>
  );
};

export const NoticeList: React.FC<NoticeListProps> = ({ notices }) => {
  const noticeBlock = notices.map((notice) => {
    return <Notice key={notice.id} notice={notice} />;
  });
  return <ul>{noticeBlock}</ul>;
};
