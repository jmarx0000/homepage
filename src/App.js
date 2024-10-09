// src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Dashboard from './Pages/Dashboard';
import AddContactPage from './Pages/AddContactPage'; // The new contact page
import ContactsList from './Pages/ContactsListPage'; // The new ContactsListPage
import { AuthProvider } from "./Functions/AuthContext";
import HomePage from './Pages/HomePage';
import { useNavigate } from 'react-router-dom';

const App = () => {

  return (
      <AuthProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/add-contact" element={<AddContactPage />} /> {/* New Route */}
          <Route path="/all-contacts" element={<ContactsList />} /> {/* New Route for ContactsListPage */}
        </Routes>
      </AuthProvider>      
  );
};

export default App;


// https://jmarx0000.github.io/homepage
