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

export function EditUser() {
  const token = '';

  const [newNickname, setNewNickname] = useState<string>('');
  const [checkNickname, setCheckNickname] = useState<string>('');
  const [open, setOpen] = useState<boolean>(false);

  const handleModal = () => {
    setOpen(!open);
  };

  const nicknameOverlap = async (e: any) => {
    e.preventDefault();

    try {
      const res = await axios.post(`api/user/checkName`, {
        method: 'POST',
        headers: {
          authorization: `bearer ${token}`,
        },
        body: JSON.stringify({ newNickname })
      })

      if (res.status == 200) {
        alert(res.data.message);
      } else if (res.status == 400) {
        alert(res.data.message);
      };
      
      } catch (err) {
      alert(`예기지 못한 에러가 발생했습니다.\nERROR: ${err}`);
    }
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      if (newNickname !== checkNickname) {
        alert('새로운 닉네임과 일치하지 않습니다.')
        return;
      }

      await axios.patch(`/api/user`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          authorization: `bearer ${token}`,
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
          <S.Title id="userInfoEdit-title">회원정보 수정</S.Title>
          <div id="userInfoEdit-description">
            <S.Form onSubmit={handleSubmit}>
              <S.EditTitle className="newNickname">
                <p>새 닉네임
                  <span style={{ marginLeft: '10px', fontSize: '0.75rem', color: 'red' }}>
                    * 필수
                  </span>
                </p>
                <input
                  id="newNickname"
                  type="text"
                  placeholder="새로운 닉네임"
                  name="newPassowrd"
                  value={newNickname}
                  minLength={2}
                  maxLength={12}
                  onChange={(e) => {
                    setNewNickname(e.target.value);
                  }}
                />
              </S.EditTitle>
              <div className='overlapCheckbBtn'>
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
              </div>
              <S.EditTitle>
                <p>닉네임 확인</p>
                <input
                  id="checkNickname"
                  type="text"
                  placeholder="새로운 닉네임 확인"
                  name="checkNickname"
                  value={checkNickname || ''}
                  onChange={(e) => {
                    setCheckNickname(e.target.value);
                  }}
                />
                {newNickname !== checkNickname && (
                  <p
                    className="changedNicknameChecked"
                    style={{
                      fontSize: '0.75rem',
                      color: 'red',
                      marginTop: '0.5rem',
                    }}
                  >
                    새로운 닉네임이 일치하지 않습니다.
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
