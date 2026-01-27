import { createContext, useState } from "react";

export const userDataContext=createContext();

export default function UserContext({children}){
    const [user,setUser] = useState({
        email:'',
        fullname:{
            firstname:'',
            lastname:'',
        }
    })
    return(
        <userDataContext.Provider value={[user,setUser]}>{children}</userDataContext.Provider>
    )
}

