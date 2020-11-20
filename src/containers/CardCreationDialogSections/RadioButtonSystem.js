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

export default function RadioButtonSystem({ radioOptionsInString }) {
  const [checkedRadioOption, setCheckedRadioOption] = useState(null);

  const radioOptions = (radioOptionsInString) => {
    return radioOptionsInString.map((radioOptionInString) => {
      return (
        <RadioOption
          text={radioOptionInString}
          isCheck={radioOptionInString === checkedRadioOption}
          setCheckedRadioOption={setCheckedRadioOption}
        />
      );
    });
  };
  return (
    <div className="CardTypeCreation">{radioOptions(radioOptionsInString)}</div>
  );
}
