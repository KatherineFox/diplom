import React from "react";

const Loading = () => {
  return (
    <div className="justify-content-center d-flex">
      <div
        className="text-primary spinner-border"
        role="status"
        style={{
          width: "50px",
          height: "50px",
          marginTop: "100px",
          marginBottom: "100px",
        }}
      ></div>
    </div>
  );
};
export default Loading;
