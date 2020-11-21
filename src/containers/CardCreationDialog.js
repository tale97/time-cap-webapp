import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
import TypeOption from "./CardCreationDialogSections/TypeOption";
import PeriodOption from "./CardCreationDialogSections/PeriodOption";
import NameInput from "./CardCreationDialogSections/NameInput";
import "../styles/CardCreationDialog.scss";
import ColorOption from "./CardCreationDialogSections/ColorOption";
import DurationOption from "./CardCreationDialogSections/DurationOption";

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
    body: <TypeOption />,
  },
  {
    title: "Name",
    body: <NameInput />,
  },
  {
    title: "Color",
    body: <ColorOption />,
  },
  {
    title: "Length of time",
    body: <DurationOption />,
  },
  {
    title: "Period",
    body: <PeriodOption />,
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

const createDialogSections = (activitySpecifics) => {
  return activitySpecifics.map((activitySpecific) => {
    return <div>{createDialogSection(activitySpecific)}</div>;
  });
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
        <div className="CardCreationDialog-upper-empty-space"></div>
        {createDialogSections(activitySpecifics)}
      </Dialog>
    </div>
  );
}
