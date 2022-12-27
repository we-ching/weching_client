import * as S from './styled';

import Letter from '../../../assets/images/mail.png';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useAppSelector } from '../../../store/config';

export const NewMatch = () => {
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

  return (
    <>
      <S.NewMatchTitle>
        <S.Image src={Letter} />
        <p>새 글 매칭</p>
        <S.NewMatchTitleCount>+{arr && arr.length}</S.NewMatchTitleCount>
      </S.NewMatchTitle>
      <S.NewMatchTextBox>
        <Slider {...settings}>
          {arr &&
            arr.map((item: any) => {
              return (
                <Link to={`/reply/${item.post.id}`}>
                  <S.NewMatchTextContent key={item.post.id}>
                    {item.post.content}
                  </S.NewMatchTextContent>
                </Link>
              );
            })}
        </Slider>
      </S.NewMatchTextBox>
    </>
  );
};
