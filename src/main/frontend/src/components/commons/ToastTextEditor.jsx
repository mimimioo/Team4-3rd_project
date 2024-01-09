import { useRef } from 'react';

// Toast 에디터
import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';

export default function ToastEditor() {
  // Editor DOM
  const editorRef = useRef();

  return (
    <div>
      <Editor
        ref={editorRef}
        placeholder="내용을 입력해주세요."
        previewStyle="vertical"
        height="300px"
        initialEditType="wysiwyg"
        toolbarItems={[['bold', 'italic', 'strike'], ['image']]}
        
        // hooks 에서 addImageBlobHook 를 주물러 주면 된다.
        hooks={{
          addImageBlobHook: async (blob, callback) => {
            
            console.log(blob); 

            // 1. 첨부된 이미지 파일을 서버로 전송후, 이미지 경로 url을 받아온다.
            // const imgUrl = await .... 서버 전송 / 경로 수신 코드 ...

            // 2. 첨부된 이미지를 화면에 표시(경로는 임의로 넣었다.)
            callback(`http://localhost:3000/uploads/${blob.name}`, blob.name);
          }
        }}
      ></Editor>
    </div>
  );
}
