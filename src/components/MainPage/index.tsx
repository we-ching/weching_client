import * as S from './styled';
import { useEffect } from 'react';

import { NewMatch } from './NewMatch/NewMatch';
import { Advice } from './Advice/Advice';
import { Ranking } from './Ranking/Ranking';
import { GoToPost } from './GoToPost/GoToPost';
import { AdminButton } from './AdminCheck/AdminCheck';

export const MainPage = () => {
  const mainRequest = async () => {};

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
