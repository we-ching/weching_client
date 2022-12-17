import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import * as s from './styled';

export const LoginForm = () => {
  const nicknameRef = useRef<HTMLInputElement>(null);
  const [isError, setIsError] = useState<Boolean>(true);

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const userData = { nickname: nicknameRef.current?.value };
      const res = await axios.get(`post/api/users`);
      if (res.data.email) {
        const email = res.data.email;

        await axios.post(`post/api/register`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ ...userData, email }),
        });
        /**
         * 등록된 회원이라면?
         * 서버에서 리디렉션 해주는지.
         * 회원의 닉네임을 받아서 로그인 됐음을 표시해줘야 함
         */
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <s.Container>
      <s.FormCon>
        <s.LoginTitle>환영합니다!</s.LoginTitle>
        <s.Form onSubmit={submitHandler}>
          {!isError}
          {isError && (
            <s.InputBox>
              <s.NicknameInput
                ref={nicknameRef}
                type="text"
                name="닉네임"
                placeholder="닉네임"
                minLength={2}
                maxLength={12}
              />
            </s.InputBox>
          )}
          {isError && (
            <s.SubmitBtnCon>
              <s.SubmitBtn>
                {isError && '위칭 멤버로 바로 시작해보세요!'}
              </s.SubmitBtn>
            </s.SubmitBtnCon>
          )}
          {!isError ? (
            <s.SubmitBtnCon>
              <s.GoogleImage />
              <s.SubmitBtn>구글 로그인으로 함께하기</s.SubmitBtn>
            </s.SubmitBtnCon>
          ) : null}
        </s.Form>
      </s.FormCon>
    </s.Container>
  );
};

export default LoginForm;
