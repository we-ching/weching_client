import * as S from './styled';
import { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import { useInView } from 'react-intersection-observer';
import { Dispatch, SetStateAction } from 'react';
interface NoticeProps {
  id: string;
  title: string;
  content: string;
}
interface NoticeInfo {
  notice: NoticeProps[];
}

interface NoticesProps {
  id: string;
  title: string;
  content: string;
}

interface NoticeListProps {
  notices: NoticesProps[];
  changePage: Dispatch<SetStateAction<number>>;
  isloading: boolean;
}

interface NoticeDetailProps {
  notice: NoticesProps;
}

const NoticeDetail: React.FC<NoticeDetailProps> = ({ notice }) => {
  const [isOpen, setisOpen] = useState(false);

  return (
    <S.Message onClick={() => setisOpen(!isOpen)}>
      <S.MessageTitle>{notice.title}</S.MessageTitle>
      <S.MessageContent>{isOpen && notice.content}</S.MessageContent>
    </S.Message>
  );
};

const NoticeList: React.FC<NoticeListProps> = ({
  notices,
  changePage,
  isloading,
}) => {
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView && !isloading) changePage((currPage) => currPage + 1);
  }, [inView, isloading]);

  const noticeBlock = notices.map((notice, idx) => {
    return idx === notices.length - 1 ? (
      <div key={notice.id} ref={ref}>
        <NoticeDetail notice={notice} />
      </div>
    ) : (
      <NoticeDetail key={notice.id} notice={notice} />
    );
  });
  return <S.NoticeUl>{noticeBlock}</S.NoticeUl>;
};

export const Notice = () => {
  const [noticeInfo, setNoticesInfo] = useState<any[]>([]);
  const [page, setPage] = useState<number>(1);
  const [isloading, setisLoading] = useState(false);

  const fetchNotice = useCallback(async () => {
    setisLoading(true);
    await axios.get(`/api/notice?page=${page}`).then((res) => {
      const { notice } = res.data;
      setNoticesInfo([...noticeInfo, notice]);
    });
    setisLoading(false);
  }, [page]);

  useEffect(() => {
    fetchNotice();
  }, [fetchNotice]);

  return (
    <>
      <S.NoticeNav>
        {noticeInfo.map((noticeInfo, idx) => {
          return (
            <NoticeList
              key={idx}
              notices={noticeInfo}
              changePage={setPage}
              isloading={isloading}
            ></NoticeList>
          );
        })}
      </S.NoticeNav>
    </>
  );
};
