// dependencies
import React, { useEffect, useState } from 'react';
import axios from 'axios';

// styles
import * as S from './styled';

interface UserInfoType {
  id: number;
  email: string;
  nickname: string;
  point: string;
  status: number;
  grade: number;
  avg: null | number;
  post_count: string;
  review_count: string;
}

const initialState = {
  id: 21,
  email: 'yeek0620@gmail.com',
  nickname: '엘리스',
  point: '10,000',
  status: 0,
  grade: 0,
  avg: null,
  post_count: '2',
  review_count: '5',
};

export function UserInfo() {
  const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIzLCJlbWFpbCI6IjEwMDR3aXBpQGdtYWlsLmNvbSIsInN0YXR1cyI6MCwiaWF0IjoxNjcyMDM1Mzc1LCJleHAiOjE2NzIxMTgxNzV9.WLz0i78ese3Wx4hFjnebzEeaoCMtQqECG2GGEuv066M';

  const [userInfo, setUserInfo] = useState<UserInfoType>(initialState);

  const nicknameInfo = async () => {
    try {
      const res = await axios.get(`/api/user`, {
        method: 'GET',
        headers: {
          authorization: `bearer ${token}`,
        },
      });
      setUserInfo(res.data);
    } catch (err) {
      alert(
        `예기지 못한 에러가 발생했습니다.\nERROR: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIxLCJlbWFpbCI6InllZWswNjIwQGdtYWlsLmNvbSIsInN0YXR1cyI6MCwiaWF0IjoxNjcxNzkzMjIyLCJleHAiOjE2NzE4NzYwMjJ9.EK8PLB47Yo738Kmc7xSJiLREBj5egO2lGdZsvEhXuFE`
      );
    }
  };
  useEffect(() => {
    nicknameInfo();
  }, []);

  return (
    <div>
      <S.Container>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <S.NicknameItemBox>{userInfo.nickname}</S.NicknameItemBox>
          <S.PointBox>P {userInfo.point}</S.PointBox>
        </div>
        <S.Line></S.Line>
        <S.contentItemBox>작성글 : {userInfo.post_count}</S.contentItemBox>
      </S.Container>
    </div>
  );
}
