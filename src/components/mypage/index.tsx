// dependencies
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// components
// import Navbar from '';
import { UserInfo } from './UserInfo/UserInfo';
import { EditUser } from './EditUser/EditUser';
import { SignOut } from './Signout/Signout';

// styles
import * as S from './styled';

export function MyPage() {
  const navigate = useNavigate();
  return (
    <S.Background>
      <S.Wrapper>
        <S.MyPageContainer>
          <UserInfo />
          <EditUser />
          <S.ItemBox onClick={() => navigate('/mypage/mypost')}>
            <p>내가 쓴 글</p>
          </S.ItemBox>
          <S.ItemBox>
            <p>북마크</p>
          </S.ItemBox>
          <SignOut />
        </S.MyPageContainer>
        {/* <Navbar /> */}
      </S.Wrapper>
    </S.Background>
  );
}
