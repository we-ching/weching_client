import axios from 'axios';
import React, { useEffect, useState } from 'react';

interface postProps {
  post: string;
}

const ParseHtml: React.FC<postProps> = ({ post }) => (
  <article dangerouslySetInnerHTML={{ __html: post }} />
);

export const RandomPost = () => {
  const [post, setPost] = useState('');
  const getPost = async () => {
    await axios
      .get(`/api/review/:id`)
      .then((res) => {
        console.log(res.data.content);
        setPost(res.data.content);
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
