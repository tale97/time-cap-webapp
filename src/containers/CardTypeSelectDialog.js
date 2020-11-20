import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import Slide from "@material-ui/core/Slide";
import { makeStyles } from "@material-ui/core/styles";
import "../styles/CardTypeSelectDialog.scss";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import TimerIcon from "@material-ui/icons/Timer";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import ExposurePlus1Icon from "@material-ui/icons/ExposurePlus1";

const useStyles = makeStyles((theme) => ({
  icon: {
    height: 30,
    width: 30,
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function CardTypeSelectDialog(props) {
  const classes = useStyles();

  const handleClose = () => {
    props.closeCardTypeSelectDialog();
  };

  const cardType = (cardTypeObject) => {
    return (
      <div className="cardType-content">
        <div className={`cardType-icon ${cardTypeObject.iconColor}`}>
          {cardTypeObject.icon}
        </div>
        <div className="cardType-text">
          <div className="cardType-title">{cardTypeObject.title}</div>
          <div className="cardType-subtitle">{cardTypeObject.subtitle}</div>
        </div>
        <div className="cardType-endIcon">
          <ArrowForwardIosIcon />
        </div>
      </div>
    );
  };

  const cardTypeList = [
    {
      icon: <TimerIcon className={classes.icon} />,
      iconColor: "blue",
      title: "Time tracking activity",
      subtitle: "Track time for your goals or activities you want to limit.",
    },
    {
      icon: <CheckBoxIcon className={classes.icon} />,
      iconColor: "green",
      title: "Check off activity",
      subtitle: "For activities you do once every period",
    },
    {
      icon: <ExposurePlus1Icon className={classes.icon} />,
      iconColor: "yellow",
      title: "Count activity",
      subtitle: "For activities you do multiple times every period",
    },
  ];

  return (
    <Dialog
      open={props.isDialogOpen}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-labelledby="alert-dialog-slide-title"
      aria-describedby="alert-dialog-slide-description"
    >
      <div className="dialog-title">Create</div>
      <div className="card-type-select-dialog-content">
        {cardType(cardTypeList[0])}
        {cardType(cardTypeList[1])}
        {cardType(cardTypeList[2])}
      </div>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
}
