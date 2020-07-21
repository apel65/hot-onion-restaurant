import React from 'react';
import Auth from './useAuth';

const Login = () => {

    const auth = Auth();

    const handleSignedIn = () => {
        auth.signInWithGoogle()
        .then(res => {
            window.location.pathname = '/lunch';
        })
    }

    return (
        <div>
           {
               auth.user ? <button onClick={auth.signOut}>Sign Out</button>:
               <button onClick={handleSignedIn}>Sign in with google</button>
           }
        </div>
    );
};

export default Login;