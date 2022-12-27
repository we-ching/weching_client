// dependencies
import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// styles
import * as S from './styled';

const theme = createTheme({
    palette: {
      primary: {
        main: '#8C5C32',
        contrastText: '#fff',
      },
    },
  });

export function SignOut() {
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjI1LCJlbWFpbCI6ImNvc2loaDU1QGdtYWlsLmNvbSIsInN0YXR1cyI6MCwiaWF0IjoxNjcyMTI5NTkwLCJleHAiOjE2NzIyMTIzOTB9.grDwEyPFSTNV_eLPojJI_c36v8DWglN14luTJDKeVO0';

  let input = '닉네임';
  const [nickName, setNickName] = useState<string>('');
  const [checkNickname, setCheckNickname] = useState<string>('');
  const [open, setOpen] = useState<boolean>(false);

  const handleModal = () => {
    setOpen(!open);
  }

  const nicknameCheck = async () => {
    try {
      const res = await axios.get(`/api/user`, {
        method: 'GET',
        headers: {
          authorization: `bearer ${token}`,
        },
      })
      setNickName(res.data.nickname);
    } catch (err) {
        alert(`예기지 못한 에러가 발생했습니다.\nERROR: ${err}`);
    }
  };
  useEffect(() => {
    nicknameCheck();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (nickName !== checkNickname) {
        alert('닉네임이 일치하지 않습니다.')
        return;
      }

      const res = await axios.delete(`/api/user`, {
        method: 'DELETE',
        headers: {
          authorization: `bearer ${token}`,
        },
      })

      handleModal();
      alert(res.data.message);
    } catch (err) {
      alert(`예기지 못한 에러가 발생했습니다.\nERROR: ${err}`);
    }
  };

  return (
    <div>
      <S.ItemBox onClick={handleModal}>
        <p>회원 탈퇴</p>
      </S.ItemBox>
      <Modal
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        open={open}
        onClose={handleModal}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <S.ModalStyle>
          <S.Title id="signOut-title">회원 탈퇴</S.Title>
          <div id="signOut-description">
            <S.Form onSubmit={handleSubmit}>
              <S.SignOutTitle className="signOutCheck">
                <p>탈퇴시 닉네임을 입력해주세요.</p>
              </S.SignOutTitle>

              <S.EditTitle>
                <input
                  id="checkNickname"
                  type="text"
                  placeholder={nickName}
                  name="checkNickname"
                  value={checkNickname || ''}
                  onChange={(e) => {
                    setCheckNickname(e.target.value);
                  }}
                />
                {(nickName !== checkNickname) && (
                  <p
                    className="NicknameChecked"
                    style={{
                      fontSize: '0.75rem',
                      color: 'red',
                      marginTop: '0.5rem',
                    }}
                  >
                    닉네임이 일치하지 않습니다.
                  </p>
                )}
              </S.EditTitle>

              <S.SignOutTitle className="Nickname">
                <p>정말 탈퇴하시겠습니까?</p>
              </S.SignOutTitle>
              
              <div className="editBtn">
                <ThemeProvider theme={theme}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    sx={{ mr: 1 }}
                  >
                    탈퇴하기
                  </Button>
                </ThemeProvider>
                <ThemeProvider theme={theme}>
                  <Button
                    type="button"
                    variant="outlined"
                    color="primary"
                    onClick={handleModal}
                  >
                    취소
                  </Button>
                </ThemeProvider>
              </div>
            </S.Form>
          </div>
        </S.ModalStyle>
      </Modal>
    </div>
  );
}