// dependencies
import React, { useEffect, useState } from "react";

// components
// import Navbar from '';
// import EditUser from './EditUser/EditUser';

// styles
import { Background, Wrapper, ItemBox, MyPageContainer } from './style';

function MyPage() {
    return (
    <Background>
      <Wrapper>
        <MyPageContainer>
          {/* <EditUser /> */}
          <ItemBox>내가 쓴 글</ItemBox>
          <ItemBox>내가 쓴 칭찬</ItemBox>
          <ItemBox>북마크</ItemBox>
          <ItemBox>회원탈퇴</ItemBox>
        </MyPageContainer>
        {/* <Navbar /> */}
      </Wrapper>
    </Background>
    );
}

export default MyPage;