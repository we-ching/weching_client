import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import * as S from './styled';

export const LoginForm = () => {
  const navigate = useNavigate();
  const url = `https://port-0-weching-53px25lbvs1fg6.gksl2.cloudtype.app`;
  const nicknameRef = useRef<HTMLInputElement>(null);
  const [isRegisteredUser, setIsRegisteredUser] = useState<Boolean>(true);
  const [token, setToken] = useState<string>('');

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const userData = { nickname: nicknameRef.current?.value };
      const res = await axios.get(`/auth/google/login`);
      console.log(res);
      const jwtToken = res.data.accessToken;
      jwtToken ? setToken(jwtToken) : null;
      if (res.data.email) {
        const email = res.data.emailId;
        /**
         * todo: 회원가입 후 재 로그인해야 토큰 받을 수 있음.
         * 서버에서 리디렉션을 로그인주소로 보내주면 될 듯 함
         * 동일한 닉네임일경우
         * 중복 검사버튼
         */
        await axios
          .post(`/api/guest`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ ...userData, email }),
          })
          .then(() => {
            navigate(`/home`);
          });
      }
    } catch (err) {
      alert(`예기지 못한 에러가 발생했습니다.\nERROR: ${err}`);
    }
  };

  return (
    <S.Container>
      <S.FormCon>
        <S.LoginTitle>환영합니다!</S.LoginTitle>
        <S.Form onSubmit={submitHandler}>
          {!isRegisteredUser}
          {isRegisteredUser === false ? (
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
          ) : null}
          {isRegisteredUser === false ? (
            <S.SubmitBtnCon>
              <S.SubmitBtn>위칭 멤버로 바로 시작해보세요!</S.SubmitBtn>
            </S.SubmitBtnCon>
          ) : (
            <S.SubmitBtnCon>
              <S.GoogleImage />
              <S.SubmitBtn>구글 로그인으로 함께하기</S.SubmitBtn>
            </S.SubmitBtnCon>
          )}
        </S.Form>
      </S.FormCon>
    </S.Container>
  );
};
