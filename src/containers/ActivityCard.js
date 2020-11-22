import React from "react";
import StopWatch from "./StopWatch";
import "../styles/ActivityCard.scss";
import "../styles/ColorOption.scss";

export default function ActivityCard({ activitySpecification }) {
  const { type, name, color, duration, period } = activitySpecification;
  const [isActive, setIsActive] = React.useState(false);

  const formatDuration = (duration) => {
    return `${duration[0]}h ${duration[1]}m ${duration[2]}s`;
  };

  const setCardActiveStatus = (status) => {
    setIsActive(status);
  };

  return (
    <div
      className={`activity-card ${
        isActive ? `background-${color}` : `light-background-${color}`
      }`}
    >
      <div className={`activity-card-title ${isActive ? "" : "black-text"}`}>
        {name}
      </div>
      <div
        className={`activity-card-subheadline ${isActive ? "" : "black-text"}`}
      >{`${type} • ${formatDuration(duration)} • ${period}`}</div>
      <div className="activity-card-empty-space"></div>
      <div>
        <StopWatch
          duration={duration}
          color={color}
          setIsActive={setCardActiveStatus}
          isActive={isActive}
        />
      </div>
    </div>
  );
}
