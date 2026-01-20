import { useContext } from "react";
import { PrevContext } from "../Contexts/PrevContext";

function NoteCard({note}){
    const{getbyId} = useContext(PrevContext);
    if (!note) return null; 
    return(
        <div className="flex w-[140px] h-[200px] items-center justify-center flex-col bg-fuchsia-600 rounded-xl"> 
            
            <div>
                <h1 className="font-bold text-xl">{note.heading}</h1>
            </div>
            <button onClick={()=>{getbyId(note.id)}} className="mt-6 bg-blue-700 p-2 rounded-2xl hover:scale-3d">read more</button>
        </div>
    )
}
export default NoteCard;