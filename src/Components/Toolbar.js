import React from 'react';
import { Link } from 'react-router-dom';
import './Styles/Toolbar.css';
import { useAuth } from '../Functions/AuthContext.js';

const Toolbar = () => {

    const { logOut, signInWithGoogle, user } = useAuth(); // Use the signInWithGoogle function from the AuthContext

    return (
        <div className='toolbar-container'>
            <div className='toolbar'>
                <h1 className='toolbar-title'>Nexus</h1>
                <div className='toolbar-links'>
                    
                    {/* google sign in button; button only shows if no user is signed in */}
                    {!user && <button className='sign-in' onClick={signInWithGoogle} style={{margin: '20px'}}>Sign in with Google</button>}
                    
                    {user !== null && <button className='sign-out' onClick={logOut} style={{margin: '20px'}}>Log Out</button>}
                </div>
            </div>
        </div>
    );
};

export default Toolbar;