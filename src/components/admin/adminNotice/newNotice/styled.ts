import styled from 'styled-components';

export const Background = styled.div`
  top: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-item: center;
`;

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  min-width: 200px;
`;

export const renewNotice = styled.div`
  margin: 18px 0;

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

export const ContentForm = styled.form`
  margin: 10px 0;

  position: relative;
  width: 90vw;
  max-width: 750px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  background-color: #FFF;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
`;

export const SubTitle = styled.div`
  margin: 17px 0 0 17px;

  font-style: normal;
  font-weight: bold;
  font-size: 16px;
`;

export const Inputs = styled.div`
  margin: 17px 17px 0 10px;

  #TitleInput {
    width: 100%;
    max-width: 750px;
    height: 30px;
  }
  #ContentInput {
    margin: 17px 0;
    width: 100%;
    max-width: 750px;
    height: 370px;
  }
`;

export const Buttons = styled.div`
  margin-bottom: 17px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;