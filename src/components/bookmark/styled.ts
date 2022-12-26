import styled from 'styled-components';

const customMediaQuery = (maxWidth: number) =>
  `@media (max-width: ${maxWidth}px)`;
const media = {
  mobile: customMediaQuery(1024),
};

export const Container = styled.div`

  width: 100vw;
  height: 100%;
  margin: auto;
  background-color: #f0f0f0;
  color: #444444;

  ::-webkit-scrollbar {
    display: none; /* 크롬, 사파리, 오페라, 엣지 */
  }

  button {
    position: absolute;
    top: 100px;
    left: 100px;
  }
`;

export const CardWrapper = styled.div`
  height: auto;
  display: flex;
  overflow-y: scroll;
  justify-content: center;
  padding-top: 110px;
  padding-bottom: 110px;
  `;
  
export const CardGrid = styled.div`
display: flex;
flex-direction: column;
`;
export const CardBox = styled.div`
  word-wrap: break-word;

  height: 200px;
  width: 340px;
  box-shadow: 5px 5px 1rem rgb(0 0 0 / 0.2);
  
  padding: 15px;
  background: #d6d6d6;
  border: 4px;
  border-style: solid;
  border-color: ${props => props.color};
  border-radius: 1rem;
  position: relative;
  transition: .3s;
  filter: blur(1px);

  &:hover {
    transform: translateY(-1rem);
    background-color: white;
    min-height: 50vh;
    height: auto;
    filter: none;
  }
  &:hover ~ & {
    transform: translateY(5rem);
  }


  & {
    margin-bottom: -5rem;
  }
`;
