const selectTimeTrackingActivity = {
  type: "cardCreation/cardTypeSelected",
  payload: "timeTracking",
};

const selectCheckOffActivity = {
  type: "cardCreation/cardTypeSelected",
  payload: "checkOff",
};

const selectCountActivity = {
  type: "cardCreation/cardTypeSelected",
  payload: "count",
};

export default {
  selectTimeTrackingActivity,
  selectCheckOffActivity,
  selectCountActivity,
};
