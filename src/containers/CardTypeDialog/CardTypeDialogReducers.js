const cardTypeInitialState = {
  cardType: "",
  isCardTypeDialogOpen: false,
};

const cardTypeDialogReducer = (state = cardTypeInitialState, action = {}) => {
  switch (action.type) {
    case "cardCreation/cardTypeSelected":
      return {
        ...state,
        cardType: action.payload,
        isCardTypeDialogOpen: false,
      };
    case "cardCreation/cardTypeDialogOpened":
      return {
        ...state,
        isCardTypeDialogOpen: action.payload,
      };
    default:
      return state;
  }
};

export { cardTypeDialogReducer };
