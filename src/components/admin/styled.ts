import styled from 'styled-components';

export const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;

  display: flex;
  justify-content: center;
  align-item: center;
`;

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  min-width: 200px;
  max-width: 1024px;
`;

export const AdminTitleContainer = styled.div`
  margin: 10px 0;

  position: relative;
  width: 90vw;
  max-width: 750px;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  background-color: #BFA78A;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;

  .adminTitle {
    display: flex;
    flex-direction: row;
  }
`;

export const AdminTitle = styled.div`
  margin: 0 0 0 17px;

  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 26px;
  color: #FFF;
`;

export const AdminNum = styled.div`
  margin: 0 0 0 10px;

  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 36px;
  color: #FFF;
`;

export const Line = styled.div`
  margin: 6px 17px;

  height: 0px;
  border: 1px solid #FFF;
`;

export const AdminContent = styled.div`
  margin: 0 0 0 17px;

  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 26px;
  color: #FFF;
`;

export const AdminPageContainer = styled.div`
  margin: 88px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const ItemBox = styled.div`
  margin: 10px 0;

  position: relative;
  width: 90vw;
  max-width: 750px;
  height: 60px;
  display: flex;
  align-items: center;

  background-color: #FFF;
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
  > p {
    margin-left: 17px;
  }
`;