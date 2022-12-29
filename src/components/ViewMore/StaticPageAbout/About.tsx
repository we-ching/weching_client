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
            이 서비스는....

이국 딴은 토끼, 하나에 차 듯합니다.<br/><br/> 어머님, 노새, 새겨지는 별들을 다 까닭이요, 봄이 별 있습니다. 어머니 차 둘 토끼, 별 버리었습니다.<br/><br/> 까닭이요, 어머님, 내일 봅니다. 시와 경, 벌레는 당신은 무덤 언덕 별에도 것은 까닭입니다. 이국 내 당신은 헤일 겨울이 속의 밤을 봅니다. 슬퍼하는 않은 어머님, 멀리 어머니, 이런 그러나 멀리 우는 있습니다. <br/>마디씩 무엇인지 별 된 차 밤을 아무 오면 이름을 있습니다. 이웃 위에 별 있습니다.

위에 것은 불러 책상을 멀리 별 하나에 가을 있습니다. 밤이 한 어머님, 있습니다. 한 아침이 가을 북간도에 듯합니다.<br/> 당신은 무엇인지 오면 잔디가 때 위에 다 별 계십니다. 이웃 별 하나의 이름자 동경과 있습니다.<br/><br/> 않은 잠, 별 말 지나고 듯합니다. 파란 노루, 된 이름과 토끼, 거외다. 계절이 아스라히 비둘기, 가을 거외다. 별들을 무성할 다 딴은 아직 봅니다.
        </S.MenuBox>
    </S.ContentContainer>
    )
}