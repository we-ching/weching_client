import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import './CKEditor.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

/*
- [] placeholder 순한맛 주의 내용
- [x] 리뷰 Tip → 1줄 (DB에서 계속 다른 내용을 쏴줌) << 우선 플레이스홀더로 구현
- [] 기한 : 1달
- [] 등록 버튼 → 모달창 → “등록하시면 수정이 불가합니다”

랜덤으로 매칭된 게시물을 가져와서 보여주고
답글 달아서 post 해주기
post 시 어떤 게시물에 답글을 달았는지 알아야히기 떄문에 정보 같이 보내주기
*/

export const Reply = () => {
  const [post, setPost] = useState('');
  const [body, setBody] = useState<string>('');
  const getPost = async () => {
    await axios
      .get(`/api/review`)
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
  const submitHandler = async () => {
    await axios
      .patch(
        `/api/review/write/:id`,
        {
          content: body,
        },
        {
          headers: {
            Authorization: 'myoken',
          },
        }
      )
      .then(() => {
        alert('글쓴이에게 칭찬을 보냈어요!');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <h1>답글 작성</h1>
      <div>{post}</div>
      <CKEditor
        editor={ClassicEditor}
        config={{
          placeholder:
            '욕설, 비방, 비꼬는 글을 작성하시면 관리자에 의해 이용을 제한될 수 있습니다.',
          toolbar: ['bold', 'italic', 'numberedList', 'bulletedList'],
        }}
        data=""
        onReady={(editor: any) => {
          editor.focus();
        }}
        onChange={(event: any, editor: any) => {
          const data = editor.getData();
          console.log({ event, editor, data });
          setBody(data);
        }}
      />
      <button onClick={submitHandler} disabled={body ? false : true}>
        칭찬해주기
      </button>
    </>
  );
};
