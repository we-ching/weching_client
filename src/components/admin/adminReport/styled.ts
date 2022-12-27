import styled from 'styled-components';

export const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-color: white;
  height: 100vh;
  width: 100vw;

  display: flex;
  justify-content: center;
  align-item: center;
`;

export const Wrapper = styled.div`
  width: 430px;
  height: 100vh;

  background-color: #f0f0f0;
`;

export const reportPageContainer = styled.div`
  margin: 88px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const reportTitleContainer = styled.div`
  margin: 10px 0;

  position: relative;
  width: 372px;
  height: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  background-color: rgb(54, 48, 74, 0.9);
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

  position: relative;
  width: 372px;
  height: 100px;
  display: flex;
  align-items: center;

  background-color: #ffffff;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;

  font-style: normal;
  font-weight: bold;
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
    display: flex;
    flex-direction: row;
  }
  .content {
    margin-left: 17px;
  }
  .none {
    margin-left: 17px;
  }
`;