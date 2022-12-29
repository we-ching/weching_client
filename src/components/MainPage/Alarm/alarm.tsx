import * as S from './styled';
import { mainApiUser } from '../styled';

import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useAppSelector } from '../../../store/config';

export const Alarm = () => {
  const postAlarm: any = useAppSelector((state) => {
    return state.mainInfo.userInfo;
  });

  useEffect(() => {
    postAlarm;
  }, []);

  const arr = postAlarm.posts;
  const Array = arr.filter((item: mainApiUser) => {
    return item.post.isChecked == 1;
  });

  return (
    <S.Container>
      {Array &&
        Array.map((item: mainApiUser) => {
          return (
            <Link to={`/mypage/mypost/${item.post.id}`}>
              <S.Message>
                <S.MessageContent>새로운 칭찬이 있어요!</S.MessageContent>
              </S.Message>
            </Link>
          );
        })}
    </S.Container>
  );
};
