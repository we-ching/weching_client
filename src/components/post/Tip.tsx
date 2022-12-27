import React from 'react';
const Tip = () => {
  const dataList: string[] = ['a', 'b', 'c', 'd', 'e'];

  const getRandomIdx = (length: number): number => {
    return Math.floor(Math.random() * length);
  };

  return (
    <>
      <h3>💡 글쓰기 tip</h3>
      <div>{dataList[getRandomIdx(dataList.length)]}</div>
    </>
  );
};

export default React.memo(Tip);
