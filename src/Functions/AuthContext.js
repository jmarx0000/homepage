// AuthContext.js
import React, { createContext, useContext, useState, useEffect } from "react";
import { auth, provider, signInWithPopup, signOut } from "../Configuration/firebase.js";

// User data
/*
    "uid": "1234567890",
  "displayName": "John Doe",
  "email": "johndoe@example.com",
  "photoURL": "https://example.com/photo.jpg",
  "emailVerified": true,
  "phoneNumber": "+1234567890",
  "providerData": [
    {
      "providerId": "google.com",
      "uid": "1234567890",
      "displayName": "John Doe",
      "email": "johndoe@example.com",
      "photoURL": "https://example.com/photo.jpg",
      "phoneNumber": null
    }
  ]
*/

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Function to handle sign-in with Google
const signInWithGoogle = async () => {
    try {
        const result = await signInWithPopup(auth, provider);
        setUser(result.user); // Save user data
    } catch (error) {
        console.error("Google sign-in error: ", error);
    }
};

  // Function to handle sign-out
  const logOut = async () => {
    try {
      await signOut(auth);
      setUser(null);
      console.log("User signed out successfully");
    } catch (error) {
      console.error("Sign out error: ", error);
    }
  };

  useEffect(() => {
    // Check for authenticated user on initial load
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser);
      } else {
        setUser(null);
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user, signInWithGoogle, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the AuthContext
export const useAuth = () => useContext(AuthContext);
