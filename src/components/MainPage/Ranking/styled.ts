import styled from 'styled-components';

export const Ranking: any = styled.div`
  margin: 15px auto;
  padding: 10px 15px;
  width: 370px;
  background-color: white;
  box-sizing: border-box;
  border-radius: 10px;

  box-shadow: 0 4px 4px 0 rgb(0 0 0 / 0.1);
`;

export const RankingTitle: any = styled.div`
  border-bottom: 1px solid rgba(68, 68, 68, 0.5);
  padding: 5px 0;
  font-size: 18px;
`;

export const RankingUser: any = styled.div`
  padding: 15px;
  font-size: 18px;
  text-align: center;

  &:first-child {
    font-weight: 700;
  }
`;

export const Image: any = styled.img`
  margin: 0 auto;
  padding: 10px 0;
  width: 118px;

  display: block;

  &:first-child {
    width: 33px;
    margin: 0 5px 0 0;
  }
`;
