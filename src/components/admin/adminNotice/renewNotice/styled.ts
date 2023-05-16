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
  width: 100vw;
  height: 100vh;
  min-width: 200px;
  max-width: 1024px;
`;

export const renewNotice = styled.div`
  margin: 18px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const TitleContainer = styled.div`
  margin: 10px 0;

  position: relative;
  width: 90vw;
  max-width: 750px;
  height: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  background-color: #BFA78A;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
`;

export const Title = styled.div`
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
  width: 90vw;
  max-width: 750px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  background-color: #FFF;
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
  .boxs {
    margin: 0 17px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  .titleBoxs {
    display: flex;
    flex-direction: row;
  }
  .contentBoxs {
    display: flex;
    flex-direction: row;
  }
  .content {
    margin: 0 17px;
  }
  .none {
    margin: 0 17px;
    font-weight: bold;
  }
`;

export const Line = styled.div`
  margin: 12px 17px;

  max-width: 750px;
  height: 0px;
  border: 1px solid rgba(68, 68, 68, 0.5);
`;

export const delBtn = styled.div<any>`
  width: 60px;
  height: 17px;
  display: flex;
  justify-content: center;
  align-items: center;

  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  color: #FFF;
  background-color: #C90000;
  border-radius: 10px;
`;

export const ModalStyle = styled.div`
  position: absolute;
  width: 350px;
  height: 160px;

  background-color: #FFF;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;

  font-size: 18px;
  line-height: 26px;
  color: #444444;
`;

export const ModalTitle = styled.div`
  margin: 20px 0 15px 20px;

  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 26px;
  color: #444444;
`;

export const delContent = styled.h3`
  margin: 10px auto;

  display: flex;
  justify-content: center;

  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 26px;
`;

export const Form = styled.form`
  margin: 0 10px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  input {
    width: 200px;
  }
`;