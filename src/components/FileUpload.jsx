import React, { useEffect } from "react";
import Dropzone from "react-dropzone-uploader";
import "react-dropzone-uploader/dist/styles.css";

const FileUpload = ({ filesSelected, setFilesSelected,dropzoneRef }) => {

  const getUploadParams = ({ meta }) => { return { url: 'https://httpbin.org/post' } }
  const handleChangeStatus = ({ meta }, status) => {
    console.log(status, meta);
    if (status === "done" || status === "removed") {
      setFilesSelected(!filesSelected);
    }
  };

  useEffect(() => {
  }, [filesSelected]);



  return (
    <Dropzone
      multiple={true}
      getUploadParams={getUploadParams}
      ref={dropzoneRef}
      onChangeStatus={handleChangeStatus}
      accept=".doc, .docx,.ppt, .pptx,.txt,.pdf"
      canRemove={true}
      
    />
  );
};

export default FileUpload;
