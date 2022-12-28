import React, { useEffect, useState } from 'react';
import axios from 'axios';

// styles
import * as S from './styled';

export function NewNotice() {
    const token='';

    
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