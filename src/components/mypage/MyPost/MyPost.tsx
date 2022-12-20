import React, { useState, useEffect } from 'react';
import * as S from './styled';
import axios from 'axios';

interface Post {
  id: number;
  user_id: number;
  content: string;
  status: number;
}
interface Reviews {
  id: number;
  content: string;
  grade: null;
  status: number;
}
interface Posts {
  post: Post;
  reviews: Reviews[];
}

export const MyPost = () => {
  const [posts, setPosts] = useState<Posts[]>([]);
  const token = 'aedfewlkw123';
  const myPostGet = async () => {
    const res = await axios.get(`/api/post`, {
      headers: {
        authorization: `bearer ${token}`,
      },
    });
    const postList = res.data;
    console.log(postList);
    setPosts(() => [...posts, ...postList]);
  };
  useEffect(() => {
    myPostGet();
  }, []);
  return (
    <S.Container>
      <S.PostCon>
        <S.Title>내가 쓴 글</S.Title>
        {posts.map((post, i) => {
          let isReview: boolean = false;
          post['reviews'].length !== 0 ? (isReview = true) : (isReview = false);
          return (
            <S.Post isReviews={isReview}>
              <S.PostContent>{post['post']['content']}</S.PostContent>
            </S.Post>
          );
        })}
      </S.PostCon>
    </S.Container>
  );
};
