import { createContext, useEffect, useState } from "react";
import { FacebookAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";
import PropTypes from 'prop-types';

export const AuthContext = createContext(null)
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)


    const googleProvider = new GoogleAuthProvider();
    const facebookProvider = new FacebookAuthProvider()


    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        return signOut(auth)
    }

    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider)
    }

    const facebookLogin = () => {
        return signInWithPopup(auth, facebookProvider)
    }


    useEffect(() => {
       const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('user in the on state change', currentUser);
            setUser(currentUser)
        });
        return () => {
            unsubscribe()
        }
    },[])

    const authInfo = {
        user,
        createUser,
        loginUser,
        logOut,
        setUser,
        googleLogin,
        facebookLogin,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node
}

export default AuthProvider;