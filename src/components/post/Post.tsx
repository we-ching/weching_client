import styled from 'styled-components';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import './Post.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { isDisabled } from '@testing-library/user-event/dist/utils';

// - [ ] 올리기 버튼을 통해 token header(누가쓴 글인지 확인해야 하므로), body 서버로 전송
// - [ ] 올리기 버튼 클릭 시 body 값이 없다면 게시 불가능하게 하기
// - [] 글쓰기 팁

export const Post = () => {
  const [body, setBody] = useState('');

  const submitHandler = async () => {
    await axios.post(
      `http://localhost:4000/posts`,
      {
        post: body,
      },
      {
        headers: {
          Authorization: 'token',
        },
      }
    );
  };

  return (
    <>
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
        onFocus={(event: any, editor: any) => {
          console.log('Focus.', editor);
        }}
      />

      <button onClick={submitHandler} disabled={body ? false : true}>
        올리기
      </button>
    </>
  );
};
