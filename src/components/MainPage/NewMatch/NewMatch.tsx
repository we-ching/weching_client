import * as S from './styled';
import axios from 'axios';
import { useState, useEffect } from 'react';

import Letter from '../../../assets/images/mail.png';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { Link } from 'react-router-dom';

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

  const [post, setPost] = useState<any>([]);

  const matchRequest = async () => {
    try {
      await axios
        .get(`/api/main/user`, {
          headers: {
            authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjI0LCJlbWFpbCI6IndvZ25zMjA1QGdtYWlsLmNvbSIsInN0YXR1cyI6MCwiaWF0IjoxNjcyMDIyNzUwLCJleHAiOjE2NzIxMDU1NTB9.sbTWCcXyYfy_A0E_9TVAukLXZnnJFM94CfGFD-C-6wo`,
          },
        })
        .then((res) => {
          setPost([...post, ...res.data.posts]);
        });
    } catch (err) {
      alert(
        `2. 새 글 매칭에서 예기지 못한 에러가 발생했습니다.\nERROR: ${err}`
      );
    }

    // const state: any = useAppSelector((state) => {
    //   return state.mainInfo.userInfo;
    // });
    // const arr = state.posts; //배열

    // console.log(arr[0]);
    //배열 0번째에 들은 객체 출력
    // console.log(state.posts);
  };
  useEffect(() => {
    matchRequest();
  }, []);

  // const arr = post[0];

  // console.log(arr);
  return (
    <>
      <S.NewMatchTitle>
        <S.Image src={Letter} />
        <p>새 글 매칭</p>
        <S.NewMatchTitleCount>+{post.length}</S.NewMatchTitleCount>
      </S.NewMatchTitle>
      <S.NewMatchTextBox>
        <Slider {...settings}>
          {post.map((item: any) => {
            const itemId = item.post.id;
            const itemContent = item.post.content;
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
