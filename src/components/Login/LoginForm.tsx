import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './styled';
import axios from 'axios';
import { useAppSelector } from '../../store/config';
import { setCookie } from './GoogleBtn';

export const LoginForm = () => {
  const gEmail = useAppSelector((state) => {
    return state.myPost.getGoogleEmail;
  });

  const navigate = useNavigate();
  const nicknameRef = useRef<HTMLInputElement>(null);

  const getAcessToken = async () => {
    await axios
      .post(
        `/api/login`,
        { email: gEmail },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
      .then((res) => {
        const jwtToken = res.data.accessToken;
        setCookie('accessToken', jwtToken);
        navigate('/home');
      });
  };

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const userData = { nickName: nicknameRef.current?.value };
      await axios
        .post(
          `/api/guest`,
          {
            ...userData,
            email: gEmail,
          },
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        )
        .then((res) => {
          getAcessToken();
        });
    } catch (err) {
      alert(`예기지 못한 에러가 발생했습니다.\nERROR: ${err}`);
    }
  };

  return (
    <S.Container>
      <S.FormCon>
        <S.LoginTitle>환영합니다!</S.LoginTitle>
        <S.Form onSubmit={submitHandler}>
          <S.InputBox>
            <S.NicknameInput
              ref={nicknameRef}
              type="text"
              name="닉네임"
              placeholder="닉네임"
              minLength={2}
              maxLength={12}
            />
          </S.InputBox>
          <S.SubmitBtnCon>
            <S.GoogleImage />
            <S.SubmitBtn>지금 바로 시작 하기</S.SubmitBtn>
          </S.SubmitBtnCon>
        </S.Form>
      </S.FormCon>
    </S.Container>
  );
};
