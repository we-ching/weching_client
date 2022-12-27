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
  const token = '';

  const [rankInfo, setRankInfo] = useState<RankingInfoType[]>([]);

  const rankingInfo = async () => {
    try { 
      const {ranking}: {ranking: RankingInfoType[]} = await axios.get(`/api/main`, {
        headers: {
          authorization: `bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjI1LCJlbWFpbCI6ImNvc2loaDU1QGdtYWlsLmNvbSIsInN0YXR1cyI6MCwiaWF0IjoxNjcyMTAwNzg5LCJleHAiOjE2NzIxODM1ODl9.mOunPXKvPruVCXVkKbE1hnC_PU6Krd1HZmw5ZnStq3w`,
        },
      }).then(res=> res.data)
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
              <div className='rankNum'>순위</div>
              <div className='rankName'>닉네임</div>
              <div className='rankPoint'>RP</div>
            </S.RankingSubtitle>
            {
              Array.isArray(rankInfo) && rankInfo.length > 0 ? 
              rankInfo.map((item: RankingInfoType)=>
                <S.RankingUser rank={item.rank}>
                  <div className='rankContent'>
                    <div className='rankNum'>{item.rank}</div>
                    <div className='rankName'>{item.nickname}</div>
                    <div className='rankPoint'>{item.grade}</div>
                  </div>
                </S.RankingUser>
              ) : null 
            }
          </S.Ranking>
        </S.RankingContainer>
      </S.Wrapper>
    </S.Background>
  );
}

