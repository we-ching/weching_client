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
    <div>
      <S.Advice>
        <S.AdviceTitle>한 줄 명언 </S.AdviceTitle>
        <S.Image src={Present} />
        <S.AdviceTitle>
          {advice &&
            `
          ${advice.advice && advice.advice.author} (${
              advice.advice && advice.advice.authorprofile
            })`}
        </S.AdviceTitle>
        <S.AdviceContent>
          {advice.advice && advice.advice.message}
          {/* 이건 간단한 방식 */}
        </S.AdviceContent>
      </S.Advice>
    </div>
  );
};
