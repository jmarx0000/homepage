import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import '../App.css'; // Ensure App.css is correctly imported for styling
import { useAuth } from '../Functions/AuthContext.js'; // Ensure you have this function in your services
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Toolbar from '../Components/Toolbar';

const Dashboard = () => {
  
  const { signInWithGoogle, logOut, user } = useAuth(); // Use the signInWithGoogle function from the AuthContext
  const navigate = useNavigate(); // Use useNavigate hook from react-router-dom

  useEffect(() => {
        if(user==null){
          navigate('/');
        }
    } , [user, navigate]);


  return (
    <div>
        <Toolbar/>
    <div className="centered"> {/* Use a class name from your App.css */}
      <h1 className="header">Nexus</h1> {/* Apply a CSS class for header */}
      <Link to="/add-contact">
        <button className="button-primary" style={{ width: '200px', margin: '20px' }}>Add New Contact</button> 
      </Link>
      <Link to="/all-contacts">
        <button className="button-primary" style={{ width: '200px', margin: '20px' }}>All Contacts</button> 
      </Link>

      {/* google sign in button */}
      <button onClick={logOut}>Log Out</button>

      <button onClick={() => user ? console.log(user.uid) : console.log('User is not logged in')}>View user</button>
    </div>
    </div>
  );
};

export default Dashboard;