import React from 'react';
import * as S from './styled';

const Tip = () => {
  const dataList: string[] = ['a', 'b', 'c', 'd', 'e'];

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
