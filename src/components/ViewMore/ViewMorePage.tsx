import React, { useState } from 'react';
import { useNavigate, Router, Route } from 'react-router-dom';
import { Recruit } from './StaticPageRecruit';
import * as S from './styled';
import { removeCookie } from '../Login/GoogleBtn';

export const ViewMore = () => {
  const navigate = useNavigate();
  const INVITELINK = location.host;

  const cliping = ():any => {
    if (navigator.share) {
      navigator.share({
        title: '친구 초대',
        text: "친구 초대",
        url: 'http://kdt-sw3-team09.elicecoding.com/',
      });
    } else {
      alert('모바일 웹에서만 사용가능한 기능입니다.');
    }
  }

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
            cliping();
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
