import { useContext, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { CaptainDataContext } from "../context/CaptainContex"
export default function CaptainSignup() {
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [vehicleType, setVehicleType] = useState('')
  const [vehicleCapacity, setVehicleCapacity] = useState('')
  const [vehicleNumber, setVehicleNumber] = useState('')
  // const [captainData, setCaptainData] = useState({})
  const navigate = useNavigate();
  const {captain,setCaptain} = useContext(CaptainDataContext)
  const submitHandler = async(e) => {
    e.preventDefault()
    const captainData = {
      fullname: {
        firstname:firstname,
        lastname:lastname,
      },
      email,
      password,
      vehicle: {
        vehicleType: vehicleType,
        capacity: vehicleCapacity,
        plate: vehicleNumber,
        color:'white'
      },
    }
    try{
      const res = await fetch('http://localhost:4000/captains/register',{
      method:'POST',
      headers:{
        'Content-Type':'application/json',
      },
      body:JSON.stringify(captainData),
      });
      if(!res.ok){
        throw new Error ('Request Failed');
      }
      const data = await res.json();
      // console.log(data);
      localStorage.setItem('token',data.token);
      navigate('/captain-home');
    }catch(error){
        console.error(error.message);
    }
    

    setFirstname('')
    setLastname('')
    setEmail('')
    setPassword('')
    setVehicleType('')
    setVehicleCapacity('')
    setVehicleNumber('')
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#c2d3c2] px-4">
      <form
        onSubmit={submitHandler}
        className="w-full max-w-sm bg-white rounded-2xl p-8 space-y-6 shadow-sm"
      >
        <h1 className="text-2xl font-medium text-neutral-900 text-center">
          Captain Signup
        </h1>

        {/* Name */}
        <div className="grid grid-cols-2 gap-3">
          <div className="space-y-1">
            <label className="text-sm text-neutral-600">First name</label>
            <input
              type="text"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
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
              onChange={(e) => setLastname(e.target.value)}
              required
              placeholder="Sharma"
              className="w-full px-4 py-3 rounded-lg border border-neutral-200
              focus:outline-none focus:ring-2 focus:ring-neutral-900"
            />
          </div>
        </div>

        {/* Email */}
        <div className="space-y-1">
          <label className="text-sm text-neutral-600">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="captain@email.com"
            className="w-full px-4 py-3 rounded-lg border border-neutral-200
            focus:outline-none focus:ring-2 focus:ring-neutral-900"
          />
        </div>

        {/* Password */}
        <div className="space-y-1">
          <label className="text-sm text-neutral-600">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="••••••••"
            className="w-full px-4 py-3 rounded-lg border border-neutral-200
            focus:outline-none focus:ring-2 focus:ring-neutral-900"
          />
        </div>

        {/* Vehicle Type */}
        <div className="space-y-1">
          <label className="text-sm text-neutral-600">Vehicle type</label>
          <select
            value={vehicleType}
            onChange={(e) => setVehicleType(e.target.value)}
            required
            className="w-full px-4 py-3 rounded-lg border border-neutral-200
            focus:outline-none focus:ring-2 focus:ring-neutral-900"
          >
            <option value="">Select vehicle</option>
            <option value="auto">Auto</option>
            <option value="car">Car</option>
            <option value="motorcycle">Motorcycle</option>
          </select>
        </div>

        {/* Vehicle Capacity */}
        <div className="space-y-1">
          <label className="text-sm text-neutral-600">Vehicle capacity</label>
          <input
            type="number"
            value={vehicleCapacity}
            onChange={(e) => setVehicleCapacity(e.target.value)}
            required
            placeholder="4"
            className="w-full px-4 py-3 rounded-lg border border-neutral-200
            focus:outline-none focus:ring-2 focus:ring-neutral-900"
          />
        </div>

        {/* Vehicle Number */}
        <div className="space-y-1">
          <label className="text-sm text-neutral-600">Vehicle number</label>
          <input
            type="text"
            value={vehicleNumber}
            onChange={(e) => setVehicleNumber(e.target.value)}
            required
            placeholder="UP32 00 0000"
            className="w-full px-4 py-3 rounded-lg border border-neutral-200
            uppercase tracking-wider
            focus:outline-none focus:ring-2 focus:ring-neutral-900"
          />
        </div>

        {/* Submit */}
        <button
          className="w-full py-3 rounded-lg bg-neutral-900 text-white font-medium
          transition hover:bg-neutral-800 active:scale-95"
        >
          Create captain account
        </button>

        {/* Divider */}
        <div className="flex items-center gap-3">
          <div className="h-px flex-1 bg-neutral-200"></div>
          <span className="text-sm text-neutral-400">or</span>
          <div className="h-px flex-1 bg-neutral-200"></div>
        </div>

        {/* Login */}
        <p className="text-sm text-neutral-600 text-center">
          Already a captain?
        </p>
        <Link
          to="/captain-login"
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
