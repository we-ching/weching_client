import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './styled';
import axios from 'axios';
import { getPosts } from '../../../myPostSlice';
import { useAppDispatch } from '../../../store/config';

export const MyPost = () => {
  const url = `https://port-0-weching-53px25lbvs1fg6.gksl2.cloudtype.app`;
  const [posts, setPosts] = useState<S.Posts[]>([]);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const myPostAllGet = async () => {
    const res = await axios.get(`/api/post`, {
      headers: {
        authorization:
          'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjI3LCJlbWFpbCI6ImxrZzcwMDA3QGdtYWlsLmNvbSIsInN0YXR1cyI6MCwiaWF0IjoxNjcxOTQyMzMxLCJleHAiOjE2NzIwMjUxMzF9.SnT2r8nVQZPm8oQxCfDGsMNDU7DNhErTFDGi2r6JFVQ',
      },
    });
    const postList = res.data;
    setPosts(() => [...posts, ...postList]);
  };
  useEffect(() => {
    myPostAllGet();
  }, []);
  {
    console.log(posts);
  }
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
