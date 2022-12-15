import styled from 'styled-components';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import './Post.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// - [ ] 올리기 버튼을 통해 token header(누가쓴 글인지 확인해야 하므로), body 서버로 전송
// - [ ] 올리기 버튼 클릭 시 body 값이 없다면 게시 불가능하게 하기

// 올린 게시물의 내용이 redux를 통해 전역적으로 관리되야하는 상태가 맞는건가요?

export const Post = () => {
  const [body, setBody] = useState({
    contents: '',
  });
  const submitHandler = async () => {
    await axios.post(`http://localhost:4000/posts`, {
      contents: body,
    });
  };
  return (
    <>
      <CKEditor
        editor={ClassicEditor}
        config={{
          placeholder: '수정이 불가하므로 신중한 작성바랍니다.',
          toolbar: ['bold', 'italic', 'numberedList', 'bulletedList'],
        }}
        data="" //  서버로 전달
        onReady={(editor: any) => {
          // You can store the "editor" and use when it is needed.
          console.log('Editor is ready to use!', editor);
          editor.focus();
        }}
        onChange={(event: any, editor: any) => {
          const data = editor.getData();
          setBody(data);
          console.log({ event, editor, data });
        }}
        // onBlur={(event: any, editor: any) => {
        //   console.log('Blur.', editor);
        // }}
        // onFocus={(event: any, editor: any) => {
        //   console.log('Focus.', editor);
        // }}
      />
      <button onClick={submitHandler}>올리기</button>
    </>
  );
};
