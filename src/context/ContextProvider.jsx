import { createContext } from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import {auth} from '../firebase/firebase.config'

export const AuthContext = createContext("");
const ContextProvider = ({children}) => {
    // sign in with google
    const googleLogin = () =>{
        const provider = new GoogleAuthProvider();
        return signInWithPopup(auth, provider)
        
    }
    const testNumber = 0;
    const loginMethods = {googleLogin, testNumber};
    return (
        <AuthContext.Provider value={loginMethods}>
            {children}
        </AuthContext.Provider>
    );
};

export default ContextProvider;