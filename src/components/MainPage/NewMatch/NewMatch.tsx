import * as S from './styled';
import { AdviceTitle } from '../Advice/styled';

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
      }}
      onClick={onClick}
      src={Larrow}
    />
  );
}

export const NewMatch = () => {
  const settings = {
    arrows: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    swipe: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,

    responsive: [
      {
        breakpoint: 600,
        settings: {
          arrows: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          swipe: true,
          nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />,
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
  const arr = post.todoReview;
  return (
    <>
      <S.NewMatchTextBox>
        <S.NewMatchTitle>칭찬을 기다리고 있어요❤</S.NewMatchTitle>
        <S.StyledSlider {...settings}>
          {arr &&
            arr.map((item: any) => {
              return (
                <Link to={`/reply/${item.id}`}>
                  <S.NewMatchTextContent
                    dangerouslySetInnerHTML={{ __html: item.content }}
                  ></S.NewMatchTextContent>
                </Link>
              );
            })}
        </S.StyledSlider>
      </S.NewMatchTextBox>
    </>
  );
};
