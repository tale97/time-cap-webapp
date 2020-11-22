import React, { useState } from "react";
import StopWatch from "./StopWatch";
import "../styles/ActivityCard.scss";
import "../styles/ColorOption.scss";
import { IconButton } from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import CloseIcon from "@material-ui/icons/Close";

export default function ActivityCard({
  activitySpecification,
  removeActivity,
  setIsCardCreationDialogOpen,
  setTargetedActivity,
}) {
  const { type, name, color, duration, period } = activitySpecification;
  const [isActive, setIsActive] = useState(false);
  const [isOpenCardMenu, setIsOpenCardMenu] = useState(false);

  const formatDuration = (duration) => {
    return `${duration[0]}h ${duration[1]}m ${duration[2]}s`;
  };

  // const setCardActiveStatus = (boolean) => {
  //   setIsActive(boolean);
  // };

  const onClickDeleteButton = () => {
    removeActivity(activitySpecification);
  };

  const onClickEditButton = () => {
    setIsCardCreationDialogOpen(true);
    setTargetedActivity(activitySpecification);
    setIsOpenCardMenu(false);
  };

  // normal Activity Card Interface
  const Card = () => {
    return (
      <div
        className={`activity-card ${
          isActive ? `background-${color}` : `light-background-${color}`
        }`}
      >
        <div className="title-and-button">
          <div
            className={`activity-card-title ${
              isActive ? "white-text" : "black-text"
            }`}
          >
            {name}
          </div>
          <div className="activity-card-button">
            <IconButton>
              <MoreVertIcon onClick={() => setIsOpenCardMenu(true)} />
            </IconButton>
          </div>
        </div>
        <div
          className={`activity-card-subheadline ${
            isActive ? "white-text" : "black-text"
          }`}
        >{`${type} • ${formatDuration(duration)} • ${period}`}</div>
        <div className="activity-card-empty-space"></div>
        <div>
          <StopWatch
            duration={duration}
            color={color}
            setIsTimerActive={setIsActive}
            isTimerActive={isActive}
          />
        </div>
      </div>
    );
  };

  // Activity Card Menu Interface
  const CardMenu = () => {
    return (
      <div className="activity-card-and-dialog">
        <div
          className={`activity-card ${
            isActive ? `background-${color}` : `light-background-${color}`
          }`}
        >
          <div className="title-and-button">
            <div
              className={`activity-card-title ${
                isActive ? "white-text" : "black-text"
              }`}
            ></div>
            <div className="activity-card-button">
              <IconButton>
                <CloseIcon onClick={() => setIsOpenCardMenu(false)} />
              </IconButton>
            </div>
          </div>
          <div className="activity-card-empty-space activity-card-menu">
            <div className="edit-button" onClick={onClickEditButton}>
              Edit
            </div>
            <div className="delete-button" onClick={onClickDeleteButton}>
              Delete
            </div>
          </div>
          <div className="activity-card-empty-bottom-space"></div>
        </div>
      </div>
    );
  };

  return isOpenCardMenu ? <CardMenu /> : <Card />;
}
