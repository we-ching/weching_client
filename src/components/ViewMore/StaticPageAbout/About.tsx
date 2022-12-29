import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './styled';


export const About = () => {
    const navigate = useNavigate();

    return (
    <S.ContentContainer>
        <S.TitleBox>
            About
        </S.TitleBox>
        <S.MenuBox>
            @#*-위칭의 효능-*#@
            <br/>
            <br/>
            칭찬은 가장 훌륭한 동기부여 요소인 동시에 가장 훌륭한 자양강장제입니다.
            <br/>
            <br/>
            - 약한 기운을 강하게 해주고, 심신과 육체의 안정을 돕는다.
            <br/>
            - 우울증, 애정 결핍, 무기력증, 스트레스 등에 긍정적인 효능이 있고, 정신을 튼튼하게 해주며, 정신 건강에 도움이 된다.
            <br/>
            - 청소년기 성장 발육에 좋고, 빈혈에 좋다.
            <br/>
            - 위칭에서 받을 수 있는 칭찬이 피를 맑게 하고, 몸을 따뜻하게 해줍니다.
            <br/>
            - 피로가 많이 쌓이는 직종에 계신 분들,스트레스 많이 받는 분들에게 피로회복에 정말 좋은 효과가 있습니다.
            <br/>
            - 인체에 면역력을 증진시켜 줘서 잔병을 치르지 않게 해 줍니다.
            <br/>
            <br/>
            위에 열거한 효능 이외에 많은 인체에 유익한 효능을 가지고 있는 인류 최대의 자연발생 천연 소통 유래 보약입니다.
        </S.MenuBox>
    </S.ContentContainer>
    )
}