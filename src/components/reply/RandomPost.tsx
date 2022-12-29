import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();

  const getPost = async () => {
    const token = getCookie('accessToken');
    if (!token) {
      alert('로그인 후 이용해주세요❗️');
      return navigate('/login/guest');
    }
    await axios
      .get(`/api/post/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res: any) => {
        const { content } = res.data.post;
        setPost(content);
      })
      .catch((error) => {
        alert(`${error.response.data.message.replace(/\{.*/, '')}❗️`);
      });
  };
  useEffect(() => {
    getPost();
  }, []);
  return <ParseHtml post={post} />;
};

export default React.memo(RandomPost);
