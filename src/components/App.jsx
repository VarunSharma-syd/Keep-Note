import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "./keepnote";
import CreateArea from "./CreateArea";

function Notes(note){
    return(<Note 
        key={note.key}
        title={note.title}
        content={note.content}
        />
    );
}

function App(){

    const [notes, setNotes] = React.useState([]);

    function addNote(newNote){

        setNotes(prevNotes => {
            return ([...prevNotes, newNote]);
        });
    }

    function deleteNote(id) {
        
        setNotes(prevNotes => {
            return prevNotes.filter((noteitem,index) => {
                return index!=id;
            });
        });
    }

    return (<div>
        <Header/>
        <CreateArea toAdd={addNote} />
        {notes.map((noteitem,index) =>{
            return <Note key={index} id={index} onDelete={deleteNote} title={noteitem.title} content={noteitem.content} />
        })}
        {/*{notes.map(Notes)}
    <Footer />*/}
        </div>
        );

}
    
export default App;