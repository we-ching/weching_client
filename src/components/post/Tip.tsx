export const Tip = () => {
  const dataList: string[] = ['a', 'b', 'c', 'd', 'e'];

  const getRandomIdx = (length: number): number => {
    console.log(Math.floor(Math.random() * length));
    return Math.floor(Math.random() * length);
  };

  return (
    <>
      <h3>tip</h3>
      <div>{dataList[getRandomIdx(dataList.length)]}</div>
    </>
  );
};
