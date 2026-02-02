import { useEffect } from "react";
import { useNavigate } from "react-router-dom";



function UserLogout(){
    const token = localStorage.getItem('token');
    const navigate = useNavigate();
    useEffect(()=>{
        const logout = async()=>{
            try{
                const res = await fetch('http://localhost:4000/users/logout',{
                    method:'GET',
                    headers:{
                        Authorization:`Bearer ${token}`,
                    },
                });
                if(!res.ok){
                    throw new Error('failed to logout')
                }
                else{
                    localStorage.removeItem('token');
                    navigate('/login')
                }
            }catch(error){
                console.log(error);
            }
        }
        logout();
    },[navigate,token])
    return (
        <div>user logout</div>
    )
}
export default UserLogout