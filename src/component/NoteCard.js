import React from 'react'
import { Container, Avatar , makeStyles } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import IconButton from "@material-ui/core/IconButton";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import { yellow, green, pink } from "@material-ui/core/colors";

const useStyles = makeStyles({
    avatar:{
        backgroundColor: (note) =>{
            if(note.category == 'work'){
                return yellow[700]
            }
            if(note.category == 'money'){
                return green[600]
            }
            if(note.category == 'todos'){
                return pink[400]
            }
            if(note.category == 'work'){
                return yellow
            }
        }
    }
})

const NoteCard = ({note , handledelete}) => {

    const classes = useStyles(note)
    return (
        <div>
             <Card>
              <CardHeader
              avatar={
                <Avatar className={classes.avatar}>
                  {note.category[0].toUpperCase()}
                </Avatar>
              }
                title={note.Title}
                subheader={note.category}
                action={
                  <IconButton onClick={()=> handledelete(note.id)}>
                    <DeleteOutlineIcon />
                  </IconButton>
                }
              ></CardHeader>
              <CardContent>
                <typography>{note.Details}</typography>
              </CardContent>
            </Card>
        </div>
    )
}

export default NoteCard
