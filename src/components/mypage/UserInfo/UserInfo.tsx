// dependencies
import React, { useEffect, useState } from 'react';
import { getCookie } from '../../Login/GoogleBtn';
import axios from 'axios';

// styles
import * as S from './styled';

interface UserInfoType {
  id: number | null;
  nickName: string | null;
  point: number | null;
  status: number | null;
  grade: null | number;
  avg: null | number;
  postCount: null | number;
  reviewCount: null | number;
}

const initialState = {
  id: null,
  nickName: null,
  point: null,
  status: null,
  grade: null,
  avg: null,
  postCount: null,
  reviewCount: null,
};

export function UserInfo() {
  const Cookies = getCookie('accessToken');

  const [userInfo, setUserInfo] = useState<UserInfoType>(initialState);

  const nicknameInfo = async () => {
    try {
      const res = await axios.get(`/api/user`, {
        headers: {
          authorization: `bearer ${Cookies}`,
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
