import * as S from './styled';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { insertUser, insertSub, insertAlarm } from '../../mainSlice';
import { useAppDispatch } from '../../store/config';

import { NewMatch } from './NewMatch/NewMatch';
import { Advice } from './Advice/Advice';
import { Ranking } from './Ranking/Ranking';
import { GoToPost } from './GoToPost/GoToPost';
import { AdminButton } from './AdminCheck/AdminCheck';

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
            authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjI3LCJlbWFpbCI6ImxrZzcwMDA3QGdtYWlsLmNvbSIsInN0YXR1cyI6MCwiaWF0IjoxNjcyMTk1Nzk1LCJleHAiOjE2NzIyNzg1OTV9.jPVHM-PXjsFWqwT81Kjh0KRcLAJFJuce_vujYDwICWo`,
          },
        })
        .then((res) => {
          dispatch(insertUser(res.data));
          setNickName(res.data.user.nickName);

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
            authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjI3LCJlbWFpbCI6ImxrZzcwMDA3QGdtYWlsLmNvbSIsInN0YXR1cyI6MCwiaWF0IjoxNjcyMTk1Nzk1LCJleHAiOjE2NzIyNzg1OTV9.jPVHM-PXjsFWqwT81Kjh0KRcLAJFJuce_vujYDwICWo`,
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
        <S.UserNick>{nickname}님 반가워요!</S.UserNick>
        <NewMatch />
        <GoToPost />
        <Advice />
        <Ranking />
        <AdminButton />
      </S.GridLayout>
    </S.Container>
  );
};
