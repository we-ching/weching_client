import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import './CKEditor.css';
import axios from 'axios';
import { useState, FC } from 'react';
import { useDispatch } from 'react-redux';
import Board from './Board';
import postSlice from '../../postSlice';
import { Tip } from './Tip';

// - [x] 올리기 버튼을 통해 token header(누가쓴 글인지 확인해야 하므로), body 서버로 전송
// - [x] 올리기 버튼 클릭 시 body 값이 없다면 버튼비활성화
// - [x] 글쓰기 팁

export const Post: FC = () => {
  const [body, setBody] = useState<string>('');
  const dispatch = useDispatch();

  const submitHandler = async () => {
    await axios
      .post(
        `/api/post`,
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
        dispatch(postSlice.actions.savePost(body));
        alert('글 작성 완료');
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
          // You can store the "editor" and use when it is needed.
          console.log('Editor is ready to use!', editor);
          editor.focus();
        }}
        onChange={(event: any, editor: any) => {
          const data = editor.getData();
          console.log({ event, editor, data });
          setBody(data);
        }}
        // onBlur={(event: any, editor: any) => {
        //   console.log('Blur.', editor);
        // }}
        // onFocus={(event: any, editor: any) => {
        //   console.log('Focus.', editor);
        // }}
      />

      <button onClick={submitHandler} disabled={body ? false : true}>
        올리기
      </button>
      <Board />
    </>
  );
};
