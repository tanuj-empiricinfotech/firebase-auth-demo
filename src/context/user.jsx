import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";

const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
    const [user,setUser] =useState(null)
    useEffect(() => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          const uid = user.uid;
          console.log('user uid======',uid);
          setUser(user)
        }else{
          console.log('user logged out');

        }
      });
    }, [user])
    
  return <UserContext.Provider value={{user,setUser}}>{children}</UserContext.Provider>
};


export const useUser =()=>{
    return useContext(UserContext)
}