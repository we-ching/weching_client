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

const initialState: RankingInfoType[] = [
  {
    "rank": 1,
    "user_id": 20,
    "nickname": "테스트1",
    "grade": 99,
    "avg": 4.95
  },
  {
    "rank": 2,
    "user_id": 30,
    "nickname": "테스트2",
    "grade": 90,
    "avg": 4.80
  },
  {
    "rank": 3,
    "user_id": 40,
    "nickname": "테스트3",
    "grade": 85,
    "avg": 4.11
  },
]

export function RankingDetail() {
  const token = '';

  const [rankInfo, setRankInfo] = useState<RankingInfoType[]>(initialState);

  const rankingInfo = async () => {
    try { 
      const {ranking}: {ranking: RankingInfoType[]} = await axios.get(`/api/main`, {
        method: 'GET',
        headers: {
          authorization: `bearer ${token}`,
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
            {
              Array.isArray(rankInfo) && rankInfo.length > 0 ? 
              rankInfo.map((item: RankingInfoType)=>
                <S.RankingUser rank={item.rank}>
                  <div className='rankContent'>
                    {item.rank}등 - {item.nickname} RP-{item.grade}
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

