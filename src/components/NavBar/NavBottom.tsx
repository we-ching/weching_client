import { useNavigate, useLocation, NavLink } from 'react-router-dom';
import * as S from './styled';
import { SummitContainer } from './SummitContainer';
import React from 'react';

import { IconHome, IconBookmark, IconPlus, IconUser, IconVertical } from './Mark';

export const NavBottom = () => {
    // const currentURL = useLocation();
    const navigate = useNavigate();

    return (
        <SummitContainer>
            <S.NavBottomContainer>
                <S.NavMenuBox
                    onClick={()=> {
                        navigate('/home');
                    }}
                    // isSelected={currentURL === 'home'}
                    >
                <IconHome color="#BFA78A"/>
                </S.NavMenuBox>
                <S.NavMenuBox
                    onClick={()=> {
                        navigate('/page2');
                    }}
                    // isSelected={currentURL === 'home'}
                >
                <IconBookmark color="#BFA78A"/>
                </S.NavMenuBox>
                <S.NavMenuBox
                    onClick={()=> {
                        navigate('/page3');
                    }}
                    // isSelected={currentURL === 'home'}
                >
                 <IconPlus color="#BFA78A"/>
                </S.NavMenuBox>
                <S.NavMenuBox
                    onClick={()=> {
                        navigate('/page4');
                    }}
                    // isSelected={currentURL === 'home'}
                >
               <IconUser color="#BFA78A"/>
                </S.NavMenuBox>
                <S.NavMenuBox
                    onClick={()=> {
                        navigate('/page5');
                    }}
                    // isSelected={currentURL === 'home'}
                ><IconVertical color="#BFA78A"/>
                </S.NavMenuBox>
            </S.NavBottomContainer>
        </SummitContainer>
    )

}