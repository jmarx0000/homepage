// src/Functions/UserData.js
import React, { createContext, useContext, useState, useEffect } from "react";
import { db } from '../Configuration/firebase'; 
import { collection, getDocs } from 'firebase/firestore';
import { useAuth } from '../Functions/AuthContext';

// Create a context for user data
const UserDataContext = createContext();

export const UserDataProvider = ({ children }) => {
    const [contacts, setContacts] = useState([]);

    const { user } = useAuth();

    // Function to fetch contacts from the Firebase database
    const fetchContacts = async () => {
        try {
            if (user) {
                const querySnapshot = await getDocs(collection(db, `users/${user.uid}/contacts`));
                // Map the contacts to an array of objects
                const contactsData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                setContacts(contactsData);
            } else {
                console.log("No user found");
            }
        } catch (error) {
            console.error("Error fetching contacts: ", error);
        }
    };

    // Fetch contacts from the Firebase database
    useEffect(() => {
        fetchContacts();
    }, [user]);

    // Loop through all contacts and print the first name
    useEffect(() => {
        contacts.forEach(contact => {
            console.log(contact.fullName);
        });
    }, [contacts]);

    return (
        <UserDataContext.Provider value={{ contacts, setContacts, fetchContacts }}>
            {children}
        </UserDataContext.Provider>
    );
};

// Custom hook to use the UserDataContext
export const useUserData = () => useContext(UserDataContext);