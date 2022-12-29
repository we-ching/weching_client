import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './styled';


export const Recruit = () => {
    const navigate = useNavigate();

    return (
    <S.ContentContainer>
        <S.TitleBox>
            Contact Us
        </S.TitleBox>
        <S.MenuBox>
            🚩 팀장/BE 오승하<br/>
            <br/>
            연락처<br/>
            이메일<br/>
            스택<br/>
            깃허브<br/>
        </S.MenuBox>
        <S.MenuBox>
            🖥️ BE 이수호<br/>
            <br/>
            연락처<br/>
            이메일<br/>
            스택<br/>
            깃허브<br/>
        </S.MenuBox>
        <S.MenuBox>
            🖥️ FE 정상진<br/>
            <br/>
            연락처<br/>
            이메일<br/>
            스택<br/>
            깃허브<br/>
        </S.MenuBox>
        <S.MenuBox>
            🖥️ FE 김윤수<br/>
            <br/>
            연락처 : 010-7574-0412<br/>
            이메일 : yoons100457@gmail.com<br/>
            스택 : 흐엉<br/>
            깃허브<br/>
        </S.MenuBox>
        <S.MenuBox>
            🖥️ FE 김창민<br/>
            <br/>
            연락처<br/>
            이메일<br/>
            스택<br/>
            깃허브<br/>
        </S.MenuBox>
        <S.MenuBox>
            🖥️ FE 박재훈<br/>
            <br/>
            연락처<br/>
            이메일<br/>
            스택<br/>
            깃허브<br/>
        </S.MenuBox>
        <S.MenuBox>
            🖥️ FE 황정현<br/>
            <br/>
            연락처<br/>
            이메일<br/>
            스택<br/>
            깃허브<br/>
        </S.MenuBox>
        <S.MenuBox>
            📜 자세히
        </S.MenuBox>
    </S.ContentContainer>
    )
}