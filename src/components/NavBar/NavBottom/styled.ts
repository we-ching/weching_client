import styled from 'styled-components';

export const HeaderContainer = styled.div`
  position: fixed;
  top: 0;
  width: 100vw;
  min-width: 200px;
  max-width: 1024px;
  height: 75px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: #f2f2f2;

  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
`;

export const HeaderMenuBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  margin: 0;
  cursor: pointer;
  box-sizing: border-box;
  border: 0;
  margin: 0 25px;
`;

export const NavBottomContainer = styled.div`
  position: fixed;
  bottom: 0;
  width: 100vw;
  min-width: 200px;
  max-width: 1024px;
  height: 75px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #f2f2f2;

  box-shadow: 0px -2px 10px rgba(0, 0, 0, 0.1);
  border-radius: 40px 40px 0px 0px;
`;

export const NavMenuBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  margin: 0 auto;
  cursor: pointer;
  box-sizing: border-box;
  border: 0;
`;

export const PlusWrap = styled.div`
  display: flex;
  margin-bottom: 30px;
  align-items: center;
  justify-content: center;

  svg {
    outline: 10px solid white;
    border-radius: 100px;
    box-sizing: content-box;
    background-color: white;
    filter: drop-shadow(2px 2px 10px rgba(0, 0, 0, 0.1));
  }
`;
