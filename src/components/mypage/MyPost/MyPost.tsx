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
interface isReviewType {
  isReview: boolean;
}

export const MyPost = () => {
  const [posts, setPosts] = useState<Posts[]>([]);
  const [isReview, setIsReview] = useState<boolean>(false);
  const token = 'aedfewlkw123';
  const myPostGet = async () => {
    const res = await axios.get(`/api/post`, {
      headers: {
        authorization: `bearer ${token}`,
      },
    });
    const postList = res.data;
    setPosts(() => [...posts, ...postList]);
  };
  useEffect(() => {
    myPostGet();
  }, []);
  return (
    <S.Container>
      <S.PostCon>
        <S.Title>내가 쓴 글</S.Title>
        {posts.map((post) => {
          console.log(post);
          post['reviews'].length !== 0 ? setIsReview(true) : setIsReview(false);
          console.log(isReview);
          return (
            <S.Post>
              <S.PostContent>{post['post']['content']}</S.PostContent>
            </S.Post>
          );
        })}
      </S.PostCon>
    </S.Container>
  );
};
