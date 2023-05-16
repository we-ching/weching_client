import styled from 'styled-components';
import google from '../../assets/images/google.png';

export const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(180deg, #e9bcbc 0%, #9ebf40 100%);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FormCon = styled.div`
  text-align: center;
  background: #fff;
  width: 340px;
  padding: 20px;
  border-radius: 20px;
  box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.3);
`;

export const Form = styled.form``;

export const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
`;
export const NicknameInput = styled.input`
  height: 40px;
  padding: 5px 15px;
  border: none;
  border-radius: 8px;
  background-color: lightgray;
`;
export const BirthInput = styled.input`
  padding: 5px 15px;
  height: 40px;
  border: none;
  border-radius: 8px;
  background-color: lightgray;
  margin-bottom: 20px;
`;

export const LoginTitle = styled.p`
  padding: 10px;
  margin-top: 20px;
  font-size: 22px;
  font-weight: 400;
`;

export const SubmitBtnCon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  padding: 2px 20px;
  margin: 0 auto;
  background: #fff;
  border-radius: 10px;
  box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  &:active {
    box-shadow: 4px 4px 6px 0 rgba(255, 255, 255, 0.3),
      -1px -1px 6px 0 rgba(116, 125, 136, 0.2),
      inset -4px -4px 6px 0 rgba(255, 255, 255, 0.2),
      inset 4px 4px 6px 0 rgba(0, 0, 0, 0.2);
  }
`;

export const SubmitBtn = styled.button`
  line-height: 
  width: 100%;
  height: 55px;
  font-size: 18px;
  background-color: transparent;
  outline: none;
  border: none;
`;

export const GoogleImage = styled.div`
  display: inline-block;
  background-image: url(${google});
  background-size: cover;
  width: 25px;
  height: 25px;
  margin: 0 10px;
`;
