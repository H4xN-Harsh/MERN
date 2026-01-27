import { useState } from "react";
import { Link } from "react-router-dom"
export default function UserSignup(){
    const [firstname,setFirstname]=useState('');
    const [lastname,setLastname]=useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [userData,setUserData] = useState({});
    
    const submitHandler = (e)=>{
        e.preventDefault();
        setUserData({
            fullname:{
                firstname:firstname,
                lastname:lastname
            },
            email:email,
            password:password
        })
        // console.log(userData)
        setLastname('');
        setFirstname('');
        setEmail('');
        setPassword('');
    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-[#c2d3c2] px-4">
      <form
        onSubmit={(e)=>{submitHandler(e)}}
        className="w-full max-w-sm bg-white rounded-2xl p-8 space-y-6 shadow-sm"
      >
        <h1 className="text-2xl font-medium text-neutral-900 text-center">
          Create your account
        </h1>

        {/* Name Fields */}
        <div className="grid grid-cols-2 gap-3">
          <div className="space-y-1">
            <label className="text-sm text-neutral-600">First name</label>
            <input
              type="text"
              value={firstname}
              onChange={(e)=>{setFirstname(e.target.value)}}
              required
              
              placeholder="Harsh"
              className="w-full px-4 py-3 rounded-lg border border-neutral-200
              focus:outline-none focus:ring-2 focus:ring-neutral-900"
            />
          </div>

          <div className="space-y-1">
            <label className="text-sm text-neutral-600">Last name</label>
            <input
              type="text"
              value={lastname}
              onChange={(e)=>{setLastname(e.target.value)}}
              required
              
              placeholder="baby"
              className="w-full px-4 py-3 rounded-lg border border-neutral-200
              focus:outline-none focus:ring-2 focus:ring-neutral-900"
            />
          </div>
        </div>

        
        <div className="space-y-1">
          <label className="text-sm text-neutral-600">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e)=>{setEmail(e.target.value)}}
            required
            
            placeholder="harshu@email.com"
            className="w-full px-4 py-3 rounded-lg border border-neutral-200
            focus:outline-none focus:ring-2 focus:ring-neutral-900"
          />
        </div>

        
        <div className="space-y-1">
          <label className="text-sm text-neutral-600">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e)=>{setPassword(e.target.value)}}
            required
            
            placeholder="••••••••"
            className="w-full px-4 py-3 rounded-lg border border-neutral-200
            focus:outline-none focus:ring-2 focus:ring-neutral-900"
          />
        </div>

        
        <button
          className="w-full py-3 rounded-lg bg-neutral-900 text-white font-medium
          transition hover:bg-neutral-800 active:scale-95"
        >
          Create account
        </button>

        
        <div className="flex items-center gap-3">
          <div className="h-px flex-1 bg-neutral-200"></div>
          <span className="text-sm text-neutral-400">or</span>
          <div className="h-px flex-1 bg-neutral-200"></div>
        </div>

        
        <p className="text-sm text-neutral-600 text-center">
          Already have an account?
        </p>
        <Link
          to="/login"
          className="flex justify-center items-center w-full py-3 rounded-lg
          border border-neutral-300 text-neutral-900 font-medium
          transition hover:bg-neutral-900 hover:text-white"
        >
          Login
        </Link>
      </form>
    </div>
    )
}