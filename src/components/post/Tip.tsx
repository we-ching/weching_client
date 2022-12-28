import React from 'react';
import * as S from './styled';

const Tip = () => {
  const dataList: string[] = [
    '글을 쓸 때는 말하듯 쓰는 것이 좋아요',
    '자신의 내면에 있는 감정이나 생각을 표현해 타인과 교감해보세요',
    '매우, 아주, 너무 같은 수식어는 감동을 떨어뜨린다고 하네요.',
    '사소한 것도 좋아요.',
  ];

  const getRandomIdx = (length: number): number => {
    return Math.floor(Math.random() * length);
  };

  return (
    <S.Tip>
      <h3>💡 글쓰기 tip</h3>
      <div>{dataList[getRandomIdx(dataList.length)]}</div>
    </S.Tip>
  );
};

export default React.memo(Tip);
