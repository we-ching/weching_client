import * as s from './styled';

import Crown from '../../../assets/images/Rectangle.png';

export const Ranking = () => {
  return (
    <div>
      <s.Ranking>
        <s.RankingTitle>이 달의 칭찬왕</s.RankingTitle>
        <s.Image src={Crown} />
        <s.RankingUser>1등 - 성수낙낙</s.RankingUser>
        <s.RankingUser>2등 - snowRice</s.RankingUser>
        <s.RankingUser>3등 - D급 개발자</s.RankingUser>
      </s.Ranking>
    </div>
  );
};
