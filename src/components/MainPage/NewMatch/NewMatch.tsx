import * as s from './styled';

import Letter from '../../../assets/images/mail.png';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { Link } from 'react-router-dom';

export const Carousel = (props: any) => {
  const settings = {
    arrows: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
  };
  // const arr = props.props;
  console.log(props.props[0]);
  return (
    <s.NewMatchTextBox>
      <Slider {...settings}>
        {/* <Link to="/reply">
          <s.NewMatchTextContent>
            {props.props[0].content}
          </s.NewMatchTextContent>
        </Link> */}
        {/* <Link to="/reply">
            <s.NewMatchTextContent>방구뿡</s.NewMatchTextContent>
          </Link> */}
      </Slider>
    </s.NewMatchTextBox>
  );
};

export const NewMatch = (props: any) => {
  return (
    <div>
      <s.NewMatchTitle>
        <s.Image src={Letter} />
        <p>새 글 매칭</p>
        <s.NewMatchTitleCount>+{props.props.length}</s.NewMatchTitleCount>
      </s.NewMatchTitle>
      <Carousel props={props.props} />
    </div>
  );
};
