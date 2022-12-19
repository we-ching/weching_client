import axios from 'axios';
import { useEffect, useState } from 'react';

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
  return <div>{post}</div>;
};
