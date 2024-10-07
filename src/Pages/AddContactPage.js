// src/pages/AddContactPage.js

import React from 'react';
import AddContactForm from '../Components/AddContactForm.js'; // Import the form component
import '../App.css'; // Import global styles

const AddContactPage = () => {
  return (
    <div className="centered">
      <h2>Add a New Contact</h2>
      <AddContactForm />
    </div>
  );
};

export default AddContactPage;
