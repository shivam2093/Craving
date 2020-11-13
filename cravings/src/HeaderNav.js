import React from "react";
import ReactLogo from './cravin.svg'
import { Link, withRouter } from "react-router-dom";
import "./HeaderNav.css";
import { useStateValue } from "./Provider";
import auth from "./firebase";

function HeaderNav() {

  const [{ user }, dispatch] = useStateValue();

  const handleAuth = () => {

    if (user) {

      auth.signOut();
    }


  }
  return (
    <nav className="header">
      <div className="appname">
        <div className="header__nav">

          <div className="left_side">
            <span className="mainappname">
              <img src={ReactLogo}
                alt="hey" />
         Cravings
         </span>
          </div>

          <Link to={!user && '/login'} className="header__link">
            <div onClick={handleAuth} className="header__options">
              <span className="header__optionline2" > Hello {user ? (user.email.split(" ")[0]) : 'Guest'} </span>
              <span className="header__optionline1"> {user ? 'SignOut' : 'SignIn'} </span>
            </div>
          </Link>

        </div>
      </div>
    </nav>
  );
}

export default withRouter(HeaderNav);
