import React, { Fragment } from "react";
import "./App.css";
import HeaderNav from "./HeaderNav";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Sp from "./timer";
import Search from "./Search";
import Login from "./Login";
import Userpage from "./components/Userpage";

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
          <Route path="/Userpage">
            <HeaderNav />
            <Userpage />

          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}


export default App;
