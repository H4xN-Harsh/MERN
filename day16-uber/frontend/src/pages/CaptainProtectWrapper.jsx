import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CaptainDataContext } from "../context/CaptainContex";



export default function CaptainProtectWrapper({children}){
    const token = localStorage.get('token')
    const navigate = useNavigate();
    const {captian,setCaptain} = useContext(CaptainDataContext);
    const [isLoading,setIsLoading] = useState(true)
    console.log(token);
    useEffect(()=>{
        if(!token){
            navigate('/captain-login')
            return null;
        }
    },[token])
    async function getData() {
        try{
            const res = await fetch('http://localhost:4000/captains/profile',{
                method:'GET',headers:{
                    Authorization:`Bearer ${token}`,
                }
            });
            if(!res.ok){
                throw new Error('failed to load profile ')

            }
            
            const data = await res.json();
            setCaptain(data.captain);
            setIsLoading(false)
            
        }catch(err){
            console.log(err.message);
            localStorage.removeItem('token')
            navigate('/captain-login')
            
        }
    }
    getData();
    if(isLoading)return(<div>Loading...</div>)

    
    return (
        <>{children}</>
    )
    

}