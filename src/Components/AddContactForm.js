import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import Link from react-router-dom
import { db } from '../Configuration/firebase'; 
import { collection, addDoc } from 'firebase/firestore';
import { useAuth } from '../Functions/AuthContext';
import { useUserData } from '../Functions/UserData';


const AddContactForm = ({cancelRoute}) => {
  // Form state
  const { contacts, setContacts, fetchContacts } = useUserData();
  const navigate = useNavigate();


  const [contact, setContact] = useState({
    fullName: 'Jordan Marx',
    firmName: 'Morgan Stanley',
    division: 'M&A',
    position: 'Analyst',
    lastReachOut: '2024-06-22', // Hardcoded date for testing
    email: 'jordan.marx@morganstanley.com', // Hardcoded email for testing
    phoneNumber: '123-456-7890', // Hardcoded phone number for testing
    notes: 'Met at the annual finance conference.' // Hardcoded notes for testing
  });

  // Use the useAuth hook to access the user object
  const { user } = useAuth();

  // Input change handler
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setContact((prevContact) => ({
      ...prevContact,
      [name]: value,
    }));
  };

  // Form submit handler (no functionality yet)
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    try {
      const docRef = await addDoc(collection(db, `users/${user.uid}/contacts`), {
        fullName: contact.fullName,
        firmName: contact.firmName,
        division: contact.division,
        position: contact.position,
        lastReachOut: contact.lastReachOut,
        email: contact.email,
        phoneNumber: contact.phoneNumber,
        notes: contact.notes,
        dateCreated: Date.now() // Add current date in ISO format
      });
      setContacts([...contacts, { id: docRef.id, ...contact }]);
      fetchContacts();
      console.log("Document written with ID: ", docRef.id);
      navigate('/all-contacts'); // Navigate to the all-contacts page after submission
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    
    // Reset form fields after submission
    setContact({
      fullName: '',
      firmName: '',
      division: '',
      position: '',
      lastReachOut: '',
      email: '',
      phoneNumber: '', // Reset phone number
      notes: ''
    });
  };

  return (
    <div className="contact-form-container">
      <h2>Add New Contact</h2>
      <form onSubmit={handleSubmit}>

        <div>
          <label>Full Name</label>
          <input
            type="text"
            name="fullName"
            value={contact.fullName}
            onChange={handleInputChange}
            required
            placeholder="First and Last Name"
          />
        </div>

        <div>
          <label>Firm Name</label>
          <input
            type="text"
            name="firmName"
            value={contact.firmName}
            onChange={handleInputChange}
            required
            placeholder="Firm Name"
          />
        </div>

        <div>
          <label>Industy / Division</label>
          <input
            type="text"
            name="division"
            value={contact.division}
            onChange={handleInputChange}
            required
            placeholder="Industry / Division"
          />
        </div>

        <div>
          <label>Position</label>
          <input
            type="text"
            name="position"
            value={contact.position}
            onChange={handleInputChange}
            required
            placeholder="Position at Firm"
          />
        </div>

        <div>
          <label>Date of Last Reach Out</label>
          <input
            type="date"
            name="lastReachOut"
            value={contact.lastReachOut}
            onChange={handleInputChange}
            required
          />
        </div>

        <div>
          <label>Email Address</label>
          <input
            type="email"
            name="email"
            value={contact.email}
            onChange={handleInputChange}
            required
            placeholder="Email Address"
          />
        </div>

        <div>
          <label>Phone Number</label> {/* New Phone Number Field */}
          <input
            type="tel" // Use type="tel" for phone numbers
            name="phoneNumber"
            value={contact.phoneNumber}
            onChange={handleInputChange}
            required
            placeholder="Phone Number"
          />
        </div>

        <div>
          <label>Notes</label>
          <textarea
            name="notes"
            value={contact.notes}
            onChange={handleInputChange}
            placeholder="Interaction notes"
          />
        </div>
        <button className="button-primary" type="submit">Add Contact</button>
        <Link to='/all-contacts'>
            <button className="button-cancel" type="button">Cancel</button>
        </Link>
      </form>
    </div>
  );
};

export default AddContactForm;
