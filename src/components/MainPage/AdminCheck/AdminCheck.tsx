// dependencies
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getCookie } from '../../Login/GoogleBtn';
import axios from 'axios';

// styles
import * as S from './styled';

export function AdminButton() {
  const navigate = useNavigate();
  const [Email, setEmail] = useState<any>();
  const [check, setCheck] = useState<number>();
  const Cookies = getCookie('accessToken');

  const loginCheck = async () => {
    try {
      const emailRes = await axios.get(`/api/main/user`, {
        headers: {
          authorization: `bearer ${Cookies}`,
        },
      });
      Cookies && setEmail(emailRes.data.user.email);

      const res = await axios.post(`/api/login`, {
        email: Email,
      });
      setCheck(res.data.role);
    } catch (err) {
      alert(`예기지 못한 에러가 발생했습니다.\nERROR: ${err}`);
    }
  };
  useEffect(() => {
    loginCheck();
  });

  return (
    <div>
      {check === 2 ? (
        <S.AdminButton onClick={() => navigate('/admin')}>
          관리자 페이지
        </S.AdminButton>
      ) : null}
    </div>
  );
}
