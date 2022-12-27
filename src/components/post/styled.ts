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
  width: 12%;
  height: 7%;
  min-width: 60px;
  border: none;
  border-radius: 10px;
  align-self: flex-end;
`;

export const Wrraper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 80%;
`;

export const Title = styled.h1`
  font-size: 150%;
`;
