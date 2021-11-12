import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeFirebase from "../components/Login/Firebase/firebase.init";

initializeFirebase();


const useFirebase = () => {
  const [user, setUser] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const[authError, setAuthError] = useState('')
  const auth = getAuth();
  
  const registerUser = (email, password, name, history) => {
    setIsLoading(true)
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      setAuthError('');
      const newUser = {email, displayName:name};

      setUser(newUser)

      // Send name to firebase 
      updateProfile(auth.currentUser, {
        displayName: name
      }).then(() => {
       
      }).catch((error) => {
      
      });

      history.replace('/')
    })
    .catch((error) => {
      
      setAuthError(error.message)
      // ..
    })
    .finally(()=> setIsLoading(false))
  }

  const loginUser = (email, password, location, history) => {
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            const destination = location?.state?.from || '/'
            history.replace(destination)
            setAuthError('')
            
          })
          .catch((error) => {
            setAuthError(error.message)
          })
          .finally(()=> setIsLoading(false))
  }


  // Observe user state
useEffect(()=>{
  const unsubscribed = onAuthStateChanged(auth, (user) => {
        if (user) {
        
          
          setUser(user)
        
        } else {
          setUser({})
        }
        setIsLoading(false)
  });

  return () => unsubscribed;
},[auth])



 const logout = () => {
  signOut(auth).then(() => {
    // Sign-out successful.
  }).catch((error) => {
    // An error happened.
  })
  .finally(()=> setIsLoading(false))
 }


  return {
    user,
    isLoading,
    authError,
    registerUser,
    loginUser,
    logout,

  }
  
};

export default useFirebase;