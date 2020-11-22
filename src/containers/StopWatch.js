// https://upmostly.com/tutorials/build-a-react-timer-component-using-hooks

import React, { useState, useEffect } from "react";
import "../styles/ActivityCard.scss";
import { IconButton, makeStyles } from "@material-ui/core";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import PauseCircleFilledIcon from "@material-ui/icons/PauseCircleFilled";
import TimeProgressBar from "./TimeProgressBar";
import { COLORS } from "../constants";

const useStyles = makeStyles({
  buttonIcon: {
    height: 50,
    width: 50,
    color: (props) => {
      return COLORS[reformatColorString(props.color)];
    },
  },
  buttonIconActive: {
    height: 50,
    width: 50,
    color: "white",
  },
  button: {
    height: 54,
    width: 54,
  },
});

// i.e reformat "orange-brown" to "orangeBrown"
const reformatColorString = (colorString) => {
  const capitalizeStringAtIndex = (string, idx) => {
    const stringBeforeIdx = string.slice(0, idx);
    const stringAFterIdx = string.slice(idx + 1, string.length);
    const capitalizedCharacter = string[idx].toUpperCase();
    let newString = stringBeforeIdx.concat(capitalizedCharacter);
    newString = newString.concat(stringAFterIdx);
    return newString;
  };
  let indicesOfCharacterToCapitalize = [];
  let newString = colorString;
  for (var i = 0; i < colorString.length; i++) {
    if (colorString[i] === "-") {
      indicesOfCharacterToCapitalize.push(i + 1);
    }
  }
  for (var idx of indicesOfCharacterToCapitalize) {
    newString = capitalizeStringAtIndex(newString, idx);
  }
  newString = newString.replace(/-/gi, "");
  return newString;
};

export default function StopWatch(props) {
  const classes = useStyles(props);
  const [runningDurationInSeconds, setRunningDurationInSeconds] = useState(0);
  const [isTimerActive, setIsTimerActive] = useState(false);
  const { duration, color, setIsActive, isActive } = props;

  function startTimer() {
    setIsActive(true);
    setIsTimerActive(true);
  }

  function stopTimer() {
    setIsActive(false);
    setIsTimerActive(false);
  }

  useEffect(() => {
    let interval = null;
    if (isTimerActive) {
      interval = setInterval(() => {
        setRunningDurationInSeconds(
          (runningDurationInSeconds) => runningDurationInSeconds + 1
        );
      }, 1000);
    } else if (!isTimerActive && runningDurationInSeconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isTimerActive, runningDurationInSeconds]);

  const setTimerControl = (classes) => {
    if (isTimerActive === true) {
      return (
        <IconButton className={classes.button} onClick={stopTimer}>
          <PauseCircleFilledIcon className={classes.buttonIconActive} />
        </IconButton>
      );
    } else {
      return (
        <IconButton onClick={startTimer} className={classes.button}>
          <PlayCircleFilledIcon className={classes.buttonIcon} />
        </IconButton>
      );
    }
  };

  let seconds = ("0" + (Math.floor(runningDurationInSeconds / 1) % 60)).slice(
    -2
  );
  let minutes = ("0" + (Math.floor(runningDurationInSeconds / 60) % 60)).slice(
    -2
  );
  let hours = ("0" + Math.floor(runningDurationInSeconds / 3600)).slice(-2);

  return (
    <div className="stopwatch">
      <div className="stopwatch-button">{setTimerControl(classes)}</div>
      <div
        className={`stopwatch-time ${isActive ? "white-text" : "black-text"}`}
      >
        {hours}:{minutes}:{seconds}
        <TimeProgressBar
          duration={duration}
          timerTime={runningDurationInSeconds}
          timerOn={isTimerActive}
          color={color}
          reformatColorString={reformatColorString}
        />
      </div>
    </div>
  );
}
