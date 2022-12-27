import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as S from './styled';
import { ReviewStartPoint } from './StarPoint';
import { ReviewReportBtn } from './Report';
import { ReviewBookmarkBtn } from './Bookmark';
import axios from 'axios';

export const MyPostDetail = () => {
  const [post, setPost] = useState<any>({});
  const postId = useParams().postId;
  const detailPage = async () => {
    const res = await axios.get(`/api/post/${postId}`, {
      headers: {
        authorization: `bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjI3LCJlbWFpbCI6ImxrZzcwMDA3QGdtYWlsLmNvbSIsInN0YXR1cyI6MCwiaWF0IjoxNjcyMTE1ODY0LCJleHAiOjE2NzIxOTg2NjR9.WGVlfmuSEEGVrUm2DoW4pwyH42rndAZziDuziu4Cs-w`,
      },
    });

    setPost({ ...post, ...res.data });
    console.log(post);
  };
  useEffect(() => {
    detailPage();
  }, []);
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
