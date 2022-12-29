import styled from 'styled-components';

export const UserNick: any = styled.div`
  width: auto;
  font-size: 16px;
  color: #929292;
  text-align: right;
  right: 75px;
  z-index: 10000;

  @media (min-width: 1024px) {
    margin: 20px auto 0;
    position: fixed;
    color: #929292;
    top: 0px;
    font-size: 16px;
    width: 230px;
  }
`;

export const HeaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  min-width: 200px;
  height: 55px;
  z-index: 9990;
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
  width: auto;
  height: auto;
  margin: 0;
  cursor: pointer;
  box-sizing: border-box;
  border: 0;
  margin: 0 25px;
  z-index: 9995;
`;

export const NavBottomContainer = styled.div`
  position: fixed;
  bottom: 0;
  width: 100vw;
  min-width: 200px;
  height: 65px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f2f2f2;
  box-shadow: 0px -2px 10px rgba(0, 0, 0, 0.1);
  border-radius: 40px 40px 0px 0px;
  z-index: 10500;
  @media (min-width: 1024px) {
    top: 0;
    left: 0;
    right: 0;
    height: 55px;
    width: 40vw;
    box-shadow: 0 0 0 0;
    margin: 0 auto;
    background-color: rgba(0, 0, 0, 0);
    z-index: 10500;
  }
`;

export const NavMenuBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 35px;
  height: 35px;
  margin: 0 auto;
  cursor: pointer;
  box-sizing: border-box;
  border: 0;
  z-index: 11000;
`;

export const NavPostBox = styled.div`
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
  z-index: 11000;
  @media (min-width: 1024px) {
    position: fixed;
    bottom: 0;
    right: 0;
    margin: 3%;
    z-index: 11000;
  }
`;

export const PlusWrap = styled.div`
  display: flex;
  margin-bottom: 30px;
  align-items: center;
  justify-content: center;
  z-index: 10999;
  svg {
    outline: 5px solid white;
    border-radius: 100px;
    box-sizing: content-box;
    background-color: white;
    filter: drop-shadow(2px 2px 10px rgba(0, 0, 0, 0.1));
    z-index: 10999;
  }
`;

export const NoDot = styled.div`
  width: 7px;
  height: 7px;
  border-radius: 10px;
  margin-bottom: 15px;
  background-color: none;
  z-index: 10001;
`;

export const RedDot = styled.div`
  width: 7px;
  height: 7px;
  border-radius: 10px;
  margin-bottom: 15px;
  background-color: red;
  z-index: 10001;
`;
