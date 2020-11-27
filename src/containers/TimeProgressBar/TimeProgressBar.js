import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";
import { COLORS } from "../../constants";

// https://github.com/mui-org/material-ui/issues/12858
const useStyles = makeStyles({
  colorPrimary: {
    // backgroundColor: "#F29D68",
    backgroundColor: (props) => {
      const color = props.reformatColorString(props.color);
      return LightenDarkenColor(COLORS[color], 50);
    },
    height: 6,
  },
  barColorPrimary: {
    backgroundColor: "#fff",
    borderRadius: 50,
  },
  colorSecondary: {
    backgroundColor: (props) => {
      const color = props.reformatColorString(props.color);
      return LightenDarkenColor(COLORS[color], 120);
    },
    height: 6,
  },
  barColorSecondary: {
    backgroundColor: (props) => {
      const color = props.reformatColorString(props.color);
      return COLORS[color];
    },
    borderRadius: 50,
  },
});

// https://css-tricks.com/snippets/javascript/lighten-darken-color/
function LightenDarkenColor(col, amt) {
  var usePound = false;
  if (col[0] === "#") {
    col = col.slice(1);
    usePound = true;
  }
  var num = parseInt(col, 16);
  var r = (num >> 16) + amt;
  if (r > 255) r = 255;
  else if (r < 0) r = 0;
  var b = ((num >> 8) & 0x00ff) + amt;
  if (b > 255) b = 255;
  else if (b < 0) b = 0;
  var g = (num & 0x0000ff) + amt;
  if (g > 255) g = 255;
  else if (g < 0) g = 0;
  return (usePound ? "#" : "") + (g | (b << 8) | (r << 16)).toString(16);
}

export default function TimeProgressBar(props) {
  const { duration, timerTime, timerOn } = props;
  const [progress, setProgress] = React.useState(0);
  const classes = useStyles(props);

  const convertDurationToSeconds = (duration) => {
    return duration[0] * 60 * 60 + duration[1] * 60 + duration[2];
  };

  React.useEffect(() => {
    const durationTime = convertDurationToSeconds(duration);
    setProgress(Math.min(100, (timerTime / durationTime) * 100));
  }, [duration, timerTime]);

  return (
    <LinearProgress
      className="stopwatch-progress-bar"
      classes={{
        colorPrimary: classes.colorPrimary,
        barColorPrimary: classes.barColorPrimary,
        colorSecondary: classes.colorSecondary,
        barColorSecondary: classes.barColorSecondary,
      }}
      variant="determinate"
      color={timerOn ? "primary" : "secondary"}
      value={progress}
    />
  );
}
