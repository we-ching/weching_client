import * as S from './styled';
import { mainApiUserType } from '../styled';
import React, { useState, useEffect } from 'react';

import Letter from '../../../assets/images/mail.png';
import Larrow from '../../../assets/images/left-arrow.png';
import Rarrow from '../../../assets/images/right-arrow.png';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { Link } from 'react-router-dom';
import { getCookie } from '../../Login/GoogleBtn';
import axios from 'axios';

interface arrowPropsType {
  className: string;
  style: React.CSSProperties | undefined;
  onClick: React.MouseEventHandler<HTMLImageElement> | undefined;
}

function SampleNextArrow(props: arrowPropsType) {
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
        opacity: '0.6',
      }}
      onClick={onClick}
      src={Rarrow}
    />
  );
}

function SamplePrevArrow(props: arrowPropsType) {
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
        opacity: '0.6',
      }}
      onClick={onClick}
      src={Larrow}
    />
  );
}

export const GoToPost = () => {
  const settings = {
    arrows: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    swipeToScroll: true,
    draggable: true,
    nextArrow: (
      <SampleNextArrow className={''} style={undefined} onClick={undefined} />
    ),
    prevArrow: (
      <SamplePrevArrow className={''} style={undefined} onClick={undefined} />
    ),

    responsive: [
      {
        breakpoint: 600,
        settings: {
          arrows: true,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          swipe: true,
          draggable: true,
          nextArrow: (
            <SampleNextArrow
              className={''}
              style={undefined}
              onClick={undefined}
            />
          ),
          prevArrow: (
            <SamplePrevArrow
              className={''}
              style={undefined}
              onClick={undefined}
            />
          ),
        },
      },
    ],
  };
  const Cookies = getCookie('accessToken');
  const [post, setPost] = useState<mainApiUserType[]>([]);
  const postReq = async () => {
    try {
      Cookies &&
        (await axios
          .get(`/api/main/user`, {
            headers: {
              authorization: `Bearer ${Cookies}`,
            },
          })
          .then((res) => {
            setPost([...post, ...res.data.posts]);
          }));
    } catch (err) {
      alert(`1. 예기지 못한 에러가 발생했습니다.\nERROR: ${err}`);
    }
  };

  useEffect(() => {
    postReq();
  }, []);

  return (
    <>
      <S.GoToTextBox>
        <S.GoToTitle>
          <S.Image src={Letter} />
          칭찬을 확인해보세요
        </S.GoToTitle>
        <S.StyledSlider {...settings}>
          {Cookies ? (
            post &&
            post.map((item) => {
              return (
                <Link to={`/mypage/mypost/`} key={item.post.id}>
                  {item.post && (
                    <S.GoToTextContent
                      isChecked={item.post.isChecked}
                      dangerouslySetInnerHTML={{ __html: item.post.content }}
                    ></S.GoToTextContent>
                  )}
                </Link>
              );
            })
          ) : (
            <Link to={`/login/guest/`}>
              <p>로그인이 필요한 기능입니다.</p>
            </Link>
          )}
        </S.StyledSlider>
      </S.GoToTextBox>
    </>
  );
};
