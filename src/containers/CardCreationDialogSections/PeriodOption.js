import React from "react";
import RadioButtonSystem from "./RadioButtonSystem";

export default function PeriodOption({ setPeriod }) {
  const radioOptions = [
    "Every day",
    "Every week",
    "Every month",
    "Every year",
    "Select weeks days",
  ];
  return (
    <RadioButtonSystem
      radioOptionsInString={radioOptions}
      setType={setPeriod}
    />
  );
}
