import * as S from './styled';
import { GoogleBtn } from './GoogleBtn';

export const GuestLoginForm = () => {
  return (
    <S.Container>
      <S.FormCon>
        <div style={{ height: '50' }}>
          <img src="/logo.png" width={55} alt="위칭 메인 로고" />
        </div>
        <S.LoginTitle>환영합니다!</S.LoginTitle>
        <S.SubmitBtnCon>
          <GoogleBtn />
        </S.SubmitBtnCon>
      </S.FormCon>
    </S.Container>
  );
};
