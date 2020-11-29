// https://upmostly.com/tutorials/build-a-react-timer-component-using-hooks

import React, { useState, useEffect } from "react";
import "../ActivityCard/ActivityCard.scss";
import { IconButton, makeStyles } from "@material-ui/core";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import PauseCircleFilledIcon from "@material-ui/icons/PauseCircleFilled";
import TimeProgressBar from "../TimeProgressBar/TimeProgressBar";
import { COLORS } from "../../constants";

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

// i.e reformat "any-string" to "anyString"
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
  const {
    duration,
    color,
    setIsTimerActive,
    isTimerActive,
    updateActivityRunningDuration,
    activitySpecification,
  } = props;
  const classes = useStyles(props);
  const [seconds, setSeconds] = useState(activitySpecification.runningDuration);

  function startTimer() {
    setIsTimerActive(true);
  }

  function stopTimer() {
    updateActivityRunningDuration(activitySpecification, seconds);
    setIsTimerActive(false);
  }

  useEffect(() => {
    let interval = null;
    if (isTimerActive) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds + 1);
        updateActivityRunningDuration(activitySpecification, seconds + 1);
      }, 1000);
    } else if (!isTimerActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [
    seconds,
    isTimerActive,
    activitySpecification,
    updateActivityRunningDuration,
  ]);

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

  let timerSeconds = ("0" + (Math.floor(seconds / 1) % 60)).slice(-2);
  let timerMinutes = ("0" + (Math.floor(seconds / 60) % 60)).slice(-2);
  let timerHours = ("0" + Math.floor(seconds / 3600)).slice(-2);

  return (
    <div className="stopwatch">
      <div className="stopwatch-button">{setTimerControl(classes)}</div>
      <div
        className={`stopwatch-time ${
          isTimerActive ? "white-text" : "black-text"
        }`}
      >
        {timerHours}:{timerMinutes}:{timerSeconds}
        <TimeProgressBar
          duration={duration}
          timerTime={seconds}
          timerOn={isTimerActive}
          color={color}
          reformatColorString={reformatColorString}
        />
      </div>
    </div>
  );
}
