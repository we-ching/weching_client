import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import google from '../../assets/images/google.png';

export const LoginForm = () => {
  const nicknameRef = useRef<HTMLInputElement>(null);
  const birthRef = useRef<HTMLInputElement>(null);
  const [isError, setIsError] = useState<Boolean>(false);

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const result = await axios.post(`post/api/users`);
      const userData = {
        nickname: nicknameRef.current?.value,
        birth: birthRef.current?.value,
      };
      if (result.data.err) {
        setIsError(true);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container>
      <FormCon>
        <LoginTitle>환영합니다!</LoginTitle>
        <Form onSubmit={submitHandler}>
          {!isError}
          {isError && (
            <InputBox>
              <NicknameInput
                ref={nicknameRef}
                type="text"
                name="닉네임"
                placeholder="닉네임"
              />
              <BirthInput
                ref={birthRef}
                type="text"
                name="생년월일"
                placeholder="생년월일"
              />
            </InputBox>
          )}
          {isError && (
            <SubmitBtnCon>
              <SubmitBtn>
                {isError && '위칭 멤버로 바로 시작해보세요!'}
              </SubmitBtn>
            </SubmitBtnCon>
          )}
          {!isError ? (
            <SubmitBtnCon>
              <GoogleImage />
              <SubmitBtn>구글 로그인으로 함께하기</SubmitBtn>
            </SubmitBtnCon>
          ) : null}
        </Form>
      </FormCon>
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: gray;
  backdrop-filter: blur(10px);
`;

const FormCon = styled.div`
  text-align: center;
  background: #fff;
  width: 340px;
  padding: 20px;
  border-radius: 20px;
  outline: 1px solid black;
`;

const Form = styled.form``;

const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const NicknameInput = styled.input`
  height: 40px;
  padding: 5px 15px;
  border: none;
  border-radius: 8px;
  background-color: lightgray;
`;
const BirthInput = styled.input`
  padding: 5px 15px;
  height: 40px;
  border: none;
  border-radius: 8px;
  background-color: lightgray;
  margin-bottom: 20px;
`;

const LoginTitle = styled.p`
  padding: 10px;
  font-size: 22px;
  font-weight: 400;
`;

const SubmitBtnCon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  padding: 2px 20px;
  margin: 0 auto;
  background: #fff;
  border: 1px solid black;
  border-radius: 10px;
  :hover {
    background-color: lightgray;
  }
`;

const SubmitBtn = styled.button`
  line-height: 
  width: 100%;
  height: 55px;
  font-size: 18px;
  background-color: transparent;
  outline: none;
  border: none;
`;

const GoogleImage = styled.div`
  display: inline-block;
  background-image: url(${google});
  background-size: cover;
  width: 25px;
  height: 25px;
  margin: 0 10px;
`;
