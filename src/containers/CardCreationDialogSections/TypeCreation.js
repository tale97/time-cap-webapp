import React, { useState } from "react";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";

const RadioOption = ({ text, isCheck, setCheckedRadioOption }) => {
  const radioOptionIcon = isCheck ? (
    <CheckCircleOutlineIcon className="radio-button" />
  ) : (
    <RadioButtonUncheckedIcon className="radio-button" />
  );
  return (
    <div
      className={`CardCreationDialog-type ${isCheck ? "checked" : ""}`}
      onClick={clickRadioOption(setCheckedRadioOption)}
    >
      {radioOptionIcon}
      <div className="radio-text">{text}</div>
    </div>
  );
};

const clickRadioOption = (setCheckedRadioOption) => (event) => {
  setCheckedRadioOption(event.currentTarget.textContent); // Event.currentTarget refers to element to which the event handler has been attached, as opposed to Event.target which identifies the element on which the event occured and which may be its descendent.
};

export default function TypeCreation() {
  const [checkedRadioOption, setCheckedRadioOption] = useState(null);
  const radioOptions = ["Goal", "Limit"];
  return (
    <div className="CardTypeCreation">
      <RadioOption
        text={radioOptions[0]}
        isCheck={radioOptions[0] === checkedRadioOption}
        setCheckedRadioOption={setCheckedRadioOption}
      />
      <RadioOption
        text={radioOptions[1]}
        isCheck={radioOptions[1] === checkedRadioOption}
        setCheckedRadioOption={setCheckedRadioOption}
      />
    </div>
  );
}
