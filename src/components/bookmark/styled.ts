import styled from 'styled-components';

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
  text-overflow: ellipsis;
  height: 200px;
  width: 340px;
  box-shadow: 5px 5px 1rem rgb(0 0 0 / 0.2);
  display: flex;
  padding: 15px;
  background: hsl(${props => props.color}, 30%, 90%);
  border: 3px;
  border-style: solid;
  border-color: white;
  border-radius: 1rem;
  position: relative;
  transition: .3s;
  filter: blur(1px);

  &:hover {
    transform: translateY(-1rem);
    background: hsl(${props => props.color}, 55%, 90%);
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

export const BookmarkCon = styled.div`
  position: absolute;
  right: 10px;
  bottom: 10px;

  img {
    opacity: 30%;
  }
`;

export interface reviewId {
  id?: any;
  isReported?: number;
  idx?: number;
}
