import styled from 'styled-components';

export const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;

  display: flex;
  justify-content: center;
  align-item: center;
`;

export const Wrapper = styled.div`
  // width: 430px;
  width: 100vw;
  min-width: 200px;
  max-width: 1024px;
`;

export const RankingContainer = styled.div`
  margin: 70px 0;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Ranking = styled.div`
  margin: 15px 0 0 0;
  padding: 15px 15px;
  // width: 370px;
  width: 90vw;
  background-color: #FFFFFF;
  box-sizing: border-box;
  border-radius: 10px;

  box-shadow: 0 4px 4px 0 rgb(0 0 0 / 0.1);
`;

export const RankingTitle = styled.div`
  padding: 5px 0 15px 10px;
  font-size: 18px;
  font-weight: bold;
`;

export const RankingSubtitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  padding: 20px 0;
  font-size: 18px;
  font-weight: 600;
  color: #FFF;
  background-color: rgb(54, 48, 74, 0.9);

  .rankNum {
    padding-right: 10px;
    text-align: center;
    width: 20vw;

  }
  .rankName {
    text-align: center;
    width: 50vw;
    border-left: 1px solid #FFF;
    border-right: 1px solid #FFF;
  }
  .rankPoint {
    padding-left: 5px;
    text-align: center;
    width: 30vw;
  }
`;

export const RankingUser = styled.div<{rank: number}>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 20px 0;
  font-style: normal;
  font-size: 16px;
  font-weight: 400;
  background-color: ${props => props.rank % 2 === 0 ? 'rgb(20, 20, 31, 0.1)' : '#FFF'};

  :hover {
    transform: translateY(2px);
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
  }

  .rankContent {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }
  .rankNum {
    padding-right: 10px;
    text-align: center;
    width: 20vw;
  }
  .rankName {
    text-align: center;
    width: 50vw;
  }
  .rankPoint {
    text-align: center;
    width: 30vw;
  }
`;