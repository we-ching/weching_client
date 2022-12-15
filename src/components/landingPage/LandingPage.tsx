import React from 'react';
import './reset.css';
import imgOne from '../../img/Rectanglethumb.png';
import googleImg from '../../img/googleLogo.png';
import arrowRight from '../../img/slide swipe main page.png';
import arrowDown from '../../img/slide scroll down btn.png';

import {
    LandingPageContainer, 
    TitleContents, 
    SubContents, 
    ImgOne, 
    LoginBlock, 
    FoggyUnder, 
    ForeEffect,
} from './landingPageStyled';

type LandingsProps = {

}

/**Memo: 모바일 환경에서 가로모드이면 이 서비스는 세로모드에서 이용하기 좋습니다 안내하면 좋을 것 같다는 메모 주석 */


function LandingPage({}) {
    
    return (
        <LandingPageContainer>
           <TitleContents>오늘도 당신의 가치는 빛났습니다!</TitleContents>  {/**나중에 접속때마다 타이틀에 다른 칭찬을 주어도 좋을듯*/}
            <ImgOne><img src={imgOne} alt="당신을 위한 엄지척"/> </ImgOne>
            <SubContents>익명의 공간에서 소식을 나누고 기쁨을 나눕니다.</SubContents>
            <LoginBlock><img src={googleImg} alt="google_logo"/>Google 계정으로 함께하기</LoginBlock>
            <FoggyUnder/>
            <ForeEffect>
                <img src={arrowRight} alt="오른쪽으로 밀면 메인페이지"/>
                <img src={arrowDown} alt="아래로 밀어 더 많은 내용을 볼 수 있어요"/>
            </ForeEffect>
        </LandingPageContainer>
    )
}



export default LandingPage; 