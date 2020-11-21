import React, { useState } from "react";
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
import DurationInput from "./CardCreationDialogSections/DurationInput";

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

export default function CardCreationDialog({
  isCardCreationDialogOpen,
  closeCardCreationDialog,
  addActivityCard,
}) {
  const classes = useStyles();
  const [type, setType] = useState(null);
  const [name, setName] = useState(null);
  const [color, setColor] = useState(null);
  const [duration, setDuration] = useState(null);
  const [period, setPeriod] = useState(null);

  const activitySpecifics = [
    {
      title: "Type",
      body: <TypeOption setType={setType} />,
    },
    {
      title: "Name",
      body: <NameInput setName={setName} />,
    },
    {
      title: "Color",
      body: <ColorOption setColor={setColor} />,
    },
    {
      title: "Length of time",
      body: <DurationInput setDuration={setDuration} />,
    },
    {
      title: "Period",
      body: <PeriodOption setPeriod={setPeriod} />,
    },
  ];

  const createDialogSections = (activitySpecifics) => {
    return activitySpecifics.map((activitySpecific) => {
      return <div>{createDialogSection(activitySpecific)}</div>;
    });
  };

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

  const onClickingSaveButton = () => {
    const newCardSpecification = {
      type: type,
      name: name,
      color: color,
      duration: duration,
      period: period,
    };
    addActivityCard(newCardSpecification);
    closeCardCreationDialog();
  };

  return (
    <div>
      <Dialog
        fullScreen
        open={isCardCreationDialogOpen}
        onClose={closeCardCreationDialog}
        TransitionComponent={Transition}
      >
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={closeCardCreationDialog}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Add activity
            </Typography>
            <Button autoFocus color="inherit" onClick={onClickingSaveButton}>
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
