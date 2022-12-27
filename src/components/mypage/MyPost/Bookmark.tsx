import * as S from './styled';
import axios from 'axios';

export const ReviewBookmarkBtn: React.FC<S.reviewId> = ({ id }) => {
  const onClickHandler = async () => {
    try {
      await axios.patch(
        `/api/review/bookmark`,
        { id },
        {
          headers: {
            authorization: `bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjI3LCJlbWFpbCI6ImxrZzcwMDA3QGdtYWlsLmNvbSIsInN0YXR1cyI6MCwiaWF0IjoxNjcyMDE5NjAzLCJleHAiOjE2NzIxMDI0MDN9.TP3Bm4cESdiUqOSwVrCU3ftHkbcNcQbsnz5WRygGX4E`,
          },
        }
      );
    } catch (err) {
      alert(`예기지 못한 에러가 발생했습니다.\nERROR: ${err}`);
    }
  };

  return (
    <S.ReviewBookmarkBtn onClick={onClickHandler}>북마크</S.ReviewBookmarkBtn>
  );
};
