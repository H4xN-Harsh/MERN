import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";


export const PrevContext= createContext();


function PrevNoteContextProvider({children}){
    const [prevNote,setPrevNote] = useState([]);
    
    useEffect(()=>{
        const fetchNotes=async()=>{
            const res = await fetch('http://localhost:3000/notes');
            const data = await res.json();
            console.log(data);
            setPrevNote(data);
    }
    
        fetchNotes();
    },[])
    async function getbyId(id){
        // Check if note exists in state
    let note = prevNote.find((note) => note._id === id);
    if (note) return note;

    // If not, fetch from backend
    try {
      const res = await fetch(`http://localhost:3000/notes/${id}`);
      if (!res.ok) throw new Error("Note not found");
      note = await res.json();
      return note;
    } catch (error) {
      console.error("Error fetching note by id:", error);
      return null;
    }
    }
    const addNotes = async({ heading, content })=>{
        
        
        const res = await fetch('http://localhost:3000/notes',{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                heading,content
            }),

        });
        

        
       const data = await res.json();
       setPrevNote(prev=>[data,...prev]);
       return data;

    }


    return (
        <PrevContext.Provider value={{prevNote,getbyId,addNotes}}>{children}</PrevContext.Provider>
    )

}


export default PrevNoteContextProvider;
