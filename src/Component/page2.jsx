import React, { useContext } from "react";
import Button from "./myButton/b";
import a from "../App";
export default (props) => {
  const b = useContext(a);
  console.log(b);
  return (
    <div>
      <Button {...props}></Button>
      <h1>{b}</h1>
    </div>
  );
};
