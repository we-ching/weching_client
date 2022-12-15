import styled from 'styled-components';
import google from '../../assets/images/google.png';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: gray;
  backdrop-filter: blur(10px);
`;

export const FormCon = styled.div`
  text-align: center;
  background: #fff;
  width: 340px;
  padding: 20px;
  border-radius: 20px;
`;

export const Form = styled.form``;

export const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
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
  :hover {
    background-color: lightgray;
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
