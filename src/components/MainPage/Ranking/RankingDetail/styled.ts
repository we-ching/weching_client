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
  width: 90vw;
  max-width: 750px;
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

  padding: 20px 0;
  font-size: 18px;
  font-weight: 600;
  background-color: #BFA78A;
`;

export const rankNum = styled.div`
  padding-right: 10px;
  text-align: center;
  width: 25vw;
  color: #FFF;
`;

export const rankName = styled.div`
  text-align: center;
  width: 50vw;
  color: #FFF;
  border-left: 1px solid #FFF;
  border-right: 1px solid #FFF;
`;

export const rankPoint = styled.div`
  padding-left: 5px;
  text-align: center;
  width: 25vw;
  color: #FFF;
`;

export const RankingUser = styled.div`
  display: flex;
  flex-direction: column;
`;

export const RankContent = styled.div<{rank: number}>`
  display: flex; 
  flex-direction: row;
  justify-content: center;

  padding: 20px 0;
  font-size: 16px;
  font-weight: 400;
  background-color: ${props => props.rank % 2 === 0 ? '#f2e1c2' : '#FFF'};

  :hover {
    transform: translateY(2px);
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
  }
`;

export const subRankNum = styled.div`
  padding-right: 10px;
  text-align: center;
  width: 25vw;
`;

export const Image = styled.img`
  height: 18px;
`;

export const subRankName = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 50vw;
  border-left: 1px solid #444;
  border-right: 1px solid #444;
`;

export const subRankPoint = styled.div`
  padding-left: 5px;
  text-align: center;
  width: 25vw;
`;