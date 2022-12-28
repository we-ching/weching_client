import * as S from './styled';
import axios from 'axios';

export const ReviewBookmarkBtn: React.FC<S.reviewId> = ({ id }) => {
  const onClickHandler = async () => {
    try {
      await axios
        .patch(
          `/api/review/bookmark`,
          { id },
          {
            headers: {
              authorization: `bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjI3LCJlbWFpbCI6ImxrZzcwMDA3QGdtYWlsLmNvbSIsInN0YXR1cyI6MCwiaWF0IjoxNjcyMDE5NjAzLCJleHAiOjE2NzIxMDI0MDN9.TP3Bm4cESdiUqOSwVrCU3ftHkbcNcQbsnz5WRygGX4E`,
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
