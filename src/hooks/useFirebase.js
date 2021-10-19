import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import swal from 'sweetalert';
import initializeAuthentication from '../config/firebase';

//initialize firebase  authentication
initializeAuthentication()

const useFirebase = () => {
    const [user, setUser] = useState({});
    const auth = getAuth();
    const history = useHistory();
    const [isLoading, setIsLoading] = useState(true);

    //on State Change 
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            }else{
                setUser({})
            }
            setIsLoading(false);
        })
        return () => unsubscribed;

    }, [auth])


    //sign up functionality
    const signUpUser = async (email, password, name, image) => {
        setIsLoading(true);
        await createUserWithEmailAndPassword(auth, email, password)
            .then((res) => {
                setUser(res.user)
                updateProfile(auth.currentUser, {
                    displayName: name,
                    photoURL: image
                }).then(() => {                    
                    swal("Good job!", "Account has been created!", "success");
                    history.push('/');
                    window.scrollTo(0, 100);
                })

            }).catch(err => swal("Something went wrong!", `${err.message}`, "error")).finally(() => setIsLoading(false));
    }

    //sign in functionality
    const signInUser = async (email, password) => {
        setIsLoading(true);
        await signInWithEmailAndPassword(auth, email, password)
            .then(res => {
                setUser(res.user);
                swal("Sign in Successful!", "Welcome back !", "info")
                history.push('/');
                                    window.scrollTo(0, 100);

            })
            .catch(err => swal("Something went wrong!", `${err.message}`, "error")).finally(() => setIsLoading(false));
    }

    //google sign in 
    const signInWithGoogle = async () => {
        setIsLoading(true);
        const googleProvider = new GoogleAuthProvider();
        await signInWithPopup(auth, googleProvider)
            .then(res => {
                setUser(res.user);
                swal("Good job!", "Account has been created!", "success");
                history.push('/');
            }).catch(err => console.log(err.message)).finally(() => setIsLoading(false));
    }


    // sign out 
    const signOutUser = async () => {
        setIsLoading(true);
        await signOut(auth).then(() => {
            setUser({});
            swal("Logout Successful!", "You are logged out!", "success");
            history.push('/signin')
        }).catch((err) => {
            swal("Something went wrong!", `${err.message}`, "error")
        }).finally(() => setIsLoading(false));

    }


    return {
        user,
        signInUser,
        signUpUser,
        signOutUser,
        signInWithGoogle,
        isLoading
    }
}

export default useFirebase
