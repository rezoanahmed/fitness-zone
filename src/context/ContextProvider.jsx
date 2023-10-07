import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import {auth} from '../firebase/firebase.config'

export const AuthContext = createContext("");
const ContextProvider = ({children}) => {
    const [user, setUser] = useState('');
    // sign in with google
    // const testNumber = 0;
    const googleLogin = () =>{
        const provider = new GoogleAuthProvider();
        return signInWithPopup(auth, provider)
        
    }
    // register with email and password
    const registerUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password);
    }
    // login with email and password
    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }
    // checking if the user signed in or not
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            console.log(currentUser);
            setUser(currentUser);
        })
        return ()=>{
            unsubscribe();
        }
    },[])
    // log out
    const logOut = ()=>{
        return signOut(auth);
    }
    

    const loginMethods = {user, googleLogin, registerUser, loginUser, logOut};
    return (
        <AuthContext.Provider value={loginMethods}>
            {children}
        </AuthContext.Provider>
    );
};

export default ContextProvider;