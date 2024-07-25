import { useState } from 'react';
import { useUploadImageMutation } from '../api/library/api.library';
const FileUpload = () => {
  const [file, setUploaad] = useState();
  const [uploadFile, { isSuccess, error }] = useUploadImageMutation();

  const handleUpload = (e) => {
    console.log(e.target.files[0]);
    setUploaad(e.target.files[0]);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const bodyFormData = new FormData();
    bodyFormData.append('file', file);
    uploadFile(bodyFormData);
  };

  return (
    <>
      <form>
        <input type="file" className="btn" onChange={handleUpload}/>
        <input type="submit" onClick={handleSubmit} />
      </form>
    </>
  );
};
export default FileUpload;
