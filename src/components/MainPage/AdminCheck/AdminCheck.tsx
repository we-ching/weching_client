// dependencies
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

// styles
import * as S from './styled';

export function AdminButton() {
  const navigate = useNavigate();
  const [Email, setEmail] = useState<any>();
  const [check, setCheck] = useState<number>();

  const loginCheck = async () => {
    try {
      const token='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjI1LCJlbWFpbCI6ImNvc2loaDU1QGdtYWlsLmNvbSIsInN0YXR1cyI6MCwiaWF0IjoxNjcyMzAwMTAzLCJleHAiOjE2NzIzODI5MDN9.OZuo-9y65SgfHThlVFZsSxTiIvl-QZTMiFgbdb50T04';
      const emailRes = await axios.get(`/api/main/user`, {
        headers: {
          authorization: `bearer ${token}`,
        },
      })
      setEmail(emailRes.data.user.email);

      const res = await axios.post(`/api/login`, {
        "email": Email,
      })
      setCheck(res.data.role);
    } catch (err) {
      alert(`예기지 못한 에러가 발생했습니다.\nERROR: ${err}`);
    }
  };
  useEffect(() => {
    loginCheck();
  })

  return (
    <div>
      {
        (check === 2) ? <S.AdminButton onClick={() => navigate('/admin')}>관리자 페이지</S.AdminButton> : null
      }
    </div>
  );
}