import * as S from './styled';

import Present from '../../../assets/images/Rectangle-1.png';
import { useEffect, useState } from 'react';
import axios from 'axios';

export const Advice = () => {
  const [advice, setAdvice] = useState<S.adviceType>(S.initalAdvice);
  const adviceReq = async () => {
    try {
      await axios.get(`/api/main`).then((res) => {
        setAdvice({ ...advice, ...res.data.advice });
      });
    } catch (err) {
      alert(`1. 예기지 못한 에러가 발생했습니다.\nERROR: ${err}`);
    }
  };

  useEffect(() => {
    adviceReq();
  }, []);

  return (
    <>
      <S.Grid>
        <S.Advice>
          <S.AdviceTitle>한 줄 명언 </S.AdviceTitle>
          <S.Image src={Present} />
          <S.AdviceContent>{advice && advice.message}</S.AdviceContent>
          <S.AdviceAuthor>
            {advice &&
              `
          ${advice && advice.author} (${advice && advice.authorprofile})`}
          </S.AdviceAuthor>
        </S.Advice>
      </S.Grid>
    </>
  );
};
