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
    function getbyId(id){
        return prevNote.find(note=>note._id==id)
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
