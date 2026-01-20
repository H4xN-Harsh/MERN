import AddNote from "../components/AddNote";
import PrevNote from "../components/NoteCard";

function Home(){
    return(
        <div>
            <div>
                <h1>Note Taking App </h1>
            </div>
            <div>
                <AddNote/>
            </div>
            <div>
                <PrevNote/>
            </div>
        </div>
    )
};
export default Home;