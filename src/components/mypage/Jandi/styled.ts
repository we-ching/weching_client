import styled from 'styled-components';

export const Container = styled.div`
  margin: 10px 0;
  padding: 5px 0 20px 0;

  position: relative;
  width: 90vw;
  max-width: 750px;
  display: flex;
  flex-direction: column;

  background-color: #ffffff;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;

  .jandiInfo {
    margin: 0 20px;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
  }
  .jandiNum {
    margin: 0 20px;
    display: flex;
    flex-direction: row;
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
  margin: 0 17px;
  margin-bottom: 12px;

  position: relative;
  height: 0px;
  border: 1px solid rgba(68, 68, 68, 0.5);
`;

export const JandiBox = styled.div<{ grade: string }>`
  margin: 0 10px;

  width: 20px;
  height: ${(props) => Number(props.grade) * 10}px;
  max-height: 150px;
  background-color: rgb(167, 191, 79);
`;

export const JandiNum = styled.div`
  margin: 0 10px;
  width: 20px;
`;
