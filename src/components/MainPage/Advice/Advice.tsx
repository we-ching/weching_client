import * as s from './styled';
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
          authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjI0LCJlbWFpbCI6IndvZ25zMjA1QGdtYWlsLmNvbSIsInN0YXR1cyI6MCwiaWF0IjoxNjcxNzExMDc2LCJleHAiOjE2NzE3MTQ2NzZ9.Pom6wGrLCmoPbTU9EcXgCItWSwt6hxlaa40Rlq35G20`,
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
      <s.Advice>
        <s.AdviceTitle>한 줄 명언</s.AdviceTitle>
        <s.Image src={Present} onClick={submitHandler} />
        <s.AdviceContent>{advice}</s.AdviceContent>
      </s.Advice>
    </div>
  );
};
