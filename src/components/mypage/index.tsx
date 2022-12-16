// dependencies
import React, { useEffect, useState } from "react";

// components
// import Navbar from '';
import EditUser from './EditUser/EditUser';

// styles
import * as S from './style';

function MyPage() {
    return (
    <S.Background>
      <S.Wrapper>
        <S.MyPageContainer>
          <EditUser />
          <S.ItemBox>내가 쓴 글</S.ItemBox>
          <S.ItemBox>내가 쓴 칭찬</S.ItemBox>
          <S.ItemBox>북마크</S.ItemBox>
          <S.ItemBox>회원탈퇴</S.ItemBox>
        </S.MyPageContainer>
        {/* <Navbar /> */}
      </S.Wrapper>
    </S.Background>
    );
}

export default MyPage;