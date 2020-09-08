import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Search from "./Search";
import Sp from "./timer";
import HeaderNav from "./HeaderNav";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <div>
    <App></App>
  </div>,
  document.getElementById("root")
);

serviceWorker.unregister();