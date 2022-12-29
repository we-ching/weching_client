// dependencies
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

// Mui
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

export function NewNotice() {
  const navigate = useNavigate();
  const [newTitle, setNewTitle] = useState<string>('');
  const [newContent, setNewContent] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>)  => {
    e.preventDefault();
    try { 
      await axios.post(`/api/notice`, { 
        "title": newTitle,
        "content": newContent,
      })
      alert('공지사항이 업로드되셨습니다.');
    } catch (err) {
      alert(`예기지 못한 에러가 발생했습니다.\nERROR: ${err}`);
    }
  };

    
  return (
    <S.Background>
      <S.Wrapper>
        <S.renewNotice>
          <S.TitleContainer>
            <S.Title>공지사항 생성</S.Title>
          </S.TitleContainer>
          <S.ContentForm onSubmit={handleSubmit}>
            <S.SubTitle>공지사항 제목</S.SubTitle>
            <S.Inputs>
              <input
                id="TitleInput"
                type="text"
                placeholder=" * 2자 이상 제목을 입력해주세요"
                name="noticeTitle"
                value={newTitle}
                minLength={2}
                onChange={(e) => {
                  setNewTitle(e.target.value);
                }}
              />
              <input
                id="ContentInput"
                type="text"
                placeholder=" * 내용을 입력해주세요"
                name="noticeContent"
                value={newContent}
                minLength={1}
                onChange={(e) => {
                setNewContent(e.target.value);
              }}
            />
            </S.Inputs>
            <S.Buttons>
              <ThemeProvider theme={theme}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  sx={{ mr: 1 }}
                >
                  제출
                </Button>
              </ThemeProvider>
              <ThemeProvider theme={theme}>
                <Button
                  type="button"
                  variant="outlined"
                  color="primary"
                  onClick={() => navigate('/admin/notice')}
                >
                  취소
                </Button>
              </ThemeProvider>
            </S.Buttons>
          </S.ContentForm>
        </S.renewNotice>
      </S.Wrapper>
    </S.Background>
  );
};