export default function LocationSearchPanel({vehiclePanel,setPanel,setVehiclePanel}){
    
    const location = [
        "vikalp khand "," malhore road "," hanimen chowraha"
    ]


    return(
        <div className="flex flex-col gap-4 ">

            {
                location.map(function(e , idx){
                   return  <div key={idx} onClick={()=>{
                    setVehiclePanel(true)
                    setPanel(false)
                   }} className="flex gap-3 items-center justify-start active:border-2 bg-gray-300 h-13 p-2 rounded-2xl w-full ">
                        <h2 className="text-xl"><i className="ri-map-pin-line"></i></h2>
                        <h4 className="font-medium">226028 , gomtinagar Lucknow <p className="text-sm text-gray-500">{e}</p></h4>
                
                    </div>
                })
            }


           
        </div>
    )
}