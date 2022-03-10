import { Button } from '@material-ui/core'
import React from 'react'
import { auth, provider } from './firebase'
import './Login.css'
import logo2 from './logo2.png'

function Login() {

  const signIn = (e) => {
    e.preventDefault();

    auth.signInWithPopup(provider).catch((error) => alert(error.message));

  }

  return (
    <div className='login'>
      <div className="login__img">
        <img src={logo2} alt="" />
        <h1>Get started by signing in with your Google account!</h1>
        <Button onClick={signIn}>Sign in</Button>
      </div>

    </div>
  )
}

export default Login
