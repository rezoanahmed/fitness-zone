import { createContext } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import {auth} from '../firebase/firebase.config'

export const AuthContext = createContext("");
const ContextProvider = ({children}) => {
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
    

    const loginMethods = {googleLogin, registerUser};
    return (
        <AuthContext.Provider value={loginMethods}>
            {children}
        </AuthContext.Provider>
    );
};

export default ContextProvider;