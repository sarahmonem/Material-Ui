import React, { useState } from "react";
import { useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import { Container, Avatar , makeStyles } from "@material-ui/core";
import NoteCard from "../component/NoteCard";



export default function Notes() {
  const [notes, setnotes] = useState([]);
 

  useEffect(() => {
    fetch("http://localhost:8000/notes")
      .then(res => res.json())
      .then(data => setnotes(data));
  }, []);

  const handledelete = id => {
    fetch("http://localhost:8000/notes/" + id , {
      method: 'DELETE'
    })
    const newnote = notes.filter(note => note.id != id)
    setnotes(newnote)
  };
  return (
    <Container>
      <Grid
        container
        alignContent="center"
        direction="row"
        justify="center"
        spacing={5}
      >
        {notes.map(note => (
          <Grid item key={note.id} md={4}>
           <NoteCard note={note} handledelete={handledelete}/>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
