import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Combine imports from react-router-dom
import { useAuth } from '../Functions/AuthContext.js'; // Ensure you have this function in your services
import Toolbar from '../Components/Toolbar';
import SideNavigation from '../Components/SideNavigation.js'; // Ensure you have this component in your Components folder
import './Styles/Dashboard.css'; // Ensure you have a CSS file in your Styles folder

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
      <SideNavigation />
      
      <div className="page-container" style={{ marginTop: '100px'}}> {/* Use a class name from your App.css */}

        <h1 className="header-dashboard" style={{margin: '50px'}}>Dashboard</h1> {/* Apply a CSS class for header */}
        
        {/* container for user recruiting KPIs */}
        <h2 className="header" style={{marginTop: '50px', marginBottom: '20px'}}>All-Time</h2> {/* Apply a CSS class for header */}
        <div className="key-insights-container">
          <div className="key-insight">
            <h3 className="key-insight-title">Total Contacts</h3>
            <p className="key-insight-value">0</p>
          </div>
          <div className="key-insight">
            <h3 className="key-insight-title">Total Messages</h3>
            <p className="key-insight-value">0</p>
          </div>
          <div className="key-insight">
            <h3 className="key-insight-title">Total Calls</h3>
            <p className="key-insight-value">0</p>
          </div>
        </div>

        {/* container for user recruiting KPIs */}
        <h2 className="header" style={{marginTop: '50px', marginBottom: '20px'}}>Weekly</h2> {/* Apply a CSS class for header */}
        <div className="key-insights-container">
          <div className="key-insight">
            <h3 className="key-insight-title">Total Contacts</h3>
            <p className="key-insight-value">0</p>
          </div>
          <div className="key-insight">
            <h3 className="key-insight-title">Total Messages</h3>
            <p className="key-insight-value">0</p>
          </div>
          <div className="key-insight">
            <h3 className="key-insight-title">Total Calls</h3>
            <p className="key-insight-value">0</p>
          </div>
        </div>


        
        <Link to="/all-contacts">
          <button className="button-primary" style={{ width: '200px', margin:'20px' }}>All Contacts</button> 
        </Link>
        <div style={{ width: '100%', textAlign: 'center', marginTop: '20px' }}>
          <button onClick={() => user ? console.log(user.uid) : console.log('User is not logged in')}>View user</button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;