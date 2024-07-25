import React, { useState } from 'react';
import { useUploadImageMutation } from '../api/library/api.library';

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [uploadFile, { isSuccess, error }] = useUploadImageMutation();

  const handleUpload = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (file) {
      const formData = new FormData();
      formData.append('file', file);

      uploadFile(formData);
    } else {
      console.error('No file selected');
    }
  };

  return (
    <div className="file-upload-container">
      <form onSubmit={handleSubmit} className="file-upload-form">
        <label htmlFor="file-upload-input" className="file-upload-label">
          Choose a file:
          <input id="file-upload-input" type="file" onChange={handleUpload} className="file-upload-input" />
        </label>
        <button type="submit" className="file-upload-button">
          Upload
        </button>
      </form>
      {isSuccess && <p className="file-upload-success">File uploaded successfully</p>}
      {error && <p className="file-upload-error">Error uploading file: {error.message}</p>}
    </div>
  );
};

export default FileUpload;
