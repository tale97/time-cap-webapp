import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
import TypeCreation from "./CardCreationDialogSections/TypeCreation";
import "../styles/CardCreationDialog.scss";

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const activitySpecifics = [
  {
    title: "Type",
    body: <TypeCreation />,
  },
];

const createDialogSection = (activitySpecifics) => {
  return (
    <div>
      <div className="activity-specs-title">{activitySpecifics.title}</div>
      <div className="activity-specs-configuration">
        {activitySpecifics.body}
      </div>
    </div>
  );
};

export default function CardCreationDialog(props) {
  const classes = useStyles();

  return (
    <div>
      <Dialog
        fullScreen
        open={props.isCardCreationDialogOpen}
        onClose={props.closeCardCreationDialog}
        TransitionComponent={Transition}
      >
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={props.closeCardCreationDialog}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Add activity
            </Typography>
            <Button
              autoFocus
              color="inherit"
              onClick={props.closeCardCreationDialog}
            >
              save
            </Button>
          </Toolbar>
        </AppBar>
        <List>
          <ListItem button>
            <ListItemText primary="Phone ringtone" secondary="Titania" />
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemText
              primary="Default notification ringtone"
              secondary="Tethys"
            />
          </ListItem>
        </List>
        <div>{createDialogSection(activitySpecifics[0])}</div>
      </Dialog>
    </div>
  );
}
