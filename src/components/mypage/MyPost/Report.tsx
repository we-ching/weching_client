import { useState } from 'react';
import * as S from './styled';
import { Modal } from './Modal';
import { isClicked } from '../../../myPostSlice';
import { clickedReview } from '../../../myPostSlice';
import { useAppDispatch, useAppSelector } from '../../../store/config';

export const ReviewReportBtn: React.FC<S.reviewId> = ({ id }) => {
  const dispatch = useAppDispatch();
  const isClick = useAppSelector((state) => {
    return state.myPost.isClicked;
  });
  const onClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    dispatch(isClicked(true));
    dispatch(clickedReview(id));
  };

  return (
    <>
      <S.ReviewButtonStyle onClick={onClickHandler}>신고</S.ReviewButtonStyle>
      {isClick && <Modal />}
    </>
  );
};
