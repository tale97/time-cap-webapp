import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import "../styles/CardTypeSelectDialog.scss";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function CardTypeSelectDialog(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = (props) => {
    setOpen(true);
    props.openCardTypeSelectDialog();
  };

  const handleClose = () => {
    props.closeCardTypeSelectDialog();
    setOpen(false);
  };

  const cardType = (icon, title, subtitle) => {
    return (
      <div className="cardType-content">
        <div className="cardType-icon">{icon}</div>
        <div className="cardType-text">
          <div className="cardType-title">{title}</div>
          <div className="cardType-subtitle">{subtitle}</div>
        </div>
        <div className="cardType-endIcon">
          <ArrowForwardIosIcon />
        </div>
      </div>
    );
  };

  const cardTypeText = [
    {
      title: "Time tracking activity",
      subtitle: "Track time for your goals or activities you want to limit.",
    },
    {
      title: "Check off activity",
      subtitle: "For activities you do once every period",
    },
    {
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
      <DialogTitle id="alert-dialog-slide-title">{"Create"}</DialogTitle>
      <DialogContent className="card-type-select-dialog-content">
        {cardType("ICON", cardTypeText[0].title, cardTypeText[0].subtitle)}
        <div className="time-tracking-activity">
          Time tracking activity
          <div className="subtitle">
            Track time for your goals or activites you want to limit.
          </div>
        </div>
        <div className="check-off-activity">
          Check off activity
          <div className="subtitle">
            For activities you do once every period
          </div>
        </div>
        <div className="count-activity">
          Count activity
          <div className="subtitle">
            For activities you do multiple times every period
          </div>
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
}
