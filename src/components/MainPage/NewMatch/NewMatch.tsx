import * as s from './styled';

import Letter from '../../../assets/images/mail.png';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { Link } from 'react-router-dom';

export const Carousel = () => {
  const settings = {
    arrows: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
  };
  return (
    <s.NewMatchTextBox>
      <Slider {...settings}>
        <Link to="/reply">
          <s.NewMatchTextContent>안녕하세용</s.NewMatchTextContent>
        </Link>
        <Link to="/reply">
          <s.NewMatchTextContent>방구뿡</s.NewMatchTextContent>
        </Link>
      </Slider>
    </s.NewMatchTextBox>
  );
};

export const NewMatch = () => {
  return (
    <div>
      <s.NewMatchTitle>
        <s.Image src={Letter} />
        <p>새 글 매칭</p>
        <s.NewMatchTitleCount>+3</s.NewMatchTitleCount>
      </s.NewMatchTitle>
      <Carousel />
    </div>
  );
};
