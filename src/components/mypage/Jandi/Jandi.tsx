// dependencies
import React, { useEffect, useState } from 'react';
import { getCookie } from '../../Login/GoogleBtn';
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
    "grade": "5",
    "month": "2022-11-01T00:00:00.000Z"
  },
  {
    "user_id": 25,
    "grade": "3",
    "month": "2022-10-01T00:00:00.000Z"
  }
]

export function Jandi() {
  const Cookies = getCookie('accessToken');
  const [JandiInfo, setJandiInfo] = useState<rankInfoType[]>(initialState);

  const rankingInfo = async () => {
    try { 
      const {rank}: {rank: rankInfoType[]} = await axios.get(`/api/user`,
      {
        headers: {
          authorization: `bearer ${Cookies}`,
        },
      }).then(res => res.data)
      setJandiInfo(rank);

      // 전처리
      // rank = rank.map((element:) => {})

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