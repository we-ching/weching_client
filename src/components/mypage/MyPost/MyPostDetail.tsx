import React from 'react';
import { useParams } from 'react-router-dom';
import * as S from './styled';
import { useAppSelector } from '../../../store/config';
import { ReviewStartPoint } from './StarPointBtn';

export const MyPostDetail = () => {
  const postId = useParams().postId;
  const posts = useAppSelector((state) => {
    return state.myPost.myPosts;
  });
  const post: any = posts.find((item: any) => item.post.id === Number(postId));
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
                  {e.content}
                  <S.ReviewButtonBox>
                    <ReviewStartPoint></ReviewStartPoint>
                    <S.ReviewBookmarkBtn>북마크</S.ReviewBookmarkBtn>
                    <S.ReviewReportBtn>신고</S.ReviewReportBtn>
                  </S.ReviewButtonBox>
                </S.Review>
              );
            })
          : null}
      </S.PostCon>
    </S.Container>
  );
};
