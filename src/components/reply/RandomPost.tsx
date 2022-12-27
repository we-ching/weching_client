import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as S from './styled';

//TODO: id 와 content를 /api/review/:id 를 통해 가져와서 보여주고 리뷰 달 시 id를 patch로 넣어주기
// /api/review/:id api 가 없다면 main에서 받은 id로 받은 칭찬해줘야할 게시글 중 해당 id를 찾는다
interface postProps {
  post: string;
}

const ParseHtml: React.FC<postProps> = ({ post }) => (
  <S.Post dangerouslySetInnerHTML={{ __html: post }} />
);

export const RandomPost = () => {
  const [post, setPost] = useState('');
  const params = useParams();
  const id = Number(params.id);
  const getPost = async () => {
    await axios
      .get(`/api/post/${id}`, {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIzLCJlbWFpbCI6IjEwMDR3aXBpQGdtYWlsLmNvbSIsInN0YXR1cyI6MCwiaWF0IjoxNjcyMTI4NDI2LCJleHAiOjE2NzIyMTEyMjZ9.P9MfYDCnIkYs767h-Fjt3QB4hTHycXbtzwYosfJZEgw`,
        },
      })
      .then((res: any) => {
        console.log(res);
        const { content } = res.data.post;
        setPost(content);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getPost();
  }, []);
  return <ParseHtml post={post} />;
};
