import React from 'react';
import Auth from './useAuth';
import './Login.css';
import logo from '../../Image/logo2.png';

const Login = () => {

    const auth = Auth();

    const handleSignedIn = () => {
        auth.signInWithGoogle()
        .then(res => {
            window.location.pathname = '/lunch';
        })
    }

    return (
        <div className="login-container">
            <div className="sign-area">
                <div>
                    <img src={logo} alt=""/>
                </div>
                <div >
                    {
                        auth.user ? <button className="sign-btn" onClick={auth.signOut}>Sign Out</button>:
                        <button className="sign-btn" onClick={handleSignedIn}>Sign in with google</button>
                    }
                </div>
            </div>
        </div>
    );
};

export default Login;