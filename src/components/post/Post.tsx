import axios from 'axios';
import { useState, FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Board } from './Board';
import { postSlice } from '../../postSlice';
import { Tip } from './Tip';
import { useNavigate } from 'react-router-dom';
import * as S from './styled';

import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import './CKEditor.css';

/*
{
TODO: 글 이어서 작성하기 기능 구현
  1) 세션스토리지에 저장 => 새로고침하거나 창 및 탭 닫으면 삭제 => 로그아웃하거나 글 올리기 버튼 클릭 시 삭제
  2) 로컬스토리지에 저장 => 지우지 않는 한 남아있음 => 로그아웃하거나 글 올리기 버튼 클릭 시 삭제
}
*/

export const Post: FC = () => {
  const [savedBody, setSavedBody] = useState<string | null>('');
  const [body, setBody] = useState<string>('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitHandler = async () => {
    await axios
      .post(
        `/api/post`,
        {
          content: body,
        },
        {
          headers: {
            authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjI0LCJlbWFpbCI6IndvZ25zMjA1QGdtYWlsLmNvbSIsInN0YXR1cyI6MCwiaWF0IjoxNjcyMTU3MTYzLCJleHAiOjE2NzIyMzk5NjN9.-qCXfQbghbi3ph-zM2dxY80cTMFfUB3MssnLrjlkOpY`,
            // credentials: 'include',
            // withCredentials: true,
          },
        }
      )
      .then(() => {
        dispatch(postSlice.actions.savePost(body));
        alert('글 작성 완료');
        sessionStorage.removeItem('myText');
        navigate('/home');
      })
      .catch((error) => {
        if (error.response.status === 400) {
          return alert('글을 작성할 수 있는 포인트가 부족합니다❗️');
        }
        console.log(error);
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
      <h1>✉️ 새 글 쓰기</h1>
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
      <Board />
    </S.Main>
  );
};
