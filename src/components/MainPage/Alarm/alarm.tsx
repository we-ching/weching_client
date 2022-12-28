import * as S from './styled';

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
  console.log(arr);
  const Array = arr.filter((item: any) => {
    return item.post.isChecked == 1;
  });
  return (
    <S.Container>
      {Array &&
        Array.map(() => {
          return (
            <S.Message>
              <S.MessageContent>새로운 칭찬이 있어요!</S.MessageContent>
            </S.Message>
          );
        })}
    </S.Container>
  );
};
