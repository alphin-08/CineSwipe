// import React, { useState } from 'react';
import './loginP.css';
import { Link } from "react-router-dom";

function Login() {
    return (
        <div class = "mainContainer-login">

            <div class = "topContainer-login">
                <h1>Login In</h1>
            </div>

            <div class = "middleContainer-login">
                <input type='text' placeholder='Username'/>
                <input type='text' placeholder='Password'/>
                <button> <b>Login In</b></button>
            </div>


            <div class = "bottomContainer-login">
                <Link to = '/createAccount'> 
                    <button><b>Create an Account</b></button>
                </Link>
                <Link to = '/recommendations'>
                    <button><b>Continue as Guest</b></button>
                </Link>
            </div>
        </div>
    ); 
}

export default Login;