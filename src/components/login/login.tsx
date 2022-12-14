import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface loginValue {
  nickname: String;
  birth: String;
}

export const LoginForm = () => {
  const [nickname, setNicname] = useState<String>('');
  const [birth, setBirth] = useState<String>('');

  const [isError, setIsError] = useState<Boolean>(false)
  const onChangeNickname = (e:React.ChangeEvent<HTMLInputElement>) => {
    const setNicname(e.target.value)

  }
  return (
    <div>
      <div>
        <h1>환영합니다!</h1>
        <form>
          {!isError}
          {isError && (
            <div>
              <input
                type="text"
                name="닉네임"
                value={nickname}
                onChange={onChangeNickname}
                placeholder="닉네임"
              />
              <input
                type="text"
                name="생년월일"
                value={birth}
                onChange={}
                placeholder="생년월일"
              />
            </div>
          )}
          <button></button>
        </form>
      </div>
    </div>
  );
};
