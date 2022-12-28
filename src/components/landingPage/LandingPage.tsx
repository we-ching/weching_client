import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import imgOne from '../../assets/images/Rectanglethumb.png';
import googleImg from '../../assets/images/googleLogo.png';
import arrowRight from '../../assets/images/slide swipe main page.png';
import arrowDown from '../../assets/images/slide scroll down btn.png';
import * as S from './styled';

import axios from 'axios';
import { insertUser, insertSub } from '../../mainSlice';
import { useAppDispatch } from '../../store/config';
import { useAppSelector } from '../../store/config';

export const LandingPage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const btnClickHandler = (e: any) => {
    e.preventDefault();
    navigate(`/home`);
    // navigate('./LandingPage');
  };

  // const mainRequest = async () => {
  //   try {
  //     await axios
  //       .get(`/api/main/user`, {
  //         headers: {
  //           authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjI0LCJlbWFpbCI6IndvZ25zMjA1QGdtYWlsLmNvbSIsInN0YXR1cyI6MCwiaWF0IjoxNjcyMDIyNzUwLCJleHAiOjE2NzIxMDU1NTB9.sbTWCcXyYfy_A0E_9TVAukLXZnnJFM94CfGFD-C-6wo`,
  //         },
  //       })
  //       .then((res) => {
  //         dispatch(insertUser(res.data));
  //       });
  //     await axios
  //       .get(`/api/main`, {
  //         headers: {
  //           authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjI0LCJlbWFpbCI6IndvZ25zMjA1QGdtYWlsLmNvbSIsInN0YXR1cyI6MCwiaWF0IjoxNjcyMDIyNzUwLCJleHAiOjE2NzIxMDU1NTB9.sbTWCcXyYfy_A0E_9TVAukLXZnnJFM94CfGFD-C-6wo`,
  //         },
  //       })
  //       .then((res) => {
  //         console.log(res.data);
  //         dispatch(insertSub(res.data));
  //       });
  //   } catch (err) {
  //     alert(`1. 예기지 못한 에러가 발생했습니다.\nERROR: ${err}`);
  //   }
  // };

  // useEffect(() => {
  //   mainRequest();
  // }, []);

  // const advice: any = useAppSelector((state) => {
  //   return state.mainInfo.subInfo;
  // });
  // console.log(advice.advice.author);

  return (
    <S.LandingPageContainer>
      <S.TitleContents>오늘도 당신의 가치는 빛났습니다!</S.TitleContents>
      <S.ImgOne>
        <img src={imgOne} alt="당신을 위한 엄지척" />{' '}
      </S.ImgOne>
      <S.SubContents>
        익명의 공간에서 소식을 나누고 기쁨을 나눕니다.
      </S.SubContents>
      <S.LoginBlock onClick={btnClickHandler}>
        <img src={googleImg} alt="google_logo" />
        Google 계정으로 함께하기
      </S.LoginBlock>
      <S.FoggyUnder></S.FoggyUnder>
      <S.ForeEffect>
        <img src={arrowRight} alt="오른쪽으로 밀면 메인페이지" />
        <img src={arrowDown} alt="아래로 밀어 더 많은 내용을 볼 수 있어요" />
      </S.ForeEffect>
    </S.LandingPageContainer>
  );
};
