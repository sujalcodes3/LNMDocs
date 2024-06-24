import React from "react";
/*  
    1) Upload Component
    2) Dummy Json
*/
const UploadAndFindAnswers = () => {
  const onFileLoad = (event) => {
    console.log(event);
  };
  return (
    <div>
      <input
        type="file"
        accept=".pdf"
        onChange={(event) => onFileLoad(event)}
      />
    </div>
  );
};

export default UploadAndFindAnswers;
