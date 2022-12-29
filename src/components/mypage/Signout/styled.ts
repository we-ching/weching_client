import styled from 'styled-components';

export const ItemBox = styled.div`
  margin: 10px 0;

  position: relative;
  width: 90vw;
  max-width: 750px;
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

  :hover {
    transform: translateY(2px);
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
  }
  > p {
    margin-left: 17px;
  }
`;

export const ModalStyle = styled.div`
  position: absolute;
  width: 350px;
  height: 260px;

  background-color: #FFFFFF;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;

  font-size: 18px;
  line-height: 26px;
  color: #444444;
`;

export const Title = styled.div`
  margin: 20px 0 15px 20px;

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
    width: 200px;
  }
`;

export const SignOutTitle = styled.h3`
  margin: 10px auto;

  display: flex;
  flex-direction: column;

  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 26px;
`;

export const EditTitle = styled.h3`
  margin: 10px auto;

  display: flex;
  flex-direction: column;
`;