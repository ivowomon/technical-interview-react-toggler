import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { isNumberPrime } from "./prime"

const rootElement = document.getElementById("root");
const tests = [
  -66,
  -10,
  -25,
  -11,
  -13,
  -3,
  -2,
  -2,
  -1,
  0,
  1,
  2,
  3,
  13,
  11,
  25,
  66,
  10
];
ReactDOM.render(
  <React.StrictMode>
    <App />
    <br/>
    {tests.map((number) => {
      const log = isNumberPrime(number)
        ? `Is Prime: ${number}`
        : `Is not Prime: ${number}`;
      console.log(log);

      return <>{log}<br/></>;
    })}
  </React.StrictMode>,
  rootElement
);

