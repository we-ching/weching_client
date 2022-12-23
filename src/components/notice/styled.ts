import styled from 'styled-components';

export const Container: any = styled.div`
  width: 100vw;
  min-width: 200px;
  max-width: 1024px;
  margin: auto;
  background-color: #f0f0f0;
  color: #444444;

  overflow-y: scroll;
  overflow-x: hidden;

  ::-webkit-scrollbar {
    display: none; /* 크롬, 사파리, 오페라, 엣지 */
  }
`;

export const Message: any = styled.li`
  width: 370px;
  height: 100px;

  margin: 0 auto 24px;
  border-radius: 10px;

  background-color: white;
  box-shadow: 0 4px 4px 0 rgb(0 0 0 / 0.1);

  &:first-child {
    margin-top: 28px;
  }
`;

export const MessageTitle: any = styled.h3`
  width: 343px;
  height: 26px;
  margin: auto;
  padding: 7px;

  font-size: 18px;
  font-weight: 500;
  line-height: 26px;
`;

export const MessageContent: any = styled.article`
  width: 343px;
  height: 52px;
  margin: auto;

  font-size: 14px;
`;
