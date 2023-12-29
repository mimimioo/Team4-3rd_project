import React, { useEffect, useState } from 'react';
import Editor from '@toast-ui/editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import styled from 'styled-components';

const EditorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ToastTextEditor = ({ initialValue }) => {
  const [editorInstance, setEditorInstance] = useState(null);

  useEffect(() => {
    const hookMap = {
      addImageBlobHook: (blob, callback) => {
        // 이미지를 업로드하는 로직을 수행
        // 예시: 이미지 파일 정보를 콘솔에 출력
        console.log('Uploaded Image Blob:', blob);

        // 콜백 함수를 호출하여 이미지를 에디터에 추가
        callback('uploaded-image-url');
      },
    };

    const editor = new Editor({
      el: document.querySelector('#editor'),
      height: '400px',
      initialEditType: 'wysiwyg',
      previewStyle: 'vertical',
      placeholder: '텍스트를 입력하세요.',
      initialValue: initialValue,
      hooks: hookMap,
    });

    setEditorInstance(editor);

    // 제거하는 부분을 주석 처리하거나 제거합니다.
    // return () => {
    //   editor.remove();
    // };
  }, [initialValue]);

  const handleGetContent = () => {
    if (editorInstance) {
      const htmlContent = editorInstance.getHTML();
      console.log(htmlContent);
    }
  };

  return (
    <EditorContainer>
      <div id="editor"></div>
      <button onClick={handleGetContent}>Get Editor Content (HTML)</button>
    </EditorContainer>
  );
};

export default ToastTextEditor;
