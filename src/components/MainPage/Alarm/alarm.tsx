import React from 'react';

import * as S from './styled';

function Alarm() {
  return (
    <S.Container>
      <S.Message>
        <S.MessageTitle>새 글 알림</S.MessageTitle>
        <S.MessageContent>매칭 글 내용</S.MessageContent>
      </S.Message>
      <S.Message>
        <S.MessageTitle>새 칭찬 알림</S.MessageTitle>
        <S.MessageContent>칭찬글 내용</S.MessageContent>
      </S.Message>
      <S.Message>
        <S.MessageTitle>칭찬 피드백</S.MessageTitle>
        <S.MessageContent>칭찬 글 내용</S.MessageContent>
      </S.Message>
      <S.Message>
        <S.MessageTitle>공지사항</S.MessageTitle>
        <S.MessageContent>새로운 공지사항</S.MessageContent>
      </S.Message>
      <S.Message>
        <S.MessageTitle>이벤트 안내</S.MessageTitle>
        <S.MessageContent>세로운 이벤트 안내</S.MessageContent>
      </S.Message>
      <S.Message>
        <S.MessageTitle>ㅇㅇㅇ님이 응답을 기다리고있어요.</S.MessageTitle>
        <S.MessageContent>
          새 글 알림 후 1일단 반응없으면 보내는 메세지
        </S.MessageContent>
      </S.Message>
    </S.Container>
  );
}

export default Alarm;
