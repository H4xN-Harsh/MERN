import { useContext } from "react";
import { PrevContext } from "../Contexts/PrevContext";
import NoteCard from "../components/NoteCard";
function PrevPage(){
    const {prevNote,getbyId} = useContext(PrevContext)
    if (!Array.isArray(prevNote)) return null;
    return (
        <div className="flex gap-2 m-2">
            {
                prevNote.map((note)=>{
                    console.log(note)
                    return <NoteCard key={note._id}  note={note}/>
                }
                        
                    
                )
            }
        </div>
    )
}
export default PrevPage;
