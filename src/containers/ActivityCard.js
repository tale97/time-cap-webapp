import React from "react";
import StopWatch from "./StopWatch";
import "../styles/ActivityCard.scss";

export default function ActivityCard(props) {
  return (
    <div className="activity-card">
      <div className="activity-card-title">{props.activity}</div>
      <div className="activity-card-subheadline">{"Goal . 5m . Everyday"}</div>
      <div className="activity-card-empty-space"></div>
      <div className="activity-card-timer">
        <StopWatch />
      </div>
    </div>
  );
}
