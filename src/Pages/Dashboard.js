import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Combine imports from react-router-dom
import '../App.css'; // Ensure App.css is correctly imported for styling
import { useAuth } from '../Functions/AuthContext.js'; // Ensure you have this function in your services
import Toolbar from '../Components/Toolbar';

const Dashboard = () => {
  
  const { user } = useAuth(); // Use the signInWithGoogle function from the AuthContext
  const navigate = useNavigate(); // Use useNavigate hook from react-router-dom

  useEffect(() => {
    if (user == null) {
      navigate('/');
    }
  }, [user, navigate]);

  return (
    <div>
      <Toolbar />
      <div className="page-container"> {/* Use a class name from your App.css */}
        <h1 className="header">Nexus</h1> {/* Apply a CSS class for header */}
        <Link to="/add-contact">
          <button className="button-primary" style={{ width: '200px', margin: '20px' }}>Add New Contact</button> 
        </Link>
        <Link to="/all-contacts">
          <button className="button-primary" style={{ width: '200px', margin: '20px' }}>All Contacts</button> 
        </Link>
        <div style={{ width: '100%', textAlign: 'center', marginTop: '20px' }}>
          <button onClick={() => user ? console.log(user.uid) : console.log('User is not logged in')}>View user</button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;