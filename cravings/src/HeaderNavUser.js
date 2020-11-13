import React from "react";
import ReactLogo from './cravin.svg'
import { Link, withRouter } from "react-router-dom";
import "./HeaderNavUser.css";
import { useStateValue } from "./Provider";
import auth from "./firebase";
import { Avatar } from "@material-ui/core";


function HeaderNav() {

    const [{ user }, dispatch] = useStateValue();

    const handleAuth = () => {

        if (user) {

            auth.signOut();
        }


    }
    /*
        const user1 = () => {
    
            auth.onAuthStateChanged(function (user1) {
    
                user1.displayName
            })
        }
    
    */

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
                    <div className="login_setting">
                        <Link to={!user && '/login'} className="header__link">
                            <div onClick={handleAuth} className="header__options">
                                <span className="header__optionline2" > Hello {user ? (user.displayName) : 'Guest'} </span>
                                <span className="header__optionline1"> {user ? 'SignOut' : 'SignIn'} </span>
                            </div>
                        </Link>

                        <Avatar src={user ? (user.photoURL) : ''} />
                    </div>

                </div>
            </div>
        </nav>
    );
}

export default withRouter(HeaderNav);
