const appBarBottomInitialState = {
  isCardTypeDialogOpen: false,
};

const appBarBottomReducer = (state = appBarBottomInitialState, action = {}) => {
  switch (action.type) {
    case "cardCreation/cardTypeDialogOpened":
      return { ...state, isCardTypeDialogOpen: true };
    default:
      return state;
  }
};

export { appBarBottomReducer };
