import { useContext, useEffect } from "react"


import { useNavigate } from "react-router-dom"



export default function UserProtectWrapper({children}){
    const token = localStorage.getItem('token');
    const navigate = useNavigate();
    console.log(token);
    useEffect(()=>{
        if(!token){
            navigate('/login');
            return null;
        }
    },[token])
    return(
        <>{children}</>
    )
}