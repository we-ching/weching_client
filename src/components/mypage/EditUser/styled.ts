import styled from 'styled-components';

export const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
`;

export const ItemBox = styled.div`
  margin: 10px 0;

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

  > p {
    margin-left: 17px;
  }
`;

export const ModalStyle = styled.div`
  position: absolute;
  width: 350px;
  height: 350px;

  background-color: #FFFFFF;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;

  font-size: 18px;
  line-height: 26px;
  color: #444444;
`;

export const Title = styled.div`
  margin: 20px 0 20px 20px;

  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 26px;
  color: #444444;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  input {
    width: 240px;
  }
`;

export const EditTitle = styled.h3`
  margin: 10px auto;

  display: flex;
  flex-direction: column;
`;