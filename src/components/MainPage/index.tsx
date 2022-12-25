import * as S from './styled';
import axios from 'axios';
import { useState, useEffect } from 'react';

import { NewMatch } from './NewMatch/NewMatch';
import { Advice } from './Advice/Advice';
import { Ranking } from './Ranking/Ranking';
import { NewReview } from './NewReview/NewReview';

export const MainPage: any = () => {
  const [nickname, setNickName] = useState('');
  const [matchPost, setMatchPost] = useState<any>([]);
  const [rcvReview, setrcvReview] = useState<any>({});
  const [token, setToken] = useState<string>('');

  /*
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjI0LCJlbWFpbCI6IndvZ25zMjA1QGdtYWlsLmNvbSIsInN0YXR1cyI6MCwiaWF0IjoxNjcxNzgwNDEzLCJleHAiOjE2NzE4NjMyMTN9.RGEwgN1FO-lGSHCnbRcJEFksNXD80kLr9fH8aD2ysHY     */

  const mainRequest = async () => {
    try {
      const res: any = await axios.get(`/api/main`, {
        headers: {
          authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjI3LCJlbWFpbCI6ImxrZzcwMDA3QGdtYWlsLmNvbSIsInN0YXR1cyI6MCwiaWF0IjoxNjcxOTQyMzMxLCJleHAiOjE2NzIwMjUxMzF9.SnT2r8nVQZPm8oQxCfDGsMNDU7DNhErTFDGi2r6JFVQ`,
        },
      });

      console.log(res.data.headers);
      setNickName(res.data.user.nickname);
      setMatchPost([...matchPost, ...res.data.todoReview]);
      setrcvReview({ ...rcvReview, ...res.data });
    } catch (err) {
      alert(`1. 예기지 못한 에러가 발생했습니다.\nERROR: ${err}`);
    }
  };
  console.log(rcvReview);
  const isLogined = async () => {
    try {
      const res = await axios.get(`/auth/google/login`, {
        headers: {
          authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjI0LCJlbWFpbCI6IndvZ25zMjA1QGdtYWlsLmNvbSIsInN0YXR1cyI6MCwiaWF0IjoxNjcxNzY0MjgxLCJleHAiOjE2NzE4NDcwODF9.NMQyUuN9dPQGxpBxM5AEEV0jMnpe4cn8rXbJ4xdVY4c`,
        },
      });
      let jwtToken = res.data.accessToken;
      jwtToken = '';
      jwtToken ? setToken(jwtToken) : null;
    } catch (err) {
      alert(`2.예기지 못한 에러가 발생했습니다.\nERROR: ${err}`);
    }
  };

  useEffect(() => {
    mainRequest();
    isLogined();
  }, []);
  return (
    <S.Container>
      <S.UserNick>{token ? nickname : '방문자'}님 반가워요!</S.UserNick>
      <NewMatch props={matchPost} />
      {/* <NewReview props={rcvReview} /> */}
      <Advice />
      <Ranking />
    </S.Container>
  );
};
