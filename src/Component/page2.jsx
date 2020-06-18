import React, { useContext, useState } from "react";
import Button from "./myButton/b";
import axios from "axios";
import a from "../App";
export default (props) => {
  const [quote, setQuote] = useState(null);
  const b = useContext(a);
  console.log(b);
  return (
    <div>
      <Button {...props}></Button>
      <button
        onClick={() => {
          axios
            .post("https://anonymity.uno/api/today/quote/101")
            .then((res) => {
              console.log(res);
              setQuote(res.data);
            })
            .catch((e) => {
              console.log(e.message);
            });
        }}
      >
        get quotes
      </button>
      {quote ? quote.text : "nothing"}
    </div>
  );
};
