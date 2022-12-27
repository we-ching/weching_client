// dependencies
import { useNavigate } from 'react-router-dom';

// components
import { UserInfo } from './UserInfo/UserInfo';
import { EditUser } from './EditUser/EditUser';
import { SignOut } from './Signout/Signout';
import { Jandi } from './Jandi/Jandi';

// styles
import * as S from './styled';

export function MyPage() {
  const navigate = useNavigate();

  return (
    <S.Background>
      <S.Wrapper>
        <S.MyPageContainer>
          <UserInfo />
          <Jandi />
          <EditUser />
          <S.ItemBox onClick={() => navigate('/mypage/mypost')}>
            <p>내가 쓴 글</p>
          </S.ItemBox>
          <S.ItemBox onClick={() => navigate('/bookmark')}>
            <p>북마크</p>
          </S.ItemBox>
          <SignOut />
        </S.MyPageContainer>
      </S.Wrapper>
    </S.Background>
  );
}
