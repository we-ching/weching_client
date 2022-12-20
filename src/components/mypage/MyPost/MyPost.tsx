import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './styled';
import { Posts } from './styled';
import axios from 'axios';
import { getPosts } from '../../../myPostSlice';
import { useAppDispatch } from '../../../store/config';

export const MyPost = () => {
  const [posts, setPosts] = useState<Posts[]>([]);
  const token = 'aedfewlkw123';
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const myPostAllGet = async () => {
    const res = await axios.get(`/api/post`, {
      headers: {
        authorization: `bearer ${token}`,
      },
    });
    const postList = res.data;
    setPosts(() => [...posts, ...postList]);
  };
  useEffect(() => {
    myPostAllGet();
  }, []);

  return (
    <S.Container>
      <S.PostCon>
        <S.Title>내가 쓴 글</S.Title>
        {posts.map((post) => {
          let isReview: boolean = false;
          const postId = post['post']['id'];
          post['reviews'].length !== 0 ? (isReview = true) : (isReview = false);
          return (
            <S.Post
              key={postId}
              isReviews={isReview}
              posts={posts}
              onClick={() => {
                dispatch(getPosts(posts));
                navigate(`/myPage/myPost/${postId}`);
              }}
            >
              <S.PostContent>{post['post']['content']}</S.PostContent>
            </S.Post>
          );
        })}
      </S.PostCon>
    </S.Container>
  );
};
