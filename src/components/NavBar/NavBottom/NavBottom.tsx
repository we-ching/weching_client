import { useNavigate, Link } from 'react-router-dom';
import * as S from './styled';
import { SummitContainer } from '../SummitContainer';
import { useEffect, useState } from 'react';
import { getCookie, setCookie } from '../../Login/GoogleBtn';

import {
  IconHome,
  IconBookmark,
  IconPlus,
  IconUser,
  IconVertical,
  IconAlarm,
} from '../Mark';
import axios from 'axios';
import { mainApiUserType } from '../../MainPage/styled';

const clickColor = '#8C5C32';
const nonClickColor = '#BFA78A';

export const Nav = () => {
  const Cookies = getCookie('accessToken');
  const [userNick, setUserNick] = useState<string>('방문자');
  const [Array, setArray] = useState<number>(0);
  const postReq = async () => {
    try {
      Cookies &&
        (await axios
          .get(`/api/main/user`, {
            headers: {
              authorization: `Bearer ${Cookies}`,
            },
          })
          .then((res) => {
            setUserNick(res.data.user.nickName);
            setArray(
              res.data.posts.filter((item: mainApiUserType) => {
                return item.post.isChecked == 1;
              })
            );
          }));
    } catch (err) {
      alert(`3. 예기지 못한 에러가 발생했습니다.\nERROR: ${err}`);
    }
  };

  useEffect(() => {
    postReq();
  }, []);

  userNick && setCookie('navNick', userNick);

  const nickName = getCookie('navNick');
  const navigate = useNavigate();

  // const [activeHome, setActiveHome] = useState(true);
  // const [activeBook, setActiveBook] = useState(false);
  // const [activePlus, setActivePlus] = useState(false);
  // const [activeUser, setActiveUser] = useState(false);
  // const [activeVerti, setActiveVerti] = useState(false);
  // const [activeAlarm, setActiveAlarm] = useState(false);

  const [navActive, setNavActive] = useState({
    activeHome: false,
    activeBook: false,
    activePlus: false,
    activeUser: false,
    activeVerti: false,
    activeAlarm: false,
  })

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
            setNavActive({...navActive, activeAlarm: true})
          }}
        >
          <S.UserNick>{Cookies ? nickName : '방문자'}님 반가워요!</S.UserNick>
          <IconAlarm
            fill={navActive.activeAlarm ? clickColor : nonClickColor}
            stroke={navActive.activeAlarm ? clickColor : nonClickColor}
          />
          {Array == 0 ? <S.NoDot /> : <S.RedDot />}
        </S.HeaderMenuBox>
      </S.HeaderContainer>
      <S.NavBottomContainer>
        <S.NavMenuBox
          onClick={() => {
            navigate('/home');
            setNavActive({...navActive, activeHome: true})
          }}
        >
          <IconHome
            fill={navActive.activeHome ? clickColor : nonClickColor}
            stroke={navActive.activeHome ? clickColor : nonClickColor}
          />
        </S.NavMenuBox>
        <S.NavMenuBox
          onClick={() => {
            if (Cookies) navigate('/bookmark');
            else navigate('/login/guest');
            setNavActive({...navActive, activeBook: true})
          }}
        >
          <IconBookmark
            fill={navActive.activeBook ? clickColor : nonClickColor}
            stroke={navActive.activeBook ? clickColor : nonClickColor}
          />
        </S.NavMenuBox>
        <S.NavPostBox
          onClick={() => {
            if (Cookies) navigate('/post');
            else navigate('/login/guest');
            setNavActive({...navActive, activePlus: true})
          }}
        >
          <S.PlusWrap>
            <IconPlus
              fill={navActive.activePlus ? clickColor : nonClickColor}
              stroke={navActive.activePlus ? clickColor : nonClickColor}
            />
          </S.PlusWrap>
        </S.NavPostBox>
        <S.NavMenuBox
          onClick={() => {
            if (Cookies) navigate('/mypage');
            else navigate('/login/guest');
            setNavActive({...navActive, activeUser: true})
          }}
        >
          <IconUser
            fill={navActive.activeUser ? clickColor : nonClickColor}
            stroke={navActive.activeUser ? clickColor : nonClickColor}
          />
        </S.NavMenuBox>
        <S.NavMenuBox
          onClick={() => {
            if (Cookies) navigate('/viewmore');
            else navigate('/login/guest');
            setNavActive({...navActive, activeVerti: true})
          }}
        >
          <IconVertical
            fill={navActive.activeVerti ? clickColor : nonClickColor}
            stroke={navActive.activeVerti ? clickColor : nonClickColor}
          />
        </S.NavMenuBox>
      </S.NavBottomContainer>
    </SummitContainer>
  );
};
