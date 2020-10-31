import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import './Login.css';
import ReactLogo from './cravin.svg'
import auth from './firebase';
import Button from '@material-ui/core/Button';
import Categories from './components/Categories'


function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [displayName, setdisplayName] = useState('');

    const login = (event) => {

        event.preventDefault();


        auth.signInWithEmailAndPassword(email, password)
            .then((auth) => {

                history.push("/Userpage");

            })
            .catch(e => alert(e.message));
    };

    const register = (event) => {
        event.preventDefault();

        auth.createUserWithEmailAndPassword(email, password)
            .then((auth) => {


                history.push("/Userpage");

            })
            .catch(e => alert(e.message));
    }


    return (
        <div className="login" >
            <Link to="/">

                <img src={ReactLogo} />
                <span id="appname">Cravings </span>

            </Link>

            <Categories />

            <div className="login_form">
                <h1> Sign in </h1> &nbsp;
                <form>
                    <h5> Name </h5>
                    <input value={displayName} onChange={event => setdisplayName(event.target.value)} type="name" />
                    <h5> Email</h5>
                    <input value={email} onChange={event => setEmail(event.target.value)} type="email" />
                    <h5>Password</h5>
                    <input value={password} onChange={event => setPassword(event.target.value)} type="password" id="giveInput" /> &nbsp;
                    <input type="checkbox" /> Show Password
                    <span id="loglogout">
                        <Button variant="outlined" onClick={login} color="primary">Login</Button> &nbsp;&nbsp;
                        <Button variant="outlined" onClick={register} color="secondary">Create Account</Button>
                    </span>
                </form>



            </div>

        </div>
    )
}

export default Login
