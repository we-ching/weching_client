import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as S from './styled';
import { useAppSelector } from '../../../store/config';
import { ReviewStartPoint } from './StarPoint';
import { ReviewReportBtn } from './Report';
import { ReviewBookmarkBtn } from './Bookmark';
import axios from 'axios';

export const MyPostDetail = () => {
  const [post, setPost] = useState<any>({});
  const postId = useParams().postId;
  // const posts = useAppSelector((state) => {
  //   return state.myPost.myPosts;
  // });
  const detailPage = async () => {
    const res = await axios.get(`/api/post/${postId}`, {
      headers: {
        authorization: `bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjI0LCJlbWFpbCI6IndvZ25zMjA1QGdtYWlsLmNvbSIsInN0YXR1cyI6MCwiaWF0IjoxNjcyMTA5ODg5LCJleHAiOjE2NzIxOTI2ODl9.YlFfTVxFFUsLZHibogJtJ99uKaZtmUtTBsSL2-boem0`,
      },
    });

    setPost({ ...post, ...res.data });
    console.log(post);
  };
  useEffect(() => {
    detailPage();
  }, []);
  // const post: any = posts.find((item: any) => item.post.id === Number(postId));
  // console.log(post);
  return (
    <S.Container>
      <S.PostCon>
        <S.Title>내가 쓴 글</S.Title>
        <S.Post>
          <S.PostContent>{post.post && post.post.content}</S.PostContent>
        </S.Post>
        {post.reviews && post.reviews.length !== 0
          ? post.reviews.map((e: any) => {
              console.log(post);
              return (
                <S.Review key={e.id} isReported={e.status}>
                  {e.content}
                  {e.id}
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
