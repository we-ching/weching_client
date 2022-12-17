import React from 'react';

import styled from 'styled-components';
import Crown from '../../assets/images/Rectangle.png';
import Present from '../../assets/images/Rectangle-1.png';
import Letter from '../../assets/images/mail.png';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = () => {
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
    <NewMatchTextBox>
      <Slider {...settings}>
        <NewMatchTextContent>안녕하세용</NewMatchTextContent>
        <NewMatchTextContent>반갑슴둥</NewMatchTextContent>
      </Slider>
    </NewMatchTextBox>
  );
};

const Container: any = styled.div`
  width: 430px;
  height: 932px;
  margin: auto;
  background-color: #f0f0f0;
  color: #444444;

  overflow-y: scroll;
  overflow-x: hidden;

  ::-webkit-scrollbar {
    display: none; /* 크롬, 사파리, 오페라, 엣지 */
  }
`;

const UpperNav: any = styled.div`
  width: 428px;
  height: 70px;

  background-color: white;
  box-shadow: 0 4px 4px 0 rgb(0 0 0 / 0.1);
`;

const LowerNav: any = styled.div`
  width: 428px;
  height: 88px;

  box-shadow: 0 -2px 10px 0 rgb(0 0 0 / 0.1);
`;

const NewMatchTitle: any = styled.div`
  margin: 25px auto 0;
  width: 370px;

  display: flex;
  align-items: center;

  font-size: 18px;
  font-weight: 700;
`;

const NewMatchTitleCount: any = styled.p`
  width: 27px;
  height: 19px;
  border-radius: 10px;
  background-color: red;
  margin-left: 8px;

  line-height: 19px;
  text-align: center;
  color: white;
  font-size: 13px;
`;

const NewMatchTextBox: any = styled.div`
  margin: 0 auto;
  padding: 30px;
  font-size: 14px;
  width: 310px !important;
  height: 270px;
  border-radius: 10px;
  background-color: white;

  box-shadow: 0 4px 4px 0 rgb(0 0 0 / 0.1);

  overflow: hidden;
`;

const NewMatchTextContent: any = styled.div`
  padding: 15px;
  font-size: 14px;
  width: 310px;
  height: 220px;

  display: flex;
  transition-property: transform;
`;

const TodayQuotes: any = styled.div`
  margin: 15px auto;
  padding: 10px 15px;
  width: 370px;
  box-sizing: border-box;
  border-radius: 10px;
  background-color: white;

  box-shadow: 0 4px 4px 0 rgb(0 0 0 / 0.1);
`;

const TodayQuotesTitle: any = styled.div`
  border-bottom: 1px solid rgba(68, 68, 68, 0.5);
  padding: 5px 0;
  height: 26px;

  font-size: 18px;
`;

const TodayQuotesContent: any = styled.div`
  padding: 30px 0;

  font-size: 14px;
  text-align: center;
`;

const KingOfMonth: any = styled.div`
  margin: 15px auto;
  padding: 10px 15px;
  width: 370px;
  background-color: white;
  box-sizing: border-box;
  border-radius: 10px;

  box-shadow: 0 4px 4px 0 rgb(0 0 0 / 0.1);
`;

const KingOfMonthTitle: any = styled.div`
  border-bottom: 1px solid rgba(68, 68, 68, 0.5);
  padding: 5px 0;
  font-size: 18px;
`;

const KingOfMonthUserList: any = styled.div`
  // 필요없는 부분인가..일단 두겠습니다.
`;

const KingOfMonthUser: any = styled.div`
  padding: 15px;
  font-size: 18px;
  text-align: center;

  &:first-child {
    font-weight: 700;
  }
`;

const Image: any = styled.img`
  margin: 0 auto;
  padding: 10px 0;
  width: 118px;

  display: block;

  &:first-child {
    width: 33px;
    margin: 0 5px 0 0;
  }
`;

export default function MainPage() {
  return (
    <Container>
      <UpperNav />
      <NewMatchTitle>
        <Image src={Letter} />
        <p>새 글 매칭</p>
        <NewMatchTitleCount>+3</NewMatchTitleCount>
      </NewMatchTitle>
      <Carousel />
      <TodayQuotes>
        <TodayQuotesTitle>오늘의 명언</TodayQuotesTitle>
        <Image src={Present} />
        <TodayQuotesContent>상자를 눌러보세요!</TodayQuotesContent>
      </TodayQuotes>
      <KingOfMonth>
        <KingOfMonthTitle>이달의 칭찬왕</KingOfMonthTitle>
        <Image src={Crown} />
        <KingOfMonthUserList>
          <KingOfMonthUser>1등 - 성수낙낙</KingOfMonthUser>
          <KingOfMonthUser>2등 - snowRice</KingOfMonthUser>
          <KingOfMonthUser>3등 - D급 개발자</KingOfMonthUser>
        </KingOfMonthUserList>
      </KingOfMonth>
      <LowerNav />
    </Container>
  );
}
