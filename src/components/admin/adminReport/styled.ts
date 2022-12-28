import styled from 'styled-components';

export const Background = styled.div`
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;

  display: flex;
  justify-content: center;
  align-item: center;
`;

export const Wrapper = styled.div`
  // width: 430px;
  width: 100vw;
  height: 100vh;
  min-width: 200px;
  max-width: 1024px;
`;

export const reportPageContainer = styled.div`
  margin: 18px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const reportTitleContainer = styled.div`
  margin: 10px 0;

  position: relative;
  // width: 372px;
  width: 90vw;
  height: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  background-color: #BFA78A;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;

  :hover {
    transform: translateY(2px);
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
  }
`;

export const reportTitle = styled.div`
  margin: 0 0 0 17px;

  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 26px;
  color: #FFF;
`;

export const ItemBox = styled.div`
  margin: 10px 0;
  padding: 15px 0;

  position: relative;
  // width: 372px;
  width: 90vw;
  display: flex;
  flex-direction: column;
  justify-content: center;

  background-color: #ffffff;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;

  font-style: normal;
  font-size: 18px;
  line-height: 26px;
  color: #444444;

  cursor: pointer;

  :hover {
    transform: translateY(2px);
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
  }
  .reportInfo {
    margin-left: 17px;
  }
  .textBoxs {
    display: flex;
    flex-direction: row;
  }
  .type {
    padding: 0 0 12px 0;
    font-weight: 550;
  }
  .typeId {
    font-weight: 550;
  }
  .content {
    margin-left: 17px;
    font-weight: 550;
  }
  .none {
    margin-left: 17px;
    font-weight: bold;
  }
`;

export const Line = styled.div`
  margin: 12px 0 12px 17px;

  // width: 339px;
  width: 85vw;
  height: 0px;
  border: 1px solid rgba(68, 68, 68, 0.5);
`;