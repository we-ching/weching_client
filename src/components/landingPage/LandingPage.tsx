import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './reset.css';
import imgOne from '../../assets/images/Rectanglethumb.png';
import googleImg from '../../assets/images/googleLogo.png';
import arrowRight from '../../assets/images/slide swipe main page.png';
import arrowDown from '../../assets/images/slide scroll down btn.png';
import * as s from './styled';


const LandingPage = () => {

    // const navigate = useNavigate();

    const btnClickHandler = (e: any) => {
            e.preventDefault();
            // navigate('./LandingPage');
    }

    return (
        <s.LandingPageContainer>
           <s.TitleContents>오늘도 당신의 가치는 빛났습니다!</s.TitleContents>
            <s.ImgOne><img src={imgOne} alt="당신을 위한 엄지척"/> </s.ImgOne>
            <s.SubContents>익명의 공간에서 소식을 나누고 기쁨을 나눕니다.</s.SubContents>
            <s.LoginBlock onClick={btnClickHandler}>
                    <img src={googleImg} alt="google_logo"/>Google 계정으로 함께하기
            </s.LoginBlock>
            <s.FoggyUnder></s.FoggyUnder>
            <s.ForeEffect>
                <img src={arrowRight} alt="오른쪽으로 밀면 메인페이지"/>
                <img src={arrowDown} alt="아래로 밀어 더 많은 내용을 볼 수 있어요"/>
            </s.ForeEffect>
        </s.LandingPageContainer>
    )
}

export default LandingPage;