import axios from 'axios';
import * as S from './styled';

export const ReviewStartPoint: React.FC<S.reviewId> = ({ id }) => {
  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      const target = e.currentTarget;
      console.log(target.rating.value);
      const star = { id, grade: Number(target.rating.value) };
      const res = await axios.patch(`/api/review/grade`, {
        headers: {
          authorization: `bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjI3LCJlbWFpbCI6ImxrZzcwMDA3QGdtYWlsLmNvbSIsInN0YXR1cyI6MCwiaWF0IjoxNjcxOTQyMzMxLCJleHAiOjE2NzIwMjUxMzF9.SnT2r8nVQZPm8oQxCfDGsMNDU7DNhErTFDGi2r6JFVQ`,
        },
        body: { id, grade: 4 },
      });
      console.log(res.data);
    } catch (err) {
      alert(`예기지 못한 에러가 발생했습니다.\nERROR: ${err}`);
    }
  };
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
