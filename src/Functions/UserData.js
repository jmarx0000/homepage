// src/Functions/UserData.js
import React, { createContext, useContext, useState, useEffect } from "react";
import { db } from '../Configuration/firebase'; 
import { collection, getDocs } from 'firebase/firestore';

// Create a context for user data
const UserDataContext = createContext();

export const UserDataProvider = ({ children }) => {
    const [contacts, setContacts] = useState([]);

    // Fetch contacts from the Firebase database
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

    // Loop through all contacts and print the first name
    useEffect(() => {
        contacts.forEach(contact => {
            console.log(contact.fullName);
        });
    }, [contacts]);

    return (
        <UserDataContext.Provider value={{ contacts }}>
            {children}
        </UserDataContext.Provider>
    );
};

// Custom hook to use the UserDataContext
export const useUserData = () => useContext(UserDataContext);