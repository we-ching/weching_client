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
          <S.ItemBox><p>내가 쓴 글</p></S.ItemBox>
          <S.ItemBox><p>내가 쓴 칭찬</p></S.ItemBox>
          <S.ItemBox><p>북마크</p></S.ItemBox>
          <S.ItemBox><p>회원탈퇴</p></S.ItemBox>
        </S.MyPageContainer>
        {/* <Navbar /> */}
      </S.Wrapper>
    </S.Background>
    );
}

export default MyPage;