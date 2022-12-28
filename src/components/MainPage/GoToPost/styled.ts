import styled from 'styled-components';

export const GoToTitle: any = styled.div`
  margin: 25px auto 0;
  width: 370px;

  display: flex;
  align-items: center;

  font-size: 18px;
  font-weight: 700;

  @media (min-width: 1024px) {
    grid-area: title2;
    margin: 0;
    padding-top: 15px;
  }
`;

export const GoToTitleCount: any = styled.p`
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

export const GoToTextBox: any = styled.div`
  margin: 0 auto;
  padding: 15px;
  font-size: 14px;
  width: auto;
  height: 270px;
  border-radius: 10px;
  background-color: white;
  box-shadow: 0 4px 4px 0 rgb(0 0 0 / 0.1);
  overflow: hidden;

  @media (min-width: 1024px) {
    grid-area: newReview;
    width: auto;
    margin: 0;
  }
`;

export const GoToTextContent: any = styled.div`
  padding: 15px;
  font-size: 14px;
  width: 310px;
  height: 220px;

  display: flex;
  transition-property: transform;
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
