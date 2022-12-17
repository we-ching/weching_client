import { useNavigate, useLocation, NavLink } from 'react-router-dom';
import * as s from './styled';
import { SummitContainer } from '../SummitContainer';
import React from 'react';

import { IconHome, IconBookmark, IconPlus, IconUser, IconVertical } from './Mark';

const NavBottom = () => {
    // const currentURL = useLocation();
    // const navigate = useNavigate();

    return (
        <SummitContainer>
            <nav>
            <s.NavBottomContainer>
                <NavLink to="/">
                <s.NavMenuBox
                    // onClick={()=> {
                    //     navigate('/home');
                    // }}
                    // isSelected={currentURL === 'home'}
                >
                <IconHome color="#BFA78A"/>
                </s.NavMenuBox>
                </NavLink>
                <NavLink to="/page2">
                <s.NavMenuBox
                    // onClick={()=> {
                    //     navigate('/home');
                    // }}
                    // isSelected={currentURL === 'home'}
                >
                <IconBookmark color="#BFA78A"/>
                </s.NavMenuBox>
                </NavLink>
                <NavLink to="/page3">
                <s.NavMenuBox
                    // onClick={()=> {
                    //     navigate('/home');
                    // }}
                    // isSelected={currentURL === 'home'}
                >
                 <IconPlus color="#BFA78A"/>
                </s.NavMenuBox>
                </NavLink>
                <NavLink to="/page4">
                <s.NavMenuBox
                    // onClick={()=> {
                    //     navigate('/home');
                    // }}
                    // isSelected={currentURL === 'home'}
                >
               <IconUser color="#BFA78A"/>
                </s.NavMenuBox>
                </NavLink>
                <NavLink to="/page5">
                <s.NavMenuBox
                    // onClick={()=> {
                    //     navigate('/home');
                    // }}
                    // isSelected={currentURL === 'home'}
                ><IconVertical color="#BFA78A"/>
                </s.NavMenuBox>
                </NavLink>
            </s.NavBottomContainer>
            </nav>
        </SummitContainer>
    )

}



export default NavBottom;