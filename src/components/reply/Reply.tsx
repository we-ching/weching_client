import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import axios from 'axios';
import { useState } from 'react';
import RandomPost from './RandomPost';
import { useNavigate, useParams } from 'react-router-dom';
import * as S from './styled';
import { getCookie } from '../Login/GoogleBtn';

export const Reply = () => {
  const [body, setBody] = useState<string>('');
  const navigate = useNavigate();
  const params = useParams();
  const id = params.id;
  const submitHandler = async () => {
    const token = getCookie('accessToken');
    if (!token) {
      alert('로그인 후 이용해주세요❗️');
      return navigate('/login/guest');
    }
    setBody('');
    await axios
      .patch(
        `/api/review`,
        {
          postId: id,
          content: body,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then(() => {
        alert('글쓴이에게 칭찬을 보냈어요! (포인트 5점 적립되었습니다.)');
        navigate('/home');
      })
      .catch((error) => {
        if (error.response.status === 400) {
          alert(`${error.response.data.message.replace(/\{.*/, '')}❗️`);
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
            toolbar: ['undo', 'redo', 'link'],
          }}
          data=""
          onReady={(editor: any) => {
            editor.focus();
          }}
          onChange={(event: any, editor: any) => {
            const data = editor.getData();
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
