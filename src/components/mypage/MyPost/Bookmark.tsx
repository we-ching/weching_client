import * as S from './styled';
import axios from 'axios';
import { getCookie } from '../../Login/GoogleBtn';

export const ReviewBookmarkBtn: React.FC<S.reviewId> = ({ id }) => {
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
          alert('북마크에 저장되었어요.');
        });
    } catch (err: any) {
      alert(err.response.data.message);
    }
  };

  return <S.ReviewBookmarkBtn onClick={onClickHandler}></S.ReviewBookmarkBtn>;
};
