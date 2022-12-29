import React, { useState } from 'react';
import { useNavigate, Router, Route } from 'react-router-dom';
import { Recruit } from './StaticPageRecruit';
import * as S from './styled';
import { removeCookie } from '../Login/GoogleBtn';

export const ViewMore = () => {
  const navigate = useNavigate();
  const INVITELINK = location.host;

  const clipCopy = (text: string) => {
    if (navigator.clipboard) {
      navigator.clipboard
        .writeText(text)
        .then(() => {
          alert('클립보드에 복사되었습니다. \n친구에게 알려보세요.');
        })
        .catch(() => {
          alert('다시 시도해주세요.');
        });
    }
  };

  return (
    <S.BackGround>
      <S.MenuContainer>
        <S.MenuBox
          onClick={() => {
            navigate('/notice');
          }}
        >
          공지사항
        </S.MenuBox>
        <S.MenuBox
          onClick={() => {
            navigate('/home/ranking');
          }}
        >
          랭킹
        </S.MenuBox>
        <S.MenuBox
          onClick={() => {
            navigate('/*');
          }}
        >
          FAQs
        </S.MenuBox>
        <S.MenuBox
          onClick={() => {
            clipCopy(INVITELINK);
          }}
        >
          친구 초대
        </S.MenuBox>
        <S.MenuBox
          onClick={() => {
            navigate('/viewmore/recruit');
          }}
        >
          채용
        </S.MenuBox>
        <S.MenuBox
          onClick={() => {
            navigate('/viewmore/about');
          }}
        >
          서비스 정보
        </S.MenuBox>
        <S.MenuBox
          onClick={() => {
            removeCookie('accessToken');
            removeCookie('navNick');
            sessionStorage.removeItem('myText');
            alert('다음에 다시 만나요!');
            navigate('/');
          }}
        >
          로그아웃
        </S.MenuBox>
      </S.MenuContainer>
    </S.BackGround>
  );
};
