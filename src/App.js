// src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage'; // Assuming HomePage is in /pages
import AddContactPage from './Pages/AddContactPage'; // The new contact page

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add-contact" element={<AddContactPage />} /> {/* New Route */}
      </Routes>
    </Router>
  );
};

export default App;


// https://jmarx0000.github.io/homepage
