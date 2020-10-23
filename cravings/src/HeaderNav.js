import React from "react";
import ReactLogo from './cravin.svg'
import { Link, withRouter } from "react-router-dom";
import "./HeaderNav.css";

function HeaderNav() {
  return (
    <nav className="header">
      <div className="appname">
        <div className="header__nav">
          <span className="mainappname">
            <img src={ReactLogo}
              alt="hey" className="Craving_logo" />
         Cravings
         </span>

          <Link to="/login" className="header__link">
            <div className="header__options">
              <span className="header__optionline1" style={{ display: "inline" }}> SignIn </span>
            </div>
          </Link>

        </div>
      </div>
    </nav>
  );
}

export default withRouter(HeaderNav);
