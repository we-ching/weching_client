import { useNavigate, useLocation, Link } from 'react-router-dom';
import * as S from './styled';
import { SummitContainer } from '../SummitContainer';
import { useState } from 'react';
import { useAppSelector } from '../../../store/config';
import { getCookie, setCookie } from '../../Login/GoogleBtn';

import {
  IconHome,
  IconBookmark,
  IconPlus,
  IconUser,
  IconVertical,
  IconAlarm,
} from '../Mark';

const clickColor = '#8C5C32';
const nonClickColor = '#BFA78A';

export const Nav = () => {
  const Cookies = getCookie('accessToken');
  const alarmInfo: any = useAppSelector((state) => {
    return state.mainInfo.alarm;
  });
  const user: any = useAppSelector((state) => {
    return state.mainInfo.userInfo;
  });
  console.log(user);
  user.user
    ? setCookie('navNick', user.user.nickName)
    : setCookie('navNick', '방문자');

  const userNick = getCookie('navNick');

  // const currentURL = useLocation();
  const navigate = useNavigate();

  const [activeHome, setActiveHome] = useState(true);
  const [activeBook, setActiveBook] = useState(false);
  const [activePlus, setActivePlus] = useState(false);
  const [activeUser, setActiveUser] = useState(false);
  const [activeVerti, setActiveVerti] = useState(false);
  const [activeAlarm, setActiveAlarm] = useState(false);

  return (
    <SummitContainer>
      <S.HeaderContainer>
        <S.HeaderMenuBox>
          <Link to="/home">
            <img src="/logo.png" width={55} alt="위칭 메인 로고" />
          </Link>
        </S.HeaderMenuBox>
        <S.HeaderMenuBox
          onClick={() => {
            if (Cookies) navigate('/alarm');
            else navigate('/login/guest');
            setActiveHome(false);
            setActiveBook(false);
            setActivePlus(false);
            setActiveUser(false);
            setActiveVerti(false);
            setActiveAlarm(true);
          }}
        >
          <S.UserNick>{userNick}님 반가워요!</S.UserNick>
          <IconAlarm
            fill={activeAlarm ? clickColor : nonClickColor}
            stroke={activeAlarm ? clickColor : nonClickColor}
          />
          {alarmInfo == 0 ? <S.NoDot /> : <S.RedDot />}
        </S.HeaderMenuBox>
      </S.HeaderContainer>
      <S.NavBottomContainer>
        <S.NavMenuBox
          onClick={() => {
            navigate('/home');
            setActiveHome(true);
            setActiveBook(false);
            setActivePlus(false);
            setActiveUser(false);
            setActiveVerti(false);
            setActiveAlarm(false);
          }}
        >
          <IconHome
            fill={activeHome ? clickColor : nonClickColor}
            stroke={activeHome ? clickColor : nonClickColor}
          />
        </S.NavMenuBox>
        <S.NavMenuBox
          onClick={() => {
            if (Cookies) navigate('/bookmark');
            else navigate('/login/guest');
            setActiveHome(false);
            setActiveBook(true);
            setActivePlus(false);
            setActiveUser(false);
            setActiveVerti(false);
            setActiveAlarm(false);
          }}
        >
          <IconBookmark
            fill={activeBook ? clickColor : nonClickColor}
            stroke={activeBook ? clickColor : nonClickColor}
          />
        </S.NavMenuBox>
        <S.NavPostBox
          onClick={() => {
            if (Cookies) navigate('/post');
            else navigate('/login/guest');
            setActiveHome(false);
            setActiveBook(false);
            setActivePlus(true);
            setActiveUser(false);
            setActiveVerti(false);
            setActiveAlarm(false);
          }}
        >
          <S.PlusWrap>
            <IconPlus
              fill={activePlus ? clickColor : nonClickColor}
              stroke={activePlus ? clickColor : nonClickColor}
            />
          </S.PlusWrap>
        </S.NavPostBox>
        <S.NavMenuBox
          onClick={() => {
            if (Cookies) navigate('/mypage');
            else navigate('/login/guest');
            setActiveHome(false);
            setActiveBook(false);
            setActivePlus(false);
            setActiveUser(true);
            setActiveVerti(false);
            setActiveAlarm(false);
          }}
        >
          <IconUser
            fill={activeUser ? clickColor : nonClickColor}
            stroke={activeUser ? clickColor : nonClickColor}
          />
        </S.NavMenuBox>
        <S.NavMenuBox
          onClick={() => {
            if (Cookies) navigate('/viewmore');
            else navigate('/login/guest');
            setActiveHome(false);
            setActiveBook(false);
            setActivePlus(false);
            setActiveUser(false);
            setActiveVerti(true);
            setActiveAlarm(false);
          }}
        >
          <IconVertical
            fill={activeVerti ? clickColor : nonClickColor}
            stroke={activeVerti ? clickColor : nonClickColor}
          />
        </S.NavMenuBox>
      </S.NavBottomContainer>
    </SummitContainer>
  );
};
