import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../../Firebase/firebase.config";


// creat authProvider
export const AuthContext = createContext(null)
const auth = getAuth(app)

const AuthProvider = ({children}) => {

     const [user, setUser] = useState(null)
     const [loding, setLoding] = useState(true)


     const createUser = (email, password) => {
          setLoding(true)
          return createUserWithEmailAndPassword(auth, email, password)
     }


     const login = (email, password) => {
          setLoding(true)
          return signInWithEmailAndPassword(auth, email, password)
     }


     const logeOute = () => {
          setLoding(true)
          return signOut(auth)
     }


     useEffect(() => {
          const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
               console.log('user in tha auth state changed', currentUser);
               setUser(currentUser)
               setLoding(false)
          })
          return () => {
               unSubscribe();
          }
     }, [])

     
     const authInfo = {
          user,
          createUser,
          logeOute,
          login,
          loding,
     }

     return (
          <AuthContext.Provider value={authInfo}>
               {children}
          </AuthContext.Provider >
     );
};

export default AuthProvider;