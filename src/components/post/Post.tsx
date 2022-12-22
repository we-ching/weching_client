import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import './CKEditor.css';
import axios from 'axios';
import { useState, FC } from 'react';
import { useDispatch } from 'react-redux';
import { Board } from './Board';
import { postSlice } from '../../postSlice';
import { Tip } from './Tip';
import { useNavigate } from 'react-router-dom';

// - [x] 올리기 버튼을 통해 token header(누가쓴 글인지 확인해야 하므로), body 서버로 전송
// - [x] 올리기 버튼 클릭 시 body 값이 없다면 버튼비활성화
// - [x] 글쓰기 팁

/*
{
accessToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIzLCJlbWFpbCI6IjEwMDR3aXBpQGdtYWlsLmNvbSIsInN0YXR1cyI6MCwiaWF0IjoxNjcxNjc0NTQ4LCJleHAiOjE2NzE2NzgxNDh9.R3CFINwndR3dac6aKfo5z3pH3WrJEfE_vQjTIFlCiGc",
refreshToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIzLCJlbWFpbCI6IjEwMDR3aXBpQGdtYWlsLmNvbSIsInN0YXR1cyI6MCwiaWF0IjoxNjcxNjc0NTQ4LCJleHAiOjE2NzI4ODQxNDh9.Ru8ySF0YlN55FMEIEnnjGoK-3bkejmh1yNeELbb6xMM"
}
*/

export const Post: FC = () => {
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
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIzLCJlbWFpbCI6IjEwMDR3aXBpQGdtYWlsLmNvbSIsInN0YXR1cyI6MCwiaWF0IjoxNjcxNjc0NTQ4LCJleHAiOjE2NzE2NzgxNDh9.R3CFINwndR3dac6aKfo5z3pH3WrJEfE_vQjTIFlCiGc`,
            // credentials: 'include',
            // withCredentials: true,
          },
        }
      )
      .then(() => {
        dispatch(postSlice.actions.savePost(body));
        alert('글 작성 완료');
        navigate('/home');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Tip />
      <h1>새 글 쓰기</h1>
      <CKEditor
        editor={ClassicEditor}
        config={{
          placeholder: '수정이 불가하므로 신중한 작성바랍니다.',
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
        올리기
      </button>
      <Board />
    </>
  );
};
