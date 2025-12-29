import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"


export default function Card(){
    const {theme} = useContext(ThemeContext)
    return(
        <div className="card" style={{
            background:theme=="light"?"#fff":"#222",
            color:theme==="light"? "#000":"#fff",
            padding:"20px",
            marginTop:"20px"
        }}>
            current Theme : {theme}
        </div>
    )
}