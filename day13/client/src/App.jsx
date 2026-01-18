import { useEffect } from "react";
import { useState } from "react";

function App(){
  const [names,setName] = useState([]);
  const [newName,setNewName] = useState("");
  useEffect(()=>{
    const fetchData = async()=>{
      const res = await fetch('http://localhost:3000');
      const data = await res.json();
      console.log(data);
      setName(data.names);
    }
    fetchData();
  },[])
  const add =  async (e)=>{
    e.preventDefault();
    try{
      const res = await fetch('http://localhost:3000/api/names',{
        method:'post',
        headers:{
          'content-type':'application/json'
        },
        body:JSON.stringify({name:newName})
      })
      if(!res.ok){
        throw new Error('failed to add todo');
      }
      const data = await res.json();
      setName([...names,data]);
      setNewName('')
    }catch(error){
      console.log('error',error);
    }
  }
  return(
    <div>
      <div>
        {names.map(i=>(<p>{i.name}</p>))}
      </div>
      <div>
        <input type="text" placeholder="enter the name: " onChange={(e)=>{setNewName(e.target.value)}} value={newName} />
        <button onClick={add}>Add</button>
      </div>
    </div>
  )
}

export default App;
