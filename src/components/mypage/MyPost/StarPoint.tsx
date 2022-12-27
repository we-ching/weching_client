import axios from 'axios';
import * as S from './styled';
import { isClicked } from '../../../myPostSlice';
import { useAppSelector } from '../../../store/config';
import { useEffect } from 'react';

export const ReviewStartPoint: React.FC<S.reviewId> = ({ id }) => {
  // const [loading, setLoading] = useState<any>({});
  const isClicked = useAppSelector((state) => {
    return state.myPost.isClicked;
  });

  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      const target = e.currentTarget;
      const star = { id, grade: target.rating.value };
      await axios
        .post(
          `/api/review/grade`,
          { ...star },
          {
            headers: {
              authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjI3LCJlbWFpbCI6ImxrZzcwMDA3QGdtYWlsLmNvbSIsInN0YXR1cyI6MCwiaWF0IjoxNjcyMTE1ODY0LCJleHAiOjE2NzIxOTg2NjR9.WGVlfmuSEEGVrUm2DoW4pwyH42rndAZziDuziu4Cs-w`,
            },
          }
        )
        .then((res) => {});
    } catch (err: any) {
      alert(err.response.data.message);
    }
  };
  useEffect(() => {
    onSubmitHandler;
  }, []);
  return (
    <S.RP_Form name="RP_Form" method="post" onSubmit={onSubmitHandler}>
      <S.RP_FiledSet>
        <S.RP_Input type="radio" name="rating" value="5" id={id + `1`} />
        <S.RP_Label htmlFor={id + `1`}>⭐</S.RP_Label>
        <S.RP_Input type="radio" name="rating" value="4" id={id + `2`} />
        <S.RP_Label htmlFor={id + `2`}>⭐</S.RP_Label>
        <S.RP_Input type="radio" name="rating" value="3" id={id + `3`} />
        <S.RP_Label htmlFor={id + `3`}>⭐</S.RP_Label>
        <S.RP_Input type="radio" name="rating" value="2" id={id + `4`} />
        <S.RP_Label htmlFor={id + `4`}>⭐</S.RP_Label>
        <S.RP_Input type="radio" name="rating" value="1" id={id + `5`} />
        <S.RP_Label htmlFor={id + `5`}>⭐</S.RP_Label>
      </S.RP_FiledSet>
      <S.RP_SubmitBtn>점수</S.RP_SubmitBtn>
    </S.RP_Form>
  );
};
