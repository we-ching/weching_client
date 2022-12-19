import { Link } from 'react-router-dom';
import * as S from './styled';

import NewMatch from './NewMatch/NewMatch';
import Advice from './Advice/Advice';
import Ranking from './Ranking/Ranking';

export default function MainPage() {
  return (
    <S.Container>
      <S.UpperNav />
      <NewMatch />
      <Advice />
      <Ranking />
      <S.LowerNav />
    </S.Container>
  );
}
