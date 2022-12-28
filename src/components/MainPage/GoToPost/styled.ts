import styled from 'styled-components';
import Slider from 'react-slick';

export const GoToTitle: any = styled.div`
  margin-bottom: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid rgba(68, 68, 68, 0.5);

  display: flex;
  align-items: center;

  font-size: 24px;
  @media (min-width: 1024px) {
    grid-area: title2;
    margin-bottom: 10px;
    padding-bottom: 10px;
  }
`;

export const GoToTitleCount: any = styled.p`
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

export const GoToTextBox: any = styled.div`
  margin: auto;
  padding: 15px;
  font-size: 14px;
  width: auto;
  height: auto;

  border-radius: 10px;
  background-color: white;
  box-shadow: 0 4px 4px 0 rgb(0 0 0 / 0.1);

  @media (min-width: 1024px) {
    width: auto;
    grid-area: newReview;
    margin: 0;
  }
`;

export const GoToTextContent: any = styled.div`
  padding: 15px;
  font-size: 14px;
  width: 80%;
  height: 100em;
  max-height: 200px;
  border: 5px solid rgba(191, 167, 138, 0.4);
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  transition-property: transform;

  border-radius: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  &: hover {
    border: 5px solid rgba(191, 167, 138, 0.8);
  }
`;

export const Image: any = styled.img`
  margin: 0 auto;
  padding: 10px 0;
  width: 118px;

  display: block;

  &:first-child {
    width: 33px;
    margin: 0 5px 0 0;
  }
`;
export const StyledSlider = styled(Slider)`
  .slick-slider {
    margin: auto;
  }
`;
