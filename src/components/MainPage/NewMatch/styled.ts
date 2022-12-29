import styled from 'styled-components';
import Slider from 'react-slick';

export interface toDoReviewType {
  content: string;
  id: number;
  isChecked: number;
  status: number;
  userId: number;
}

export const NewMatchTitle: any = styled.div`
  margin-bottom: 15px;
  border-bottom: 1px solid rgba(68, 68, 68, 0.5);

  display: flex;
  gap: 3px;
  align-items: center;

  font-size: 24px;

  @media (min-width: 1024px) {
    margin-bottom: 15px;
  }
`;

export const NewMatchTextBox: any = styled.div`
  margin: 20px auto;
  padding: 10px 15px 15px 15px;
  font-size: 14px;
  width: auto;
  height: auto;

  border-radius: 10px;
  background-color: white;
  box-shadow: 0 4px 4px 0 rgb(0 0 0 / 0.1);

  @media (min-width: 1024px) {
    width: auto;
    grid-area: newmatch;
    margin: 0;
  }
`;

export const NewMatchTextContent: any = styled.div`
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
