// import React, { useState } from 'react';
import './loginP.css';

function Login() {
    return (
        <div class = "mainContainer">

            <div class = "topContainer">
                <h1>Login In</h1>
            </div>

            <div class = "middleContainer">
                <input type='text' placeholder='Username'/>
                <input type='text' placeholder='Password'/>
                <button> <b>Login In</b></button>
            </div>


            <div class = "bottomContainer">
                <button><b>Create an Account</b></button>
                <button><b>Continue as Guest</b></button>
            </div>
        </div>
    ); 
}

export default Login;