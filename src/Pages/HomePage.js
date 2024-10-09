// this will be the homepage of my website including marketing (anyone on web can access)

import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import '../App.css'; // Ensure App.css is correctly imported for styling
import { useAuth } from '../Functions/AuthContext.js'; // Ensure you have this function in your services
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Toolbar from '../Components/Toolbar';

const HomePage = () => {
  const { signInWithGoogle, user } = useAuth(); // Use the signInWithGoogle function and user from the AuthContext
  const navigate = useNavigate(); // Use useNavigate hook from react-router-dom

  useEffect(() => {
    if (user) {
      navigate('/dashboard'); // Navigate to the dashboard if the user is signed in
    }
    else {
      navigate('/'); // Navigate to the homepage if the user is not signed in
    }
  }, [user, navigate]);

  return (
    <div>
      <Toolbar/>
    <div className="centered"> {/* Use a class name from your App.css */}
      <h1 className="header">Nexus</h1> {/* Apply a CSS class for header */}
      
      {/* google sign in button */}
      <button onClick={signInWithGoogle}>Sign in with Google</button>
    </div>
    </div>
  );
};

export default HomePage;
