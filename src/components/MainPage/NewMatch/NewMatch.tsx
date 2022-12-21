import * as s from './styled';

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

  return (
    <>
      <s.NewMatchTitle>
        <s.Image src={Letter} />
        <p>새 글 매칭</p>
        <s.NewMatchTitleCount>+{props.props.length}</s.NewMatchTitleCount>
      </s.NewMatchTitle>
      <s.NewMatchTextBox>
        <Slider {...settings}>
          <Link to="/reply">
            <s.NewMatchTextContent>
              {props.props[0].content}
            </s.NewMatchTextContent>
          </Link>
          <Link to="/reply">
            <s.NewMatchTextContent>
              {props.props[1].content}
            </s.NewMatchTextContent>
          </Link>
        </Slider>
      </s.NewMatchTextBox>
    </>
  );
};
