import * as S from './styled';
import { mainApiUser } from '../styled';

import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getCookie } from '../../Login/GoogleBtn';
import axios from 'axios';

export const Alarm = () => {
  const Cookies = getCookie('accessToken');
  const [post, setPost] = useState<any>([]);
  const postReq = async () => {
    try {
      await axios
        .get(`/api/main/user`, {
          headers: {
            authorization: `Bearer ${Cookies}`,
          },
        })
        .then((res) => {
          setPost([...post, ...res.data.posts]);
        });
    } catch (err) {
      alert(`1. 예기지 못한 에러가 발생했습니다.\nERROR: ${err}`);
    }
  };

  useEffect(() => {
    postReq();
  }, []);

  const Array = post.filter((item: mainApiUser) => {
    return item.post.isChecked == 1;
  });

  return (
    <S.Container>
      {Array.length > 0 ? (
        Array.map((item: mainApiUser) => {
          return (
            <Link to={`/mypage/mypost/${item.post.id}`}>
              <S.Message>
                <S.MessageContent>새로운 칭찬이 있어요!</S.MessageContent>
              </S.Message>
            </Link>
          );
        })
      ) : (
        <S.Message>
          <S.MessageContent>아직 새로운 칭찬이 없어요.</S.MessageContent>
        </S.Message>
      )}
    </S.Container>
  );
};
