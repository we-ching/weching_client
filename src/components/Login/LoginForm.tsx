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
  const url = `http://weching.shop`;
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
      const userData = { nickName: nicknameRef.current?.value.trim() };
      await axios.post(
        `/api/main/checkName`,
        { ...userData },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
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
        .then(() => {
          getAcessToken();
        });
    } catch (err: any) {
      alert(`${err.response.data.message}`);
    }
  };

  return (
    <S.Container>
      <S.FormCon>
        <div style={{ height: '50' }}>
          <img src="/logo.png" width={55} alt="위칭 메인 로고" />
        </div>
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
