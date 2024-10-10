import React from 'react';
import { useState, useEffect } from 'react';
import { db } from '../Configuration/firebase'; 
import { collection, getDocs, doc, deleteDoc } from 'firebase/firestore';
import { Link } from 'react-router-dom';
import '../App.css'; // Import global styles
import './Styles/ContactsListPage.css'; // Import the CSS file
import PageHeader1 from '../Components/PageHeader1';
import { useUserData } from '../Functions/UserData';

var cellWidth = 500;
const numCells = 6;

var totalWidth = cellWidth * numCells;


const ContactsList = () => {

  const { contacts, setContacts } = useUserData();


  // State to control the visibility of the delete confirmation popup
  const [showPopup, setShowPopup] = useState(false);
  
  // State to store the ID of the contact to be deleted
  const [contactToDelete, setContactToDelete] = useState(null);
  
  // Function to initiate the delete confirmation process
  // Sets the contact ID to be deleted and shows the confirmation popup
  const confirmDelete = (contactId) => {
    setContactToDelete(contactId);
    setShowPopup(true);
  };
  
  // Function to handle the confirmation of the delete action
  // Deletes the contact from the list and hides the confirmation popup
  const handleConfirmDelete = async () => {
    if (contactToDelete) {
      try {
        await deleteDoc(doc(db, 'contacts', contactToDelete));
        setContacts(contacts.filter(contact => contact.id !== contactToDelete));
        console.log("Contact deleted successfully");
      } catch (error) {
        console.error("Error deleting contact: ", error);
      }
      setShowPopup(false);
      setContactToDelete(null);
    }
  };
  
  // Function to handle the cancellation of the delete action
  // Hides the confirmation popup and resets the contact to be deleted
  const handleCancelDelete = () => {
    setShowPopup(false);
    setContactToDelete(null);
  };

  return (
    <div>
      <PageHeader1 />
      
      <div className='contacts-page-container'>
      <div style={{ width: '200px', margin: '20px' }}>
        <Link to="/">
          <button className="button-primary">Back to Home</button>
        </Link>
      </div>

      <div className="contacts-list-container">
        
        {/* overarching container for all contacts list table */}
        <div className="contacts-list" style={{ width: `${totalWidth}px` }}>

          {/* header row */}
          <div className="contacts-list-header" style={{borderBottom: '1px solid #ccc'}}>
            <div style={{ fontWeight: 'bold', width: '75px' }}>Actions</div>{/* Add a new column for the icon */}
            <div style={{ fontWeight: 'bold', width: '200px' }}>Name</div>
            <div style={{ fontWeight: 'bold', width: '200px' }}>Firm Name</div>
            <div style={{ fontWeight: 'bold', width: '200px' }}>Position</div>
            <div style={{ fontWeight: 'bold', width: '200px' }}>Last Reach Out</div>
            <div style={{ fontWeight: 'bold', width: '200px' }}>Phone Number</div>
            <div style={{ fontWeight: 'bold', width: '400px' }}>Notes</div>
          </div>

          {/* content rows */}
          {contacts.map(contact => (
            <div key={contact.id} className="contacts-list-content" style={{ width: `${totalWidth}px`,  borderBottom: '1px solid #ccc' }}>
              
              {/* hidden dropdown menu to delete information */}
              <div style={{ width: '75px' }}> {/* Add a new column for the icon */}
                <div className="dropdown">
                  <span className="icon">...</span> {/* Icon */}
                  <div className="dropdown-content">
                    <a href="#" className='delete-contact' onClick={() => confirmDelete(contact.id)}>Delete</a>
                    <a href="#">Action 2</a>
                    <a href="#">Action 3</a>
                  </div>
                </div>
              </div>
              <div style={{ width: '200px' }}>{contact.fullName}</div>
              <div style={{ width: '200px' }}>{contact.firmName}</div>
              <div style={{ width: '200px' }}>{contact.position}</div>
              <div style={{ width: '200px' }}>{contact.lastReachOut}</div>
              <div style={{ width: '200px' }}>{contact.phoneNumber}</div>
              <div style={{ width: '400px' }}>{contact.notes}</div>
            </div>
          ))}
        </div>
        </div> {/* end of page-container */}
      </div>


        {/* popup element */}
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <p>Are you sure you want to delete this contact?</p>
            <button onClick={handleConfirmDelete}>Yes</button>
            <button onClick={handleCancelDelete}>No</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactsList;