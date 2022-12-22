// dependencies
import React, { useEffect, useState } from 'react';
import axios from 'axios';

// styles
import * as S from './styled';

export function UserInfo() {
  const token = '';

  const [Nickname, setNickname] = useState<string>('');

  const nicknameInfo = async () => {
    try {
      const res = await axios.get(`/api/user`, {
        method: 'GET',
        headers: {
          authorization: `bearer ${token}`,
        },
      })
      const userName = res.data.nickname;
      setNickname(() => userName);
    } catch (err) {
        alert(`예기지 못한 에러가 발생했습니다.\nERROR: ${err}`);
    }
  };
  useEffect(() => {
    nicknameInfo();
  }, []);

  return (
    <div>
      <S.Container>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <S.NicknameItemBox>{`닉네임 `}</S.NicknameItemBox>
          <S.PointBox>P </S.PointBox>
        </div>
        <S.Line></S.Line>
        <S.contentItemBox>작성글 : </S.contentItemBox>
      </S.Container>
    </div>
  );
}