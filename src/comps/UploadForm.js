import React, { useState } from "react";

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const changeHandler = (e) => {
    const selected = e.target.files[0];
    const types = ["image/png", "image/jpeg"];

    if (selected && types.includes(selected.type)) {
      setError(null);
      setFile(selected);
    } else {
      setFile(null);
      setError("Please select an image file (png or jpeg)");
      e.target.value = "";
    }
  };
  return (
    <div className="container">
      <form>
        <input type="file" onChange={changeHandler} />
        {error && <div className="error">{error}</div>}
        {file && <div className="file">{file.name}</div>}
      </form>
    </div>
  );
};

export default UploadForm;
