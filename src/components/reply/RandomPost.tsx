import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as S from './styled';
import { getCookie } from '../Login/GoogleBtn';

interface postProps {
  post: string;
}

const ParseHtml: React.FC<postProps> = ({ post }) => (
  <S.Post dangerouslySetInnerHTML={{ __html: post }} />
);

const RandomPost = () => {
  const [post, setPost] = useState('');
  const params = useParams();
  const id = Number(params.id);

  const getPost = async () => {
    const token = getCookie('accessToken');
    await axios
      .get(`/api/post/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
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

export default React.memo(RandomPost);
