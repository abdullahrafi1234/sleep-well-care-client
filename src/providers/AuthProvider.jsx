import { createContext, useEffect, useState } from "react";
import { FacebookAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";
import PropTypes from 'prop-types';

export const AuthContext = createContext(null)
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const googleProvider = new GoogleAuthProvider();
    const facebookProvider = new FacebookAuthProvider()


    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const facebookLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, facebookProvider)
    }


    useEffect(() => {
       const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('user in the on state change', currentUser);
            setUser(currentUser)
            setLoading(false)
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
        loading
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