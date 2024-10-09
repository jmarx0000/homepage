import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import '../App.css'; // Ensure App.css is correctly imported for styling
import { useAuth } from '../Functions/AuthContext.js'; // Ensure you have this function in your services

const HomePage = () => {
  
  const { signInWithGoogle } = useAuth(); // Use the signInWithGoogle function from the AuthContext
  
  return (
    <div className="centered"> {/* Use a class name from your App.css */}
      <h1 className="header">Nexus</h1> {/* Apply a CSS class for header */}
      <Link to="/add-contact">
        <button className="button-primary" style={{ width: '200px', margin: '20px' }}>Add New Contact</button> 
      </Link>
      <Link to="/all-contacts">
        <button className="button-primary" style={{ width: '200px', margin: '20px' }}>All Contacts</button> 
      </Link>

      {/* google sign in button */}
      <button onClick={signInWithGoogle}>Sign in with Google</button>
    </div>
  );
};

export default HomePage;
