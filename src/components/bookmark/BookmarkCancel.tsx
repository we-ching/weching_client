import * as S from './styled';
import axios from 'axios';
import { getCookie } from './../Login/GoogleBtn';
import iconBookmarkNo from '../../assets/images/bookmarkno.png';

export const BookmarkCancel: React.FC<S.reviewId> = ({ id }) => {
    const Cookies = getCookie('accessToken');
    const onClickHandler = async () => {
        try {
            await axios
            .patch(
                `/api/review/bookmark`,
                { id },
                {
                    headers: {
                        authorization: `bearer ${Cookies}`,
                    },
                }
        )
        .then((res) => {
          alert('북마크가 취소되었어요.');
        });
        window.location.reload();
    } catch (err: any) {
      alert(err.response.data.message);
    }
  };

  return (
    <S.BookmarkCon onClick={onClickHandler}>
      <img src={iconBookmarkNo} width={30} alt="북마크 취소하기"/>
    </S.BookmarkCon>
  );
};