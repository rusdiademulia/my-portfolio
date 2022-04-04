import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";

import Background from "./components/Background";
import Copyright from "./components/Copyright";

ReactDOM.render(
  <React.StrictMode>
    <Background />
    {/* <MainContent /> */}
    <Copyright />
  </React.StrictMode>,
  document.getElementById("root")
);
