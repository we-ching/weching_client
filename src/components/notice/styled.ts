import styled from 'styled-components';

export const NoticeNav = styled.nav`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

export const NoticeUl = styled.ul`
  width: inherit;
  display: flex;
  flex-direction: column;
  max-width: 750px;
`;

export const Message: any = styled.li`
  display: flex;
  flex-direction: column;
  margin: 1rem 2rem;
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
