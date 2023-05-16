import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './styled';
import axios from 'axios';

export const MyPost = () => {
  const url = `http://ec2-3-36-141-69.ap-northeast-2.compute.amazonaws.com`;
  const [posts, setPosts] = useState<S.Posts[]>([]);
  const navigate = useNavigate();
  const myPostAllGet = async () => {
    const res = await axios.get(`/api/post/list`, {
      headers: {
        authorization:
          'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjI3LCJlbWFpbCI6ImxrZzcwMDA3QGdtYWlsLmNvbSIsInN0YXR1cyI6MCwiaWF0IjoxNjcyMTk1Nzk1LCJleHAiOjE2NzIyNzg1OTV9.jPVHM-PXjsFWqwT81Kjh0KRcLAJFJuce_vujYDwICWo',
      },
    });addEventListener
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
          post.post.isChecked !== 0 ? (isReview = true) : (isReview = false);
          return (
            <S.Post
              key={postId}
              isReviews={isReview}
              posts={posts}
              onClick={() => {
                navigate(`/mypage/mypost/${postId}`);
              }}
            >
              <S.PostContent>
                {post.post ? (
                  <S.DangerHTML
                    dangerouslySetInnerHTML={{ __html: post.post.content }}
                  ></S.DangerHTML>
                ) : null}
              </S.PostContent>
              <S.ReviewCountBtnBox>
                {post.reviews.length !== 0 &&
                  post.reviews.map((review, idx) => {
                    return (
                      <S.ReviewCountBtn key={idx}>
                        칭찬 {idx + 1}
                      </S.ReviewCountBtn>
                    );
                  })}
              </S.ReviewCountBtnBox>
            </S.Post>
          );
        })}
      </S.PostCon>
    </S.Container>
  );
};
