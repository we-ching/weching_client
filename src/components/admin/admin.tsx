// dependencies
import { useNavigate } from 'react-router-dom';

// styles
import * as S from './styled';

export function Admin() {
  const navigate = useNavigate();

  return (
    <S.Background>
      <S.Wrapper>
        <S.AdminPageContainer>
          <S.AdminTitleContainer>
            <div className='adminTitle'>
              <S.AdminTitle>관리자 페이지</S.AdminTitle>
              <S.AdminNum>#SW309</S.AdminNum>
            </div>         
            <S.Line></S.Line>
            <S.AdminContent>하나의 칭찬은 누군가의 삶의 동력이다</S.AdminContent>
          </S.AdminTitleContainer>
          <S.ItemBox onClick={() => navigate('/admin/notice')}>
            <p>공지사항 관리</p>
          </S.ItemBox>
          <S.ItemBox onClick={() => navigate('/admin/report')}>
            <p>신고 관리</p>
          </S.ItemBox>
        </S.AdminPageContainer>
      </S.Wrapper>
    </S.Background>
  );
}