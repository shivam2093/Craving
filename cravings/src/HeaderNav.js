import React from "react";
import ReactLogo from './cravin.svg'
import { Link, withRouter } from "react-router-dom";
import "./HeaderNav.css";

function HeaderNav() {
  return (
    <nav className="header">
      <div className="appname">
        <img src={ReactLogo}
          alt="hey" className="Craving_logo" />
        <span className="mainappname"> Cravings </span>
      </div>

      <div className="header__nav">
        <Link to="/login1" className="header__link">
          <div className="header__options">
            <span className="header__optionline1"> Login </span>
          </div>
        </Link>
        <Link to="/signup1" className="header__link">
          <div className="header__options">
            <span className="header__optionline1"> SignUp </span>
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default withRouter(HeaderNav);
