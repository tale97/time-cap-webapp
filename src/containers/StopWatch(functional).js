import React, { useState, useRef } from "react";
import "../styles/App.scss";
import { IconButton, makeStyles } from "@material-ui/core";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import PauseCircleFilledIcon from "@material-ui/icons/PauseCircleFilled";

const useStyles = makeStyles({
  icon: {
    height: 50,
    width: 50,
  },
});

export default function StopWatch2() {
  const classes = useStyles();
  const [timerOn, setTimerOn] = useState(false);
  const [timerStartTime, setTimerStartTime] = useState(0);
  const [timerTimeElapsed, setTimerTimeElapsed] = useState(0);
  const timer = useRef(0);

  const startTimer = () => {
    setTimerOn(true);
    setTimerTimeElapsed(timerTimeElapsed);
    setTimerStartTime(Date.now() - timerTimeElapsed);

    timer.current = setInterval(() => {
      console.log(`timerStartTime ${timerStartTime}`);
      console.log(`timerTimeElapsed ${timerTimeElapsed}`);

      setTimerTimeElapsed(Date.now() - timerStartTime);
      console.log(`>> timerTimeElapsed: ${timerTimeElapsed}`);
    }, 1000);
  };

  const stopTimer = () => {
    setTimerOn(false);
    clearInterval(timer.current);
  };

  const setTimerControl = () => {
    if (timerOn === true) {
      return (
        <IconButton onClick={stopTimer} className={classes.button}>
          <PauseCircleFilledIcon className={classes.icon} />
        </IconButton>
      );
    } else {
      return (
        <IconButton onClick={startTimer}>
          <PlayCircleFilledIcon className={classes.icon} />
        </IconButton>
      );
    }
  };

  let seconds = ("0" + (Math.floor(timerTimeElapsed / 1000) % 60)).slice(-2);
  let minutes = ("0" + (Math.floor(timerTimeElapsed / 60000) % 60)).slice(-2);
  let hours = ("0" + Math.floor(timerTimeElapsed / 3600000)).slice(-2);

  // return (
  //   <div className="stopwatch">
  //     <div className="stopwatch-display">
  //       {hours}:{minutes}:{seconds}
  //     </div>
  //     {setTimerControl()}
  //   </div>
  // );
  return (
    <div>
      <div className={classes.time}>
        {hours}:{minutes}:{seconds}
      </div>
      {setTimerControl()}
    </div>
  );
}
