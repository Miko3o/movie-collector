import { useState } from 'react'
import { useNavigate, redirect } from "react-router-dom";

import './Login.css'
import { Header }  from '../../UI/Header/Header'


function Login() {

    const [usernameInput, setUsernameInput] = useState('')
    const [passwordInput, setPasswordInput] = useState('')

    const navigate = useNavigate();

    return (
        <>
        <header>
            <Header />
        </header>
        <div className="page-login-wrapper">
            <h2 className="page-login-welcome">
                Welcome! Please log in.
            </h2>
            <div className="page-login-input-wrapper">
                <input
                    id="page-login-input"
                    placeholder='Username'
                    value={usernameInput}
                    onChange = {(e: React.ChangeEvent<HTMLInputElement>) => {setUsernameInput(e.target.value)}}
                />
                <input
                    id="page-login-input"
                    placeholder='Password'
                    value={passwordInput}
                    onChange = {(e: React.ChangeEvent<HTMLInputElement>) => {setPasswordInput(e.target.value)}}
                />
                <button 
                    id="page-login-button">
                    Login
                </button>
                <button 
                    id="page-login-button"
                    onClick={() => {navigate("/CreateAccount")}}>
                    Create Account
                </button>
            </div>
        </div>
        </>
    )
}

export default Login;