import React from "react";
import { setConstantValue } from "typescript";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props) {

    const [note, setNote] = React.useState({
        title:"",
        content:""
    });

    const [isExpand, setExpand] = React.useState(false);

    function handlechange(event) {
        const {name,value} = event.target;

        setNote(prevNote => {
            return {
                ...prevNote, [name]:value
            };
        });
        
    }

    function submitNote(event)
    {   
        props.toAdd(note);
        setNote({title:"",content:""});    
        event.preventDefault();
    }

    function expand()
    {
      setExpand(true);
    }
  return (
    <div>
      <form className="create-note">
      { isExpand ? <input name="title" onChange={handlechange} value={note.title} placeholder="Title" /> : null}
      <textarea onClick={expand} name="content" onChange={handlechange} value={note.content} placeholder="Take a note..." srows={isExpand ? "3" : "1"}/>
        
        <Zoom in={isExpand ? true : false}><Fab onClick={submitNote}><AddIcon /></Fab></Zoom>
      </form>
    </div>
  );
}

export default CreateArea;