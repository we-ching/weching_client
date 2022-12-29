// dependencies
import React, { useEffect, useState } from 'react';
import axios from 'axios';

// styles
import * as S from './styled';

interface UserInfoType {
  id: number;
  nickName: string;
  point: null | number;
  status: number;
  grade: null | number;
  avg: null | number;
  postCount: null | number;
  reviewCount: null | number;
}

const initialState = {
  id: 21,
  nickName: '엘리스',
  point: 10000,
  status: 0,
  grade: 0,
  avg: 0.2,
  postCount: 2,
  reviewCount: 5,
};

export function UserInfo() {
  const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjI1LCJlbWFpbCI6ImNvc2loaDU1QGdtYWlsLmNvbSIsInN0YXR1cyI6MCwiaWF0IjoxNjcyMjc1MDk3LCJleHAiOjE2NzIzNTc4OTd9.7x45UrUUPxq0bRknNUFdOGEKX4mdNrSonjqjUSIAjNI';

  const [userInfo, setUserInfo] = useState<UserInfoType>(initialState);

  const nicknameInfo = async () => {
    try {
      const res = await axios.get(`/api/user`, {
        headers: {
          authorization: `bearer ${token}`,
        },
      });
      setUserInfo(res.data.user);
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
          <S.NicknameItemBox>{userInfo.nickName}</S.NicknameItemBox>
          <div className="pointBoxs">
            <S.PointBox>포인트 {userInfo.point}</S.PointBox>
            <S.RankPointBox>별점 포인트 {userInfo.grade}</S.RankPointBox>
          </div>
        </div>
        <S.Line></S.Line>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <S.contentItemBox>
            <div className="itemBoxTitle">작성 글 </div>: {userInfo.postCount}
          </S.contentItemBox>
          <S.contentItemBox>
            <div className="itemBoxTitle">작성 리뷰수 </div>:{' '}
            {userInfo.reviewCount}
          </S.contentItemBox>
        </div>
      </S.Container>
    </div>
  );
}
