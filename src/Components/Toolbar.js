import React from 'react';
import { Link } from 'react-router-dom';
import './Styles/Toolbar.css';
import { useAuth } from '../Functions/AuthContext.js';

const Toolbar = () => {

    const { logOut, signInWithGoogle, user } = useAuth(); // Use the signInWithGoogle function from the AuthContext

    return (
        <div className='toolbar-container' style={{height: '200px'}}>
            <div className='toolbar'>
                <h1 className='toolbar-title'>Nexus</h1>
                <div className='toolbar-links'>
                    
                    {/* google sign in button; button only shows if no user is signed in */}
                    {!user && <button onClick={signInWithGoogle}>Sign in with Google</button>}
                    
                    {user !== null && <button onClick={logOut}>Log Out</button>}
                    <button onClick={() => window.location.href='/dashboard'}>Does Nothing</button>
                    <button onClick={() => window.location.href='/add-contact'}>Does Nothing</button>
                </div>
            </div>
        </div>
    );
};

export default Toolbar;