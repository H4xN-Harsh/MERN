import { useRef, useState } from "react";
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'
import 'remixicon/fonts/remixicon.css';
import LocationSearchPanel from "../components/LocationSearchPanel";
import RentAcab from "../components/RentAcab";
export default function Home(){
    const [pickup,setPickup] = useState("");
    const [destination,setDestination] = useState('');
    const [panelOpen, setPanel]=useState(false);
    const panelRef = useRef(null);
    const panelCloseRef=useRef(null);
    const [vehiclePanel , setVehiclePanel]=useState(false);
    const vehiclePanelRef = useRef(null);
    const submitHandler=(e)=>{
        e.preventDefault();
    }
    useGSAP(
        () => {
            if (panelOpen) {
            gsap.to(panelRef.current, {
                height: "70%",
                padding:20
            });
            gsap.to(panelCloseRef.current,{
                opacity:1
            })
            } else {
            gsap.to(panelRef.current, {
                height: "0%",
                padding:0
            });
            gsap.to(panelCloseRef.current,{
                opacity:0
            })
            }
        },
        {
            dependencies: [panelOpen],
            scope: panelRef,
        }
    );
    useGSAP(
        ()=>{
            if(vehiclePanel){
                gsap.to(vehiclePanelRef.current,{
                    transform:'translateY(0)'
                })
            }else{
                gsap.to(vehiclePanelRef.current,{
                    transform:'translateY(100%)'
                })
            }
        },{
            dependencies:[vehiclePanel],
            scope:vehiclePanelRef
        }
    )

    return(
        <div className="h-screen relative overflow-hidden">
            <div className="h-screen w-screen left-5 top-5 bg-amber-400">
                {/* map */}
            </div>
            <div  className="bg-white flex flex-col justify-end h-screen absolute top-0 w-full  ">
                <div  className="h-[30%] bg-[#c2d3c2] p-5 relative ">
                    <h5 ref={panelCloseRef} onClick={()=>{
                        setPanel(false)
                    }} className="absolute top-6 opacity-0 right-6 text-2xl cursor-pointer">
                        <i className="ri-arrow-down-wide-line"></i>
                    </h5>
                    <h4 className="text-2xl font-semibold">Find trip</h4>
                    <form onSubmit={(e)=>{submitHandler(e)}} className="mt-2 mb-3">
                        <div className="line absolute h-16 w-1 top-[40%] left-10 bg-gray-600 rounded-full"></div>
                        <input onClick={()=>{
                            setPanel(true)
                        }} value={pickup} onChange={(e)=>{setPickup(e.target.value)}}
                        className="bg-white px-12 py-2 text-lg rounded-2xl w-full mb-2" type="text"   placeholder="add a pick-up location" />
                        <input  onClick={()=>{
                            setPanel(true)
                        }}  value={destination} onChange={(e)=>{setDestination(e.target.value)}}
                         className="bg-white px-12 py-2 text-lg  rounded-2xl w-full" type="text"   placeholder="enter your destination" />
                    </form>
                </div>
                <div ref={panelRef} className=" h-0 bg-gray-200  ">
                    <LocationSearchPanel  setPanel={setPanel}  setVehiclePanel={setVehiclePanel}/>

                </div>
            </div>
            <div ref={vehiclePanelRef} className="fixed w-full  z-10 bottom-0 translate-y-full px-3 py-5">
                <div className="flex justify-between ">
                    <h3 className="text-2xl font-bold ">Choose a Vehicle</h3>
                <h5 ref={panelCloseRef} onClick={()=>{
                        setVehiclePanel(false)
                    }} className="p-3 text-center absolute top-0 right-3 text-2xl cursor-pointer">
                        <i className="ri-arrow-down-wide-line"></i>
                    </h5>
                </div>
                <div className="flex items-center mb-2 shadow-2xl bg-white justify-between p-3 w-full border-2 border-black rounded-xl">
                    <img className="h-20" src="https://cn-geo1.uber.com/image-proc/crop/resizecrop/udam/format=auto/width=552/height=368/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy80MmViODVjMy1lMmRjLTRlOTUtYTcwZC0yMmVlNGYwODAxNWYucG5n" alt="" />
                    <div className=" w-1/2">
                        <h4 className="font-medium text-xl">Car <span><i class="ri-user-line"></i></span>4</h4>
                        <h5 className="font-medium text-sm">2 mins away</h5>
                        <p className="font-medium text-xs ">Affordable, compact rides</p>
                    </div>
                    <h2 className="text-xl font-semibold">Rs 220.00</h2>
                </div>
                <div className="flex items-center mb-2 shadow-2xl bg-white justify-between p-3 w-full border-black border-2 rounded-xl">
                    <img className="h-20" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvsXFgDqA4hgTAoCQ1cbjnygbPD3UPsBo41A&s" alt="" />
                    <div className=" w-1/2">
                        <h4 className="font-medium text-xl">Moto <span><i class="ri-user-line"></i></span>1</h4>
                        <h5 className="font-medium text-sm">3 mins away</h5>
                        <p className="font-medium text-xs ">Affordable, Moto rides</p>
                    </div>
                    <h2 className="text-xl font-semibold">Rs 149.00</h2>
                </div>
                <div className="flex items-center mb-2 shadow-2xl bg-white justify-between p-3 w-full border-black border-2 rounded-xl">
                    <img className="h-20" src="https://cn-geo1.uber.com/image-proc/crop/resizecrop/udam/format=auto/width=552/height=368/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy8xZGRiOGM1Ni0wMjA0LTRjZTQtODFjZS01NmExMWEwN2ZlOTgucG5n" alt="" />
                    <div className=" w-1/2">
                        <h4 className="font-medium text-xl">Auto <span><i class="ri-user-line"></i></span>2</h4>
                        <h5 className="font-medium text-sm">5 mins away</h5>
                        <p className="font-medium text-xs ">Affordable, Auto rides</p>
                    </div>
                    <h2 className="text-xl font-semibold">Rs 167.00</h2>
                </div>
            </div>
        </div>
    )
}