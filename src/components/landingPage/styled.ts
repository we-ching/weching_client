import styled from 'styled-components';

export const LandingPageContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 4000px;
  background: linear-gradient(180deg, #e9bcbc 0%, #9ebf40 100%);
`;

export const TitleContents = styled.h6`
  font-style: normal;
  font-weight: 900;
  font-size: 24px;
  line-height: 35px;

  display: flex;
  justify-content: center;
  text-align: center;
  animation: fade-in 1.4s;
  color: #444444;
  padding-top: 30px;
  img {
    position: absolute;
    bottom: 450px;
    animation: fade-in 1.4s;
  }
  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  &:first-child {
    padding-top: 120px;
  }
`;

export const SubContents = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 35px;
  padding-top: 10px;
  padding-bottom: 30px;
  justify-content: center;
  text-align: center;
  color: #444444;
  animation: fade-in 1.4s;    
  img:first-child {
    padding-top: 200px;
    width: 300px;
    height: auto;
  }
  @keyframes fade-in {
    from {opacity: 0;}
    to {opacity: 1;}
`;

export const ImgOne = styled.div`
  width: 300px;
  height: 300px;

  margin: 0 auto;

  img:first-child {
    width: 100%;
    height: 100%;
    animation: fade-in 1.4s;
  }
  @keyframes fade-in {
    from {opacity: 0;}
    to {opacity: 1;}
`;
export const ImgTwo = styled.div`
width: 220px;
margin: 0 auto;
padding-top: 200px;
animation: fade-in 1.4s;
  @keyframes fade-in {
    from {opacity: 0;}
    to {opacity: 1;}
`;

export const LoginBlock = styled.button`
  position: fixed;
  position: -webkit-sticky;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 99;
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
  cursor: pointer;
  &:active {
    box-shadow: 4px 4px 6px 0 rgba(255, 255, 255, 0.3),
      -1px -1px 6px 0 rgba(116, 125, 136, 0.2),
      inset -4px -4px 6px 0 rgba(255, 255, 255, 0.2),
      inset 4px 4px 6px 0 rgba(0, 0, 0, 0.2);
  }
`;

export const GoogleButton = styled.button`
  position: absoulte;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 320px;
  height: 60px;
  border-radius: 10px;
  border: none;
  background: transparent;
  backdrop-filter: blur(2px);

  margin: 0 auto;
  left: 0;
  right: 0;

  img {
    padding-right: 10px;
  }
  cursor: pointer;
`;

export const ToHome = styled.div`
  position: fixed;
  position: -webkit-sticky;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 99;
  width: 320px;
  height: 60px;
  font-size: 13px;
  color: gray;
  top: 87vh;
  margin: 0 auto;
  left: 0;
  right: 0;
`;

export const FoggyUnder = styled.div`
  position: fixed;
  left: 0px;
  bottom: 0px;

  width: 100vw;
  height: 150px;
  background: linear-gradient(
    180deg,
    rgba(221, 221, 221, 0) 41.15%,
    rgba(217, 217, 217, 0) 53.12%,
    rgba(255, 255, 255, 0.67) 100%
  );
`;

export const ForeEffect = styled.div`
  position: fixed;
  right: 0;
  bottom: 20px;
  left: 0;
  width :100vw;
  height: 100vh;
  transition: .3s;
  opacity: .7;
  rotate: 180deg;
div {
    margin: 50vh auto;
    width: 3px;
    padding: 10px 15px;
    height: 35px;
    border: 3px solid #fff;
    border-radius: 25px;
    opacity: 0.75;
    box-sizing: content-box;
  }
p {
    width: 3px;
    height: 10px;
    border-radius: 25%;
    background-color: #fff;
    animation-name: scroll;
    animation-duration: 2.2s;
    animation-timing-function: cubic-bezier(.15,.41,.69,.94);
    animation-iteration-count: infinite;
}

}
@keyframes scroll {
  0% { opacity: 0; }
  10% { transform: translateY(0); opacity: 1; }
  100% { transform: translateY(15px); opacity: 0;}
}
}
transition: opacity .5s;
&:active {
  opacity: 0;
}
`;
