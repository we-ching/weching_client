// dependencies
import React, { useEffect, useState } from 'react';
import axios from 'axios';

// styles
import * as S from './styled';

import Crown from '../../../assets/images/Rectangle.png';

interface RankingInfoType {
  rank: number,
  user_id: number,
  nickname: string,
  grade: number,
  avg: number,
}

type RankingsType = Array<RankingInfoType>;

const initialState = {
  ranking: [
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
}

export const Ranking = () => {
  const token ='';

  const [rankInfo, setRankInfo] = useState<any>(initialState);

  const rankingInfo = async () => {
    try {
      const res = await axios.get(`/api/main`, {
        method: 'GET',
        headers: {
          authorization: `bearer ${token}`,
        },
      })
      setRankInfo(res.data);
    } catch (err) {
      alert(`예기지 못한 에러가 발생했습니다.\nERROR: ${err}`);
    }
  };
  useEffect(() => {
    rankingInfo();
  }, []);

  return (
    <div>
      <S.Ranking>
        <S.RankingTitle>이 달의 칭찬왕</S.RankingTitle>
        <S.Image src={Crown} />
        <S.RankingUserCenter>
          {/* {rankInfo.map((rank:RankingInfoType, idx: number) => {
            if ( idx%3 === 0 ) {
              rank.rank
            } else if ( idx%3 === 1) {
              rank.rank
            } else if ( idx%3 === 2) {
              rank.rank
            }
          })} */}
          1등
        </S.RankingUserCenter>
        <S.RankingUserLeft>
          {/* {rankInfo.map((rank:RankingInfoType, idx: number) => {
            if ( idx%3 === 0 ) {
              rank.rank
            } else if ( idx%3 === 1) {
              rank.rank
            } else if ( idx%3 === 2) {
              rank.rank
            }
          })} */}
          2등
        </S.RankingUserLeft>
        <S.RankingUserRight>
          {/* {rankInfo.map((rank:RankingInfoType, idx: number) => {
            if ( idx%3 === 0 ) {
              rank.rank
            } else if ( idx%3 === 1) {
              rank.rank
            } else if ( idx%3 === 2) {
              rank.rank
            }
          })} */}
          3등
        </S.RankingUserRight>
        <S.RankingUserLeft>4등 - 엘리스</S.RankingUserLeft>
        <S.RankingUserRight>5등 - 칭구리</S.RankingUserRight>
      </S.Ranking>
    </div>
  );
};
