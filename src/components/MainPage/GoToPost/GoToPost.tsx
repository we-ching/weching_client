import * as S from './styled';

import Letter from '../../../assets/images/mail.png';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useAppSelector } from '../../../store/config';

function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'block',
        background: 'black',
        right: '-10px',
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'block',
        background: 'black',
        left: '-10px',
      }}
      onClick={onClick}
    />
  );
}

export const GoToPost = () => {
  const settings = {
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const post: any = useAppSelector((state) => {
    return state.mainInfo.userInfo;
  });

  useEffect(() => {
    post;
  }, []);

  const arr = post.posts;
  return (
    <>
      <S.GoToTitle>
        <S.Image src={Letter} />
        <p>내가 작성한 글</p>
        <S.GoToTitleCount>+{arr && arr.length}</S.GoToTitleCount>
      </S.GoToTitle>
      <S.GoToTextBox>
        <Slider {...settings}>
          {arr &&
            arr.map((item: any) => {
              return (
                <Link to={`/mypage/mypost/${item.post.id}`}>
                  <S.GoToTextContent>{item.post.content}</S.GoToTextContent>
                </Link>
              );
            })}
        </Slider>
      </S.GoToTextBox>
    </>
  );
};
