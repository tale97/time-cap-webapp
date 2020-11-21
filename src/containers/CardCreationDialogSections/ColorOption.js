import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import "../../styles/ColorOption.scss";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
import RadioButtonCheckedIcon from "@material-ui/icons/RadioButtonChecked";

const useStyles = makeStyles({
  colorIcon: {
    height: 50,
    width: 50,
  },
});

export default function ColorOption() {
  const classes = useStyles();
  const [chosenColor, setChosenColor] = useState("");

  const colors = [
    "brown-black",
    "carribean-blue",
    "orange",
    "orange-yellow",
    "pink",
    "pink-red",
    "red",
    "pink-purple",
    "purple",
    "deep-ocean-blue",
    "ocean-blue",
    "blue-green",
    "green",
    "skin-color",
    "brown",
    "black",
  ];

  const onClickColorCircle = (event) => {
    const classNames = event.target.className.baseVal;
    const classNamesArray = classNames.split(" ");
    for (const color of colors) {
      if (classNamesArray.includes(color)) {
        setChosenColor(color);
        return color;
      }
    }
    // error
    return "";
  };

  const colorIcons = colors.map((color) => {
    return color === chosenColor ? (
      <RadioButtonCheckedIcon
        className={`${classes.colorIcon} ${color}`}
        onClick={onClickColorCircle}
      />
    ) : (
      <RadioButtonUncheckedIcon
        className={`${classes.colorIcon} ${color}`}
        onClick={onClickColorCircle}
      />
    );
  });

  return (
    <div>
      <div className="color-table">{colorIcons}</div>
    </div>
  );
}
