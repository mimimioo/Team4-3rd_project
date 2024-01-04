  import Editor from '@toast-ui/editor';
  import '@toast-ui/editor/dist/toastui-editor.css';
  import React, { useEffect, useState } from 'react';
  import styled from 'styled-components';
  import { storage } from '../firebase/firebaseconfig';

  const EditorContainer = styled.div` 
    display: flex;
    flex-direction: column;
    align-items: center;
  `;

  const ToastTextEditor = ({ initialValue }) => {
    const [editorInstance, setEditorInstance] = useState(null);

    useEffect(() => {
      const hookMap = {
        addImageBlobHook: async (blob, callback) => {
          // 파일 업로드 전에 필요한 사전 처리 작업 수행 가능

          // 1. 이미지 파일을 Firebase Storage에 업로드
          const uploadTask = storage.ref(`editor-images/${blob.name}`).put(blob);
          
          // 2. 업로드 상태 모니터링
          uploadTask.on(  
            'state_changed',
            (snapshot) => {
              // 업로드 중인 경우 실행되는 코드
              const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
              console.log('Upload is ' + progress + '% done');
            },
            (error) => {
              // 업로드 실패 시 실행되는 코드
              console.error('Upload failed:', error);
            },
            async () => {
              // 3. 업로드 완료 시 실행되는 코드
              console.log('Upload successful');

              // 4. 이미지 업로드가 완료된 후에 해당 이미지의 URL을 얻어와서 사용
              const url = await uploadTask.snapshot.ref.getDownloadURL();
              console.log('Image URL:', url);

              // 5. 에디터에 이미지를 추가
              callback(url, blob.name);
            }
          );
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
        // 에디터에서 이미지가 포함된 HTML 콘텐츠를 가져옴
        const htmlContent = editorInstance.getHTML();
        console.log(htmlContent);

        // 추가 작업을 수행하거나 서버로 HTML 콘텐츠를 전송할 수 있음
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
