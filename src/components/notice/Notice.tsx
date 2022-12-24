import * as S from './styled';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useImmer } from 'use-immer';
import { NoticeList } from './NoticeList';
import { PageNumber } from './PageNumber';

interface NoticeProps {
  id: string;
  title: string;
  content: string;
}
interface NoticeInfo {
  totalPage: number;
  currPage: string;
  notice: NoticeProps[];
}

export const Notice = () => {
  const [noticeInfo, setNoticesInfo] = useImmer<NoticeInfo>({
    totalPage: 1,
    currPage: '1',
    notice: [],
  });
  const [page, setPage] = useState<number>(1);

  const fetchNotice = async () => {
    await axios.get(`/api/notice?page=${page}`).then((res) => {
      setNoticesInfo(res.data);
    });
  };
  useEffect(() => {
    fetchNotice();
  }, [page]);

  return (
    <>
      <S.Container>
        <nav>
          <NoticeList notices={noticeInfo.notice}></NoticeList>
        </nav>
        <PageNumber totalPage={noticeInfo.totalPage} changePage={setPage} />
      </S.Container>
    </>
  );
};
