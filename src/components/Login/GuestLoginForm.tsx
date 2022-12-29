import * as S from './styled';
import { GoogleBtn } from './GoogleBtn';

export const GuestLoginForm = () => {
  return (
    <S.Container>
      <S.FormCon>
        <S.LoginTitle>환영합니다!</S.LoginTitle>
        <S.SubmitBtnCon>
          <GoogleBtn />
        </S.SubmitBtnCon>
      </S.FormCon>
    </S.Container>
  );
};
