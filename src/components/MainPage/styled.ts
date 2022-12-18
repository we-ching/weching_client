import styled from 'styled-components';

export const Container: any = styled.div`
  width: 430px;
  height: 932px;
  margin: auto;
  background-color: #f0f0f0;
  color: #444444;

  overflow-y: scroll;
  overflow-x: hidden;

  ::-webkit-scrollbar {
    display: none; /* 크롬, 사파리, 오페라, 엣지 */
  }
`;

export const UpperNav: any = styled.div`
  width: 428px;
  height: 70px;

  background-color: white;
  box-shadow: 0 4px 4px 0 rgb(0 0 0 / 0.1);
`;

export const LowerNav: any = styled.div`
  width: 428px;
  height: 88px;

  box-shadow: 0 -2px 10px 0 rgb(0 0 0 / 0.1);
`;

export const NewMatchTitle: any = styled.div`
  margin: 25px auto 0;
  width: 370px;

  display: flex;
  align-items: center;

  font-size: 18px;
  font-weight: 700;
`;

export const NewMatchTitleCount: any = styled.p`
  width: 27px;
  height: 19px;
  border-radius: 10px;
  background-color: red;
  margin-left: 8px;

  line-height: 19px;
  text-align: center;
  color: white;
  font-size: 13px;
`;

export const NewMatchTextBox: any = styled.div`
  margin: 0 auto;
  padding: 30px;
  font-size: 14px;
  width: 370px !important;
  height: 270px;
  border-radius: 10px;
  background-color: white;

  box-shadow: 0 4px 4px 0 rgb(0 0 0 / 0.1);

  overflow: hidden;
`;

export const NewMatchTextContent: any = styled.div`
  padding: 15px;
  font-size: 14px;
  width: 310px;
  height: 220px;

  display: flex;
  transition-property: transform;
`;

export const TodayQuotes: any = styled.div`
  margin: 15px auto;
  padding: 10px 15px;
  width: 370px;
  box-sizing: border-box;
  border-radius: 10px;
  background-color: white;

  box-shadow: 0 4px 4px 0 rgb(0 0 0 / 0.1);
`;

export const TodayQuotesTitle: any = styled.div`
  border-bottom: 1px solid rgba(68, 68, 68, 0.5);
  padding: 5px 0;
  height: 26px;

  font-size: 18px;
`;

export const TodayQuotesContent: any = styled.div`
  padding: 30px 0;

  font-size: 14px;
  text-align: center;
`;

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

export const RankingUserList: any = styled.div`
  // 필요없는 부분인가..일단 두겠습니다.
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
