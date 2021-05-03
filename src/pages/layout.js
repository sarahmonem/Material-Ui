import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Drawer, Typography } from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import NotesIcon from "@material-ui/icons/Notes";
import NoteAddIcon from "@material-ui/icons/NoteAdd";
import { useHistory, useLocation } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import {format} from "date-fns"
import Avatar from '@material-ui/core/Avatar';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';

const drowerWidth = 250;

const styles = makeStyles(theme => {
  return {
    page: {
      background: "#e0e0e0",
      width: "100%",
      height: "100%",
      padding:theme.spacing(2)
    },
    drower: {
      width: drowerWidth
    },
    drawerPaper: {
      width: drowerWidth
    },
    root: {
      display: "flex"
    },
    active: {
      background: "#dbefec"
    },
    title: {
      padding: theme.spacing(2)
    },
    appbar:{
        width: `calc(100% - ${drowerWidth}px)`
    },
    toolbar: theme.mixins.toolbar,
    date: {
        flexGrow: 1
    },
    small:{
        margin:theme.spacing(2)
    }
  };
});

function Layout({ children }) {
  const classes = styles();
  const history = useHistory();
  const location = useLocation();
  return (
    <div className={classes.root}>
      <AppBar 
      className={classes.appbar}
      elevation={0}>
        <Toolbar>
          <Typography className={classes.date}>
          {format(new Date(), "'Today is a' eeee")}
          </Typography>
          <Typography>
              Welcome Admin
          </Typography>
          <Avatar className={classes.small}>
              <PermIdentityIcon/>
          </Avatar>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drower}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper
        }}
        anchor="left"
      >
        <Typography variant="h5" className={classes.title}>
          Home Page
        </Typography>
        <List>
          <ListItem
            button
            onClick={() => history.push("/")}
            className={location.pathname == "/" ? classes.active : null}
          >
            <ListItemIcon>
              <NotesIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="Notes" />
          </ListItem>
          <ListItem
            button
            onClick={() => history.push("/create")}
            className={location.pathname == "/create" ? classes.active : null}
          >
            <ListItemIcon>
              <NoteAddIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="Create new note" />
          </ListItem>
        </List>
      </Drawer>

      <div className={classes.page}>
      <div className={classes.toolbar}></div>
      {children}
      </div>
    </div>
  );
}

export default Layout;
