import React, { createContext, useContext } from 'react'
import { useState, useEffect } from 'react';
import { auth } from '../firebase';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    GoogleAuthProvider,
    signInWithPopup
} from 'firebase/auth';

const userAuthcontext = createContext();

export function UserAuthContextProvider({ children }) {
    const [stateuser, setstateuser] = useState("")


    function signUp(email, password) {
        console.log(email)
        return createUserWithEmailAndPassword(auth, email, password);
    }
    function logIn(email, password) {
        console.log("login-email-Auntentication :" + email)
        return signInWithEmailAndPassword(auth, email, password);
    }
    function logOut() {
        console.log("logout-Auntentication")
        return signOut(auth)
    }
    function signInhgoogle() {
        const googleAuthProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleAuthProvider);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
            console.log("currentUser:", currentuser);
            setstateuser(currentuser);
        });
        return () => {
            unsubscribe();
        }
    }, [])


    return <userAuthcontext.Provider value={{ stateuser, signUp, logIn, logOut, signInhgoogle }}>
        {children}
    </userAuthcontext.Provider>
}

export function useUserAuth() {
    return useContext(userAuthcontext);
}