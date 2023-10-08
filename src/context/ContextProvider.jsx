import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import {auth} from '../firebase/firebase.config'
import PropTypes from 'prop-types';
export const AuthContext = createContext("");
const ContextProvider = ({children}) => {
    const [user, setUser] = useState(null);
    // sign in with google
    // const testNumber = 0;
    // loading
    const [loading, setLoading] = useState(true);
    const googleLogin = () =>{
        setLoading(true);
        const provider = new GoogleAuthProvider();
        return signInWithPopup(auth, provider)
        
    }
    // register with email and password
    const registerUser = async (email, password) =>{
        setLoading(true);
        await createUserWithEmailAndPassword(auth, email, password);
        await logOut();
    }
    // login with email and password
    const loginUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    // checking if the user signed in or not
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            console.log(currentUser);
            setUser(currentUser);
            setLoading(false);
        })
        return ()=>{
            unsubscribe();
        }
    },[])
    // log out
    const logOut = ()=>{
        return signOut(auth);
    }
    

    const loginMethods = {user, googleLogin, registerUser, loginUser, logOut, loading};
    return (
        <AuthContext.Provider value={loginMethods}>
            {children}
        </AuthContext.Provider>
    );
};
ContextProvider.propTypes={
    children: PropTypes.object.isRequired
}

export default ContextProvider;