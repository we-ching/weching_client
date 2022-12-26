import * as S from './styled';

import Letter from '../../../assets/images/mail.png';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { Link } from 'react-router-dom';

export const GoToPost = (props: any) => {
  const settings = {
    arrows: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
  };

  // const arr = [props.props[0], props.props[1], props.props[2]];
  const arr = props.props;
  arr.splice(3);
  console.log(arr);

  return (
    <>
      <S.GoToTitle>
        <S.Image src={Letter} />
        <p>나에게 온 칭찬</p>
        <S.GoToTitleCount>+{arr.length}</S.GoToTitleCount>
      </S.GoToTitle>
      <S.GoToTextBox>
        <Slider {...settings}>
          {arr.map((item: any) => {
            const itemId = item.id;
            const itemContent = item.content;
            return (
              <Link to={`/mypage/mypost/${itemId}`}>
                <S.GoToTextContent key={itemId}>
                  {itemContent}
                </S.GoToTextContent>
              </Link>
            );
          })}
        </Slider>
      </S.GoToTextBox>
    </>
  );
};
