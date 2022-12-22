import styled from 'styled-components';

const customMediaQuery = (maxWidth: number) =>
  `@media (max-width: ${maxWidth}px)`;
const media = {
  mobile: customMediaQuery(1024),
};

export const LandingPageContainer = styled.body`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 2000px;

  background: linear-gradient(180deg, #e9bcbc 0%, #9ebf40 100%);

  ${media.mobile} {
  }
`;

export const TitleContents = styled.h6`
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 900;
  font-size: 24px;
  line-height: 35px;

  display: flex;
  justify-content: center;
  text-align: center;

  color: #444444;
  padding-top: 150px;
`;

export const SubContents = styled.div`
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 900;
  font-size: 18px;
  line-height: 35px;

  display: flex;
  justify-content: center;
  text-align: center;

  color: #444444;
`;

export const ImgOne = styled.div`
  width: 300px;
  height: 300px;

  margin: 0 auto;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const LoginBlock = styled.button`
  position: fixed;
  position: -webkit-sticky;
  display: flex;
  align-items: center;
  justify-content: center;

  width: 320px;
  height: 60px;
  border-radius: 10px;
  border: 2px solid rgb(255, 255, 255, 0.8);

  background: rgb(255, 255, 255, 0.7);
  backdrop-filter: blur(2px);

  top: 80vh;
  margin: 0 auto;
  left: 0;
  right: 0;

  img {
    padding-right: 10px;
  }
`;

export const FoggyUnder = styled.div`
  position: fixed;
  left: 0px;
  bottom: 0px;

  width: 100vw;
  height: 150px;
  background: linear-gradient(
    180deg,
    rgba(221, 221, 221, 0.0744444) 41.15%,
    rgba(217, 217, 217, 0) 53.12%,
    rgba(255, 255, 255, 0.67) 100%
  );
`;

export const ForeEffect = styled.span`
  width: 100vw;
  height: 100vh;

  img {
    &: first-child {
      position: fixed;
      display: flex;
      top: 45vh;
      display: flex;
      right: 0px;
    }
    &: last-child {
      position: fixed;
      display: flex;

      margin: 0 auto;
      bottom: 2vh;
      left: 0;
      right: 0;
    }
  }
`;
