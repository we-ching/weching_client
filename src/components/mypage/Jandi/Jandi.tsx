// dependencies
import React, { useEffect, useState } from 'react';
import { getCookie } from '../../Login/GoogleBtn';
import axios from 'axios';

// styles
import * as S from './styled';

interface rankInfoType {
  user_id: number;
  grade: string;
  month: string;
}

export function Jandi() {
  const Cookies = getCookie('accessToken');
  const [JandiInfo, setJandiInfo] = useState<rankInfoType[]>();

  const rankingInfo = async () => {
    try {
      const { rank }: { rank: rankInfoType[] } = await axios
        .get(`/api/user`, {
          headers: {
            authorization: `bearer ${Cookies}`,
          },
        })
        .then((res) => res.data);
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
        <div className="jandiInfo">
          {Array.isArray(JandiInfo) && JandiInfo.length > 0
            ? JandiInfo.map((item: rankInfoType) => (
                <S.JandiBox grade={item.grade}></S.JandiBox>
              ))
            : null}
        </div>
        <S.Line></S.Line>
        <div className="jandiNum">
          {Array.isArray(JandiInfo) && JandiInfo.length > 0
            ? JandiInfo.map((item: rankInfoType) => (
                <S.JandiNum>{Number(item.month.slice(5, 7))}</S.JandiNum>
              ))
            : null}
        </div>
      </S.Container>
    </div>
  );
}
