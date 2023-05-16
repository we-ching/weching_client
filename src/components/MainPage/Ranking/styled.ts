import styled from 'styled-components';

export const Ranking = styled.div`
  margin: 15px auto;
  padding: 10px 15px;
  width: auto;
  background-color: white;
  box-sizing: border-box;
  border-radius: 10px;

  box-shadow: 0 4px 4px 0 rgb(0 0 0 / 0.1);

  .container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    border-bottom: 1px solid rgba(68, 68, 68, 0.5);
  }

  @media (min-width: 1024px) {
    grid-area: ranking;
    margin: 0;
    
    width: auto;
  }
`;

export const RankingTitle = styled.div`
  padding: 5px 0 10px 0;
  font-size: 24px;
  font-weight: 500;
`;

export const RankingDetailButton = styled.div`
  width: 60px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  font-style: normal;
  font-weight: 550;
  font-size: 14px;
  color: #FFF;
  background-color: #8C5C32;
  border-radius: 10px;

  :hover {
    background: #BFA78A;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
  }
`;

export const RankingUser = styled.div<{rank: number}>`
  padding: 15px;
  font-style: normal;
  font-size: 18px;
  font-weight: 500; 
  display: flex;
  justify-content: ${props => props.rank === 1 ? 'center' :
   props.rank % 2 === 0 ? 'flex-start' : 'flex-end'};

  &:first-child {
    font-weight: bold;
  }

  .rank {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
`;

export const Image = styled.img`
  margin: 0 auto;
  padding: 10px 0;

  display: block;

  &:first-child {
    width: 100px;
    margin: 0 5px 0 0;
  }
`;
