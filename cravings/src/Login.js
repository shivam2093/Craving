import React from 'react'
import { Link, useHistory } from 'react-router-dom';
import './Login.css';
import ReactLogo from './cravin.svg'

function Login() {
    return (
        <div className="login" >
            <Link to="/">

                <img src={ReactLogo}
                    className="Craving_logo" />
                <span id="appname">Cravings </span>

            </Link>

        </div>
    )
}

export default Login
