import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as S from './styled';
import { ReviewStartPoint } from './StarPoint';
import { ReviewReportBtn } from './Report';
import { ReviewBookmarkBtn } from './Bookmark';
import axios from 'axios';
import { getCookie } from '../../Login/GoogleBtn';
import { useAppDispatch } from '../../../store/config';
import { setReviews, updateReviews } from '../../../myPostSlice';

export const MyPostDetail = () => {
  const dispatch = useAppDispatch();
  const Cookies = getCookie('accessToken');
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [post, setPost] = useState<any>({});
  const [review, setReview] = useState<any>([]);
  const postId = useParams().postId;
  const onClickHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.currentTarget;

    setIsClicked(true);
    console.log(isClicked);
  };
  const detailPage = async () => {
    const res = await axios.get(`/api/post/${postId}`, {
      headers: {
        authorization: `bearer ${Cookies}`,
      },
    });
    console.log(res.data);
    setPost({ ...post, ...res.data });
    setReview([...review, ...res.data.reviews]);
  };
  useEffect(() => {
    detailPage();
  }, []);
  return (
    <S.Container>
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
              console.log(review);
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
                    <ReviewBookmarkBtn
                      id={e.id}
                      isBookmarked={e.bookmark}
                    ></ReviewBookmarkBtn>
                    <ReviewReportBtn
                      id={e.id}
                      review={review}
                      setReview={setReview}
                    ></ReviewReportBtn>
                  </S.ReviewButtonBox>
                </S.Review>
              );
            })
          : null}
      </S.PostCon>
    </S.Container>
  );
};
