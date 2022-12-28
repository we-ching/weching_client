// dependencies
import { useNavigate } from 'react-router-dom';

// styles
import * as S from './styled';

export function AdminNotice() {
  const navigate = useNavigate();

  return (
    <S.Background>
      <S.Wrapper>
        <S.adminNoticePage>
          <S.adminNoticeTitle>
            <div className='noticeTitle'>공지사항 관리 페이지</div>         
          </S.adminNoticeTitle>
          <S.ItemBox onClick={() => navigate('/admin/notice/new')}>
            <p>공지사항 생성</p>
          </S.ItemBox>
          <S.ItemBox onClick={() => navigate('/admin/notice/renew')}>
            <p>공지사항 조회 / 삭제</p>
          </S.ItemBox>
        </S.adminNoticePage>
      </S.Wrapper>
    </S.Background>
  );
}