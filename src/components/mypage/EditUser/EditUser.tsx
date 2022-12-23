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
      main: '#BFA78A',
      contrastText: '#fff',
    },
  },
});

export function EditUser() {
  const token = '';

  const [newNickname, setNewNickname] = useState<string>('');
  const [open, setOpen] = useState<boolean>(false);

  const handleModal = () => {
    setOpen(!open);
  };

  const nicknameOverlap = async (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    e.preventDefault();

    try {
      const res = await axios.post(`api/user/checkName`, {
        method: 'POST',
        headers: {
          authorization: `bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIxLCJlbWFpbCI6InllZWswNjIwQGdtYWlsLmNvbSIsInN0YXR1cyI6MCwiaWF0IjoxNjcxNzkzMjIyLCJleHAiOjE2NzE4NzYwMjJ9.EK8PLB47Yo738Kmc7xSJiLREBj5egO2lGdZsvEhXuFE`,
        },
        body: JSON.stringify({ newNickname })
      })

      if (res.status == 200) {
        alert(res.data.message);
      } else if (res.status == 400) {
        alert(res.data.content);
      };
      
      } catch (err) {
      alert(`예기지 못한 에러가 발생했습니다.\nERROR: ${err}`);
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {

      await axios.patch(`/api/user`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          authorization: `bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIxLCJlbWFpbCI6InllZWswNjIwQGdtYWlsLmNvbSIsInN0YXR1cyI6MCwiaWF0IjoxNjcxNzkzMjIyLCJleHAiOjE2NzE4NzYwMjJ9.EK8PLB47Yo738Kmc7xSJiLREBj5egO2lGdZsvEhXuFE`,
        },
        body: JSON.stringify({ newNickname })
      })

      handleModal();
      alert('회원 정보가 수정되었습니다.');
    } catch (err) {
      alert(`예기지 못한 에러가 발생했습니다.\nERROR: ${err}`);
    }
  };

  return (
    <div>
      <S.ItemBox onClick={handleModal}>
        <p>회원정보 수정</p>
      </S.ItemBox>
      <Modal
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        open={open}
        onClose={handleModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <S.ModalStyle>
          <S.Wrapper>
            <S.Title id="userInfoEdit-title">회원정보 수정</S.Title>
            <S.closeButton
              onClick={handleModal}
            >
              X
            </S.closeButton>
          </S.Wrapper>
          <div id="userInfoEdit-description">
            <S.Form onSubmit={handleSubmit}>
              <S.EditTitle className="newNickname">
                <p style={{ marginBottom: '10px' }}
                >
                  새 닉네임
                </p>
                <input
                  id="newNickname"
                  type="text"
                  placeholder=" * 2자 이상, 12자 이하"
                  name="newPassowrd"
                  value={newNickname}
                  minLength={2}
                  maxLength={12}
                  onChange={(e) => {
                    setNewNickname(e.target.value);
                  }}
                />
              </S.EditTitle>
              <S.Buttons>
                <ThemeProvider theme={theme}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    sx={{ mr: 1 }}
                  >
                    변경하기
                  </Button>
                </ThemeProvider>
                <ThemeProvider theme={theme}>
                  <Button
                    type="button"
                    variant="outlined"
                    color="primary"
                    onClick={nicknameOverlap}
                  >
                    중복 확인
                  </Button>
                </ThemeProvider>
              </S.Buttons>
            </S.Form>
          </div>
        </S.ModalStyle>
      </Modal>
    </div>
  );
}
