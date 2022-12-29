import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import imgOne from '../../assets/images/Rectanglethumb.png';
import img1 from '../../assets/images/img1.png';
import Rectangle from '../../assets/images/Rectangle.png';
import thing from '../../assets/images/thing.png';
import presen from '../../assets/images/presen.png';
import * as S from './styled';
import { GoogleBtn } from '../Login/GoogleBtn';

export const LandingPage = () => {
  const [bottomCheck, setBottomCheck] = useState(0);
  window.onscroll = function (ev) {
    if (window.scrollY >= 0) {
      setBottomCheck(window.scrollY);
    }
  };
  const navigate = useNavigate();

  return (
    <S.LandingPageContainer>
      {bottomCheck >= 0 ? (
        <S.TitleContents>오늘도 당신의 가치는 빛났습니다!</S.TitleContents>
      ) : null}
      {bottomCheck >= 0 ? (
        <S.ImgOne>
          <img src={imgOne} alt="당신을 위한 엄지척" />
        </S.ImgOne>
      ) : null}
      {bottomCheck >= 0 ? (
        <S.SubContents>
          익명의 공간에서 소식을 나누고 기쁨을 나눕니다.
        </S.SubContents>
      ) : null}
      <GoogleBtn />
      <S.ToHome
        onClick={()=> navigate('/home')}
      >비회원으로 둘러보기</S.ToHome>
      {bottomCheck >= 400 ? (
        <S.SubContents>
          <img src={img1} alt="말풍선 사진" />
          <h6>신개념 칭찬 커뮤니티!</h6>
          <p>
            새로운 글을 작성하면, <br />
            무작위 대상에게 글이 전달됩니다!
          </p>
          <br />
          <p>
            물론 당신도 똑같은 시스템에 의해 <br />
            익명의 작성자가 쓴 글이 전달됩니다!
          </p>
        </S.SubContents>
      ) : null}
      {bottomCheck >= 1200 ? (
        <S.SubContents>
          <img src={Rectangle} alt="왕관 사진" />
          <h6>칭찬왕에 도전해보세요!</h6>
          <p>
            다른 유저들과 칭찬을 나누고, <br />
            랭킹 1위에도 도전해보세요!
          </p>
        </S.SubContents>
      ) : null}
      {bottomCheck >= 1800 ? (
        <S.SubContents>
          <img src={thing} alt="명언을 표현한 그래픽 사진" />
          <h6>데일리 한 줄 명언</h6>
          <p>당신의 칭찬에 영감을 드려요!</p>
        </S.SubContents>
      ) : null}
      {bottomCheck >= 2400 ? (
        <S.SubContents>
          <img src={presen} alt="선물 구매 사진" />
          <h6>포인트 상점 오픈 예정!</h6>
          <p>활동을 통해 모은 포인트로 기프티콘을 구매해보세요!</p>
        </S.SubContents>
      ) : null}
      {bottomCheck >= 2900 ? (
        <S.ImgTwo>
          <img src="/logo.png" width={220} />
        </S.ImgTwo>
      ) : null}
      {bottomCheck >= 2950 ? (
        <S.TitleContents>우리 모두의 칭찬 타임!</S.TitleContents>
      ) : null}
      {bottomCheck >= 3000 ? (
        <S.SubContents>
          <p>지금 함께 하세요!</p>
        </S.SubContents>
      ) : null}
      <S.ImgOne />
      <S.FoggyUnder></S.FoggyUnder>
      <S.ForeEffect>
        <div>
          <p />
        </div>
      </S.ForeEffect>
    </S.LandingPageContainer>
  );
};
