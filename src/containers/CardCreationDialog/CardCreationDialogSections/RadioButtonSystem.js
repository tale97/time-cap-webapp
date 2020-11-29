import React, { useState } from "react";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";

const RadioOption = ({ text, isCheck, setCheckedRadioOption, setType }) => {
  const radioOptionIcon = isCheck ? (
    <CheckCircleOutlineIcon className="radio-button" />
  ) : (
    <RadioButtonUncheckedIcon className="radio-button" />
  );
  return (
    <div
      className={`CardCreationDialog-type ${isCheck ? "checked" : ""}`}
      onClick={clickRadioOption(setType)(setCheckedRadioOption)}
    >
      {radioOptionIcon}
      <div className="radio-text">{text}</div>
    </div>
  );
};

const clickRadioOption = (setType) => (setCheckedRadioOption) => (event) => {
  // Event.currentTarget refers to element to which the event handler has been attached, as opposed to Event.target which identifies the element on which the event occured and which may be its descendent.
  const chosenOption = event.currentTarget.textContent;
  setCheckedRadioOption(chosenOption);
  setType(chosenOption);
};

export default function RadioButtonSystem({ radioOptionsInString, setType }) {
  const [checkedRadioOption, setCheckedRadioOption] = useState(null);

  const radioOptions = (radioOptionsInString) => {
    return radioOptionsInString.map((radioOptionInString) => {
      return (
        <RadioOption
          text={radioOptionInString}
          isCheck={radioOptionInString === checkedRadioOption}
          setCheckedRadioOption={setCheckedRadioOption}
          setType={setType}
          key={radioOptionInString}
        />
      );
    });
  };
  return (
    <div className="CardTypeCreation">{radioOptions(radioOptionsInString)}</div>
  );
}
