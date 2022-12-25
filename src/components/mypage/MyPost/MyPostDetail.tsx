import React from 'react';
import { useParams } from 'react-router-dom';
import * as S from './styled';
import { useAppSelector } from '../../../store/config';
import { ReviewStartPoint } from './StarPoint';
import { ReviewReportBtn } from './Report';
import { ReviewBookmarkBtn } from './Bookmark';
export const MyPostDetail = () => {
  const postId = useParams().postId;
  const posts = useAppSelector((state) => {
    return state.myPost.myPosts;
  });
  const post: any = posts.find((item: any) => item.post.id === Number(postId));
  console.log(post);
  return (
    <S.Container>
      <S.PostCon>
        <S.Title>내가 쓴 글</S.Title>
        <S.Post>
          <S.PostContent>{post.post.content}</S.PostContent>
        </S.Post>
        {post.reviews.length !== 0
          ? post.reviews.map((e: any) => {
              return (
                <S.Review key={e.id}>
                  {console.log(e.id)}
                  {e.content}
                  <S.ReviewButtonBox>
                    <ReviewStartPoint id={e.id}></ReviewStartPoint>
                    <ReviewBookmarkBtn id={e.id}></ReviewBookmarkBtn>
                    <ReviewReportBtn id={e.id}></ReviewReportBtn>
                  </S.ReviewButtonBox>
                </S.Review>
              );
            })
          : null}
      </S.PostCon>
    </S.Container>
  );
};
