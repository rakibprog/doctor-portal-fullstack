import initilalizeFirebase from "../Pages/Login/firebase.init";
import { useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword,signOut,onAuthStateChanged,signInWithEmailAndPassword,GoogleAuthProvider,signInWithPopup,updateProfile} from "firebase/auth";
// initialize firebase App
initilalizeFirebase();

const useFirebase = () => {
 const [user,setUser] = useState({});
 const [isLoading,setIsLoading] = useState(true);
 const [authError,setAuthError] = useState('');
//firebage getAuth
 const auth = getAuth();
 const googleProvider = new GoogleAuthProvider();
//Register User
 const registerUser = (email,password, name, navigate) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            setAuthError('');
            const newUser = {email, displayName: name}
            setUser(newUser);
            // send name to firebase after creation
            updateProfile(auth.currentUser, {
              displayName: name
            }).then(() => {
              
            }).catch((error) => {
              
            });
            navigate('/');
        })
        .catch((error) => {
        setAuthError(error.message);
        // ..
        }).finally(() => setIsLoading(false));
 }
 // loginUser 
  const loginUser = (email,password,location,navigate) =>{
    setIsLoading(true);
          signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
              const destination = location?.state?.from || '/';
              navigate(destination);
              setAuthError('');
            })
            .catch((error) => {
              setAuthError(error.message);
            }).finally(() => setIsLoading(false));
  }

  // google sign in

  const signInWithGoogle = (location,navigate) =>{
    setIsLoading(true);
          signInWithPopup(auth, googleProvider)
          .then((result) => {
            const destination = location?.state?.from || '/';
              navigate(destination);
              setAuthError('');
          }).catch((error) => {
            // Handle Errors here.
            setAuthError(error.message);
          }).finally(() => setIsLoading(false));
  }

 //observe user state 

    useEffect(()=>{
     const unSubScribe = onAuthStateChanged(auth, (user) => {
        if (user) {
           setUser(user);
        } else {
         setUser({});
        }
        setIsLoading(false);
      }); 

      return () => unSubScribe;
      
    },[])

 // Log Out 

 const logOut = () => {
    const auth = getAuth();
    setIsLoading(true);
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      setAuthError(error);
    }).finally(() => setIsLoading(false));
 }

 return {
     user,
     registerUser,
     logOut,
     loginUser,
     isLoading,
     authError,
     signInWithGoogle
 } 

}

export default useFirebase;

