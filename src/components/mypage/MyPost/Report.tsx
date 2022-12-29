import { useState } from 'react';
import * as S from './styled';
import { Modal } from './Modal';
import { isClicked } from '../../../myPostSlice';
import { clickedReview } from '../../../myPostSlice';
import { useAppDispatch, useAppSelector } from '../../../store/config';
import e from 'express';

export const ReviewReportBtn: React.FC<S.reviewId> = ({
  id,
  review,
  setReview,
}) => {
  const [target, setTarget] = useState<any>(undefined);
  const dispatch = useAppDispatch();
  const isClick = useAppSelector((state) => {
    return state.myPost.isClicked;
  });
  const onClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    setTarget(e.currentTarget);
    dispatch(isClicked(true));
    dispatch(clickedReview(id));
  };

  return (
    <>
      <S.ReviewReportBtnImage onClick={onClickHandler}></S.ReviewReportBtnImage>
      {isClick && (
        <Modal review={review} setReview={setReview} etarget={target} />
      )}
    </>
  );
};
