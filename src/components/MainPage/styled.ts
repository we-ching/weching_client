import styled from 'styled-components';

export const Container: any = styled.div`
  width: 90vw;
  height: auto;
  margin: 0 auto;
  color: #444444;

  overflow-y: scroll;
  overflow-x: hidden;
`;
export const GridLayout = styled.div`
  top: 60px;
  @media (min-width: 1024px) {
    width: 60vw;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: 30px 1fr 30px 1fr auto;
    gap: 20px;
    grid-auto-flow: row;
    grid-template-areas:
      'title title title title title'
      'newmatch newmatch newmatch newmatch newmatch'
      'title2 title2 title2 title2 title2'
      'newReview newReview newReview newReview newReview'
      'advice advice ranking ranking ranking';
  }
`;

export const UserNick: any = styled.div`
  width: 370px;

  font-size: 22px;
  color: #929292;

  @media (min-width: 1024px) {
    margin: 20px auto 0;
    position: fixed;
    color: #929292;
    top: 0px;
    right: 0px;
    z-index: 100;
    font-size: 16px;
    width: 230px;
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
