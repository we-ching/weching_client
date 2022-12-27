import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import axios from 'axios';
import { useState } from 'react';
import { RandomPost } from './RandomPost';
import { useNavigate, useParams } from 'react-router-dom';
import * as S from './styled';

/*

랜덤으로 매칭된 게시물을 가져와서 보여주고
답글 달아서 post 해주기
post 시 어떤 게시물에 답글을 달았는지 알아야히기 떄문에 정보 같이 보내주기

TODO: 랜덤 칭찬 Tip 보여주기
TODO: 랜덤으로 매칭된 게시물 및 버튼은 재랜더링 할필요없으므로 재랜더링 막아주기

*/

export const Reply = () => {
  const [body, setBody] = useState<string>('');
  const navigate = useNavigate();
  const params = useParams();
  const id = params.id;
  const submitHandler = async () => {
    await axios
      .patch(
        `/api/review`,
        {
          postId: id,
          content: body,
        },
        {
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIzLCJlbWFpbCI6IjEwMDR3aXBpQGdtYWlsLmNvbSIsInN0YXR1cyI6MCwiaWF0IjoxNjcyMTI4NDI2LCJleHAiOjE2NzIyMTEyMjZ9.P9MfYDCnIkYs767h-Fjt3QB4hTHycXbtzwYosfJZEgw`,
          },
        }
      )
      .then(() => {
        alert('글쓴이에게 칭찬을 보냈어요! (포인트 5점 적립되었습니다.)');
        navigate('/home');
      })
      .catch((error) => {
        if (error.response.status === 400) {
          return alert('이미 칭찬한 게시글 입니다❗️'); // 홈에서 막는게 나을듯
        }
        navigate('/home');
      });
  };

  return (
    <S.Main>
      <S.Wrraper>
        <S.Title>💌 칭찬해주기</S.Title>
        <RandomPost />
        <CKEditor
          editor={ClassicEditor}
          config={{
            placeholder:
              '욕설, 비방, 비꼬는 글을 작성하시면 관리자에 의해 이용을 제한될 수 있습니다.',
            toolbar: ['bold', 'italic', 'link'],
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
        <S.PostBtn onClick={submitHandler} disabled={body ? false : true}>
          칭찬해주기
        </S.PostBtn>
      </S.Wrraper>
    </S.Main>
  );
};
