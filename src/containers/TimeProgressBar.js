import React from "react";
import LinearProgress from "@material-ui/core/LinearProgress";

export default function TimeProgressBar({ duration, timerTime }) {
  const [progress, setProgress] = React.useState(0);

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
      variant="determinate"
      value={progress}
    />
  );
}
