import styled from 'styled-components';

export const Container: any = styled.div`
  background-color: #f0f0f0;

  display: flex;
  flex-direction: column;

  ::-webkit-scrollbar {
    display: none; /* 크롬, 사파리, 오페라, 엣지 */
  }
`;

export const Message: any = styled.li`
  display: flex;
  flex-direction: column;
  margin: 2rem 2rem;
  border-radius: 10px;

  background-color: white;
  box-shadow: 0 4px 4px 0 rgb(0 0 0 / 0.1);
`;

export const MessageTitle: any = styled.h3`
  display:flex
  margin: auto;
  padding: 7px;
  font-size: 1.5rem;
`;

export const MessageContent: any = styled.article`
  display: flex;
  margin: 1rem 1rem;

  line-height: 1.5em;
  font-size: 1rem;
`;

export const PageNumberNav = styled.nav`
  margin: 0 auto;
`;

export const pageNumberBtn = styled.button`
  background-color: white;
  margin-right: 0.5rem;
  font-size: 1.5rem;
`;
