// this will be the homepage of my website including marketing (anyone on web can access)

import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css'; // Ensure App.css is correctly imported for styling
import Toolbar from '../Components/Toolbar';
import { useAuth } from '../Functions/AuthContext.js'; // Ensure you have this function in your services
import './Styles/HomePage.css'; // Ensure HomePage.css is correctly imported for styling

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
    <div className="page-container"> {/* Use a class name from your App.css */}
      
      <div className="section-1">
        <h1 className="header" style={{fontSize: '64px'}}>Nexus</h1> {/* Apply a CSS class for header */}
          <h2>Catchy slogan or pithy phrase here.</h2>
      </div>

      <div className="section-2"> 
        <h2>What is Nexus?</h2>
        <p>Some information about Nexus here.</p>
      </div>

      <div className="section-3"> 
        <h2>What is Nexus?</h2>
        <p>Some information about Nexus here.</p>
      </div>

      <div className="creds"> 
        <h2>What is Nexus?</h2>
        <p>Some information about Nexus here.</p>
      </div>

      <div className="pricing"> 
        <h2>What is Nexus?</h2>
        <p>Some information about Nexus here.</p>
      </div>

    </div>
    </div>
  );
};

export default HomePage;
