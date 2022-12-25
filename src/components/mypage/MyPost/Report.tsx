import * as S from './styled';
import { Modal } from './Modal';
import { isClicked } from '../../../myPostSlice';
import { useAppDispatch, useAppSelector } from '../../../store/config';

export const ReviewReportBtn: React.FC<S.reviewId> = ({ id }) => {
  const dispatch = useAppDispatch();
  const isClick = useAppSelector((state) => {
    return state.myPost.isClicked;
  });
  return (
    <>
      <S.ReviewButtonStyle onClick={() => dispatch(isClicked(true))}>
        신고
      </S.ReviewButtonStyle>
      {isClick && <Modal id={id} />}
    </>
  );
};
