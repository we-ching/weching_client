import * as S from './styled';

export const ReviewStartPoint = () => {
  const onSubmitHandler = () => {};

  return (
    <S.RP_Form name="RP_Form" method="post" onSubmit={onSubmitHandler}>
      <S.RP_FiledSet>
        <S.RP_Input type="radio" name="rating" value="5" id="rate1" />
        <S.RP_Label htmlFor="rate1">⭐</S.RP_Label>
        <S.RP_Input type="radio" name="rating" value="5" id="rate2" />
        <S.RP_Label htmlFor="rate2">⭐</S.RP_Label>
        <S.RP_Input type="radio" name="rating" value="5" id="rate3" />
        <S.RP_Label htmlFor="rate3">⭐</S.RP_Label>
        <S.RP_Input type="radio" name="rating" value="5" id="rate4" />
        <S.RP_Label htmlFor="rate4">⭐</S.RP_Label>
        <S.RP_Input type="radio" name="rating" value="5" id="rate5" />
        <S.RP_Label htmlFor="rate5">⭐</S.RP_Label>
      </S.RP_FiledSet>
      <S.RP_SubmitBtn>점수</S.RP_SubmitBtn>
    </S.RP_Form>
  );
};
