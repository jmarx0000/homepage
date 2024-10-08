import React from 'react';
import { useState, useEffect } from 'react';
import { db } from '../Configuration/firebase'; 
import { collection, getDocs } from 'firebase/firestore';
import { Link } from 'react-router-dom';
import '../App.css'; // Import global styles
import './ContactsListPage.css'; // Import the CSS file
import PageHeader1 from '../Components/PageHeader1';

var cellWidth = 500;
const numCells = 6;

var totalWidth = cellWidth * numCells;


const ContactsList = () => {
  const [contacts, setContacts] = useState([]);

  // grab all contacts from firebase database
  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'contacts'));
        
        // Map the contacts to an array of objects
        const contactsData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setContacts(contactsData);
      } catch (error) {
        console.error("Error fetching contacts: ", error);
      }
    };
    fetchContacts();
  }, []);

  return (
    <div>
      <PageHeader1 />
      <div style={{ width: '200px', margin: '20px' }}>
        <Link to="/">
          <button className="button-primary">Back to Home</button>
        </Link>
      </div>

      <div className="contacts-list-container">
        <div className="contacts-list" style={{ width: `${totalWidth}px` }}>
          <div className="contacts-list-header">
            <div style={{ width: '50px' }}> </div>{/* Add a new column for the icon */}
            <div style={{ fontWeight: 'bold', width: '200px' }}>Name</div>
            <div style={{ fontWeight: 'bold', width: '200px' }}>Firm Name</div>
            <div style={{ fontWeight: 'bold', width: '200px' }}>Position</div>
            <div style={{ fontWeight: 'bold', width: '200px' }}>Last Reach Out</div>
            <div style={{ fontWeight: 'bold', width: '200px' }}>Phone Number</div>
            <div style={{ fontWeight: 'bold', width: '200px' }}>Notes</div>
          </div>
          {contacts.map(contact => (
            <div key={contact.id} className="contacts-list-content" style={{ width: `${totalWidth}px` }}>
              <div style={{ width: '50px' }}> {/* Add a new column for the icon */}
                <div className="dropdown">
                  <span className="icon">...</span> {/* Icon */}
                  <div className="dropdown-content">
                    <a href="#" className='delete-contact'>Delete</a>
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
              <div style={{ width: '200px' }}>{contact.notes}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactsList;