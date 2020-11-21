import React, { Fragment, useEffect } from "react";
import "./App.css";
import HeaderNav from "./HeaderNav";

import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Sp from "./timer";
import Search from "./Search";
import Login from "./Login";
import Userpage from "./components/Userpage";
import auth from "./firebase";
import MainpageBanner from "./components/MainpageBanner";
import Footer from "./components/Footer";
import { useStateValue } from "./Provider";
import HeaderNavUser from "./HeaderNavUser";
import CategoriesProduct from './components/CategoriesProduct'
import Order from './Order'


function App() {
  Sp();

  const [{ }, dispatch] = useStateValue();


  useEffect(() => {

    auth.onAuthStateChanged((authUser) => {
      console.log('The user is', authUser)
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
          uid: authUser.uid,
          photo: authUser.photoURL,
          email: authUser.email,
          displayName: authUser.displayName

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
            <CategoriesProduct />
            <MainpageBanner />
            <Footer />
          </Route>
          <Route path="/Userpage">
            <HeaderNavUser />
            <Userpage />
          </Route>
          <Route path="/Order/:restaurant_id" component={Order}></Route>
          <Route path="/login">
            <Login />
          </Route>
          <Redirect to="/" />
        </Switch>

      </div>
    </Router>
  );
}


export default App;
