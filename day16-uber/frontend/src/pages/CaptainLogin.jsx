import { useContext, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { CaptainDataContext } from "../context/CaptainContex";
export default function CaptainLogin(){
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [captainData,setCaptainData] = useState({});
    const navigate = useNavigate();
    const {captain, setCaptain}=useContext(CaptainDataContext)
    const submitHandler = async(e)=>{
        e.preventDefault();
        const captainData = {
            email:email,
            password:password
        }
        try{
            const res = await fetch('http://localhost:4000/captains/login',{
                method:"POST",
                headers:{
                    "Content-Type": "application/json",
                },
                body:JSON.stringify(captainData),
            })
            if(!res.ok){
                throw new Error('request failed')
            }
            const data = await res.json();
            setCaptain(data.captain);
            localStorage.setItem('token',data.token);
            navigate('/captain-home')
        }catch(error){
            console.error(error.massege);
        }
        setEmail('');
        setPassword('');
    }
    return (
        <div className="min-h-screen flex items-center
        justify-center bg-[#c2d3c2] px-4">
            <form onSubmit={(e)=>{submitHandler(e)}}
            className="w-full max-w-sm bg-white rounded-2xl
            p-8 space-y-6 shadow-sm"
            >
                <h1
                className="text-2xl font-medium text-center"
                >Captain Login</h1>
                <div className="space-y-1">
                    <label className="text-sm text-neutral-600">Email</label>
                    <input type="email"
                    placeholder="harshu@email.com"
                    required
                    value={email}
                    onChange={(e)=>{setEmail(e.target.value)}}
                    className="
                    w-full px-4 py-3 rounded-lg
                    border border-neutral-900 placeholder-neutral-400
                    focus:outline-none focus:ring-2
                    focus:ring-neutral-900"
                     />
                </div>
                <div className="space-y-1">
                    <label className="text-sm text-neutral-600">Password</label>
                    <input type="password"
                    placeholder="password"
                    required
                    value={password}
                    onChange={(e)=>{setPassword(e.target.value)}}
                    className="
                    w-full px-4 py-3 rounded-lg
                    border border-neutral-900 placeholder-neutral-400
                    focus:outline-none focus:ring-2
                    focus:ring-neutral-900"
                     />
                </div>
                <button
                className="
                  w-full py-3 rounded-lg
                  bg-neutral-900 text-white
                  font-medium
                  transition
                  hover:bg-neutral-800
                  active:scale-95
                "
                >
                Login
                </button>
                <div className="flex items-center gap-3">
                <div className="h-px flex-1 bg-neutral-200"></div>
                <span className="text-sm text-neutral-400">or</span>
                <div className="h-px flex-1 bg-neutral-200"></div>
                </div>
                <div className="text-center space-y-2">
                <p className="text-sm text-neutral-600">
                    Register as a captain
                </p>
                <Link to="/captain-signup"
                    className="
                      flex justify-center
                      items-center
                      w-full py-3 rounded-lg
                      border border-neutral-900
                      text-neutral-900 font-medium
                      transition
                      hover:bg-neutral-900 hover:text-white
                    "
                >
                    Captain-Signup
                </Link>
                </div>
                <div className="text-center space-y-2">
                {/* <p className="text-sm text-neutral-600">
                    Back to userLogin Page
                </p> */}
                <Link
                    to="/login"
                    className="
                        flex justify-center
                      items-center
                      w-full py-3 rounded-lg
                      border border-neutral-300
                      text-neutral-900 font-medium
                      transition
                      hover:bg-neutral-100
                    "
                >
                    Back
                </Link>
                </div>
            </form>
        </div>
    )
}