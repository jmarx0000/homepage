import React from 'react';
import { useState, useEffect } from 'react';
import { db } from '../Configuration/firebase'; 
import { collection, getDocs, doc, deleteDoc } from 'firebase/firestore';
import { Link } from 'react-router-dom';
import '../App.css'; // Import global styles
import './Styles/ContactsListPage.css'; // Import the CSS file
import { useUserData } from '../Functions/UserData';
import SideNavigation from '../Components/SideNavigation';
import Toolbar from '../Components/Toolbar';

var cellWidth = 500;
const numCells = 6;

var totalWidth = 3000;


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
      <Toolbar /> {/* Add the Toolbar component */}
      
      <div className='contacts-page-container'>
        <SideNavigation />

        {/* Site Header */}
        <h1 className="header" style={{ marginTop: '100px'}}>All Contacts</h1>  

      <div className='contacts-toolbar' style={{ margin: '20px' }}>

        <div className='toolbar-left'>
        {/* Search Bar */}
        <div className="search-bar-container">
          <input
            type="text"
            className="search-bar"
            placeholder="Search contacts..."
          />
        </div>

        {/* Button to search */}
        <button className="button-primary" style={{ width: '100px' }}>Search</button> 
        </div>


        {/* right aligned toolbar */}
        <div className='toolbar-right'>
          {/* Button to add contact */}
          <Link to="/add-contact">
            <button className="button-primary" style={{ width: '200px' }}>Add New Contact</button> 
          </Link>
        </div>
      
      </div>

      <div className="contacts-list-container">
        
        {/* overarching container for all contacts list table */}
        <div className="contacts-list" style={{ width: `${totalWidth}px` }}>

          {/* header row */}
          <div className="contacts-list-header" style={{width: `${totalWidth}px`, borderBottom: '1px solid #ccc'}}>
            <div style={{ fontWeight: 'bold', width: '75px' }}>Edit</div>{/* Add a new column for the icon */}
            <div style={{ fontWeight: 'bold', width: '200px' }}>Name</div>
            <div style={{ fontWeight: 'bold', width: '200px' }}>Firm Name</div>
            <div style={{ fontWeight: 'bold', width: '200px' }}>Industry / Division</div>
            <div style={{ fontWeight: 'bold', width: '200px' }}>Position</div>
            <div style={{ fontWeight: 'bold', width: '300px' }}>Email</div>
            <div style={{ fontWeight: 'bold', width: '200px' }}>Last Contact</div>
            <div style={{ fontWeight: 'bold', width: '200px' }}>Days Since Last Contact</div>
            <div style={{ fontWeight: 'bold', width: '200px' }}>Phone Number</div>
            <div style={{ fontWeight: 'bold', width: '400px' }}>Notes</div>
          </div>

          {/* content rows */}
          {contacts.map(contact => {

            // Calculate the number of days since the last reach out
            const today = Date.now();
            const lastReachOut = new Date(contact.lastReachOut).getTime();
            const daysSinceLastReachOut = Math.floor((today - lastReachOut) / (1000 * 60 * 60 * 24));
            
            return(
            <div key={contact.id} className="contacts-list-content" style={{ width: `${totalWidth}px`,  borderBottom: '1px solid #ccc' }}>
              
              {/* hidden dropdown menu to delete information */}
              <div style={{ width: '75px' }}> {/* Add a new column for the icon */}
                <div className="dropdown">
                  <span className="icon">...</span> {/* Icon */}
                  <div className="dropdown-content">
                    <a href="#">Edit</a>
                    <a href="#" className='delete-contact' onClick={() => confirmDelete(contact.id)}>Delete</a>
                  </div>
                </div>
              </div>
              <div style={{ width: '200px' }}>{contact.fullName}</div>
              <div style={{ width: '200px' }}>{contact.firmName}</div>
              <div style={{ width: '200px' }}>{contact.division}</div>
              <div style={{ width: '200px' }}>{contact.position}</div>
              <div style={{ width: '300px' }}>{contact.email}</div>
              <div style={{ width: '200px' }}>{contact.lastReachOut}</div>
              <div style={{ width: '200px' }}>
                <div className={daysSinceLastReachOut > 30 ? 'red' :
                              daysSinceLastReachOut > 14 ? 'yellow' : 'green'} style={{width: '50px', height: '30px'}}>
                    {/* text */}
                    {daysSinceLastReachOut}
                </div>
              </div>
              <div style={{ width: '200px' }}>{contact.phoneNumber}</div>
              <div style={{ width: '400px' }}>{contact.notes}</div>
            </div>
            )
          })}
        </div>
        </div> {/* end of page-container */}
      </div>


        {/* popup element */}
        {showPopup && (
        <div className="popup-overlay">
          <div className="popup">
            <div className="popup-content">
              <p>Are you sure you want to delete this contact?</p>
              <button onClick={handleConfirmDelete}>Yes</button>
              <button onClick={handleCancelDelete}>No</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactsList;