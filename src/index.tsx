import React from "react";
import ReactDOM from "react-dom";
import { App } from "./components/App";
import { Data } from "./types/data";
import reportWebVitals from "./reportWebVitals";

import "./css/index.css";

fetch("data.json")
  .then((resp) => resp.json())
  .then((data) => render(data as Data));

const render = (data: Data) => {
  ReactDOM.render(
    <React.StrictMode>
      <App data={data} />
    </React.StrictMode>,
    document.getElementById("root")
  );
};

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
