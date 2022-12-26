import * as S from './styled';
import axios from 'axios';
import { useState } from 'react';
import { useAppSelector } from '../../../store/config';

import Present from '../../../assets/images/Rectangle-1.png';

interface Advice {
  author: string;
  authorrofile: string;
  message: string;
}

const initialState = {
  author: '',
  authorrofile: '',
  message: '',
};

export const Advice = () => {
  const [advice, setAdvice] = useState<Advice>(initialState);

  return (
    <div>
      <S.Advice>
        <S.AdviceTitle>한 줄 명언 (상자를 눌러보세요!)</S.AdviceTitle>
        <S.Image src={Present} />
        <S.AdviceContent>
          <S.AdviceAuthor>
            {advice.author} {advice.authorrofile}
          </S.AdviceAuthor>
          {advice.message}
        </S.AdviceContent>
      </S.Advice>
    </div>
  );
};
