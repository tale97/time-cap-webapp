// https://medium.com/@peterjd42/building-timers-in-react-stopwatch-and-countdown-bc06486560a2

import React, { Component } from "react";
import "../styles/App.css";
import Button from "@material-ui/core/Button";

class Stopwatch extends Component {
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
    }, 10);
  };

  stopTimer = () => {
    this.setState({ timerOn: false });
    clearInterval(this.timer); // ???
  };

  setTimerControl = () => {
    const { timerOn, timerTime, timerStart } = this.state;
    if (timerOn === true) {
      return <Button onClick={this.stopTimer}>Pause</Button>;
    } else if (timerOn === false && timerTime > 0) {
      return <Button onClick={this.startTimer}>Resume</Button>;
    } else if (timerOn === false && timerTime === 0) {
      return <Button onClick={this.startTimer}>Start</Button>;
    }
  };

  render() {
    const { timerTime } = this.state;
    let centiseconds = ("0" + (Math.floor(timerTime / 10) % 100)).slice(-2);
    let seconds = ("0" + (Math.floor(timerTime / 1000) % 60)).slice(-2);
    let minutes = ("0" + (Math.floor(timerTime / 60000) % 60)).slice(-2);
    let hours = ("0" + Math.floor(timerTime / 3600000)).slice(-2);

    return (
      <div className="stopwatch">
        <div className="stopwatch-display">
          {hours}:{minutes}:{seconds}:{centiseconds}
        </div>
        {this.setTimerControl()}
      </div>
    );
  }
}
export default Stopwatch;
