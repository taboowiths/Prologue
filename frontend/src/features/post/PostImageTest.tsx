import React, { useEffect, useRef, useState } from "react";
import { Editor } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor.css";
import axios from "api/MultipartAxios";
import api from "api/Api";

const PostImageTest = () => {
  const [showImages, setShowImages] = useState([]);
  const [fileList, setFileList] = useState([]);

  const editorRef = useRef<Editor>();

  const handleAddImages = (e: React.ChangeEvent<HTMLInputElement>) => {
    const uploadFile = Array.from(e.target.files);
    const uploadFileLists = [...fileList];
    const imageUrlLists = [...showImages];

    for (let i = 0; i < uploadFile.length; i++) {
      const currentImageUrl = URL.createObjectURL(uploadFile[i]);
      imageUrlLists.push(currentImageUrl);
      uploadFileLists.push(uploadFile[i]);
    }

    setShowImages(imageUrlLists);
    setFileList(uploadFileLists);
    console.log(imageUrlLists);
    console.log(uploadFileLists);
    console.log(fileList);
  };

  const handleDeleteImages = (id: number) => {
    setShowImages(showImages.filter((_, index) => index !== id));
  };

  const testModify = () => {
    const formData = new FormData();

    for (let i = 0; i < fileList.length; i++) {
      formData.append("files", fileList[i]);
    }

    const writeDetailPostRequest = {
      accessToken: "GwezHgZHEC-rVvDAJiAGCP2udbXgnH4-1lvv3AYKkvO3KxFSEt1-fTAqTPJQuukl",
      githubId: "juuyeon",
      content: "## TEST\n ![images](lion_profile.png)",
    };

    formData.append(
      "writeDetailPostRequest",
      new Blob([JSON.stringify(writeDetailPostRequest)], { type: "application/json" }),
    );

    axios
      .post(api.posts.writePost(), formData)
      .then((res: any) => {
        console.log(res);
      })
      .catch((err: any) => {
        console.log(err);
      });
  };

  // useEffect(() => {
  //   // 이미지 드래그 업로드 막기
  //   editorRef.current.getInstance().removeHook("addImageBlobHook");
  // }, []);

  return (
    <div>
      <label htmlFor="input-file">
        <input type="file" id="input-file" multiple onChange={handleAddImages} />
      </label>

      {showImages.map((image, id) => (
        <div key={id}>
          <img src={image} alt={`${image}-${id}`} />
          <button onClick={() => handleDeleteImages(id)}>X</button>
        </div>
      ))}

      <button onClick={testModify}>글 수정하기</button>

      <Editor
        ref={editorRef}
        initialValue=""
        previewStyle="vertical"
        height="70vh"
        initialEditType="markdown"
        hooks={{
          addImageBlobHook: (blob, callback) => {
            const uploadFileLists = [...fileList];
            const imageUrlLists = [...showImages];

            const currentImageUrl = URL.createObjectURL(blob);
            imageUrlLists.push(currentImageUrl);
            uploadFileLists.push(blob);

            setShowImages(imageUrlLists);
            setFileList(uploadFileLists);
            console.log(imageUrlLists);
            console.log(uploadFileLists);
            console.log(fileList);

            callback(currentImageUrl);

            return false;
          },
        }}
      ></Editor>
    </div>
  );
};

export default PostImageTest;
