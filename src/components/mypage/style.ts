import styled from 'styled-components';

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-color: white;
  height: 100vh;
  width: 100vw;
  z-index: -100;

  display: flex;
  justify-content: center;
  align-item: center;
`;

const Wrapper = styled.div`
  width: 430px;
  height: 932px;

  background-color: #F0F0F0;
`;

const MyPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const ItemBox = styled.div`
  position: relative;
  width: 372px;
  height: 60px;
  display: flex;
  align-items: center;
  
  background-color: #FFFFFF;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;

  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 26px;
  color: #444444;

  cursor: pointer;
`;

export { Background, Wrapper, ItemBox, MyPageContainer };