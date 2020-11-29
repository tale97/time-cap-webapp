const selectedTimeTrackingActivity = {
  type: "cardCreation/cardTypeSelected",
  payload: "timeTracking",
};

const selectedCheckOffActivity = {
  type: "cardCreation/cardTypeSelected",
  payload: "checkOff",
};

const selectedCountActivity = {
  type: "cardCreation/cardTypeSelected",
  payload: "count",
};

// sample action creator
const openedCardTypeDialog = (isOpen) => {
  return {
    type: "cardCreation/cardTypeDialogOpened",
    payload: isOpen,
  };
};

export {
  selectedTimeTrackingActivity,
  selectedCheckOffActivity,
  selectedCountActivity,
  openedCardTypeDialog,
};
