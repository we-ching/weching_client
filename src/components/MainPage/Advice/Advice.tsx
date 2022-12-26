import * as S from './styled';
import { useAppSelector } from '../../../store/config';

import Present from '../../../assets/images/Rectangle-1.png';

export const Advice = () => {
  const advice: any = useAppSelector((state) => {
    return state.mainInfo.subInfo;
  });
  console.log(advice);
  return (
    <div>
      <S.Advice>
        <S.AdviceTitle>한 줄 명언 (상자를 눌러보세요)</S.AdviceTitle>
        <S.Image src={Present} />
        <S.AdviceTitle></S.AdviceTitle>
        <S.AdviceContent>
          {/* 문제의 부분
          {advice.advice.author}
           */}
        </S.AdviceContent>
      </S.Advice>
    </div>
  );
};
