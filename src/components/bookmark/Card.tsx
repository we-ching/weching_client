import React from 'react';
import * as S from './styled';
// {
//   "id": 265,
//   "user_id": 21,
//   "post_id": 94,
//   "content": "sdfdf",
//   "status": 0,
//   "is_done": 0,
//   "month": null,
//   "bookmark": true
// },

interface BookmarkContent {
  id: number,
  user_id: number,
  post_id: number,
  content: string,
  bookmark: boolean,
}

export const Card = (article:BookmarkContent):any => {
  const {id, user_id, post_id, content, bookmark} = article;
  return (
    <S.CardBox>
          <p>{id}</p>
          <div>{content}</div>
          <p>{bookmark}</p>
    </S.CardBox>
  )
}
