import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { Cookies } from 'react-cookie';
import { useLocation, useNavigate } from 'react-router-dom';
import * as S from '../landingPage/styled';
import { useAppDispatch } from '../../store/config';
import { getGoogleEmail } from '../../myPostSlice';
import googleImg from '../../assets/images/googleLogo.png';

const cookies = new Cookies();
export const setCookie = (name: string, value: string, option?: any) => {
  return cookies.set(name, value, { ...option });
};
export const getCookie = (name: string) => {
  return cookies.get(name);
};
export const removeCookie = (name: string) => {
  return cookies.remove(name);
};

export const GoogleBtn: any = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const login = useGoogleLogin({
    onSuccess: (credential) => {
      getEmail(credential.access_token);
      console.log(credential);
    },
    flow: 'implicit',
  });
  const getEmail = async (token: any) => {
    const email = await axios.get(
      `https://www.googleapis.com/oauth2/v3/userinfo?access_token=${token}`
    );
    console.log(email);
    dispatch(getGoogleEmail(email.data.email));
    await getAcessToken(email.data.email);
  };
  const getAcessToken = async (res: any) => {
    await axios
      .post(
        `/api/login`,
        { email: res },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
      .then((res) => {
        if (res.data.accessToken || res.data.role === 2) {
          const jwtToken = res.data.accessToken;
          setCookie('accessToken', jwtToken);
          navigate('/home');
        } else {
          navigate('/login');
        }
      });
  };

  return (
    <>
      {location.pathname === '/login' || location.pathname === '/' ? (
        <S.LoginBlock onClick={() => login()}>
          <img src={googleImg} /> Google 계정으로 함께하기
        </S.LoginBlock>
      ) : (
        <S.GoogleButton onClick={() => login()}>
          <img src={googleImg} /> Google 계정으로 함께하기
        </S.GoogleButton>
      )}
    </>
  );
};
