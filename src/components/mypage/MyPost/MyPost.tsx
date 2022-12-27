import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './styled';
import axios from 'axios';

export const MyPost = () => {
  const url = `https://port-0-weching-53px25lbvs1fg6.gksl2.cloudtype.app`;
  const [posts, setPosts] = useState<S.Posts[]>([]);
  const navigate = useNavigate();
  const myPostAllGet = async () => {
    const res = await axios.get(`/api/post/list`, {
      headers: {
        authorization:
          'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjI3LCJlbWFpbCI6ImxrZzcwMDA3QGdtYWlsLmNvbSIsInN0YXR1cyI6MCwiaWF0IjoxNjcyMTE1ODY0LCJleHAiOjE2NzIxOTg2NjR9.WGVlfmuSEEGVrUm2DoW4pwyH42rndAZziDuziu4Cs-w',
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
          const postId = post.post.id;
          post['reviews'].length !== 0 ? (isReview = true) : (isReview = false);
          return (
            <S.Post
              key={postId}
              isReviews={isReview}
              posts={posts}
              onClick={() => {
                navigate(`/mypage/mypost/${postId}`);
              }}
            >
              <S.PostContent>{post.post.content}</S.PostContent>
            </S.Post>
          );
        })}
      </S.PostCon>
    </S.Container>
  );
};
