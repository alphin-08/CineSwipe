// import React, { useState } from 'react';
import './loginP.css';
import { Link } from "react-router-dom";
import React from 'react';

function Login() {
    return (
        <div class = "mainContainer-login">

            <div class = "topContainer-login">
                <h1>Login</h1>
                <p>Account creation and login is down <br/> because free hosting limit has expired</p>
            </div>

            <div class = "middleContainer-login">
                <input type='text' placeholder='Username'/>
                <input type='text' placeholder='Password'/>
                <button> <b>Login</b></button>
                
            </div>


            <div class = "bottomContainer-login">
                <Link to = '/createAccount'> 
                    <button><b>Create an Account</b></button>
                </Link>
                <Link to = '/recommendations'>
                    <button><b>Continue as Guest</b></button>
                </Link>
                <Link to='/'>
                    <button><b>Back to Main Page</b></button>
                </Link>
            </div>
        </div>
    ); 
}

export default Login;