import styled from 'styled-components';

export const Ranking = styled.div`
  margin: 15px auto;
  padding: 10px 15px;
  width: 370px;
  background-color: white;
  box-sizing: border-box;
  border-radius: 10px;

  box-shadow: 0 4px 4px 0 rgb(0 0 0 / 0.1);
`;

export const RankingTitle = styled.div`
  border-bottom: 1px solid rgba(68, 68, 68, 0.5);
  padding: 5px 0;
  font-size: 18px;
`;

export const RankingUserCenter = styled.div`
  padding: 15px;
  font-size: 18px;
  display: flex;
  justify-content: center;

  &:first-child {
    font-weight: bold;
  }
`;

export const RankingUserLeft = styled.div`
  padding: 15px;
  font-size: 18px;
  display: flex;
  justify-content: flex-start;

  &:first-child {
    font-weight: bold;
  }
`;

export const RankingUserRight = styled.div`
  padding: 15px;
  font-size: 18px;
  display: flex;
  justify-content: flex-end;

  &:first-child {
    font-weight: bold;
  }
`;

export const Image = styled.img`
  margin: 0 auto;
  padding: 10px 0;
  width: 118px;

  display: block;

  &:first-child {
    width: 33px;
    margin: 0 5px 0 0;
  }
`;
