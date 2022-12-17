import axios from 'axios';
import { useEffect } from 'react';

/*
- [] placeholder 순한맛 주의 내용
- [] 리뷰 Tip → 1줄 (DB에서 계속 다른 내용을 쏴줌) << 우선 플레이스홀더로 구현
- [] 기한 : 1달
- [] 등록 버튼 → 모달창 → “등록하시면 수정이 불가합니다”

랜덤으로 매칭된 게시물을 가져와서 보여주고
답글 달아서 post 해주기
post 시 어떤 게시물에 답글을 달았는지 알아야히기 떄문에 정보 같이 보내주기
*/

export const Reply = () => {
  const getPost = async () => {
    await axios
      .get(`http://localhost:4000/posts`)
      .then((response) => {
        console.log(response.data[1].post);
        return response.data[1].post;
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getPost();
  }, []);
  return (
    <>
      <h1>답글 작성</h1>
      <div>게시물</div>
    </>
  );
};
