import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './styled';


export const Recruit = () => {
    const navigate = useNavigate();

    return (
        <S.BackGround>
            <S.ContentContainer>
                <S.TitleBox>
                    Contact Us
                </S.TitleBox>
                <S.MenuBox>
                    🚩 팀장/BE 오승하
                </S.MenuBox>
                <S.MenuBox>
                    🖥️ BE 이수호
                </S.MenuBox>
                <S.MenuBox>
                    🖥️ FE 정상진
                </S.MenuBox>
                <S.MenuBox>
                    🖥️ FE 김윤수
                </S.MenuBox>
                <S.MenuBox>
                    🖥️ FE 김창민
                </S.MenuBox>
                <S.MenuBox>
                    🖥️ FE 박재훈
                </S.MenuBox>
                <S.MenuBox>
                    🖥️ FE 황정현
                </S.MenuBox>
            </S.ContentContainer>
        </S.BackGround>
    )
}