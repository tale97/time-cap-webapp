import React from "react";
import StopWatch from "./StopWatch";
import "../styles/ActivityCard.scss";

export default function ActivityCard({ activitySpecification }) {
  const { type, name, color, duration, period } = activitySpecification;

  const formatDuration = (duration) => {
    return `${duration[0]}h ${duration[1]}m ${duration[2]}s`;
  };
  return (
    <div className="activity-card">
      <div className="activity-card-title">{name}</div>
      <div className="activity-card-subheadline">{`${type} • ${formatDuration(
        duration
      )} • ${period}`}</div>
      <div className="activity-card-empty-space"></div>
      <div className="activity-card-timer">
        <StopWatch />
      </div>
    </div>
  );
}
