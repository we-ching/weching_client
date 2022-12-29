import * as S from './styled';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { insertUser, insertSub, insertAlarm } from '../../mainSlice';
import { useAppDispatch } from '../../store/config';

import { NewMatch } from './NewMatch/NewMatch';
import { Advice } from './Advice/Advice';
import { Ranking } from './Ranking/Ranking';
import { GoToPost } from './GoToPost/GoToPost';

export const MainPage: any = () => {
  const dispatch = useAppDispatch();

  /*
https://port-0-weching-53px25lbvs1fg6.gksl2.cloudtype.app/auth/google/login
*/
  const mainRequest = async () => {
    try {
      await axios
        .get(`/api/main/user`, {
          headers: {
            authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjI0LCJlbWFpbCI6IndvZ25zMjA1QGdtYWlsLmNvbSIsInN0YXR1cyI6MCwiaWF0IjoxNjcyMjc5ODkwLCJleHAiOjE2NzIzNjI2OTB9.IZtselpL0IqEpof2ILpXlWxmS0c7NTCZlY7HysVtfic`,
          },
        })
        .then((res) => {
          dispatch(insertUser(res.data));

          const arr = res.data.posts;
          const Array = arr.filter((item: any) => {
            return item.post.isChecked == 1;
          });
          Array.length != 0
            ? dispatch(insertAlarm(Array.length))
            : console.log('isChecked가 모두 0');
        });
      await axios
        .get(`/api/main`, {
          headers: {
            authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjI0LCJlbWFpbCI6IndvZ25zMjA1QGdtYWlsLmNvbSIsInN0YXR1cyI6MCwiaWF0IjoxNjcyMjc5ODkwLCJleHAiOjE2NzIzNjI2OTB9.IZtselpL0IqEpof2ILpXlWxmS0c7NTCZlY7HysVtfic`,
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
      <S.GridLayout>
        <NewMatch />
        <GoToPost />
        <Advice />
        <Ranking />
      </S.GridLayout>
    </S.Container>
  );
};
