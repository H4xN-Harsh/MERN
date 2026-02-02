export default function Home(){
    return(
        <div className="h-screen relative">
            <div className="h-screen w-screen left-5 top-5 bg-amber-400">
                {/* map */}
            </div>
            <div className="bg-[#c2d3c2] absolute bottom-0 w-full p-5 ">
                <div>
                    <h4 className="text-2xl font-semibold">Find trip</h4>
                    <form className="mt-2">
                        <input className="bg-white px-8 py-2 text-lg rounded-2xl w-full mb-2" type="text"   placeholder="add a pick-up location" />
                        <input className="bg-white px-8 py-2 text-lg  rounded-2xl w-full" type="text"   placeholder="enter your destination" />
                    </form>
                </div>
            </div>
        </div>
    )
}