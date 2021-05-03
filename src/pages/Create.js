import React from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { makeStyles } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import { useState } from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import {useHistory} from 'react-router-dom'


const useStyles = makeStyles({
  btn: {
    margin: 20,
    background: "gray",
    "&:hover": {
      background: "black"
    }
  },
  form: {
    marginBottom: 20,
    display: 'block'
  }
});
export default function Create() {
  const classes = useStyles();
const history = useHistory()
  const [Title, setTitle] = useState("");
  const [Details, setDetails] = useState("");
  const [TitleError, setTitleError] = useState(false);
  const [DetailsError, setDetailsError] = useState(false);
  const [category, setcategory] = useState('todos')

  const handlesubmit = e => {
    e.preventDefault();

    setTitleError(false);
    setDetailsError(false);

    if (Title == "") {
      setTitleError(true);
    }
    if (Details == "") {
      setDetailsError(true);
    }
    if (Title && Details) {
      fetch('http://localhost:8000/notes' , {
        method : 'POST' ,
        headers : {"Content-type" : "application/json"},
        body: JSON.stringify({Title ,  Details , category})
      }).then(()=> history.push('/'))
    }
  };

  return (
    <div>
      <Container>
        <Typography
          variant="h6"
          component="h2"
          color="textPrimary"
          gutterBottom
        >
          Create New Notes
        </Typography>
        <form onSubmit={handlesubmit}>
          <TextField
            onChange={e => setTitle(e.target.value)}
            className={classes.form}
            variant="outlined"
            label="Note Title"
            fullWidth
            error={TitleError}
          ></TextField>
          <TextField
            onChange={e => setDetails(e.target.value)}
            variant="outlined"
            className={classes.form}
            multiline
            rows={5}
            label="Note Details"
            fullWidth
            error={DetailsError}
          ></TextField>

          <FormControl className={classes.form}>
            <FormLabel>Category</FormLabel>
            <RadioGroup value={category} onChange={(e)=> setcategory(e.target.value)}>
              <FormControlLabel
                value="money"
                control={<Radio />}
                label="Mony"
              />

              <FormControlLabel
                value="reminders"
                control={<Radio />}
                label="Reminders"
              />
              <FormControlLabel
                value="todos"
                control={<Radio />}
                label="Todos"
              />
              <FormControlLabel
               value="work" 
               control={<Radio />} 
               label="Work" />
            </RadioGroup>
          </FormControl>
          
          <Button
            type="submit"
            variant="contained"
            color="primary"
            endIcon={<ArrowForwardIcon />}
          >
            add new note
          </Button>
        </form>
      </Container>
    </div>
  );
}
