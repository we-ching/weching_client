import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './styled';


export const ViewMore = () => {
    const navigate = useNavigate();


    return (
        <S.BackGround>
            <S.MenuContainer>
                <S.MenuBox
                    onClick={()=> {
                            navigate('/home');
                        }}
                >
                    공지사항
                </S.MenuBox>
                <S.MenuBox
                    onClick={()=> {
                            navigate('/home');
                        }}
                >
                    랭킹
                </S.MenuBox>
                <S.MenuBox
                    onClick={()=> {
                            navigate('/home');
                        }}
                >
                    FAQs
                </S.MenuBox>
                <S.MenuBox
                    onClick={()=> {
                            navigate('/home');
                        }}
                >
                    친구 초대
                </S.MenuBox>
                <S.MenuBox
                    onClick={()=> {
                            navigate('/home');
                        }}
                >
                    채용
                </S.MenuBox>            
                <S.MenuBox
                    onClick={()=> {
                            navigate('/home');
                        }}
                >
                    서비스 정보
                </S.MenuBox>
            </S.MenuContainer>
        </S.BackGround>
    )
}