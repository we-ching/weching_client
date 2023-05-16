import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import axios from 'axios';
import { useState, FC, useEffect } from 'react';
import Tip from './Tip';
import { useNavigate } from 'react-router-dom';
import * as S from './styled';
import { getCookie } from '../Login/GoogleBtn';

export const Post: FC = () => {
  const [savedBody, setSavedBody] = useState<string | null>('');
  const [body, setBody] = useState<string>('');
  const navigate = useNavigate();

  const submitHandler = async () => {
    const token = getCookie('accessToken');
    if (!token) {
      alert('로그인 후 이용해주세요❗️');
      return navigate('/login/guest');
    }
    setBody('');
    await axios
      .post(
        `/api/post`,
        {
          content: body,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then(() => {
        alert('글 작성 완료 (포인트가 3점 소모되었습니다.)');
        sessionStorage.removeItem('myText');
        navigate('/home');
      })
      .catch((error) => {
        console.log(error);
        if (error.response.status === 400) {
          alert(`${error.response.data.message.replace(/\{.*/, '')}❗️`);
        }
        navigate('/home');
      });
  };

  useEffect(() => {
    if (
      sessionStorage.getItem('myText') &&
      window.confirm('글을 이어서 작성하시겠습니까?')
    )
      return setSavedBody(sessionStorage.getItem('myText'));
  }, []);

  return (
    <S.Main>
      <Tip />
      <S.Wrraper>
        <S.Title>✉️ 새 글 쓰기</S.Title>
        <CKEditor
          editor={ClassicEditor}
          config={{
            placeholder: '수정이 불가하므로 신중한 작성바랍니다.',
            toolbar: ['undo', 'redo', 'link'],
          }}
          data={savedBody}
          onReady={(editor: any) => {
            editor.focus();
          }}
          onChange={(event: any, editor: any) => {
            const data = editor.getData();
            setBody(data);
          }}
          onBlur={() => {
            sessionStorage.setItem('myText', body);
          }}
        />
        <S.PostBtn onClick={submitHandler} disabled={body ? false : true}>
          올리기
        </S.PostBtn>
      </S.Wrraper>
    </S.Main>
  );
};
