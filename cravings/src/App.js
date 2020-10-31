import React, { Fragment, useEffect } from "react";
import "./App.css";
import HeaderNav from "./HeaderNav";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Sp from "./timer";
import Search from "./Search";
import Login from "./Login";
import Userpage from "./components/Userpage";
import Practice from './Practice'
import auth from "./firebase";
import MainpageBanner from "./components/MainpageBanner";
import Footer from "./components/Footer";
import { useStateValue } from "./Provider";




function App() {
  Sp();

  const [{ }, dispatch] = useStateValue();
  useEffect(() => {

    auth.onAuthStateChanged((authUser) => {
      console.log('The user is', authUser)
      if (authUser) {

        dispatch({

          type: "SET_USER",
          user: authUser

        });
      }
      else {

        dispatch({

          type: "SET_USER",
          user: null
        });
      }

    })



  }, []);


  return (

    <Router>
      <div className="App">

        <Switch>
          <Route exact path="/">
            <HeaderNav />
            <Search />
            <MainpageBanner />
            <Footer />
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
