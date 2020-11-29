import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.scss";
import App from "./containers/App/App";
import reportWebVitals from "./reportWebVitals";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { cardTypeSelectionReducer } from "./containers/CardTypeDialog/CardTypeDialogReducers";
import logger from "redux-logger";

const rootReducer = combineReducers({
  cardTypeSelection: cardTypeSelectionReducer,
});

const store = createStore(rootReducer, applyMiddleware(logger));

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#0194c7",
    },
  },
});

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <App />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
