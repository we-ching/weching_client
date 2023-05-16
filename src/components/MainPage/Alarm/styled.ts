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
    display: none;
`;

export const Message: any = styled.div`
  width: 370px;
  height: 100px;
  line-height: 100px;
  margin: 0 auto 24px;
  border-radius: 10px;
  display: flex;
  justify-content: center;

  background-color: white;
  box-shadow: 0 4px 4px 0 rgb(0 0 0 / 0.1);

  &:first-child {
    margin-top: 28px;
  }
`;

export const MessageContent: any = styled.p`
  width: 343px;
  height: 52px;
  line-height: 52px;
  margin: auto;
  text-align: center;

  font-size: 14px;
`;
