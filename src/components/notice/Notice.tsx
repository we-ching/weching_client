import * as S from './styled';
import { useEffect, useState, Dispatch, SetStateAction } from 'react';
import axios from 'axios';
import { useImmer } from 'use-immer';
import { NoticeList } from './NoticeList';
import { Outlet, useNavigate } from 'react-router-dom';

/*
TODO:  
  -[] 해당 버튼 누를 시 axios에 해당 페이지 요청

  동적 페이지 버튼생성
  - 공지사항 총 개수를 안다면 해당 페이지 까지 버튼을 만들고 보여주기
*/
interface pageNumberProps {
  totalPage: number;
  changePage: Dispatch<SetStateAction<number>>;
}

const PageNumber = ({
  totalPage,
  changePage,
}: pageNumberProps): JSX.Element => {
  return (
    <>
      {Array(totalPage)
        .fill(0)
        .map((_, i) => {
          return (
            <button key={i + 1} onClick={() => changePage(i + 1)}>
              {i + 1}
            </button>
          );
        })}
    </>
  );
};

type NoticeInfo = {
  totalPage: number;
  currPage: string;
  notice: [];
};

export const Notice = () => {
  const [noticeInfo, setNoticesInfo] = useImmer<NoticeInfo>({
    totalPage: 1,
    currPage: '1',
    notice: [],
  });
  const [page, setPage] = useState<number>(1);
  const navigate = useNavigate();
  const fetchNotice = async () => {
    await axios.get(`/api/notice?page=${page}`).then((res) => {
      setNoticesInfo(res.data);
    });
  };
  useEffect(() => {
    fetchNotice();
  }, [page]);
  const clickHandler = () => {
    navigate(-1);
  };
  console.log(noticeInfo);
  return (
    <div>
      <button onClick={clickHandler}>뒤로가기</button>
      <S.Container>
        <Outlet />
        <NoticeList notices={noticeInfo.notice} />
        <PageNumber totalPage={noticeInfo.totalPage} changePage={setPage} />
      </S.Container>
    </div>
  );
};
