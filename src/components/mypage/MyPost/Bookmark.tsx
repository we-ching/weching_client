import * as S from './styled';
import axios from 'axios';
import { getCookie } from '../../Login/GoogleBtn';
import { IconBookmark } from '../../NavBar/Mark';
import { useState } from 'react';

export const ReviewBookmarkBtn: React.FC<S.reviewId> = ({
  id,
  isBookmarked,
}) => {
  const [isClick, setIsClick] = useState<boolean>(false);
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
          isClick ? setIsClick(false) : setIsClick(true);
          isClick
            ? alert('북마크가 해제되었어요')
            : alert('북마크에 추가했어요');
        });
    } catch (err: any) {
      alert(err.response.data.message);
    }
  };

  return (
    <S.BookmarkCon onClick={onClickHandler}>
      <IconBookmark
        fill={isClick ? 'limegreen' : 'gray'}
        stroke={isClick ? 'limegreen' : 'gray'}
      />
    </S.BookmarkCon>
  );
};
