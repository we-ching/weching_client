import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './styled';
import axios from 'axios';
import { getCookie } from '../../Login/GoogleBtn';

export const MyPost = () => {
  const Cookies = getCookie('accessToken');
  const [posts, setPosts] = useState<S.Posts[]>([]);
  const navigate = useNavigate();
  const myPostAllGet = async () => {
    const res = await axios.get(`/api/post/list`, {
      headers: {
        authorization: `Bearer ${Cookies}`,
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
