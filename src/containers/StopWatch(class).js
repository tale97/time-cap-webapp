// https://medium.com/@peterjd42/building-timers-in-react-stopwatch-and-countdown-bc06486560a2

import React, { Component } from "react";
import "../styles/App.scss";
import { IconButton } from "@material-ui/core";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import PauseCircleFilledIcon from "@material-ui/icons/PauseCircleFilled";

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
      console.log(`timerTimer ${this.state.timerTime}`);
    }, 1000);
  };

  stopTimer = () => {
    this.setState({ timerOn: false });
    clearInterval(this.timer); // ???
  };

  setTimerControl = () => {
    const { timerOn } = this.state;
    const buttonStyle = {
      width: 69,
      heigth: 69,
    };
    if (timerOn === true) {
      return (
        <IconButton
          style={buttonStyle}
          iconStyle={buttonStyle}
          onClick={this.stopTimer}
        >
          <PauseCircleFilledIcon />
        </IconButton>
      );
    } else {
      return (
        <IconButton onClick={this.startTimer}>
          <PlayCircleFilledIcon />
        </IconButton>
      );
    }
  };

  render() {
    const { timerTime } = this.state;
    let seconds = ("0" + (Math.floor(timerTime / 1000) % 60)).slice(-2);
    let minutes = ("0" + (Math.floor(timerTime / 60000) % 60)).slice(-2);
    let hours = ("0" + Math.floor(timerTime / 3600000)).slice(-2);

    return (
      <div className="stopwatch">
        <div className="stopwatch-display">
          {hours}:{minutes}:{seconds}
        </div>
        {this.setTimerControl()}
      </div>
    );
  }
}
export default StopWatch;
