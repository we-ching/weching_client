import styled from 'styled-components';

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 100vh;
`;

export const PostBtn = styled.button`
  box-shadow: 1px 1px 3px 1px #dadce0;
  color: white;
  background: ${(props) => (props.disabled ? '#bdb9b7' : '#B79D7F')};
  width: 5rem;
  height: 2rem;
  border: none;
  border-radius: 10px;
`;

export const Post = styled.article`
  background: white;
  width: 20rem;
`;
