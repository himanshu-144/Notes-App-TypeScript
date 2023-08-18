import React, { useState ,useEffect} from 'react';
import './App.css';
import Header from './components/Header';
import Note from './components/Note';
import Notes from './components/Notes';


interface NoteObject{
  id : number,
  title : string,
  details :string,
  color :string,
  date :string,
  
}

function App() {

  const[notes, setNotes]  =useState<NoteObject[]>([]);

  useEffect(() => {
    if (sessionStorage.getItem('notes')) {
      setNotes(JSON.parse(sessionStorage.getItem('notes') as string));
    }
  }, [])
  //function to add notes
  const addNotes =(input :NoteObject)=>{
    setNotes([ input, ...notes]);
  };
  const deleteNote = (id: number) => {
    const updatedNotes = notes.filter(note => note.id !== id);
    setNotes(updatedNotes); 
    sessionStorage.setItem('notes', JSON.stringify(updatedNotes));
  }
  return (
    <div className="App">
       <Header />
       <Note addNotes={addNotes}/>
       <Notes notes={notes} deleteNote={deleteNote}/>
    </div>
  );
}

export default App;
