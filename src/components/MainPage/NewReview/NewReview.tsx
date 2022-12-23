import * as S from './styled';

import Letter from '../../../assets/images/mail.png';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { Link } from 'react-router-dom';

export const NewReview = (props: any) => {
  const settings = {
    arrows: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
  };

  const arr = props.props;
  console.log(arr);

  return (
    <>
      <S.NewReviewTitle>
        <S.Image src={Letter} />
        <p>나에게 온 칭찬</p>
        <S.NewReviewTitleCount>+{arr.length}</S.NewReviewTitleCount>
      </S.NewReviewTitle>
      <S.NewReviewTextBox>
        <Slider {...settings}>
          {arr.map((item: any) => {
            return (
              <Link to="/mypage">
                <S.NewReviewTextContent key={item.id}>
                  {item.content}
                </S.NewReviewTextContent>
              </Link>
            );
          })}
        </Slider>
      </S.NewReviewTextBox>
    </>
  );
};
