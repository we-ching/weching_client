import * as S from './styled';

import Letter from '../../../assets/images/mail.png';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useAppSelector } from '../../../store/config';

export const GoToPost = () => {
  const settings = {
    arrows: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
  };

  const post: any = useAppSelector((state) => {
    return state.mainInfo.userInfo;
  });

  useEffect(() => {
    post;
  }, []);

  const arr = post.posts;
  console.log(arr);

  return (
    <>
      <S.GoToTitle>
        <S.Image src={Letter} />
        <p>받은 리뷰함</p>
        <S.GoToTitleCount>+{arr && arr.length}</S.GoToTitleCount>
      </S.GoToTitle>
      <S.GoToTextBox>
        <Slider {...settings}>
          {arr &&
            arr.map((item: any) => {
              return (
                <Link to={`/reply/${item.reviews.id}`}>
                  <S.GoToTextContent key={item.reviews.id}>
                    {item.reviews.content}
                  </S.GoToTextContent>
                </Link>
              );
            })}
        </Slider>
      </S.GoToTextBox>
    </>
  );
};
