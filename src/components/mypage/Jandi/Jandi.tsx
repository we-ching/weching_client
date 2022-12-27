// dependencies
import React, { useEffect, useState } from 'react';
import axios from 'axios';

// styles
import * as S from './styled';

export function Jandi() {
  const token = '';

  const [JandiInfo, setJandiInfo] = useState();

  return (
    <div>
      <S.Container>
        <S.Title>잔디</S.Title>
        <S.Line></S.Line>
      </S.Container>
    </div>
  );
}