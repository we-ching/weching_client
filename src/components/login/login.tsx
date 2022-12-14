import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import google from '../../assets/images/google.png';
import e from 'express';

export const LoginForm = () => {
  const [nickname, setNicname] = useState<string>('');
  const [birth, setBirth] = useState<string>('');

  const [isError, setIsError] = useState<Boolean>(true);
  const onChangeNickname = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNicname(e.target.value);
  };

  const onChangeBirth = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBirth(e.target.value);
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    useEffect(() => {});
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
                type="text"
                name="닉네임"
                value={nickname}
                onChange={onChangeNickname}
                placeholder="닉네임"
              />
              <BirthInput
                type="text"
                name="생년월일"
                value={birth}
                onChange={onChangeBirth}
                placeholder="생년월일"
              />
            </InputBox>
          )}
          <SubmitBtnCon>
            <GoogleImage />
            <SubmitBtn>Google 계정으로 함께하기</SubmitBtn>
          </SubmitBtnCon>
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
