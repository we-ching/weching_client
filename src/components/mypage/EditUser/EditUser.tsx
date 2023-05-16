// dependencies
import React, { useEffect, useState } from 'react';
import { getCookie } from '../../Login/GoogleBtn';
import axios from 'axios';

// Mui
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

export function EditUser() {
  const Cookies = getCookie('accessToken');

  const [nickName, setNewNickname] = useState<string>('');
  const [open, setOpen] = useState<boolean>(false);
  const [nameState, setNameState] = useState<boolean>(false);

  const handleModal = () => {
    setOpen(!open);
  };

  const nicknameOverlap = async (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    e.preventDefault();

    try {
      const res = await axios.post(`api/main/checkName`, 
       { nickName },  
      {
        headers: {
          authorization: `bearer ${Cookies}`,
        },
      })

      if (res.status == 200) {
        alert('사용 가능한 닉네임입니다');
        setNameState(true);
      } else if (res.status == 400) {
        alert('중복 검사를 해주세요');
      };
      
      } catch (err) {
      alert(`예기지 못한 에러가 발생했습니다.\nERROR: ${err}`);
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!nameState){
      alert('중복 확인 해주세요');
      return;
    }

    try {

      await axios.patch(`/api/user`, 
      { nickName, nameState },
      {
        headers: {
          authorization: `bearer ${Cookies}`,
        },
      }).then(() => {window.location.reload()});

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
              <S.EditTitle className="Nickname">
                <p style={{ marginBottom: '10px' }}
                >
                  새 닉네임
                </p>
                <input
                  id="Nickname"
                  type="text"
                  placeholder=" * 2자 이상, 12자 이하"
                  name="Nickname"
                  value={nickName}
                  minLength={2}
                  maxLength={12}
                  onChange={(e) => {
                    setNewNickname(e.target.value);
                    nameState && setNameState(false);
                  }}
                />
              </S.EditTitle>
              <S.Buttons>
                <ThemeProvider theme={theme}>
                  <Button
                    type="submit"
                    variant="outlined"
                    color="primary"
                    sx={{ mr: 1 }}
                  >
                    변경하기
                  </Button>
                </ThemeProvider>
                <ThemeProvider theme={theme}>
                  <Button
                    type="button"
                    variant="contained"
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
