import { useState } from 'react'
import { useNavigate, redirect, NavigateFunction } from "react-router-dom";

import './CreateAccount.css'
import { Header }  from '../../UI/Header/Header'

type CreateAccountProps = {
    navigate: NavigateFunction
}

export const CreateAccountContainer = () => {
    const navigate = useNavigate();
    return (
        <CreateAccount
            navigate = {navigate}
        />
    )
}

export const CreateAccount = (props: CreateAccountProps) => {
    const {navigate} = props

    const [usernameInput, setUsernameInput] = useState('')
    const [passwordInput, setPasswordInput] = useState('')
    const [confirmPasswordInput, setConfirmPasswordInput] = useState('')


    return (
        <div
            data-testid="createAccountTest"
        >
            <header>
                <Header />
            </header>
            <div className="page-createAccount-wrapper">
                <h2 className="page-login-welcome">
                    Create Account
                </h2>
                <div className="page-createAccount-input-wrapper">
                    <input
                        id="page-createAccount-input"
                        placeholder='New Username'
                        value={usernameInput}
                        onChange = {(e: React.ChangeEvent<HTMLInputElement>) => {setUsernameInput(e.target.value)}}
                    />
                    <input
                        id="page-createAccount-input"
                        placeholder='New Password'
                        type="password"
                        value={passwordInput}
                        onChange = {(e: React.ChangeEvent<HTMLInputElement>) => {setPasswordInput(e.target.value)}}
                    />
                    <input
                        id="page-createAccount-input"
                        placeholder='Confirm Password'
                        type="password"
                        value={confirmPasswordInput}
                        onChange = {(e: React.ChangeEvent<HTMLInputElement>) => {setConfirmPasswordInput(e.target.value)}}
                    />
                    <button 
                        id="page-createAccount-button"
                        onClick={(e) => {
                            if (passwordInput === confirmPasswordInput) {
                                e.preventDefault();
                                const newUserInfo = { usernameInput, passwordInput }
                                console.log(usernameInput, passwordInput, confirmPasswordInput)
                                const postCreateAccount = async () => {
                                    await fetch("http://localhost:5000/create_account", {
                                        method: 'POST',
                                        headers: { "Content-Type": "application/json"},
                                        body: JSON.stringify(newUserInfo)
                                    }).then(() => {
                                        console.log('new user added')
                                    })
                                }
                                postCreateAccount()
                            } else {
                                console.log("passwords don't match")
                            }}
                        }>
                        Create Account
                    </button>
                    <button 
                        id="page-createAccount-button"
                        onClick={() => {navigate("/Login")}}>
                        Back to Sign In
                    </button>
                </div>
            </div>
        </div>
    )
}

