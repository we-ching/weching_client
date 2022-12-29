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
            이메일 : noshel8197@gmail.com<br/>
            깃허브 : <a href="https://github.com/AhGnuesHo" target="_blank" rel="오승하 깃허브 링크">github.com/AhGnuesHo</a><br/>
        </S.MenuBox>
        <S.MenuBox>
            🖥️ BE 이수호<br/>
            <br/>
            이메일 : yeek0620@gmail.com<br/>
            깃허브 : <a href="https://github.com/yisuho" target="_blank" rel="이수호 깃허브 링크">github.com/yisuho</a><br/>
        </S.MenuBox>
        <S.MenuBox>
            🖥️ FE 정상진<br/>
            <br/>
            이메일 : lkg70007@gmail.com<br/>
            깃허브 : <a href="https://github.com/tangjinlog" target="_blank" rel="정상진 깃허브 링크">github.com/tangjinlog</a><br/>
        </S.MenuBox>
        <S.MenuBox>
            🖥️ FE 김윤수<br/>
            <br/>
            이메일 : yoons100457@gmail.com<br/>
            깃허브 : <a href="https://github.com/snowriceDD" target="_blank" rel="김윤수 깃허브 링크">github.com/snowriceDD</a><br/>
        </S.MenuBox>
        <S.MenuBox>
            🖥️ FE 김창민<br/>
            <br/>
            이메일 : jinttack@naver.com<br/>
            깃허브 : <a href="https://github.com/wink68" target="_blank" rel="김창민 깃허브 링크">github.com/wink68</a><br/>
        </S.MenuBox>
        <S.MenuBox>
            🖥️ FE 박재훈<br/>
            <br/>
            이메일 : wogns205@gmail.com<br/>
            깃허브 : <a href="https://github.com/noorong" target="_blank" rel="박재훈 깃허브 링크">github.com/noorong</a><br/>
        </S.MenuBox>
        <S.MenuBox>
            🖥️ FE 황정현<br/>
            <br/>
            이메일 : 1004wipi@gmail.com<br/>
            깃허브 : <a href="https://github.com/ghkd1418" target="_blank" rel="황정현 깃허브 링크">github.com/ghkd1418</a><br/>
        </S.MenuBox>
        <S.MenuBox>
            📜 자세히
        </S.MenuBox>
    </S.ContentContainer>
    )
}