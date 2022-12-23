import styled from 'styled-components';

export const Container: any = styled.div`
  width: 430px;
  height: 932px;
  margin: 85px auto;
  background-color: #f0f0f0;
  color: #444444;

  overflow-y: scroll;
  overflow-x: hidden;

  ::-webkit-scrollbar {
    display: none; /* 크롬, 사파리, 오페라, 엣지 */
  }
`;

export const UserNick: any = styled.div`
  width: 370px;
  margin: 20px auto 0;

  font-size: 30px;
  color: #444444;
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
