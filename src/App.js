// src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import HomePage from './Pages/HomePage'; // Assuming HomePage is in /pages
import AddContactPage from './Pages/AddContactPage'; // The new contact page
import ContactsList from './Pages/ContactsListPage'; // The new ContactsListPage

const App = () => {
  return (
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add-contact" element={<AddContactPage />} /> {/* New Route */}
        <Route path="/all-contacts" element={<ContactsList />} /> {/* New Route for ContactsListPage */}
      </Routes>
  );
};

export default App;


// https://jmarx0000.github.io/homepage
