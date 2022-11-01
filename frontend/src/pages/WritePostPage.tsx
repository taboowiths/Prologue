import React, { useRef } from "react";
import { Editor } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor.css";

const WritePostPage = () => {
  const editorRef = useRef<Editor>(null);

  return (
    <div>
      <Editor
        ref={editorRef}
        initialValue=""
        previewStyle="vertical"
        hooks={{
          addImageBlobHook: (blob) => {
            console.log(blob);

            const imageURL = `<img src="C:\\Users\\multicampus\\Desktop\\배경화면.jpg" alt="테스트" />`;
            console.log("imageURL : ", imageURL);

            const editorContents = editorRef.current?.getInstance().getHTML();
            console.log(editorContents);
            editorRef.current?.getInstance().setHTML(editorContents + imageURL);
            console.log(editorContents + imageURL);

            const nowContents = editorRef.current?.getInstance().getHTML();
            const markdownContents = editorRef.current
              ?.getInstance()
              .getMarkdown();
            console.log("nowContents : ", nowContents);
            console.log("markdown : ", markdownContents);

            return false;
          },
        }}
      />
    </div>
  );
};

export default WritePostPage;
