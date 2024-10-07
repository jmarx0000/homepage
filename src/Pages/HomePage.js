import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import '../App.css'; // Ensure App.css is correctly imported for styling

const HomePage = () => {
  return (
    <div className="centered"> {/* Use a class name from your App.css */}
      <h1 className="header">Nexus</h1> {/* Apply a CSS class for header */}
      <Link to="/add-contact">
        <button className="button-secondary">Add New Contact</button> {/* Use CSS for button */}
      </Link>
    </div>
  );
};

export default HomePage;
