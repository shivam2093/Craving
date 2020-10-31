import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Sp from "./timer";
import HeaderNav from "./HeaderNav";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";
import { Provider, useStateValue } from './Provider'
import reducer, { initialState } from './reducer';






ReactDOM.render(
  <React.StrictMode>
    <Provider
      initialState={initialState} reducer={reducer}>


      <App />

    </Provider>

  </React.StrictMode>,
  document.getElementById("root")




);


serviceWorker.unregister();
