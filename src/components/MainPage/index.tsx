import * as S from './styled';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { insertUser, insertSub } from '../../mainSlice';
import { useAppDispatch } from '../../store/config';
import { Posts } from '../mypage/MyPost/styled';

import { NewMatch } from './NewMatch/NewMatch';
import { Advice } from './Advice/Advice';
import { Ranking } from './Ranking/Ranking';
import { GoToPost } from './GoToPost/GoToPost';
import { NavBar } from '../NavBar/index';

export const MainPage: any = () => {
  const dispatch = useAppDispatch();
  const [nickname, setNickName] = useState<string>('');
  const mainRequest = async () => {
    try {
      await axios
        .get(`/api/main/user`, {
          headers: {
            authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjI0LCJlbWFpbCI6IndvZ25zMjA1QGdtYWlsLmNvbSIsInN0YXR1cyI6MCwiaWF0IjoxNjcyMDIyNzUwLCJleHAiOjE2NzIxMDU1NTB9.sbTWCcXyYfy_A0E_9TVAukLXZnnJFM94CfGFD-C-6wo`,
          },
        })
        .then((res) => {
          dispatch(insertUser(res.data));
          // console.log(res.data);
          setNickName(res.data.user.nickName);
        });
      await axios
        .get(`/api/main`, {
          headers: {
            authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjI0LCJlbWFpbCI6IndvZ25zMjA1QGdtYWlsLmNvbSIsInN0YXR1cyI6MCwiaWF0IjoxNjcyMDIyNzUwLCJleHAiOjE2NzIxMDU1NTB9.sbTWCcXyYfy_A0E_9TVAukLXZnnJFM94CfGFD-C-6wo`,
          },
        })
        .then((res) => {
          dispatch(insertSub(res.data));
        });
    } catch (err) {
      alert(`1. 메인에서 예기지 못한 에러가 발생했습니다.\nERROR: ${err}`);
    }
  };

  useEffect(() => {
    mainRequest();
  }, []);

  return (
    <S.Container>
      <NavBar />
      <S.UserNick>{nickname}님 반가워요!</S.UserNick>
      <NewMatch />
      <GoToPost />
      <Advice />
      <Ranking />
    </S.Container>
  );
};
