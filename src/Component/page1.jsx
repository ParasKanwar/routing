import React from "react";

export default ({ history }) => {
  return (
    <button
      onClick={() => {
        history.push("/2");
      }}
    >
      click me
    </button>
  );
};
