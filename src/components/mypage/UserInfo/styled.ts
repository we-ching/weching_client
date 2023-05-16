import styled from 'styled-components';

export const Container = styled.div`
  margin: 10px 0;
  padding: 10px 0;

  position: relative;
  width: 90vw;
  max-width: 750px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  background-color: #FFFFFF;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;

  .pointBoxs {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`;

export const NicknameItemBox = styled.div`
  margin: 0 0 12px 17px;

  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 26px;
  color: #444444;
`;

export const PointBox = styled.div`
  margin: 0 17px 12px 0;

  width: 85px;
  height: 17px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  color: #FFFFFF;
  background-color: #BFA78A;
  border-radius: 10px;
`;

export const RankPointBox = styled.div`
  margin: 0 17px 12px 0;

  width: 120px;
  height: 17px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  color: #FFFFFF;
  background-color: #8C5C32;
  border-radius: 10px;
`;

export const Line = styled.div`
  margin: 0 17px;
  margin-bottom: 6px;

  position: relative;
  height: 0px;
  border: 1px solid rgba(68, 68, 68, 0.5);
`;

export const contentItemBox = styled.div`
  margin: 12px 10px 0 17px;

  display: flex;
  flex-direction: row;

  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #444444;

  .itemBoxTitle {
    font-weight: bold;
  }
`;