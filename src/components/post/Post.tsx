import styled from 'styled-components';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import './Post.css';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';

// - [ ] 게시하기 버튼을 통해 title, body 서버로 전송

const Body = () => {
  return (
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
      }}
      onChange={(event: any, editor: any) => {
        const data = editor.getData();
        console.log({ event, editor, data });
      }}
      onBlur={(event: any, editor: any) => {
        console.log('Blur.', editor);
      }}
      onFocus={(event: any, editor: any) => {
        console.log('Focus.', editor);
      }}
    />
  );
};

export const Post = () => {
  const submitHandler = () => {
    axios.post(`http://localhost:3232/posts`);
  };
  return (
    <>
      <Title type="text" name="title" placeholder="제목" />
      <Body />
      <button onClick={submitHandler}>칭찬해줘잉</button>
    </>
  );
};

const Title = styled.input`
  width: 370px;
`;
