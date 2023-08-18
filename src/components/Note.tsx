import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box'
import { InputBase, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { v4 as uuidv4 } from 'uuid';
import { TITLE_LIMIT, TEXT_LIMIT } from "../constants/constant";

interface NoteObject{
  id : number,
  title : string,
  details :string,
  color :string,
  date :string,
  
}
interface CreateNoteProps{
  addNotes:(note :NoteObject) =>void
}
const Note:React.FC<CreateNoteProps> = ({addNotes}) => {
  
  const[input, setInput] = useState<NoteObject>({
    id : uuidv4(),
    title:'',
    details:'',
    color :'',
    date: (new Date().toLocaleString()).toString()
  });
  const[error, setError] = useState<string>("");
 
  const handleSubmit=()=>{
    if(!input.title && !input.details){
      setError("All Field are Required!")
      return;
    }
    addNotes({...input, id: uuidv4()});
    setInput({
      id : uuidv4(),
      title:'',
      details:'',
      color :'',
      date: (new Date().toLocaleString()).toString()   
     })
    
    
  };



  const handleChange=( e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
     if(error) {
      setError("");
    }
      setInput({...input, [e.target.name] : e.target.value})
  };


  return (
    <Box padding="40px">
     <TextField variant="standard" placeholder='Title'
       onChange={(e)=>handleChange(e)}  name='title' value={input.title}
       inputProps={{
        maxLength: TITLE_LIMIT
    }}
     />
   <Box component="span">{input.title.length}/{TITLE_LIMIT}</Box>
     <TextField variant="standard" placeholder='Details' style={{marginLeft:20}}
      onChange={(e)=>handleChange(e)}  name='details' value={input.details}
     />
   <Box component="span">{input.details.length}/{TEXT_LIMIT}</Box>
     <InputBase defaultValue={'blue'}
        type="color"
         style={{width:"40px",margin:"0px 20px"}} 
         onChange={(e)=>handleChange(e)}  name='color' 
         inputProps={{
          maxLength: TEXT_LIMIT
      }}
     />
    <Button variant="contained"
      onClick={handleSubmit}
    >Create</Button>
    {
      error && <Typography style={{color:"red"}}>{error}</Typography>
    }
    </Box>
  )
}

export default Note
