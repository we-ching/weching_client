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

  /*
https://port-0-weching-53px25lbvs1fg6.gksl2.cloudtype.app/auth/google/login
*/

  const mainRequest = async () => {
    try {
      await axios
        .get(`/api/main/user`, {
          headers: {
            authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjI0LCJlbWFpbCI6IndvZ25zMjA1QGdtYWlsLmNvbSIsInN0YXR1cyI6MCwiaWF0IjoxNjcyMTA5ODg5LCJleHAiOjE2NzIxOTI2ODl9.YlFfTVxFFUsLZHibogJtJ99uKaZtmUtTBsSL2-boem0`,
          },
        })
        .then((res) => {
          dispatch(insertUser(res.data));

          setNickName(res.data.user.nickName);
        });
      await axios
        .get(`/api/main`, {
          headers: {
            authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjI0LCJlbWFpbCI6IndvZ25zMjA1QGdtYWlsLmNvbSIsInN0YXR1cyI6MCwiaWF0IjoxNjcyMTA5ODg5LCJleHAiOjE2NzIxOTI2ODl9.YlFfTVxFFUsLZHibogJtJ99uKaZtmUtTBsSL2-boem0`,
          },
        })
        .then((res) => {
          dispatch(insertSub(res.data));
        });
    } catch (err) {
      alert(`1. 예기지 못한 에러가 발생했습니다.\nERROR: ${err}`);
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
