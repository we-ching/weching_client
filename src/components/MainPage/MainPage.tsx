import { Link } from 'react-router-dom';
import * as S from './styled';

import NewMatch from './NewMatch/NewMatch';
import TodayQutoes from './TodayQuotes/TodayQuotes';
import Ranking from './Ranking/Ranking';

export default function MainPage() {
  return (
    <S.Container>
      <S.UpperNav />

      <NewMatch />

      <TodayQutoes />

      <Ranking />
      <S.LowerNav />
    </S.Container>
  );
}
