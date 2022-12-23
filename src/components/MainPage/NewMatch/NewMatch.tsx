import * as S from './styled';

import Letter from '../../../assets/images/mail.png';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { Link } from 'react-router-dom';

export const NewMatch = (props: any) => {
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
  // console.log(arr);

  return (
    <>
      <S.NewMatchTitle>
        <S.Image src={Letter} />
        <p>새 글 매칭</p>
        <S.NewMatchTitleCount>+{arr.length}</S.NewMatchTitleCount>
      </S.NewMatchTitle>
      <S.NewMatchTextBox>
        <Slider {...settings}>
          {arr.map((item: any) => {
            const itemId = item.id;
            const itemContent = item.content;
            return (
              <Link to={`/reply/${itemId}`}>
                <S.NewMatchTextContent key={itemId}>
                  {itemContent}
                </S.NewMatchTextContent>
              </Link>
            );
          })}
        </Slider>
      </S.NewMatchTextBox>
    </>
  );
};
