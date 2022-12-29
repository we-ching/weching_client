import * as S from './styled';
import { mainApiUser } from './styled';

import axios from 'axios';
import { useEffect } from 'react';
import { insertUser, insertSub, insertAlarm } from '../../mainSlice';
import { useAppDispatch } from '../../store/config';

import { NewMatch } from './NewMatch/NewMatch';
import { Advice } from './Advice/Advice';
import { Ranking } from './Ranking/Ranking';
import { GoToPost } from './GoToPost/GoToPost';
import { AdminButton } from './AdminCheck/AdminCheck';
import { getCookie } from '../Login/GoogleBtn';

export const MainPage = () => {
  const dispatch = useAppDispatch();
  const Cookies = getCookie('accessToken');

  const mainRequest = async () => {
    try {
      Cookies &&
        (await axios
          .get(`/api/main/user`, {
            headers: {
              authorization: `Bearer ${Cookies}`,
            },
          })
          .then((res) => {
            console.log(res.data);
            res.data && dispatch(insertUser(res.data));

            const arr = res.data.posts;
            const Array = arr.filter((item: mainApiUser) => {
              return item.post.isChecked == 1;
            });
            Array.length != 0
              ? dispatch(insertAlarm(Array.length))
              : console.log('isChecked가 모두 0');
          }));
    } catch (err) {
      alert(`1. 예기지 못한 에러가 발생했습니다.\nERROR: ${err}`);
    } finally {
      await axios.get(`/api/main`).then((res) => {
        dispatch(insertSub(res.data));
      });
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
        <AdminButton />
      </S.GridLayout>
    </S.Container>
  );
};
