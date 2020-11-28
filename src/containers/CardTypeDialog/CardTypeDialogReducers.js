const cardTypeInitialState = {
  cardType: "",
  isCardTypeDialogOpen: false,
};

const cardTypeSelectionReducer = (
  state = cardTypeInitialState,
  action = {}
) => {
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
        isCardTypeDialogOpen: true,
      };
    default:
      return state;
  }
};

export { cardTypeSelectionReducer };
