import * as S from './styled';
import axios from 'axios';
import { useState } from 'react';

import Present from '../../../assets/images/Rectangle-1.png';

export const Advice = () => {
  const [advice, setAdvice] = useState('상자를 눌러보세요!');

  const submitHandler = async (e: any) => {
    e.preventDefault();
    try {
      const res: any = await axios.get(`/api/main`, {
        headers: {
          authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjI0LCJlbWFpbCI6IndvZ25zMjA1QGdtYWlsLmNvbSIsInN0YXR1cyI6MCwiaWF0IjoxNjcxNzY0MjgxLCJleHAiOjE2NzE4NDcwODF9.NMQyUuN9dPQGxpBxM5AEEV0jMnpe4cn8rXbJ4xdVY4c`,
        },
      });

      setAdvice(`\"${res.data.advice.message}\"
      \-${res.data.advice.author}, ${res.data.advice.authorrofile}\-`);
    } catch (err) {
      alert(`예기지 못한 에러가 발생했습니다.\nERROR: ${err}`);
    }
  };

  return (
    <div>
      <S.Advice>
        <S.AdviceTitle>한 줄 명언</S.AdviceTitle>
        <S.Image src={Present} onClick={submitHandler} />
        <S.AdviceContent>{advice}</S.AdviceContent>
      </S.Advice>
    </div>
  );
};
