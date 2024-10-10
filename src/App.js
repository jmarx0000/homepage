// src/App.js

// Functions file acts as Controller

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { AuthProvider } from "./Functions/AuthContext";
import AddContactPage from './Pages/AddContactPage'; // The new contact page
import ContactsList from './Pages/ContactsListPage'; // The new ContactsListPage
import Dashboard from './Pages/Dashboard';
import HomePage from './Pages/HomePage';
import { UserDataProvider } from './Functions/UserData';

const App = () => {

  return (
      <AuthProvider>
        <UserDataProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/add-contact" element={<AddContactPage />} /> {/* New Route */}
          <Route path="/all-contacts" element={<ContactsList />} /> {/* New Route for ContactsListPage */}
        </Routes>
        </UserDataProvider>
      </AuthProvider>      
  );
};

export default App;


// https://jmarx0000.github.io/homepage
