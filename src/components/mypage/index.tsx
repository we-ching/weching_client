// dependencies
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// components
// import Navbar from '';
import { EditUser } from './EditUser/EditUser';

// styles
import * as S from './styled';

export function MyPage() {
  const navigate = useNavigate();
  return (
    <S.Background>
      <S.Wrapper>
        <S.MyPageContainer>
          <EditUser />
          <S.ItemBox onClick={() => navigate('/mypage/mypost')}>
            <p>내가 쓴 글</p>
          </S.ItemBox>
          <S.ItemBox>
            <p>내가 쓴 칭찬</p>
          </S.ItemBox>
          <S.ItemBox>
            <p>북마크</p>
          </S.ItemBox>
          <S.ItemBox>
            <p>회원탈퇴</p>
          </S.ItemBox>
        </S.MyPageContainer>
        {/* <Navbar /> */}
      </S.Wrapper>
    </S.Background>
  );
}
