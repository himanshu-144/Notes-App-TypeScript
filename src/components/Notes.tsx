import React from 'react'
import { Box, Card, CardContent, Typography } from '@mui/material'
import { Button} from '@mui/material'

interface NoteObject{
  id : number,
  title : string,
  details :string,
  color :string,
  date :string,
  
}
interface NotesObject{
   notes : NoteObject[],
   deleteNote: (id: number) => void

}

const Notes:React.FC<NotesObject>= ({notes,deleteNote}) => {
  return (
    <Box padding="10px 30px"  margin="0px 20px">
       <Typography>Notes</Typography>
        <Box>
          {notes.map((note)=>{
            return(
               <Card style={{backgroundColor:`${note.color}`, color:"white"}} >
                 <CardContent>
                  <Box>
                  <Typography variant="h4">{note.title}</Typography>
                    <Typography variant="h6">{note.details}</Typography>
                    <Typography variant="h6">{note.date}</Typography>
                    <Button variant="outlined" style={{color:"black", border:"1px solid white"}}
                    onClick={() => deleteNote(note.id)}>Delete</Button>
                  </Box>
                 </CardContent>
               </Card>
            )
          })}
        </Box>
    </Box>
  )
}

export default Notes
