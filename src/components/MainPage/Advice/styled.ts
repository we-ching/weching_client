import styled from 'styled-components';

export const Grid: any = styled.div`
  @media (min-width: 1024px) {
    grid-area: advice;
    width: auto;
    height: auto;
    margin: 0;
  }
`;

export const Advice: any = styled.div`
  margin: 15px auto;
  padding: 10px 15px;
  width: auto;
  box-sizing: border-box;
  border-radius: 10px;
  background-color: white;

  box-shadow: 0 4px 4px 0 rgb(0 0 0 / 0.1);

  @media (min-width: 1024px) {
    grid-area: advice;
    width: auto;
    height: auto;
    margin: 0;
  }
`;

export const AdviceTitle: any = styled.div`
  border-bottom: 1px solid rgba(68, 68, 68, 0.5);
  padding: 5px 0 10px 0;

  font-size: 24px;
`;

export const AdviceAuthor: any = styled.div`
  margin: 0 auto;
  padding-bottom: 15px;

  font-size: 16px;
  text-align: center;
  line-height: 20px;
`;

export const AdviceContent: any = styled.div`
  margin: 0 auto;
  padding: 20px 0;

  font-size: 20px;
  text-align: center;
  line-height: 20px;
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
