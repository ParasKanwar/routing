import React from "react";

export default (props) => {
  return (
    <button
      onClick={() => {
        props.history.push("/1");
      }}
    >
      page 2 button
    </button>
  );
};
