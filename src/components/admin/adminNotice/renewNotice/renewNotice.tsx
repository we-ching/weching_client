import React, { useEffect, useState } from 'react';
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

interface noticeType {
  id: string,
  title: string,
  content: string,
}

export function RenewNotice() {
  const [notice, setnotice] = useState<noticeType[]>([]);
  const [open, setOpen] = useState<boolean>(false);
  const [selectId, setSelectId] = useState<string>('');

  const handleModal = (event: React.MouseEvent<HTMLButtonElement>, id?: string) => {
    if(id){
      setSelectId(id);
    }
    
    setOpen(!open);
  }

  const renew = async () => {
    try { 
      const {notice}: {notice: noticeType[]} = await axios.get(`/api/notice?page=1`,
      ).then(res=> res.data)
      setnotice(notice);
    } catch (err) {
      alert(`예기지 못한 에러가 발생했습니다.\nERROR: ${err}`);
    }
  };

  const handleDelete = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {

      const res = await axios.delete(`/api/notice/${selectId}`, {
      })
      handleModal;
      alert(res.data.message);
    } catch (err) {
      alert(`예기지 못한 에러가 발생했습니다.\nERROR: ${err}`);
    }
  };

  useEffect(() => {
    renew();
  }, []);
    
  return (
    <div>
      <S.Background>
        <S.Wrapper>
          <S.renewNotice>
            <S.TitleContainer>
              <S.Title>공지사항 조회 / 삭제</S.Title>
            </S.TitleContainer>
            {
              Array.isArray(notice) && notice.length > 0 ? 
              notice.map((item: noticeType)=>
                <S.ItemBox id={item.id}>
                  <div className='boxs'>
                    <div className='titleBoxs'>
                      <div className='type'>{<strong>제목:</strong>}&ensp;{item.title}</div>
                    </div>
                    <S.delBtn onClick={(e:React.MouseEvent<HTMLButtonElement>) => {handleModal(e, item.id)}}>삭제</S.delBtn>
                  </div>
                  <S.Line></S.Line>
                  <div className='contentBoxs'>
                    <div className='content'>{<strong>내용:</strong>}&ensp;{item.content}</div>
                  </div>
                </S.ItemBox>
              )
              : <S.ItemBox>
                  <div className='none'>공지사항이 없습니다</div>
                </S.ItemBox>
            }
          </S.renewNotice>
        </S.Wrapper>
      </S.Background>
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
          <S.ModalTitle>공지사항 삭제</S.ModalTitle>
          <S.delContent>
            <p>정말 삭제하시겠습니까?</p>
          </S.delContent>
          <S.Form onSubmit={handleDelete}>
            <ThemeProvider theme={theme}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                sx={{ mr: 1 }}
              >
                삭제하기
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
          </S.Form>
        </S.ModalStyle>
      </Modal>
    </div>
  );
};