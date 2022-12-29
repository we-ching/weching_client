import * as S from './styled';
import { useAppSelector } from '../../../store/config';

import Present from '../../../assets/images/Rectangle-1.png';
import { useEffect } from 'react';

export const Advice = () => {
  const advice: any = useAppSelector((state) => {
    return state.mainInfo.subInfo;
  });

  useEffect(() => {
    advice;
  }, []);

  return (
    <>
      <S.Grid>
        <S.Advice>
          <S.AdviceTitle>한 줄 명언 </S.AdviceTitle>
          <S.Image src={Present} />
          <S.AdviceContent>
            {advice.advice && advice.advice.message}
          </S.AdviceContent>
          <S.AdviceAuthor>
            {advice &&
              `
          ${advice.advice && advice.advice.author} (${
                advice.advice && advice.advice.authorprofile
              })`}
          </S.AdviceAuthor>
        </S.Advice>
      </S.Grid>
    </>
  );
};
