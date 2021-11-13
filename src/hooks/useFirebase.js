import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeFirebase from "../components/Login/Firebase/firebase.init";

initializeFirebase();


const useFirebase = () => {
  const [user, setUser] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const[authError, setAuthError] = useState('')
  const [admin, setAdmin] = useState(false)
  const auth = getAuth();
  
  const registerUser = (email, password, name, history) => {
    setIsLoading(true)
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      setAuthError('');
      const newUser = {email, displayName:name};

      setUser(newUser)

      // save user info in database

      saveUserInfo(email, name)


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


useEffect(()=>{
  fetch(`http://localhost:5000/users/${user?.email}`)
  .then(response => response.json())
  .then(data => setAdmin(data.admin))

},[user.email])
 const logout = () => {
  signOut(auth).then(() => {
    // Sign-out successful.
  }).catch((error) => {
    // An error happened.
  })
  .finally(()=> setIsLoading(false))
 }
 const saveUserInfo = (email, displayName) => {
  const user ={email, displayName};
  fetch('http://localhost:5000/users', {
    method: 'POST',
    headers: { 
      'content-type' : 'application/json'
    },
    body: JSON.stringify(user)
  })
  .then()
 }


  return {
    user,
    admin,
    isLoading,
    authError,
    registerUser,
    loginUser,
    logout,

  }
  
};

export default useFirebase;