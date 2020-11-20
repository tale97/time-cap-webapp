import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import TimeProgressBar from "./TimeProgressBar";
import LinearProgress from "@material-ui/core/LinearProgress";

const StyledTimeProgressBar = withStyles((theme) => ({
  root: {
    height: 5,
    borderRadius: 5,
  },
  colorPrimary: {
    backgroundColor: "green",
  },
  bar: {
    borderRadius: 5,
    backgroundColor: "white",
  },
}))(LinearProgress);

export default StyledTimeProgressBar;
