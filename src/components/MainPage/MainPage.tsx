import * as S from './styled';
import axios from 'axios';
import { useState } from 'react';

import { NewMatch } from './NewMatch/NewMatch';
import { Advice } from './Advice/Advice';
import { Ranking } from './Ranking/Ranking';

export const MainPage: any = () => {
  const [nickname, setNickName] = useState('');
  const [matchPost, setMatchPost] = useState([]);

  const submitHandler = async (e: any) => {
    e.preventDefault();
    try {
      const res: any = await axios.get(`/api/main`);

      setNickName(res.data.user.nickname);
      setMatchPost(res.data.todoReview);
    } catch (err) {
      alert(`예기지 못한 에러가 발생했습니다.\nERROR: ${err}`);
    }
  };
  console.log(matchPost);

  return (
    <S.Container>
      <S.UpperNav />
      <S.UserInfo onClick={submitHandler}>{nickname}님 반가워요!</S.UserInfo>
      <NewMatch props={matchPost}></NewMatch>
      <Advice />
      <Ranking />
      <S.LowerNav />
    </S.Container>
  );
};
