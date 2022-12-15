// - [ ] 게시하기 버튼을 통해 title, body 서버로 전송

import styled from 'styled-components';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import axios from 'axios';

const Title = () => {
  return <input type="text" name="title" placeholder="title" />;
};

const Body = () => {
  return (
    <CKEditor
      editor={ClassicEditor}
      data="<p>Hello from CKEditor 5!</p>"
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
  return (
    <Wrapper>
      <Title />
      <Body />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: green;
`;
