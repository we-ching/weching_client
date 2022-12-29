// dependencies
import React, { useEffect, useState } from 'react';
import axios from 'axios';

// styles
import * as S from './styled';

interface rankInfoType {
  user_id: number,
  grade: string,
  month: string,
}

const initialState: rankInfoType[] = [
  {
    "user_id": 25,
    "grade": "10",
    "month": "2022-12-01T00:00:00.000Z"
  },
  {
    "user_id": 25,
    "grade": "10",
    "month": "2022-11-01T00:00:00.000Z"
  },
  {
    "user_id": 25,
    "grade": "3",
    "month": "2022-10-01T00:00:00.000Z"
  }
]

export function Jandi() {
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjI1LCJlbWFpbCI6ImNvc2loaDU1QGdtYWlsLmNvbSIsInN0YXR1cyI6MCwiaWF0IjoxNjcyMTg3ODM3LCJleHAiOjE2NzIyNzA2Mzd9.-r8PnIZOmg3O0BFLoTGM9aW6Ew-0qLqqAvi42oAOqIM';

  const [JandiInfo, setJandiInfo] = useState<rankInfoType[]>(initialState);

  const rankingInfo = async () => {
    try { 
      const {rank}: {rank: rankInfoType[]} = await axios.get(`/api/user`,
      {
        headers: {
          authorization: `bearer ${token}`,
        },
      });
      setJandiInfo(rank);

      // 전처리
      // rank = rank.map((element:) => {})

      setJandiInfo(rank);

    } catch (err) {
      alert(`예기지 못한 에러가 발생했습니다.\nERROR: ${err}`);
    }
  };

  useEffect(() => {
    rankingInfo();
  }, []);

  return (
    <div>
      <S.Container>
        <S.Title>월별 별점 포인트</S.Title>
        <S.Line></S.Line>
        <div className='jandiInfo'>
          {
            Array.isArray(JandiInfo) && JandiInfo.length > 0 ? 
            JandiInfo.map((item: rankInfoType)=> 
              <S.JandiBox grade={item.grade}></S.JandiBox>
            ) : null
          }
        </div>
        <S.Line></S.Line>
        <div className='jandiNum'>
          {
            Array.isArray(JandiInfo) && JandiInfo.length > 0 ? 
            JandiInfo.map((item: rankInfoType)=> 
              <S.JandiNum>{Number(item.month.slice(5,7))}</S.JandiNum>
            ) : null
          }
        </div>        
      </S.Container>
    </div>
  );
}