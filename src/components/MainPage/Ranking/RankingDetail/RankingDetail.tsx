// dependencies
import React, { useEffect, useState } from 'react';
import axios from 'axios';

// styles
import * as S from './styled';

interface RankingInfoType {
  rank: number,
  user_id: number,
  nickname: string,
  grade: number,
  avg: number,
}

export function RankingDetail() {
  const [rankInfo, setRankInfo] = useState<RankingInfoType[]>([]);

  const rankingInfo = async () => {
    try { 
      const {ranking}: {ranking: RankingInfoType[]} = await axios.get(`/api/main`,
      ).then(res=> res.data)
      setRankInfo(ranking);

    } catch (err) {
      alert(`예기지 못한 에러가 발생했습니다.\nERROR: ${err}`);
    }
  };
  useEffect(() => {
    rankingInfo();
  }, []);

  return (
    <S.Background>
      <S.Wrapper>
        <S.RankingContainer>
          <S.Ranking>
            <S.RankingTitle>이 달의 칭찬왕</S.RankingTitle>
            <S.RankingSubtitle>
              <S.rankNum>순위</S.rankNum>
              <S.rankName>닉네임</S.rankName>
              <S.rankPoint>RP</S.rankPoint>
            </S.RankingSubtitle>
            {
              Array.isArray(rankInfo) && rankInfo.length > 0 ? 
              rankInfo.map((item: RankingInfoType)=>
                <S.RankingUser>
                  <S.RankContent rank={item.rank}>
                    <S.subRankNum>{item.rank}</S.subRankNum>
                    <S.subRankName>
                      <S.Image src={`/rank/ranking${item.rank}.png`} alt='' />
                      &ensp;{item.nickname}
                    </S.subRankName>
                    <S.subRankPoint>{item.avg}</S.subRankPoint>
                  </S.RankContent>
                </S.RankingUser>
              ) : null 
            }
          </S.Ranking>
        </S.RankingContainer>
      </S.Wrapper>
    </S.Background>
  );
}

