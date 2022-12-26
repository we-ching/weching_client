import styled from 'styled-components';

export const Background = styled.div`
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;

  display: flex;
  justify-content: center;
  align-item: center;
`;

export const Wrapper = styled.div`
  width: 430px;
  height: 932px;

  background-color: #F0F0F0;
`;

export const RankingContainer = styled.div`
  margin: 70px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Ranking = styled.div`
  margin: 15px 0 0 0;
  padding: 10px 15px;
  width: 370px;
  background-color: #FFFFFF;
  box-sizing: border-box;
  border-radius: 10px;

  box-shadow: 0 4px 4px 0 rgb(0 0 0 / 0.1);
`;

export const RankingTitle = styled.div`
  padding: 5px 0 10px 0;
  font-size: 18px;
  font-weight: 500;
  border-bottom: 1px solid rgba(68, 68, 68, 0.5);
`;

export const RankingUser = styled.div<{rank: number}>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 15px;
  font-style: normal;
  font-size: 18px;
  font-weight: 400; 
  display: flex;
  justify-content: ${props => props.rank === 1 ? 'center' :
   props.rank % 2 === 0 ? 'flex-start' : 'flex-end'};
`;