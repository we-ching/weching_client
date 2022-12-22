import * as S from './styled';
import axios from 'axios';
import { useState, useEffect } from 'react';

import { NewMatch } from './NewMatch/NewMatch';
import { Advice } from './Advice/Advice';
import { Ranking } from './Ranking/Ranking';

export const MainPage: any = () => {
  const [nickname, setNickName] = useState('');
  const [matchPost, setMatchPost] = useState<any>([]);

  const submitHandler = async () => {
    // e.preventDefault();
    try {
      const res: any = await axios.get(`/api/main`, {
        headers: {
          authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjI0LCJlbWFpbCI6IndvZ25zMjA1QGdtYWlsLmNvbSIsInN0YXR1cyI6MCwiaWF0IjoxNjcxNzExMDc2LCJleHAiOjE2NzE3MTQ2NzZ9.Pom6wGrLCmoPbTU9EcXgCItWSwt6hxlaa40Rlq35G20`,
        },
      });

      setNickName(res.data.user.nickname);
      setMatchPost([...matchPost, ...res.data.todoReview]);
    } catch (err) {
      alert(`예기지 못한 에러가 발생했습니다.\nERROR: ${err}`);
    }
  };

  useEffect(() => {
    submitHandler();
  }, []);
  return (
    <S.Container>
      <S.UserNick>{nickname}님 반가워요!</S.UserNick>
      <NewMatch props={matchPost} />
      <Advice />
      <Ranking />
    </S.Container>
  );
};
