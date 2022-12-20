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
        main: '#59B1FC',
        contrastText: '#fff',
      },
    },
  });

export function SignOut() {
  const token = '';

  const [open, setOpen] = useState<boolean>(false);

  const handleModal = () => {
    setOpen(!open);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      await axios.delete(`/api/user`, {
        method: 'DELETE',
        headers: {
          authorization: `bearer ${token}`,
        },
      })

      handleModal();
      alert('회원 탈퇴가 되었습니다.');
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
              <S.SignOutTitle className="newNickname">
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
                    닫기
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