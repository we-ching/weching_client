import styled from 'styled-components';

export const Container = styled.div`
  margin: 10px 0;

  position: relative;
  width: 372px;
  height: 300px;
  display: flex;
  flex-direction: column;
  
  background-color: #FFFFFF;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;

  :hover {
    transform: translateY(2px);
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
  }
`;

export const Title = styled.div`
  margin: 12px 0 12px 17px;

  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 26px;
  color: #444444;
`;

export const Line = styled.div`
  margin: 0 0 12px 17px;

  position: relative;
  width: 339px;
  height: 0px;
  border: 1px solid rgba(68, 68, 68, 0.5);
`;