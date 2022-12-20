import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useImmer } from 'use-immer';

//TODO: 클릭시 해당 공지만 박스가 커지면서 전문 보여주기
//TODO: 실제 연결 시 state 제거 하여 구현

// params 대신 쿼리스트링으로 하면?

export const NoticeDetail = () => {
  const [notices, setNotices] = useImmer({
    id: 0,
    title: '',
    content: '',
  });

  const param = useParams();
  const id = Number(param.id);

  const fetchNotice = async () => {
    await axios.get(`/api/notice/${id}`).then((res) => {
      setNotices(res.data);
    });
  };
  useEffect(() => {
    fetchNotice();
  }, [id]);

  return (
    <>
      <h1>🪧{notices.title}</h1>
      <p>{notices.content}</p>
    </>
  );
};
