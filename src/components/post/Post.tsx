import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import axios from 'axios';
import { useState, FC, useEffect } from 'react';
import Tip from './Tip';
import { useNavigate } from 'react-router-dom';
import * as S from './styled';

/*
TODO: 글 이어서 작성하기 기능 구현
  1) 세션스토리지에 저장 => 새로고침하거나 창 및 탭 닫으면 삭제 => 로그아웃하거나 글 올리기 버튼 클릭 시 삭제
  2) 로컬스토리지에 저장 => 지우지 않는 한 남아있음 => 로그아웃하거나 글 올리기 버튼 클릭 시 삭제
*/

// max값  내용 : 10개

export const Post: FC = () => {
  const [savedBody, setSavedBody] = useState<string | null>('');
  const [body, setBody] = useState<string>('');
  const navigate = useNavigate();

  const submitHandler = async () => {
    setBody('');
    await axios
      .post(
        `/api/post`,
        {
          content: body,
        },
        {
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjI3LCJlbWFpbCI6ImxrZzcwMDA3QGdtYWlsLmNvbSIsInN0YXR1cyI6MCwiaWF0IjoxNjcyMTk1Nzk1LCJleHAiOjE2NzIyNzg1OTV9.jPVHM-PXjsFWqwT81Kjh0KRcLAJFJuce_vujYDwICWo`,
            // credentials: 'include',
            // withCredentials: true,
          },
        }
      )
      .then(() => {
        alert('글 작성 완료(포인트가 3점 소모되었습니다.)');
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
            toolbar: {
              items: ['bold', 'italic', 'link'],
            },
          }}
          data={savedBody}
          onReady={(editor: any) => {
            editor.focus();
          }}
          onChange={(event: any, editor: any) => {
            const data = editor.getData();
            console.log({ event, editor, data });
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
