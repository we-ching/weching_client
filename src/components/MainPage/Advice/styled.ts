import styled from 'styled-components';

export const Advice: any = styled.div`
  margin: 15px auto;
  padding: 10px 15px;
  width: 370px;
  box-sizing: border-box;
  border-radius: 10px;
  background-color: white;

  box-shadow: 0 4px 4px 0 rgb(0 0 0 / 0.1);
`;

export const AdviceTitle: any = styled.div`
  border-bottom: 1px solid rgba(68, 68, 68, 0.5);
  padding: 5px 0;

  font-size: 18px;
`;

export const AdviceContent: any = styled.div`
  padding: 30px 0;

  font-size: 14px;
  text-align: center;
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
