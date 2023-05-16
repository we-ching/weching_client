import React from 'react';
import * as S from './styled';

const Tip = () => {
  const dataList: string[] = [
    '자신의 내면에 있는 감정이나 생각을 표현해 타인과 교감해보세요',
    '사소한 것도 좋아요.',
    '오늘 어떤 일이 있었나요?',
    '최근 기억에 남는 일이 있나요?',
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
