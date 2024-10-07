import React from 'react';
import { useState, useEffect } from 'react';
import ContactTile from '../Components/ContactTile';
import { db } from '../Configuration/firebase'; 
import { collection, getDocs } from 'firebase/firestore';
import { Link } from 'react-router-dom';
import '../App.css';

const ContactsList = () => {
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        const fetchContacts = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, 'contacts'));
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
      
      <div className="contacts-list-page">
        <table>
        <thead>
          <tr>
          <th>Full Name</th>
          <th>Firm Name</th>
          <th>Position</th>
          <th>Last Reach Out</th>
          <th>Email</th>
          <th>Phone Number</th>
          <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map(contact => (
          <tr key={contact.id}>
            <td>{contact.fullName}</td>
            <td>{contact.firmName}</td>
            <td>{contact.position}</td>
            <td>{contact.lastReachOut}</td>
            <td>{contact.email}</td>
            <td>{contact.phoneNumber}</td>
            <td>{contact.notes}</td>
          </tr>
          ))}
        </tbody>
        </table>
      </div>
      </div>
    );
};

export default ContactsList;

