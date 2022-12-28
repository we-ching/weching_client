import React, { useEffect, useState } from 'react';
import axios from 'axios';

// styles
import * as S from './styled';

export function NewNotice() {
    const token='';
    const [newTitle, setNewTitle] = useState();
    const [newContent, setNewContent] = useState();

    const submitHandler = async ()  => {
      try { 
        await axios.post(`/api/notice`,
        { 
          "title": newTitle,
          "content": newContent,
        }
        )
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
          </S.renewNotice>
        </S.Wrapper>
      </S.Background>
    );
  };