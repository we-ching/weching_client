// dependencies
import React, { useEffect, useState } from 'react';
import axios from 'axios';

// styles
import * as S from './styled';

export function Jandi() {
  const token = '';

  const [JandiInfo, setJandiInfo] = useState();

  const Jandi = async () => {
    try {
      const res = await axios.get(``, {
        method: 'GET',
        headers: {
          authorization: `bearer ${token}`,
        },
      })
      setJandiInfo( res.data );
    } catch (err) {
        alert(`예기지 못한 에러가 발생했습니다.\nERROR: ${err}`);
    }
  };
  useEffect(() => {
    Jandi();
  }, []);

  return (
    <div>
      <S.Container>
        <S.Title>잔디</S.Title>
        <S.Line></S.Line>
      </S.Container>
    </div>
  );
}