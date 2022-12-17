import React, { useEffect } from 'react';
import * as s from './styled';
import axios from 'axios';

/**
 * 내가 쓴 글 조회
 */

export const MyPost = () => {
  const token = 'token';
  useEffect(() => {
    const myPostGet = async () => {
      const res = await axios.get(`get/api/posts`, {
        headers: {
          authorization: token,
        },
      });
    };
  }, []);

  return (
    <s.Container>
      <s.PostCon>
        <s.Title>내가 쓴 글</s.Title>
        <s.Post>
          <s.PostContent>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum
            dolorem animi eos fugiat, sed sit iure, fugit ipsa nihil in aut
            aspernatur assumenda nulla harum delectus sunt error quam
            voluptatibus.
          </s.PostContent>
        </s.Post>
        <s.Post>
          <s.PostContent>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum
            dolorem animi eos fugiat, sed sit iure, fugit ipsa nihil in aut
            aspernatur assumenda nulla harum delectus sunt error quam
            voluptatibus.
          </s.PostContent>
        </s.Post>
        <s.Post>
          <s.PostContent>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum
            dolorem animi eos fugiat, sed sit iure, fugit ipsa nihil in aut
            aspernatur assumenda nulla harum delectus sunt error quam
            voluptatibus.
          </s.PostContent>
        </s.Post>
        <s.Post>
          <s.PostContent>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum
            dolorem animi eos fugiat, sed sit iure, fugit ipsa nihil in aut
            aspernatur assumenda nulla harum delectus sunt error quam
            voluptatibus.
          </s.PostContent>
        </s.Post>
      </s.PostCon>
    </s.Container>
  );
};
