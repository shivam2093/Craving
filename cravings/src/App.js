import React, { Fragment } from "react";
import "./App.css";
import HeaderNav from "./HeaderNav";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Sp from "./timer";
import Search from "./Search";






function App() {
  Sp();
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <HeaderNav />
            <Search />
          </Route>
          <Route path="/login1">
            <h1> Login </h1>
          </Route>
          <Route path="/signup1">
            <h1> Signup </h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}


export default App;
