import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as S from './styled';
import { ReviewStartPoint } from './StarPoint';
import { ReviewReportBtn } from './Report';
import { ReviewBookmarkBtn } from './Bookmark';
import axios from 'axios';
import { getCookie } from '../../Login/GoogleBtn';
import { NavBar } from '../../NavBar';

export const MyPostDetail = () => {
  const Cookies = getCookie('accessToken');
  const [post, setPost] = useState<any>({});
  const postId = useParams().postId;
  const detailPage = async () => {
    const res = await axios.get(`/api/post/${postId}`, {
      headers: {
        authorization: `bearer ${Cookies}`,
      },
    });
    setPost({ ...post, ...res.data });
  };
  useEffect(() => {
    detailPage();
  }, []);

  post.post && (post.post.isChecked = 0);

  return (
    <S.Container>
      <NavBar />
      <S.PostCon>
        <S.Title>내가 쓴 글</S.Title>
        <S.Post>
          <S.postDetailContent>
            {post.post ? (
              <S.DangerHTML
                dangerouslySetInnerHTML={{ __html: post.post.content }}
              ></S.DangerHTML>
            ) : null}
          </S.postDetailContent>
        </S.Post>
        {post.reviews && post.reviews.length !== 0
          ? post.reviews.map((e: any, idx: number) => {
              return (
                <S.Review
                  key={e.id}
                  isReported={e.status}
                  isDone={e.is_done}
                  id="review"
                >
                  {e.content ? (
                    <S.DangerHTML
                      dangerouslySetInnerHTML={{ __html: e.content }}
                    ></S.DangerHTML>
                  ) : null}
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
