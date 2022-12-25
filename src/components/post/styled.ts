import styled from 'styled-components';

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 100vh;
  padding: 0 3.7rem;
`;

export const PostBtn = styled.button`
  box-shadow: 1px 1px 3px 1px #dadce0;
  color: white;
  background: ${(props) => (props.disabled ? '#cfd8dc' : '#ffccbc')};
  align-self: flex-end;
  width: 4rem;
  height: 2rem;
  border: none;
  border-radius: 10px;
`;

export const Title = styled.h1`
  align-self: flex-start;
`;
