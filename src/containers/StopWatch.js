// https://medium.com/@peterjd42/building-timers-in-react-stopwatch-and-countdown-bc06486560a2

import React, { Component } from "react";
import "../styles/ActivityCard.scss";
import { IconButton, withStyles } from "@material-ui/core";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import PauseCircleFilledIcon from "@material-ui/icons/PauseCircleFilled";
import TimeProgressBar from "./TimeProgressBar";
import StyledTimeProgressBar from "./StyledTimeProgressBar";

const styles = (theme) => ({
  buttonIcon: {
    height: 50,
    width: 50,
    color: "white",
  },
  button: {
    height: 54,
    width: 54,
  },
});

class StopWatch extends Component {
  state = {
    timerOn: false,
    timerStart: 0,
    timerTime: 0,
  };

  startTimer = () => {
    this.setState({
      timerOn: true,
      timerTime: this.state.timerTime,
      timerStart: Date.now() - this.state.timerTime,
    });
    this.timer = setInterval(() => {
      this.setState({
        timerTime: Date.now() - this.state.timerStart,
      });
    }, 1000);
  };

  stopTimer = () => {
    this.setState({ timerOn: false });
    clearInterval(this.timer);
  };

  setTimerControl = (classes) => {
    const { timerOn } = this.state;
    if (timerOn === true) {
      return (
        <IconButton className={classes.button} onClick={this.stopTimer}>
          <PauseCircleFilledIcon className={classes.buttonIcon} />
        </IconButton>
      );
    } else {
      return (
        <IconButton onClick={this.startTimer} className={classes.button}>
          <PlayCircleFilledIcon className={classes.buttonIcon} />
        </IconButton>
      );
    }
  };

  render() {
    const { timerTime } = this.state;
    const { classes } = this.props;
    let seconds = ("0" + (Math.floor(timerTime / 1000) % 60)).slice(-2);
    let minutes = ("0" + (Math.floor(timerTime / 60000) % 60)).slice(-2);
    let hours = ("0" + Math.floor(timerTime / 3600000)).slice(-2);

    return (
      <div className="stopwatch">
        <div className="stopwatch-button">{this.setTimerControl(classes)}</div>
        <div className="stopwatch-time">
          {hours}:{minutes}:{seconds}
          <TimeProgressBar />
        </div>
      </div>
    );
  }
}
export default withStyles(styles, { withTheme: true })(StopWatch);
