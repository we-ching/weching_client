import styled from 'styled-components';

export const Main = styled.main`
  margin: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 100%;

  .ck.ck-editor__editable:not(.ck-editor__nested-editable) {
    min-height: 500px;
    > p {
      font: initial;
    }
  }

  .ck.ck-toolbar {
    border: none;
  }

  .ck.ck-content.ck-editor__editable.ck-rounded-corners.ck-editor__editable_inline {
    width: 80vw;
  }
`;

export const PostBtn = styled.button`
  box-shadow: 1px 1px 3px 1px #dadce0;
  color: white;
  background: ${(props) => (props.disabled ? '#bdb9b7' : '#B79D7F')};
  width: 5rem;
  height: 2rem;
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
  gap: 1rem;
`;

export const Title = styled.h1`
  font-size: 24px;
`;

export const Tip = styled.header`
  text-align: center;
  font-size: 18px;

  > div {
    margin-top: 1rem;
  }
`;
