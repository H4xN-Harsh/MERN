import { useState } from "react"
import { Link } from "react-router-dom"
export default function UserLogin(){
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [userData,setUserData] = useState({});
    const submitHandler = (e)=>{
        e.preventDefault();
        setUserData({
            email:email,
            password:password
        })
        
        setEmail('');
        setPassword('');
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#c2d3c2] px-4">
            <form onSubmit={(e)=>{submitHandler(e)}} className="w-full max-w-sm bg-white rounded-2xl p-8 space-y-6 shadow-sm">
    
    
                <h1 className="text-2xl font-medium text-neutral-900 text-center">
                Welcome back
                </h1>

    
                <div className="space-y-1">
                <label className="text-sm text-neutral-600">Email</label>
                <input
                    type="email"
                    required
                    value={email}
                    onChange={(e)=>{setEmail(e.target.value)}}
                    placeholder="harshu@email.com"
                    className="
                      w-full px-4 py-3 rounded-lg
                      border border-neutral-200
                      text-neutral-900
                      placeholder-neutral-400
                    focus:outline-none focus:ring-2 focus:ring-neutral-900
                    "
                />
                </div>

    
                <div className="space-y-1">
                <label className="text-sm text-neutral-600">Password</label>
                <input
                    type="password"
                    required
                    value={password}
                    onChange={(e)=>{setPassword(e.target.value)}}
                    placeholder="••••••••"
                    className="
                      w-full px-4 py-3 rounded-lg
                      border border-neutral-200
                      text-neutral-900
                      placeholder-neutral-400
                      focus:outline-none focus:ring-2 focus:ring-neutral-900
                    "
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
                    Sign in as a captain
                </p>
                <Link to="/captain-login"
                    className="
                      flex justify-center
                      items-center
                      w-full py-3 rounded-lg
                      border border-neutral-300
                      text-neutral-900 font-medium
                      transition
                      hover:bg-neutral-900 hover:text-white
                    "
                >
                    Login as captain
                </Link>
                </div>

    
                <div className="text-center space-y-2">
                <p className="text-sm text-neutral-600">
                    Sign up as a rider
                </p>
                <Link
                    to="/signup"
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
                    Signup
                </Link>
             </div>

            </form>
        </div>

    )
}