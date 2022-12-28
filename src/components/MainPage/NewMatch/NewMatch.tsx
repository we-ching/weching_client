import * as S from './styled';

import Letter from '../../../assets/images/mail.png';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useAppSelector } from '../../../store/config';

// interface newMatch {
//   user: {};
//   todoReview: {};
//   posts: [];
// }

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

export const NewMatch = () => {
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
  const arr = post.todoReview;
  return (
    <>
      <S.NewMatchTitle>
        <S.Image src={Letter} />
        <p>새롭게 매칭된 글</p>
        <S.NewMatchTitleCount>+{arr && arr.length}</S.NewMatchTitleCount>
      </S.NewMatchTitle>
      <S.NewMatchTextBox>
        <Slider {...settings}>
          {arr &&
            arr.map((item: any) => {
              return (
                <Link to={`/reply/${item.id}`}>
                  <S.NewMatchTextContent key={item.id}>
                    {item.content}
                  </S.NewMatchTextContent>
                </Link>
              );
            })}
        </Slider>
      </S.NewMatchTextBox>
    </>
  );
};
