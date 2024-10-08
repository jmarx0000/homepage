import React from 'react';
import { useState, useEffect } from 'react';
import { db } from '../Configuration/firebase'; 
import { collection, getDocs } from 'firebase/firestore';
import { Link } from 'react-router-dom';
import '../App.css';
import './ContactsListPage.css'; // Import the CSS file

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
      <div style={{ width: '200px', margin: '20px' }}>
        <Link to="/">
        <button className="button-primary">Back to Home</button>
        </Link>
      </div>

      <div className="contacts-list-container">
        <div className="contacts-list-header" style={{ width: `${totalWidth}px` }}>
        <div style={{ fontWeight: 'bold', width: '200px' }}>Name</div>
        <div style={{ fontWeight: 'bold', width: '200px' }}>Firm Name</div>
        <div style={{ fontWeight: 'bold', width: '200px' }}>Position</div>
        <div style={{ fontWeight: 'bold', width: '200px' }}>Last Reach Out</div>
        <div style={{ fontWeight: 'bold', width: '200px' }}>Phone Number</div>
        <div style={{ fontWeight: 'bold', width: '200px' }}>Notes</div>
        </div>
        {contacts.map(contact => (
        <div key={contact.id} className="contacts-list-content" style={{ width: `${totalWidth}px` }}>
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
    );
};

export default ContactsList;