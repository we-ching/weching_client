// dependencies
import React, { useEffect, useState } from 'react';

import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// styles
import * as S from './styled';

interface FormData {
  currentPassword: string;
  password: string;
  passwordConfirm: string;
}

const theme = createTheme({
  palette: {
    primary: {
      main: '#59B1FC',
      contrastText: '#fff',
    },
  },
});

function EditUser() {
  const [inputData, setInputData] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [checkPassword, setCheckPassword] = useState('');
  const [open, setOpen] = useState(false);

  const handleModal = () => {
    setOpen(!open);
  };

  const handleOnChange = () => {};

  const handleSubmit = (e: any) => {
    e.preventDefault();
    try {
      if (checkPassword !== newPassword) {
        alert('새로운 비밀번호가 일치하지 않습니다.');
      }

      handleModal();
      alert('회원 정보가 수정되었습니다.');
    } catch (err) {}
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
          <S.Title id="userInfoEdit-title">회원정보 수정</S.Title>
          <div id="userInfoEdit-description">
            <S.Form onSubmit={handleSubmit}>
              <S.EditTitle className="nickname">
                <p>닉네임</p>
                <input
                  id="nickname"
                  type="text"
                  placeholder=""
                  name="nickname"
                  onChange={handleOnChange}
                />
              </S.EditTitle>
              <S.EditTitle className="currentPassword">
                <p>
                  현재 비밀번호.
                  <span style={{ fontSize: '0.75rem', color: 'red' }}>
                    *필수
                  </span>
                </p>
                <input
                  id="currentPassowrd"
                  type="password"
                  placeholder="현재 비밀번호"
                  name="currentPassword"
                  value={currentPassword || ''}
                  onChange={(e) => {
                    setCurrentPassword(e.target.value);
                  }}
                />
              </S.EditTitle>
              <S.EditTitle className="newPassowrd">
                <p>새 비밀번호</p>
                <input
                  id="newPassowrd"
                  type="password"
                  placeholder="새로운 비밀번호"
                  name="newPassowrd"
                  value={newPassword}
                  onChange={(e) => {
                    setNewPassword(e.target.value);
                  }}
                />
              </S.EditTitle>
              <S.EditTitle>
                <p>비밀번호 확인</p>
                <input
                  id="checkPassowrd"
                  type="password"
                  placeholder="새로운 비밀번호 확인"
                  name="checkPassowrd"
                  value={checkPassword || ''}
                  onChange={(e) => {
                    setCheckPassword(e.target.value);
                  }}
                />
                {newPassword !== checkPassword && (
                  <p
                    className="changedPasswordChecked"
                    style={{
                      fontSize: '0.75rem',
                      color: 'red',
                      marginTop: '0.5rem',
                    }}
                  >
                    새로운 비밀번호가 일치하지 않습니다.
                  </p>
                )}
              </S.EditTitle>
              <div className="editBtn">
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

export default EditUser;
