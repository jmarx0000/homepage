// src/pages/AddContactPage.js

import React from 'react';
import AddContactForm from '../Components/AddContactForm.js'; // Import the form component
import '../App.css'; // Import global styles
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const AddContactPage = () => {
  const cancelLink = "/"; // Define the link for the cancel button

  return (
    <div className="centered">
      <AddContactForm cancelLink={cancelLink} /> {/* Pass the cancel link to the form */}
    </div>
  );
};

export default AddContactPage;
