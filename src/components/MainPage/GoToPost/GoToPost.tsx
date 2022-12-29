import * as S from './styled';

import Letter from '../../../assets/images/mail.png';
import Larrow from '../../../assets/images/left-arrow.png';
import Rarrow from '../../../assets/images/right-arrow.png';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useAppSelector } from '../../../store/config';

function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <img
      className={className}
      style={{
        ...style,
        display: 'block',
        background: 'transparent',
        right: '-15px',
        width: '30px',
        height: '30px',
        opacity: '0.6',
      }}
      onClick={onClick}
      src={Rarrow}
    />
  );
}

function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <img
      className={className}
      style={{
        ...style,
        display: 'block',
        background: 'transparent',
        left: '-15px',
        width: '30px',
        height: '30px',
        opacity: '0.6',
      }}
      onClick={onClick}
      src={Larrow}
    />
  );
}

export const GoToPost = () => {
  const settings = {
    arrows: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    swipeToScroll: true,
    draggable: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,

    responsive: [
      {
        breakpoint: 600,
        settings: {
          arrows: true,
          infinite: false,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          swipe: true,
          Arrows: false,
        },
      },
    ],
  };

  const post: any = useAppSelector((state) => {
    return state.mainInfo.userInfo;
  });

  useEffect(() => {
    post;
  }, []);

  const arr = post.posts;

  // console.log(arr);
  return (
    <>
      <S.GoToTextBox>
        <S.GoToTitle>
          <S.Image src={Letter} />
          칭찬을 확인해보세요
        </S.GoToTitle>
        <S.StyledSlider {...settings}>
          {arr &&
            arr.map((item: any) => {
              return (
                <Link to={`/mypage/mypost/`}>
                  {item.post && (
                    <S.GoToTextContent
                      dangerouslySetInnerHTML={{ __html: item.post.content }}
                    ></S.GoToTextContent>
                  )}
                </Link>
              );
            })}
        </S.StyledSlider>
      </S.GoToTextBox>
    </>
  );
};
