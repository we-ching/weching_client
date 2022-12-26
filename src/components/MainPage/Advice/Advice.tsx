import * as S from './styled';
import { useAppSelector } from '../../../store/config';

import Present from '../../../assets/images/Rectangle-1.png';

import axios from 'axios';
import { useState, useEffect } from 'react';

export const Advice = () => {
  const [advice, setAdvice] = useState<any>();
  // const advice: any = useAppSelector((state) => {
  //   return state.mainInfo.subInfo;
  // });
  // console.log(advice);

  const adviceRequest = async () => {
    try {
      await axios
        .get(`/api/main`, {
          headers: {
            authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjI0LCJlbWFpbCI6IndvZ25zMjA1QGdtYWlsLmNvbSIsInN0YXR1cyI6MCwiaWF0IjoxNjcyMDIyNzUwLCJleHAiOjE2NzIxMDU1NTB9.sbTWCcXyYfy_A0E_9TVAukLXZnnJFM94CfGFD-C-6wo`,
          },
        })
        .then((res) => {
          setAdvice({ ...advice, ...res.data.advice });
        });
    } catch (err) {
      alert(`4. 명언에서 예기지 못한 에러가 발생했습니다.\nERROR: ${err}`);
    }
  };
  useEffect(() => {
    adviceRequest();
  }, []);
  console.log(advice);

  return (
    <div>
      <S.Advice>
        <S.AdviceTitle>한 줄 명언</S.AdviceTitle>
        <S.Image src={Present} onClick={adviceRequest} />
        <S.AdviceTitle>
          {advice.author}
          {advice.authorprofile}
        </S.AdviceTitle>
        <S.AdviceContent>{advice.message}</S.AdviceContent>
      </S.Advice>
    </div>
  );
};
