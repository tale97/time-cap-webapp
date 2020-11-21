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

export default function ColorOption({ setColor }) {
  const classes = useStyles();
  const [chosenColor, setChosenColor] = useState("");
  const useCheckedColorIcon = false; // set to true for alternative choosen color icon

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
    // interestingly, using event.target doesn't allow user to click on the outer ring of the color icon, but using event.currentTarget fix that problem
    const classNames = event.currentTarget.className.baseVal;
    const classNamesArray = classNames.split(" ");
    for (const color of colors) {
      if (classNamesArray.includes(color)) {
        setChosenColor(color);
        setColor(color);
        return color;
      }
    }
    // error
    return "";
  };

  const choosenColorIcon = (color) => {
    return useCheckedColorIcon ? (
      <CheckCircleIcon
        className={`${classes.colorIcon} ${color}`}
        onClick={onClickColorCircle}
      />
    ) : (
      <RadioButtonCheckedIcon
        className={`${classes.colorIcon} ${color}`}
        onClick={onClickColorCircle}
      />
    );
  };

  const colorIcons = colors.map((color) => {
    return color === chosenColor ? (
      choosenColorIcon(color)
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
