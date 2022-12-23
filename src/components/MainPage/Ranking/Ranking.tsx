import * as S from './styled';

import Crown from '../../../assets/images/Rectangle.png';

export const Ranking = () => {
  return (
    <div>
      <S.Ranking>
        <S.RankingTitle>이 달의 칭찬왕</S.RankingTitle>
        <S.Image src={Crown} />
        <S.RankingUser>1등 - 성수낙낙</S.RankingUser>
        <S.RankingUser>2등 - snowRice</S.RankingUser>
        <S.RankingUser>3등 - D급 개발자</S.RankingUser>
      </S.Ranking>
    </div>
  );
};
