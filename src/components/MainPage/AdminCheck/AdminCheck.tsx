// dependencies
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

// styles
import * as S from './styled';

export function AdminButton() {
  const navigate = useNavigate();
  const [email, setEmail] = useState<any>();
  const [check, setCheck] = useState<number>();

  const loginCheck = async () => {
    try {
      const res = await axios.post(`/api/login`, {
        "email": "cosihh55@gmail.com",
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
        (check === 0) ? <S.AdminButton onClick={() => navigate('/admin')}>관리자 페이지</S.AdminButton> : null
      }
    </div>
  );
}